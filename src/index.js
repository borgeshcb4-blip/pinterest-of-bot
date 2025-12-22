import { Router } from 'itty-router';
import { detectLanguage, getLocalizedMessage } from './i18n.js';

// Token do Bot do Telegram
const BOT_TOKEN = '8326140110:AAGOufTHcRuFJ6DmzzSevt2OAk4I4qk9hMU';
const TELEGRAM_API = 'https://api.telegram.org/bot';

// URL do Mini App (substitua pela URL real do seu Mini App)
const MINI_APP_URL = 'https://example.com/miniapp';

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
 * Handler para o comando /start
 */
async function handleStart(chatId, firstName, languageCode) {
  const language = detectLanguage(languageCode);
  
  await sendChatAction(chatId, 'typing');
  
  const title = getLocalizedMessage('welcome_title', language);
  const message = getLocalizedMessage('welcome_message', language, { name: firstName });
  const keyboard = buildMainKeyboard(language);

  await sendMessage(chatId, `${title}\n\n${message}`, keyboard);
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
async function handleMessage(chatId, text, firstName, languageCode) {
  const language = detectLanguage(languageCode);
  
  // Se for um comando, ignora (já tratado separadamente)
  if (text.startsWith('/')) {
    return;
  }

  // Para qualquer mensagem, mostra a tela inicial com o botão do Mini App
  await handleStart(chatId, firstName, languageCode);
}

/**
 * Handler para callback queries (botões inline)
 */
async function handleCallbackQuery(query) {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const data = query.data;
  const firstName = query.from.first_name || 'User';
  const languageCode = query.from.language_code;
  const language = detectLanguage(languageCode);

  try {
    // Responde ao callback para remover o "loading"
    await telegramApi('answerCallbackQuery', {
      callback_query_id: query.id,
    });

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
router.post('/', async (request) => {
  try {
    const update = await request.json();
    
    if (update.message) {
      const { chat, text, from } = update.message;
      const firstName = from.first_name || 'User';
      const languageCode = from.language_code;
      
      if (text) {
        // Verifica se é o comando /start
        if (text === '/start' || text.startsWith('/start ')) {
          await handleStart(chat.id, firstName, languageCode);
        } else {
          // Qualquer outra mensagem
          await handleMessage(chat.id, text, firstName, languageCode);
        }
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
  return new Response(JSON.stringify({ 
    status: 'ok', 
    bot: 'pinterest-downloader',
    mini_app_url: MINI_APP_URL,
    version: '2.1.0'
  }), {
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
