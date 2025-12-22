import { Router } from 'itty-router';
import { detectLanguage, getLocalizedMessage, SUPPORTED_LANGUAGES } from './i18n.js';

// Token do Bot do Telegram
const BOT_TOKEN = '8326140110:AAGOufTHcRuFJ6DmzzSevt2OAk4I4qk9hMU';
const TELEGRAM_API = 'https://api.telegram.org/bot';

// URL do Mini App (substitua pela URL real do seu Mini App)
const MINI_APP_URL = 'https://example.com/miniapp';

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

async function deleteMessage(chatId, messageId) {
  return telegramApi('deleteMessage', {
    chat_id: chatId,
    message_id: messageId,
  });
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

// --- Funções de Tratamento ---

/**
 * Cria o teclado inline com os botões principais
 */
function buildMainKeyboard(language) {
  const btnOpenApp = getLocalizedMessage('btn_open_app', language);
  const btnHowItWorks = getLocalizedMessage('btn_how_it_works', language);
  const btnTerms = getLocalizedMessage('btn_terms', language);

  return {
    inline_keyboard: [
      // Botão para abrir o Mini App (Web App)
      [{ 
        text: btnOpenApp, 
        web_app: { url: MINI_APP_URL }
      }],
      // Botões de informação
      [
        { text: btnHowItWorks, callback_data: 'how_it_works' },
        { text: btnTerms, callback_data: 'terms' },
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
  const btnAccept = getLocalizedMessage('btn_accept', language);
  
  return {
    inline_keyboard: [
      [{ 
        text: btnAccept, 
        web_app: { url: MINI_APP_URL }
      }],
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
  
  await sendChatAction(chatId, 'typing');
  
  const title = getLocalizedMessage('welcome_title', language);
  const message = getLocalizedMessage('welcome_message', language, { name: firstName });
  const keyboard = buildMainKeyboard(language);

  await sendMessage(chatId, `${title}\n\n${message}`, keyboard);
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
async function handleLanguageSelection(chatId, messageId, userId, newLanguage, env) {
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

  await editMessageText(chatId, messageId, `${title}\n\n${message}`, keyboard);
}

/**
 * Handler para "Como Funciona"
 */
async function handleHowItWorks(chatId, messageId, firstName, language) {
  const title = getLocalizedMessage('how_it_works_title', language);
  const message = getLocalizedMessage('how_it_works_message', language, { name: firstName });
  const keyboard = buildBackKeyboard(language);

  await editMessageText(chatId, messageId, `${title}\n\n${message}`, keyboard);
}

/**
 * Handler para "Termos de Uso"
 */
async function handleTerms(chatId, messageId, language) {
  const title = getLocalizedMessage('terms_title', language);
  const message = getLocalizedMessage('terms_message', language);
  const keyboard = buildTermsKeyboard(language);

  await editMessageText(chatId, messageId, `${title}\n\n${message}`, keyboard);
}

/**
 * Handler para voltar ao menu principal (via edição de mensagem)
 */
async function handleBackToStart(chatId, messageId, firstName, language) {
  const title = getLocalizedMessage('welcome_title', language);
  const message = getLocalizedMessage('welcome_message', language, { name: firstName });
  const keyboard = buildMainKeyboard(language);

  await editMessageText(chatId, messageId, `${title}\n\n${message}`, keyboard);
}

/**
 * Handler para mensagens de texto (redireciona para o Mini App)
 */
async function handleMessage(chatId, text, firstName, userId, languageCode, env) {
  // Se for um comando, ignora (já tratado separadamente)
  if (text.startsWith('/')) {
    return;
  }

  // Para qualquer mensagem, mostra a tela inicial com o botão do Mini App
  await handleStart(chatId, firstName, userId, languageCode, env);
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

  try {
    // Responde ao callback para remover o "loading"
    await telegramApi('answerCallbackQuery', {
      callback_query_id: query.id,
    });

    // Verifica se é uma seleção de idioma
    if (data.startsWith('lang:')) {
      const newLanguage = data.split(':')[1];
      if (SUPPORTED_LANGUAGES[newLanguage]) {
        await handleLanguageSelection(chatId, messageId, userId, newLanguage, env);
      }
      return;
    }

    switch (data) {
      case 'how_it_works':
        await handleHowItWorks(chatId, messageId, firstName, language);
        break;
      case 'terms':
        await handleTerms(chatId, messageId, language);
        break;
      case 'start':
        await handleBackToStart(chatId, messageId, firstName, language);
        break;
      default:
        // Callback desconhecido, volta ao início
        await handleBackToStart(chatId, messageId, firstName, language);
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
        else {
          // Qualquer outra mensagem
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
    mini_app_url: MINI_APP_URL,
    version: '2.2.0'
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
