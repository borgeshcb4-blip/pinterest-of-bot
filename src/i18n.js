/**
 * Sistema de Internacionalização (i18n) para o Bot do Telegram
 * Suporta Português (pt-BR) e Inglês (en-US)
 */

export const translations = {
  pt: {
    // Mensagens de Boas-vindas
    welcome_title: '🎬 Bem-vindo ao Pinterest Video Downloader!',
    welcome_message: `Olá! Sou um bot que baixa vídeos do Pinterest para você.

*Como usar:*
1️⃣ Copie a URL de um vídeo do Pinterest
2️⃣ Envie a URL para mim
3️⃣ Aguarde o processamento
4️⃣ Receba o vídeo em alta qualidade!

*Formatos aceitos:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

Use /help para mais informações.`,
    
    // Mensagens de Ajuda
    help_title: '❓ Ajuda - Como Usar o Bot',
    help_message: `*Instruções de Uso:*

1. *Enviar URL do Pinterest*
   Simplesmente copie e cole a URL de qualquer vídeo do Pinterest

2. *Formatos Aceitos:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *Tempo de Processamento:*
   Geralmente leva 5-30 segundos dependendo do tamanho do vídeo

4. *Limitações:*
   • Máximo 100 MB por vídeo
   • Apenas vídeos públicos

*Problemas?*
Se receber um erro, verifique se:
• A URL é válida
• O vídeo ainda existe no Pinterest
• Você tem conexão com a internet

Use /start para voltar ao menu principal.`,

    // Mensagens de Validação
    invalid_url: '❌ URL inválida! Por favor, envie uma URL válida do Pinterest.',
    invalid_url_format: '❌ Formato de URL não reconhecido. Use:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    
    // Mensagens de Processamento
    processing: '⏳ Processando seu vídeo... Por favor, aguarde.',
    downloading: '📥 Baixando vídeo do Pinterest...',
    uploading: '📤 Enviando vídeo para você...',
    
    // Mensagens de Sucesso
    success: '✅ Vídeo baixado com sucesso!',
    success_message: 'Seu vídeo está pronto! Aproveite! 🎉',
    
    // Mensagens de Erro
    error_generic: '❌ Ocorreu um erro ao processar seu vídeo. Tente novamente mais tarde.',
    error_download: '❌ Erro ao baixar o vídeo. Verifique a URL e tente novamente.',
    error_upload: '❌ Erro ao enviar o vídeo. Tente novamente mais tarde.',
    error_timeout: '⏱️ O processamento demorou muito. Tente com um vídeo menor.',
    error_file_size: '📦 O vídeo é muito grande (máximo 100 MB). Tente outro vídeo.',
    error_not_found: '🔍 Vídeo não encontrado. Verifique se a URL está correta e se o vídeo ainda existe.',
    error_api: '🔌 Erro ao conectar com a API do Pinterest. Tente novamente mais tarde.',
    
    // Botões
    btn_help: '❓ Ajuda',
    btn_start: '🏠 Menu Principal',
    btn_retry: '🔄 Tentar Novamente',
    btn_back: '⬅️ Voltar',
  },
  
  en: {
    // Welcome Messages
    welcome_title: '🎬 Welcome to Pinterest Video Downloader!',
    welcome_message: `Hello! I'm a bot that downloads videos from Pinterest for you.

*How to use:*
1️⃣ Copy the URL of a Pinterest video
2️⃣ Send the URL to me
3️⃣ Wait for processing
4️⃣ Receive the video in high quality!

*Accepted formats:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

Use /help for more information.`,
    
    // Help Messages
    help_title: '❓ Help - How to Use the Bot',
    help_message: `*Usage Instructions:*

1. *Send Pinterest URL*
   Simply copy and paste the URL of any Pinterest video

2. *Accepted Formats:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *Processing Time:*
   Usually takes 5-30 seconds depending on video size

4. *Limitations:*
   • Maximum 100 MB per video
   • Only public videos

*Having issues?*
If you get an error, check if:
• The URL is valid
• The video still exists on Pinterest
• You have internet connection

Use /start to return to main menu.`,

    // Validation Messages
    invalid_url: '❌ Invalid URL! Please send a valid Pinterest URL.',
    invalid_url_format: '❌ URL format not recognized. Use:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    
    // Processing Messages
    processing: '⏳ Processing your video... Please wait.',
    downloading: '📥 Downloading video from Pinterest...',
    uploading: '📤 Sending video to you...',
    
    // Success Messages
    success: '✅ Video downloaded successfully!',
    success_message: 'Your video is ready! Enjoy! 🎉',
    
    // Error Messages
    error_generic: '❌ An error occurred while processing your video. Try again later.',
    error_download: '❌ Error downloading the video. Check the URL and try again.',
    error_upload: '❌ Error sending the video. Try again later.',
    error_timeout: '⏱️ Processing took too long. Try with a smaller video.',
    error_file_size: '📦 The video is too large (maximum 100 MB). Try another video.',
    error_not_found: '🔍 Video not found. Check if the URL is correct and the video still exists.',
    error_api: '🔌 Error connecting to Pinterest API. Try again later.',
    
    // Buttons
    btn_help: '❓ Help',
    btn_start: '🏠 Main Menu',
    btn_retry: '🔄 Retry',
    btn_back: '⬅️ Back',
  },
};

/**
 * Detecta o idioma do usuário baseado no language_code do Telegram
 * @param {string} languageCode - Código de idioma do Telegram (ex: 'pt', 'en', 'pt-BR', 'en-US')
 * @returns {string} Idioma suportado ('pt' ou 'en')
 */
export function detectLanguage(languageCode) {
  if (!languageCode) return 'en';
  
  const code = languageCode.toLowerCase();
  
  // Verifica se começa com 'pt' (Português)
  if (code.startsWith('pt')) {
    return 'pt';
  }
  
  // Padrão é Inglês
  return 'en';
}

/**
 * Retorna uma mensagem traduzida para o idioma do usuário
 * @param {string} key - Chave da mensagem
 * @param {string} language - Idioma ('pt' ou 'en')
 * @returns {string} Mensagem traduzida
 */
export function getLocalizedMessage(key, language) {
  const message = translations[language]?.[key];
  
  if (!message) {
    console.warn(`Translation key not found: ${key} for language: ${language}`);
    return translations['en']?.[key] || key;
  }
  
  return message;
}
