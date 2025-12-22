import { Router } from 'itty-router';
import { detectLanguage, getLocalizedMessage, SUPPORTED_LANGUAGES } from './i18n.js';

// Token do Bot do Telegram
const BOT_TOKEN = '8326140110:AAGOufTHcRuFJ6DmzzSevt2OAk4I4qk9hMU';
const TELEGRAM_API = 'https://api.telegram.org/bot';

// Funções de extração do Pinterest (integradas diretamente)

/**
 * Extrai o ID do pin da URL do Pinterest
 */
function extractPinId(url) {
  // Handle pinterest.com/pin/123456789/ format
  const pinterestMatch = url.match(/pinterest\.com\/pin\/(\d+)/);
  if (pinterestMatch) {
    return pinterestMatch[1];
  }

  // Handle pin.it/abc123 format - return as is
  const pinItMatch = url.match(/pin\.it\/([a-zA-Z0-9]+)/);
  if (pinItMatch) {
    return pinItMatch[1];
  }

  return null;
}

/**
 * Expande URL curta pin.it para URL completa
 */
async function expandShortUrl(shortCode) {
  try {
    const response = await fetch(`https://pin.it/${shortCode}`, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const finalUrl = response.url;
    const match = finalUrl.match(/\/pin\/(\d+)/);
    if (match) {
      return match[1];
    }
    return null;
  } catch (error) {
    console.error('Error expanding short URL:', error);
    return null;
  }
}

/**
 * Extrai URL de vídeo do HTML usando múltiplos padrões
 */
function extractVideoUrl(html) {
  // Pattern 1: contentUrl with mp4
  const pattern1 = html.match(/"contentUrl":"([^"]*\.mp4[^"]*)"/);
  if (pattern1) {
   return pattern1[1].split('\\').join('').split('\/').join('/');
  }

  // Pattern 2: video object with v_720p
  const pattern2 = html.match(/"video":\s*\{[^}]*"v_720p":"([^"]*)"/);
  if (pattern2) {
  return pattern2[1].split('\\').join('').split('\/').join('/');
  }

  // Pattern 3: og:video meta tag
  const pattern3 = html.match(/<meta\s+property="og:video"\s+content="([^"]*)"/);
  if (pattern3) {
    return pattern3[1];
  }

  // Pattern 4: Direct v.pinimg.com URL
  const pattern4 = html.match(/(https:\/\/v\.pinimg\.com\/videos\/v1\/[^"<>]+\.mp4)/);
  if (pattern4) {
    return pattern4[1];
  }

  // Pattern 5: Video URL in JSON
  const pattern5 = html.match(/"url":"(https:\/\/v\.pinimg\.com[^"]*\.mp4)"/);
  if (pattern5) {
    return pattern5[1];
  }
  
  // Pattern 6: v1.pinimg.com videos
  const pattern6 = html.match(/(https:\/\/v1\.pinimg\.com\/videos[^"<>]+\.mp4)/);
  if (pattern6) {
    return pattern6[1];
  }

  return null;
}

/**
 * Extrai URL de imagem do HTML usando múltiplos padrões
 */
function extractImageUrl(html) {
  // Pattern 1: image with orig
  const pattern1 = html.match(/"image":\s*\{[^}]*"orig":\s*\{[^}]*"url":"([^"]*)"/);
  if (pattern1) {
   return pattern1[1].split('\\').join('').split('\/').join('/').split('?')[0];
  }

  // Pattern 2: Direct image URL in image field
  const pattern2 = html.match(/"image":"(https:\/\/i\.pinimg\.com[^"]*)"/);
  if (pattern2) {
  return pattern2[1].split('\\').join('').split('\/').join('/').split('?')[0];
  }

  // Pattern 3: og:image meta tag
  const pattern3 = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/);
  if (pattern3) {
    return pattern3[1].split('?')[0];
  }

  // Pattern 4: Direct i.pinimg.com/originals URL
  const pattern4 = html.match(/(https:\/\/i\.pinimg\.com\/originals\/[^"<>]+\.(jpg|png|gif|webp))/);
  if (pattern4) {
    return pattern4[1];
  }

  // Pattern 5: i.pinimg.com URL in JSON
  const pattern5 = html.match(/"url":"(https:\/\/i\.pinimg\.com[^"]*)"[^}]*"width":\d+/);
  if (pattern5) {
  return pattern5[1].split('\\').join('').split('\/').join('/').split('?')[0];
  }

  return null;
}

/**
 * Detecta tipo de mídia a partir da URL e HTML
 */
function detectMediaType(videoUrl, imageUrl, html) {
  // Check if it's animated (GIF)
  if (html.includes('"is_animated":true') || html.includes('"type":"animated"')) {
    return 'animated';
  }

  // If has video URL, it's a video
  if (videoUrl) {
    return 'video';
  }

  // Otherwise it's an image
  if (imageUrl) {
    return 'image';
  }

  return null;
}

/**
 * Busca e extrai mídia da página do Pinterest
 */
async function extractMediaFromPage(pinId) {
  try {
    const url = `https://www.pinterest.com/pin/${pinId}/`;
    console.log('[EXTRACTOR] Fetching Pinterest page:', url);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
      },
    });

    console.log('[EXTRACTOR] Response status:', response.status);

    if (!response.ok) {
      if (response.status === 404) {
        return { success: false, error: 'Pin not found' };
      }
      return { success: false, error: `Failed to fetch pin (Status: ${response.status})` };
    }

    const html = await response.text();
    console.log('[EXTRACTOR] HTML length:', html.length);

    // Extract video URL
    const videoUrl = extractVideoUrl(html);
    console.log('[EXTRACTOR] Video URL:', videoUrl);

    // Extract image URL
    const imageUrl = extractImageUrl(html);
    console.log('[EXTRACTOR] Image URL:', imageUrl);

    // Detect media type
    const mediaType = detectMediaType(videoUrl, imageUrl, html);
    console.log('[EXTRACTOR] Media type:', mediaType);

    if (!mediaType) {
      return { success: false, error: 'Unable to extract media from pin' };
    }

    // Return appropriate media info
    if (mediaType === 'video' || mediaType === 'animated') {
      if (!videoUrl) {
        return { success: false, error: 'Video URL not found' };
      }
      return {
        success: true,
        type: mediaType,
        url: videoUrl,
        resolution: [1280, 720],
      };
    }

    if (mediaType === 'image') {
      if (!imageUrl) {
        return { success: false, error: 'Image URL not found' };
      }
      return {
        success: true,
        type: 'image',
        url: imageUrl,
        resolution: [1280, 1280],
      };
    }

    return { success: false, error: 'Unable to determine media type' };
  } catch (error) {
    console.error('[EXTRACTOR] Error:', error);
    return { success: false, error: error.message || 'Failed to extract media' };
  }
}

// URL da imagem de boas-vindas
const WELCOME_IMAGE_URL = 'https://iili.io/fERCEQ4.png';

// Armazenamento em memória para preferências de idioma (será substituído por KV em produção)
const userLanguagePreferences = new Map();

// --- Funções utilitárias para a API do Telegram ---

async function telegramApi(method, body = {}) {
  const url = `${TELEGRAM_API}${BOT_TOKEN}/${method}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return response.json();
}

async function sendMessage(chatId, text, replyMarkup = null) {
  const body = {
    chat_id: chatId,
    text: text,
    parse_mode: 'Markdown',
  };
  
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }

  return telegramApi('sendMessage', body);
}

async function sendChatAction(chatId, action = 'typing') {
  return telegramApi('sendChatAction', {
    chat_id: chatId,
    action: action,
  });
}

async function editMessageText(chatId, messageId, text, replyMarkup = null) {
  const body = {
    chat_id: chatId,
    message_id: messageId,
    text: text,
    parse_mode: 'Markdown',
  };
  
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }
  
  return telegramApi('editMessageText', body);
}

async function editMessageCaption(chatId, messageId, caption, replyMarkup = null) {
  const body = {
    chat_id: chatId,
    message_id: messageId,
    caption: caption,
    parse_mode: 'Markdown',
  };
  
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }
  
  return telegramApi('editMessageCaption', body);
}

async function deleteMessage(chatId, messageId) {
  return telegramApi('deleteMessage', {
    chat_id: chatId,
    message_id: messageId,
  });
}

async function sendPhoto(chatId, photoUrl, caption, replyMarkup = null) {
  const body = {
    chat_id: chatId,
    photo: photoUrl,
    caption: caption,
    parse_mode: 'Markdown',
  };
  
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }

  return telegramApi('sendPhoto', body);
}

async function sendVideo(chatId, videoUrl, caption = '', replyMarkup = null) {
  const body = {
    chat_id: chatId,
    video: videoUrl,
    caption: caption,
    parse_mode: 'Markdown',
    supports_streaming: true,
  };
  
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }

  return telegramApi('sendVideo', body);
}

async function sendAnimation(chatId, animationUrl, caption = '', replyMarkup = null) {
  const body = {
    chat_id: chatId,
    animation: animationUrl,
    caption: caption,
    parse_mode: 'Markdown',
  };
  
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }

  return telegramApi('sendAnimation', body);
}

async function sendDocument(chatId, documentUrl, caption = '', replyMarkup = null) {
  const body = {
    chat_id: chatId,
    document: documentUrl,
    caption: caption,
    parse_mode: 'Markdown',
  };
  
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }

  return telegramApi('sendDocument', body);
}

// --- Funções de Idioma ---

/**
 * Obtém o idioma do usuário (preferência salva ou detectado)
 */
async function getUserLanguage(userId, languageCode, env) {
  // Primeiro, tenta obter do KV (Cloudflare Workers KV)
  if (env && env.USER_PREFERENCES) {
    try {
      const savedLang = await env.USER_PREFERENCES.get(`lang:${userId}`);
      if (savedLang && SUPPORTED_LANGUAGES[savedLang]) {
        return savedLang;
      }
    } catch (e) {
      console.error('Error reading from KV:', e);
    }
  }
  
  // Fallback para memória local
  if (userLanguagePreferences.has(userId)) {
    return userLanguagePreferences.get(userId);
  }
  
  // Se não há preferência salva, detecta pelo Telegram
  return detectLanguage(languageCode);
}

/**
 * Salva a preferência de idioma do usuário
 */
async function setUserLanguage(userId, language, env) {
  // Salva no KV se disponível
  if (env && env.USER_PREFERENCES) {
    try {
      await env.USER_PREFERENCES.put(`lang:${userId}`, language);
    } catch (e) {
      console.error('Error writing to KV:', e);
    }
  }
  
  // Também salva em memória como fallback
  userLanguagePreferences.set(userId, language);
}

// --- Funções do Pinterest ---

/**
 * Verifica se o texto é uma URL do Pinterest
 */
function isPinterestUrl(text) {
  if (!text) return false;
  const pinterestPatterns = [
    /pinterest\.com\/pin\//i,
    /pin\.it\//i,
    /pinterest\.[a-z]+\/pin\//i,
    /br\.pinterest\.com\/pin\//i,
  ];
  return pinterestPatterns.some(pattern => pattern.test(text));
}

/**
 * Extrai mídia do Pinterest (integrado diretamente)
 */
async function extractPinterestMedia(url) {
  try {
    console.log('[PINTEREST] Starting extraction for URL:', url);
    
    // Extrai o ID do pin
    let pinId = extractPinId(url.trim());
    console.log('[PINTEREST] Extracted pin ID:', pinId);
    
    if (!pinId) {
      return { success: false, error: 'Invalid Pinterest URL' };
    }
    
    // Se é uma URL curta (pin.it), expande primeiro
    if (!pinId.match(/^\d+$/)) {
      console.log('[PINTEREST] Expanding short URL...');
      pinId = await expandShortUrl(pinId);
      console.log('[PINTEREST] Expanded pin ID:', pinId);
      
      if (!pinId) {
        return { success: false, error: 'Could not expand short URL' };
      }
    }
    
    // Extrai a mídia da página
    const result = await extractMediaFromPage(pinId);
    console.log('[PINTEREST] Extraction result:', JSON.stringify(result));
    
    return result;
  } catch (error) {
    console.error('[PINTEREST] Exception caught:', error);
    return { success: false, error: 'Failed to extract media: ' + (error.message || 'Unknown error') };
  }
}

/**
 * Handler para download do Pinterest
 */
async function handlePinterestDownload(chatId, url, firstName, language) {
  console.log('[DOWNLOAD] ========== START ==========');
  console.log('[DOWNLOAD] Chat ID:', chatId);
  console.log('[DOWNLOAD] URL:', url);
  console.log('[DOWNLOAD] First Name:', firstName);
  console.log('[DOWNLOAD] Language:', language);
  
  // Envia ação de "enviando vídeo"
  await sendChatAction(chatId, 'upload_video');

  // Mensagem de processamento
  const processingMsg = getLocalizedMessage('processing', language);
  console.log('[DOWNLOAD] Processing message:', processingMsg);
  const sentMsg = await sendMessage(chatId, processingMsg);
  console.log('[DOWNLOAD] Sent processing message:', JSON.stringify(sentMsg));

  try {
    // Extrai a mídia do Pinterest
    console.log('[DOWNLOAD] Calling extractPinterestMedia...');
    const result = await extractPinterestMedia(url);
    console.log('[DOWNLOAD] Extract result:', JSON.stringify(result));

    if (!result || !result.success) {
      console.log('[DOWNLOAD] FAILED - result.success is false or result is null');
      console.log('[DOWNLOAD] Result object:', result);
      // Deleta mensagem de processamento
      if (sentMsg.result && sentMsg.result.message_id) {
        await deleteMessage(chatId, sentMsg.result.message_id);
      }

      const errorMsg = getLocalizedMessage('download_error', language);
      await sendMessage(chatId, errorMsg);
      console.log('[DOWNLOAD] ========== END (ERROR) ==========');
      return;
    }
    
    console.log('[DOWNLOAD] SUCCESS!');
    console.log('[DOWNLOAD] Type:', result.type);
    console.log('[DOWNLOAD] Media URL:', result.url);

    // Deleta mensagem de processamento
    if (sentMsg.result && sentMsg.result.message_id) {
      await deleteMessage(chatId, sentMsg.result.message_id);
    }

    // Prepara a legenda
    const caption = getLocalizedMessage('download_success', language, { name: firstName });
    console.log('[DOWNLOAD] Caption:', caption);
    
    // Botão para baixar mais
    const btnDownloadMore = getLocalizedMessage('btn_download_more', language);
    const keyboard = {
      inline_keyboard: [
        [{ text: btnDownloadMore, callback_data: 'start' }],
      ],
    };

    // Envia a mídia baseado no tipo
    console.log('[DOWNLOAD] Sending media of type:', result.type);
    
    if (result.type === 'video' || result.type === 'animated') {
      await sendChatAction(chatId, 'upload_video');
      console.log('[DOWNLOAD] Sending as video...');
      const videoResult = await sendVideo(chatId, result.url, caption, keyboard);
      console.log('[DOWNLOAD] Video send result:', JSON.stringify(videoResult));
      
      // Se falhar como vídeo, tenta como documento
      if (!videoResult.ok) {
        console.log('[DOWNLOAD] Video failed, trying as document...');
        const docResult = await sendDocument(chatId, result.url, caption, keyboard);
        console.log('[DOWNLOAD] Document send result:', JSON.stringify(docResult));
      }
    } else if (result.type === 'image') {
      await sendChatAction(chatId, 'upload_photo');
      console.log('[DOWNLOAD] Sending as photo...');
      const photoResult = await sendPhoto(chatId, result.url, caption, keyboard);
      console.log('[DOWNLOAD] Photo send result:', JSON.stringify(photoResult));
      
      // Se falhar como foto, tenta como documento
      if (!photoResult.ok) {
        console.log('[DOWNLOAD] Photo failed, trying as document...');
        const docResult = await sendDocument(chatId, result.url, caption, keyboard);
        console.log('[DOWNLOAD] Document send result:', JSON.stringify(docResult));
      }
    } else {
      // Tipo desconhecido, envia como documento
      console.log('[DOWNLOAD] Unknown type, sending as document...');
      const docResult = await sendDocument(chatId, result.url, caption, keyboard);
      console.log('[DOWNLOAD] Document send result:', JSON.stringify(docResult));
    }
    
    console.log('[DOWNLOAD] ========== END (SUCCESS) ==========');

  } catch (error) {
    console.error('[DOWNLOAD] EXCEPTION:', error);
    console.error('[DOWNLOAD] Error name:', error.name);
    console.error('[DOWNLOAD] Error message:', error.message);
    console.error('[DOWNLOAD] Error stack:', error.stack);
    
    // Deleta mensagem de processamento se existir
    if (sentMsg.result && sentMsg.result.message_id) {
      await deleteMessage(chatId, sentMsg.result.message_id);
    }

    const errorMsg = getLocalizedMessage('download_error', language);
    await sendMessage(chatId, errorMsg);
    console.log('[DOWNLOAD] ========== END (EXCEPTION) ==========');
  }
}

// --- Funções de Tratamento ---

/**
 * Cria o teclado inline com os botões principais
 */
function buildMainKeyboard(language) {
  const btnHowItWorks = getLocalizedMessage('btn_how_it_works', language);
  const btnTerms = getLocalizedMessage('btn_terms', language);
  const btnChangeLanguage = getLocalizedMessage('btn_change_language', language);
  const btnDownloadMedia = getLocalizedMessage('btn_download_media', language);

  return {
    inline_keyboard: [
      // Botão principal de download
      [
        { text: btnDownloadMedia, callback_data: 'download_media' },
      ],
      // Botões de informação
      [
        { text: btnHowItWorks, callback_data: 'how_it_works' },
        { text: btnTerms, callback_data: 'terms' },
      ],
      // Botão de trocar idioma
      [
        { text: btnChangeLanguage, callback_data: 'change_language' },
      ],
    ],
  };
}

/**
 * Cria o teclado com botão de voltar
 */
function buildBackKeyboard(language) {
  const btnBack = getLocalizedMessage('btn_back', language);
  
  return {
    inline_keyboard: [
      [{ text: btnBack, callback_data: 'start' }],
    ],
  };
}

/**
 * Cria o teclado para termos de uso
 */
function buildTermsKeyboard(language) {
  const btnBack = getLocalizedMessage('btn_back', language);
  
  return {
    inline_keyboard: [
      [{ text: btnBack, callback_data: 'start' }],
    ],
  };
}

/**
 * Cria o teclado para seleção de idioma
 */
function buildLanguageKeyboard() {
  const languages = Object.entries(SUPPORTED_LANGUAGES);
  const keyboard = [];
  
  // Organiza em linhas de 2 botões
  for (let i = 0; i < languages.length; i += 2) {
    const row = [];
    
    // Primeiro botão da linha
    const [code1, name1] = languages[i];
    const flag1 = getLanguageFlag(code1);
    row.push({ text: `${flag1} ${name1}`, callback_data: `lang:${code1}` });
    
    // Segundo botão da linha (se existir)
    if (i + 1 < languages.length) {
      const [code2, name2] = languages[i + 1];
      const flag2 = getLanguageFlag(code2);
      row.push({ text: `${flag2} ${name2}`, callback_data: `lang:${code2}` });
    }
    
    keyboard.push(row);
  }
  
  return { inline_keyboard: keyboard };
}

/**
 * Retorna a bandeira do idioma
 */
function getLanguageFlag(code) {
  const flags = {
    pt: '🇧🇷',
    en: '🇺🇸',
    es: '🇪🇸',
    zh: '🇨🇳',
    hi: '🇮🇳',
    ar: '🇸🇦',
    fr: '🇫🇷',
    ru: '🇷🇺',
    de: '🇩🇪',
    ja: '🇯🇵',
    it: '🇮🇹',
    ko: '🇰🇷',
    tr: '🇹🇷',
  };
  return flags[code] || '🌐';
}

/**
 * Handler para o comando /start
 */
async function handleStart(chatId, firstName, userId, languageCode, env) {
  const language = await getUserLanguage(userId, languageCode, env);
  
  await sendChatAction(chatId, 'upload_photo');
  
  const title = getLocalizedMessage('welcome_title', language);
  const message = getLocalizedMessage('welcome_message', language, { name: firstName });
  const keyboard = buildMainKeyboard(language);

  // Envia foto com legenda
  await sendPhoto(chatId, WELCOME_IMAGE_URL, `${title}\n\n${message}`, keyboard);
}

/**
 * Handler para o comando /language
 */
async function handleLanguageCommand(chatId, userId, languageCode, env) {
  const language = await getUserLanguage(userId, languageCode, env);
  
  await sendChatAction(chatId, 'typing');
  
  const title = getLocalizedMessage('language_title', language);
  const message = getLocalizedMessage('language_message', language);
  const keyboard = buildLanguageKeyboard();

  await sendMessage(chatId, `${title}\n\n${message}`, keyboard);
}

/**
 * Handler para seleção de idioma
 */
async function handleLanguageSelection(chatId, messageId, userId, newLanguage, env, hasPhoto = false) {
  // Salva a preferência
  await setUserLanguage(userId, newLanguage, env);
  
  const title = getLocalizedMessage('language_title', newLanguage);
  const successMessage = getLocalizedMessage('language_changed', newLanguage);
  const langName = SUPPORTED_LANGUAGES[newLanguage];
  const flag = getLanguageFlag(newLanguage);
  
  const message = `${successMessage}\n\n${flag} *${langName}*`;
  
  // Adiciona botão para voltar ao início
  const btnBack = getLocalizedMessage('btn_back_to_start', newLanguage);
  const keyboard = {
    inline_keyboard: [
      [{ text: btnBack, callback_data: 'start' }],
    ],
  };

  const fullMessage = `${title}\n\n${message}`;
  
  // Se tem foto, deleta a mensagem e envia uma nova sem foto
  if (hasPhoto) {
    await deleteMessage(chatId, messageId);
    await sendMessage(chatId, fullMessage, keyboard);
  } else {
    await editMessageText(chatId, messageId, fullMessage, keyboard);
  }
}

/**
 * Handler para trocar idioma (via botão)
 */
async function handleChangeLanguage(chatId, messageId, language, hasPhoto = false) {
  const title = getLocalizedMessage('language_title', language);
  const message = getLocalizedMessage('language_message', language);
  const keyboard = buildLanguageKeyboard();

  const fullMessage = `${title}\n\n${message}`;
  
  // Se tem foto, deleta a mensagem e envia uma nova sem foto
  if (hasPhoto) {
    await deleteMessage(chatId, messageId);
    await sendMessage(chatId, fullMessage, keyboard);
  } else {
    await editMessageText(chatId, messageId, fullMessage, keyboard);
  }
}

/**
 * Handler para "Como Funciona"
 */
async function handleHowItWorks(chatId, messageId, firstName, language, hasPhoto = false) {
  const title = getLocalizedMessage('how_it_works_title', language);
  const message = getLocalizedMessage('how_it_works_message', language, { name: firstName });
  const keyboard = buildBackKeyboard(language);

  const fullMessage = `${title}\n\n${message}`;
  
  // Se tem foto, deleta a mensagem e envia uma nova sem foto
  if (hasPhoto) {
    await deleteMessage(chatId, messageId);
    await sendMessage(chatId, fullMessage, keyboard);
  } else {
    await editMessageText(chatId, messageId, fullMessage, keyboard);
  }
}

/**
 * Handler para "Termos de Uso"
 */
async function handleTerms(chatId, messageId, language, hasPhoto = false) {
  const title = getLocalizedMessage('terms_title', language);
  const message = getLocalizedMessage('terms_message', language);
  const keyboard = buildTermsKeyboard(language);

  const fullMessage = `${title}\n\n${message}`;
  
  // Se tem foto, deleta a mensagem e envia uma nova sem foto
  if (hasPhoto) {
    await deleteMessage(chatId, messageId);
    await sendMessage(chatId, fullMessage, keyboard);
  } else {
    await editMessageText(chatId, messageId, fullMessage, keyboard);
  }
}

/**
 * Handler para voltar ao menu principal (via edição de mensagem)
 */
async function handleBackToStart(chatId, messageId, firstName, language, hasPhoto = false) {
  const title = getLocalizedMessage('welcome_title', language);
  const message = getLocalizedMessage('welcome_message', language, { name: firstName });
  const keyboard = buildMainKeyboard(language);

  const fullMessage = `${title}\n\n${message}`;
  
  // Sempre edita a mensagem de texto (não envia foto novamente)
  await editMessageText(chatId, messageId, fullMessage, keyboard);
}

/**
 * Handler para o botão "Baixar Mídia"
 */
async function handleDownloadMedia(chatId, messageId, language, hasPhoto = false) {
  const message = getLocalizedMessage('download_media_prompt', language);
  const keyboard = buildBackKeyboard(language);

  // Se tem foto, deleta a mensagem e envia uma nova sem foto
  if (hasPhoto) {
    await deleteMessage(chatId, messageId);
    await sendMessage(chatId, message, keyboard);
  } else {
    await editMessageText(chatId, messageId, message, keyboard);
  }
}

/**
 * Handler para mensagens de texto
 */
async function handleMessage(chatId, text, firstName, userId, languageCode, env) {
  const language = await getUserLanguage(userId, languageCode, env);

  // Se for um comando, ignora (já tratado separadamente)
  if (text.startsWith('/')) {
    return;
  }

  // Verifica se é uma URL do Pinterest
  if (isPinterestUrl(text)) {
    await handlePinterestDownload(chatId, text.trim(), firstName, language);
    return;
  }

  // Se não for URL do Pinterest, mostra mensagem de ajuda
  const helpMsg = getLocalizedMessage('send_pinterest_url', language);
  await sendMessage(chatId, helpMsg);
}

/**
 * Handler para callback queries (botões inline)
 */
async function handleCallbackQuery(query, env) {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const data = query.data;
  const firstName = query.from.first_name || 'User';
  const userId = query.from.id;
  const languageCode = query.from.language_code;
  const language = await getUserLanguage(userId, languageCode, env);
  
  // Verifica se a mensagem original tem foto (para usar editMessageCaption)
  const hasPhoto = query.message.photo && query.message.photo.length > 0;

  try {
    // Responde ao callback para remover o "loading"
    await telegramApi('answerCallbackQuery', {
      callback_query_id: query.id,
    });

    // Verifica se é uma seleção de idioma
    if (data.startsWith('lang:')) {
      const newLanguage = data.split(':')[1];
      if (SUPPORTED_LANGUAGES[newLanguage]) {
        await handleLanguageSelection(chatId, messageId, userId, newLanguage, env, hasPhoto);
      }
      return;
    }

    switch (data) {
      case 'how_it_works':
        await handleHowItWorks(chatId, messageId, firstName, language, hasPhoto);
        break;
      case 'terms':
        await handleTerms(chatId, messageId, language, hasPhoto);
        break;
      case 'start':
        await handleBackToStart(chatId, messageId, firstName, language, hasPhoto);
        break;
      case 'change_language':
        await handleChangeLanguage(chatId, messageId, language, hasPhoto);
        break;
      case 'download_media':
        await handleDownloadMedia(chatId, messageId, language, hasPhoto);
        break;
      default:
        // Callback desconhecido, volta ao início
        await handleBackToStart(chatId, messageId, firstName, language, hasPhoto);
    }
  } catch (error) {
    console.error('Error in handleCallbackQuery:', error);
  }
}

// --- Roteamento do Worker ---
const router = Router();

// Rota principal para receber os webhooks do Telegram
router.post('/', async (request, env) => {
  try {
    const update = await request.json();
    
    if (update.message) {
      const { chat, text, from } = update.message;
      const firstName = from.first_name || 'User';
      const userId = from.id;
      const languageCode = from.language_code;
      
      if (text) {
        // Verifica se é o comando /start
        if (text === '/start' || text.startsWith('/start ')) {
          await handleStart(chat.id, firstName, userId, languageCode, env);
        } 
        // Verifica se é o comando /language ou /idioma ou /lang
        else if (text === '/language' || text === '/idioma' || text === '/lang') {
          await handleLanguageCommand(chat.id, userId, languageCode, env);
        }
        // Verifica se é o comando /help
        else if (text === '/help' || text === '/ajuda') {
          const language = await getUserLanguage(userId, languageCode, env);
          const helpMsg = getLocalizedMessage('send_pinterest_url', language);
          await sendMessage(chat.id, helpMsg);
        }
        else {
          // Qualquer outra mensagem (inclui URLs do Pinterest)
          await handleMessage(chat.id, text, firstName, userId, languageCode, env);
        }
      }
    } else if (update.callback_query) {
      await handleCallbackQuery(update.callback_query, env);
    }
    
    // O Telegram espera um status 200 OK o mais rápido possível
    return new Response('OK', { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response('Internal Server Error', { status: 500 });
  }
});

// Rota para configurar o webhook
router.get('/setWebhook', async (request) => {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('URL not provided', { status: 400 });
  }

  const result = await telegramApi('setWebhook', { url: url });

  return new Response(JSON.stringify(result, null, 2), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
});

// Rota para verificar status
router.get('/status', async () => {
  return new Response(JSON.stringify({ 
    status: 'ok', 
    bot: 'PinSave',
    version: '3.0.0',
    features: ['pinterest_download', 'multi_language', 'video', 'photo', 'gif']
  }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
});

// Rota de fallback para qualquer outra requisição
router.all('*', () => new Response('Not Found', { status: 404 }));

// Exporta o Worker
export default {
  fetch: (request, env, ctx) => router.handle(request, env, ctx),
};
