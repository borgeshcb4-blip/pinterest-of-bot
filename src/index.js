import { Router } from 'itty-router';
import { detectLanguage, getLocalizedMessage } from './i18n.js';
import { isPinterestUrl, downloadPinterestVideo, getVideoFileSize } from './pinterest.js';

// Token do Bot do Telegram
const BOT_TOKEN = '8326140110:AAGOufTHcRuFJ6DmzzSevt2OAk4I4qk9hMU';
const TELEGRAM_API = 'https://api.telegram.org/bot';
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB

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
  return telegramApi('editMessageText', {
    chat_id: chatId,
    message_id: messageId,
    text: text,
    parse_mode: 'Markdown',
    reply_markup: replyMarkup,
  });
}

async function deleteMessage(chatId, messageId) {
  return telegramApi('deleteMessage', {
    chat_id: chatId,
    message_id: messageId,
  });
}

async function sendVideo(chatId, videoUrl, caption = '') {
  return telegramApi('sendVideo', {
    chat_id: chatId,
    video: videoUrl,
    caption: caption,
    parse_mode: 'Markdown',
  });
}

// --- Funções de Tratamento ---

function buildWelcomeMessage(firstName, userId, language) {
  const title = getLocalizedMessage('welcome_title', language);
  const message = getLocalizedMessage('welcome_message', language);
  return `${title}\n\n${message}`;
}

async function handleStart(chatId, firstName, languageCode) {
  const language = detectLanguage(languageCode);
  
  await sendChatAction(chatId, 'typing');
  
  const welcomeMessage = buildWelcomeMessage(firstName, chatId, language);
  const helpBtn = getLocalizedMessage('btn_help', language);
  
  const keyboard = {
    inline_keyboard: [
      [{ text: helpBtn, callback_data: 'help' }],
    ],
  };

  await sendMessage(chatId, welcomeMessage, keyboard);
}

async function handleHelp(chatId, language) {
  await sendChatAction(chatId, 'typing');

  const helpTitle = getLocalizedMessage('help_title', language);
  const helpMessage = getLocalizedMessage('help_message', language);
  const startBtn = getLocalizedMessage('btn_start', language);

  const keyboard = {
    inline_keyboard: [
      [{ text: startBtn, callback_data: 'start' }],
    ],
  };

  await sendMessage(chatId, `${helpTitle}\n\n${helpMessage}`, keyboard);
}

async function handleMessage(chatId, text, firstName, languageCode) {
  const language = detectLanguage(languageCode);
  
  // Ignora comandos (já tratados por onText)
  if (text.startsWith('/')) {
    return;
  }

  const url = text.trim();

  // Valida se é uma URL do Pinterest
  if (!isPinterestUrl(url)) {
    const errorMsg = getLocalizedMessage('invalid_url_format', language);
    await sendMessage(chatId, errorMsg);
    return;
  }

  try {
    // Mostra indicador de digitação
    await sendChatAction(chatId, 'typing');

    // Mensagem de processamento
    const processingMsg = getLocalizedMessage('processing', language);
    const processingMessage = await sendMessage(chatId, processingMsg);

    // Obtém a URL da API pinterest-downloader-api do ambiente
    const apiUrl = typeof PINTEREST_API_URL !== 'undefined' ? PINTEREST_API_URL : 'https://pinterest-downloader-api.mogspm012.workers.dev';

    // Baixa o vídeo
    const downloadingMsg = getLocalizedMessage('downloading', language);
    await editMessageText(chatId, processingMessage.result.message_id, downloadingMsg);

    const videoUrl = await downloadPinterestVideo(url, apiUrl);

    if (!videoUrl) {
      await deleteMessage(chatId, processingMessage.result.message_id);
      const errorMsg = getLocalizedMessage('error_download', language);
      await sendMessage(chatId, errorMsg);
      return;
    }

    // Valida o tamanho do arquivo
    const fileSize = await getVideoFileSize(videoUrl);
    if (fileSize && fileSize > MAX_FILE_SIZE) {
      await deleteMessage(chatId, processingMessage.result.message_id);
      const errorMsg = getLocalizedMessage('error_file_size', language);
      await sendMessage(chatId, errorMsg);
      return;
    }

    // Mensagem de upload
    const uploadingMsg = getLocalizedMessage('uploading', language);
    await editMessageText(chatId, processingMessage.result.message_id, uploadingMsg);

    // Envia o vídeo
    await sendChatAction(chatId, 'upload_video');
    const successMsg = getLocalizedMessage('success_message', language);
    await sendVideo(chatId, videoUrl, successMsg);

    // Remove mensagem de processamento
    await deleteMessage(chatId, processingMessage.result.message_id);
  } catch (error) {
    console.error('Error in handleMessage:', error);
    const errorMsg = getLocalizedMessage('error_generic', language);
    await sendMessage(chatId, errorMsg);
  }
}

async function handleCallbackQuery(query) {
  const chatId = query.message.chat.id;
  const data = query.data;
  const firstName = query.from.first_name || 'User';
  const languageCode = query.from.language_code;
  const language = detectLanguage(languageCode);

  try {
    // Responde ao callback
    await telegramApi('answerCallbackQuery', {
      callback_query_id: query.id,
    });

    if (data === 'help') {
      await handleHelp(chatId, language);
    } else if (data === 'start') {
      await handleStart(chatId, firstName, languageCode);
    }
  } catch (error) {
    console.error('Error in handleCallbackQuery:', error);
    const errorMsg = getLocalizedMessage('error_generic', language);
    await sendMessage(chatId, errorMsg);
  }
}

// --- Roteamento do Worker ---
const router = Router();

// Rota principal para receber os webhooks do Telegram
router.post('/', async (request) => {
  try {
    const update = await request.json();
    
    if (update.message) {
      const { chat, text, from } = update.message;
      if (text) {
        const firstName = from.first_name || 'User';
        const languageCode = from.language_code;
        await handleMessage(chat.id, text, firstName, languageCode);
      }
    } else if (update.callback_query) {
      await handleCallbackQuery(update.callback_query);
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
  return new Response(JSON.stringify({ status: 'ok', bot: 'pinterest-downloader' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
});

// Rota de fallback para qualquer outra requisição
router.all('*', () => new Response('Not Found', { status: 404 }));

// Exporta o Worker
export default {
  fetch: router.handle,
};
