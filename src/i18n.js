/**
 * Sistema de Internacionalização (i18n) para o Bot do Telegram
 * Suporta os idiomas mais falados do mundo:
 * - Português (pt)
 * - Inglês (en)
 * - Espanhol (es)
 * - Chinês Simplificado (zh)
 * - Hindi (hi)
 * - Árabe (ar)
 * - Francês (fr)
 * - Russo (ru)
 * - Alemão (de)
 * - Japonês (ja)
 * - Italiano (it)
 * - Coreano (ko)
 * - Turco (tr)
 */

export const translations = {
  // 🇧🇷 Português
  pt: {
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

    invalid_url: '❌ URL inválida! Por favor, envie uma URL válida do Pinterest.',
    invalid_url_format: '❌ Formato de URL não reconhecido. Use:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ Processando seu vídeo... Por favor, aguarde.',
    downloading: '📥 Baixando vídeo do Pinterest...',
    uploading: '📤 Enviando vídeo para você...',
    success: '✅ Vídeo baixado com sucesso!',
    success_message: 'Seu vídeo está pronto! Aproveite! 🎉',
    error_generic: '❌ Ocorreu um erro ao processar seu vídeo. Tente novamente mais tarde.',
    error_download: '❌ Erro ao baixar o vídeo. Verifique a URL e tente novamente.',
    error_upload: '❌ Erro ao enviar o vídeo. Tente novamente mais tarde.',
    error_timeout: '⏱️ O processamento demorou muito. Tente com um vídeo menor.',
    error_file_size: '📦 O vídeo é muito grande (máximo 100 MB). Tente outro vídeo.',
    error_not_found: '🔍 Vídeo não encontrado. Verifique se a URL está correta e se o vídeo ainda existe.',
    error_api: '🔌 Erro ao conectar com a API do Pinterest. Tente novamente mais tarde.',
    btn_help: '❓ Ajuda',
    btn_start: '🏠 Menu Principal',
    btn_retry: '🔄 Tentar Novamente',
    btn_back: '⬅️ Voltar',
  },
  
  // 🇺🇸 English
  en: {
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

    invalid_url: '❌ Invalid URL! Please send a valid Pinterest URL.',
    invalid_url_format: '❌ URL format not recognized. Use:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ Processing your video... Please wait.',
    downloading: '📥 Downloading video from Pinterest...',
    uploading: '📤 Sending video to you...',
    success: '✅ Video downloaded successfully!',
    success_message: 'Your video is ready! Enjoy! 🎉',
    error_generic: '❌ An error occurred while processing your video. Try again later.',
    error_download: '❌ Error downloading the video. Check the URL and try again.',
    error_upload: '❌ Error sending the video. Try again later.',
    error_timeout: '⏱️ Processing took too long. Try with a smaller video.',
    error_file_size: '📦 The video is too large (maximum 100 MB). Try another video.',
    error_not_found: '🔍 Video not found. Check if the URL is correct and the video still exists.',
    error_api: '🔌 Error connecting to Pinterest API. Try again later.',
    btn_help: '❓ Help',
    btn_start: '🏠 Main Menu',
    btn_retry: '🔄 Retry',
    btn_back: '⬅️ Back',
  },

  // 🇪🇸 Español
  es: {
    welcome_title: '🎬 ¡Bienvenido a Pinterest Video Downloader!',
    welcome_message: `¡Hola! Soy un bot que descarga videos de Pinterest para ti.

*Cómo usar:*
1️⃣ Copia la URL de un video de Pinterest
2️⃣ Envíame la URL
3️⃣ Espera el procesamiento
4️⃣ ¡Recibe el video en alta calidad!

*Formatos aceptados:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

Usa /help para más información.`,
    
    help_title: '❓ Ayuda - Cómo Usar el Bot',
    help_message: `*Instrucciones de Uso:*

1. *Enviar URL de Pinterest*
   Simplemente copia y pega la URL de cualquier video de Pinterest

2. *Formatos Aceptados:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *Tiempo de Procesamiento:*
   Generalmente toma 5-30 segundos dependiendo del tamaño del video

4. *Limitaciones:*
   • Máximo 100 MB por video
   • Solo videos públicos

*¿Problemas?*
Si recibes un error, verifica si:
• La URL es válida
• El video aún existe en Pinterest
• Tienes conexión a internet

Usa /start para volver al menú principal.`,

    invalid_url: '❌ ¡URL inválida! Por favor, envía una URL válida de Pinterest.',
    invalid_url_format: '❌ Formato de URL no reconocido. Usa:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ Procesando tu video... Por favor, espera.',
    downloading: '📥 Descargando video de Pinterest...',
    uploading: '📤 Enviándote el video...',
    success: '✅ ¡Video descargado con éxito!',
    success_message: '¡Tu video está listo! ¡Disfrútalo! 🎉',
    error_generic: '❌ Ocurrió un error al procesar tu video. Intenta más tarde.',
    error_download: '❌ Error al descargar el video. Verifica la URL e intenta de nuevo.',
    error_upload: '❌ Error al enviar el video. Intenta más tarde.',
    error_timeout: '⏱️ El procesamiento tardó demasiado. Intenta con un video más pequeño.',
    error_file_size: '📦 El video es muy grande (máximo 100 MB). Intenta con otro video.',
    error_not_found: '🔍 Video no encontrado. Verifica si la URL es correcta y si el video aún existe.',
    error_api: '🔌 Error al conectar con la API de Pinterest. Intenta más tarde.',
    btn_help: '❓ Ayuda',
    btn_start: '🏠 Menú Principal',
    btn_retry: '🔄 Reintentar',
    btn_back: '⬅️ Volver',
  },

  // 🇨🇳 中文 (简体)
  zh: {
    welcome_title: '🎬 欢迎使用 Pinterest 视频下载器！',
    welcome_message: `你好！我是一个帮你下载 Pinterest 视频的机器人。

*使用方法：*
1️⃣ 复制 Pinterest 视频的链接
2️⃣ 把链接发送给我
3️⃣ 等待处理
4️⃣ 获取高质量视频！

*支持的格式：*
• https://www.pinterest.com/pin/...
• https://pin.it/...

使用 /help 获取更多信息。`,
    
    help_title: '❓ 帮助 - 如何使用机器人',
    help_message: `*使用说明：*

1. *发送 Pinterest 链接*
   只需复制粘贴任何 Pinterest 视频的链接

2. *支持的格式：*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *处理时间：*
   通常需要 5-30 秒，取决于视频大小

4. *限制：*
   • 每个视频最大 100 MB
   • 仅支持公开视频

*遇到问题？*
如果出现错误，请检查：
• 链接是否有效
• 视频是否仍在 Pinterest 上
• 是否有网络连接

使用 /start 返回主菜单。`,

    invalid_url: '❌ 链接无效！请发送有效的 Pinterest 链接。',
    invalid_url_format: '❌ 链接格式不正确。请使用：\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ 正在处理你的视频... 请稍候。',
    downloading: '📥 正在从 Pinterest 下载视频...',
    uploading: '📤 正在发送视频给你...',
    success: '✅ 视频下载成功！',
    success_message: '你的视频已准备好！请享用！🎉',
    error_generic: '❌ 处理视频时出错。请稍后重试。',
    error_download: '❌ 下载视频时出错。请检查链接并重试。',
    error_upload: '❌ 发送视频时出错。请稍后重试。',
    error_timeout: '⏱️ 处理时间过长。请尝试较小的视频。',
    error_file_size: '📦 视频太大（最大 100 MB）。请尝试其他视频。',
    error_not_found: '🔍 未找到视频。请检查链接是否正确以及视频是否仍然存在。',
    error_api: '🔌 连接 Pinterest API 时出错。请稍后重试。',
    btn_help: '❓ 帮助',
    btn_start: '🏠 主菜单',
    btn_retry: '🔄 重试',
    btn_back: '⬅️ 返回',
  },

  // 🇮🇳 हिन्दी (Hindi)
  hi: {
    welcome_title: '🎬 Pinterest Video Downloader में आपका स्वागत है!',
    welcome_message: `नमस्ते! मैं एक बॉट हूं जो आपके लिए Pinterest से वीडियो डाउनलोड करता है।

*कैसे उपयोग करें:*
1️⃣ Pinterest वीडियो का URL कॉपी करें
2️⃣ मुझे URL भेजें
3️⃣ प्रोसेसिंग का इंतजार करें
4️⃣ उच्च गुणवत्ता में वीडियो प्राप्त करें!

*स्वीकृत प्रारूप:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

अधिक जानकारी के लिए /help का उपयोग करें।`,
    
    help_title: '❓ सहायता - बॉट का उपयोग कैसे करें',
    help_message: `*उपयोग निर्देश:*

1. *Pinterest URL भेजें*
   बस किसी भी Pinterest वीडियो का URL कॉपी और पेस्ट करें

2. *स्वीकृत प्रारूप:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *प्रोसेसिंग समय:*
   वीडियो के आकार के आधार पर आमतौर पर 5-30 सेकंड लगते हैं

4. *सीमाएं:*
   • प्रति वीडियो अधिकतम 100 MB
   • केवल सार्वजनिक वीडियो

*समस्या है?*
यदि आपको त्रुटि मिलती है, तो जांचें:
• URL वैध है या नहीं
• वीडियो अभी भी Pinterest पर मौजूद है या नहीं
• आपका इंटरनेट कनेक्शन है या नहीं

मुख्य मेनू पर वापस जाने के लिए /start का उपयोग करें।`,

    invalid_url: '❌ अमान्य URL! कृपया एक वैध Pinterest URL भेजें।',
    invalid_url_format: '❌ URL प्रारूप पहचाना नहीं गया। उपयोग करें:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ आपका वीडियो प्रोसेस हो रहा है... कृपया प्रतीक्षा करें।',
    downloading: '📥 Pinterest से वीडियो डाउनलोड हो रहा है...',
    uploading: '📤 आपको वीडियो भेजा जा रहा है...',
    success: '✅ वीडियो सफलतापूर्वक डाउनलोड हुआ!',
    success_message: 'आपका वीडियो तैयार है! आनंद लें! 🎉',
    error_generic: '❌ आपके वीडियो को प्रोसेस करते समय त्रुटि हुई। बाद में पुनः प्रयास करें।',
    error_download: '❌ वीडियो डाउनलोड करने में त्रुटि। URL जांचें और पुनः प्रयास करें।',
    error_upload: '❌ वीडियो भेजने में त्रुटि। बाद में पुनः प्रयास करें।',
    error_timeout: '⏱️ प्रोसेसिंग में बहुत समय लगा। छोटे वीडियो के साथ प्रयास करें।',
    error_file_size: '📦 वीडियो बहुत बड़ा है (अधिकतम 100 MB)। कोई अन्य वीडियो आज़माएं।',
    error_not_found: '🔍 वीडियो नहीं मिला। जांचें कि URL सही है और वीडियो अभी भी मौजूद है।',
    error_api: '🔌 Pinterest API से कनेक्ट करने में त्रुटि। बाद में पुनः प्रयास करें।',
    btn_help: '❓ सहायता',
    btn_start: '🏠 मुख्य मेनू',
    btn_retry: '🔄 पुनः प्रयास',
    btn_back: '⬅️ वापस',
  },

  // 🇸🇦 العربية (Arabic)
  ar: {
    welcome_title: '🎬 مرحباً بك في Pinterest Video Downloader!',
    welcome_message: `مرحباً! أنا بوت يقوم بتحميل مقاطع الفيديو من Pinterest لك.

*كيفية الاستخدام:*
1️⃣ انسخ رابط فيديو Pinterest
2️⃣ أرسل لي الرابط
3️⃣ انتظر المعالجة
4️⃣ احصل على الفيديو بجودة عالية!

*الصيغ المقبولة:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

استخدم /help لمزيد من المعلومات.`,
    
    help_title: '❓ مساعدة - كيفية استخدام البوت',
    help_message: `*تعليمات الاستخدام:*

1. *إرسال رابط Pinterest*
   ببساطة انسخ والصق رابط أي فيديو من Pinterest

2. *الصيغ المقبولة:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *وقت المعالجة:*
   عادة يستغرق 5-30 ثانية حسب حجم الفيديو

4. *القيود:*
   • الحد الأقصى 100 ميجابايت لكل فيديو
   • فقط مقاطع الفيديو العامة

*هل تواجه مشاكل؟*
إذا حصلت على خطأ، تحقق من:
• صحة الرابط
• وجود الفيديو على Pinterest
• اتصالك بالإنترنت

استخدم /start للعودة إلى القائمة الرئيسية.`,

    invalid_url: '❌ رابط غير صالح! يرجى إرسال رابط Pinterest صالح.',
    invalid_url_format: '❌ صيغة الرابط غير معروفة. استخدم:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ جاري معالجة الفيديو... يرجى الانتظار.',
    downloading: '📥 جاري تحميل الفيديو من Pinterest...',
    uploading: '📤 جاري إرسال الفيديو إليك...',
    success: '✅ تم تحميل الفيديو بنجاح!',
    success_message: 'فيديوك جاهز! استمتع! 🎉',
    error_generic: '❌ حدث خطأ أثناء معالجة الفيديو. حاول مرة أخرى لاحقاً.',
    error_download: '❌ خطأ في تحميل الفيديو. تحقق من الرابط وحاول مرة أخرى.',
    error_upload: '❌ خطأ في إرسال الفيديو. حاول مرة أخرى لاحقاً.',
    error_timeout: '⏱️ استغرقت المعالجة وقتاً طويلاً. جرب فيديو أصغر.',
    error_file_size: '📦 الفيديو كبير جداً (الحد الأقصى 100 ميجابايت). جرب فيديو آخر.',
    error_not_found: '🔍 الفيديو غير موجود. تحقق من صحة الرابط ووجود الفيديو.',
    error_api: '🔌 خطأ في الاتصال بـ Pinterest API. حاول مرة أخرى لاحقاً.',
    btn_help: '❓ مساعدة',
    btn_start: '🏠 القائمة الرئيسية',
    btn_retry: '🔄 إعادة المحاولة',
    btn_back: '⬅️ رجوع',
  },

  // 🇫🇷 Français
  fr: {
    welcome_title: '🎬 Bienvenue sur Pinterest Video Downloader!',
    welcome_message: `Bonjour! Je suis un bot qui télécharge des vidéos Pinterest pour vous.

*Comment utiliser:*
1️⃣ Copiez l'URL d'une vidéo Pinterest
2️⃣ Envoyez-moi l'URL
3️⃣ Attendez le traitement
4️⃣ Recevez la vidéo en haute qualité!

*Formats acceptés:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

Utilisez /help pour plus d'informations.`,
    
    help_title: '❓ Aide - Comment Utiliser le Bot',
    help_message: `*Instructions d'Utilisation:*

1. *Envoyer l'URL Pinterest*
   Copiez et collez simplement l'URL de n'importe quelle vidéo Pinterest

2. *Formats Acceptés:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *Temps de Traitement:*
   Généralement 5-30 secondes selon la taille de la vidéo

4. *Limitations:*
   • Maximum 100 Mo par vidéo
   • Uniquement les vidéos publiques

*Des problèmes?*
Si vous obtenez une erreur, vérifiez si:
• L'URL est valide
• La vidéo existe encore sur Pinterest
• Vous avez une connexion internet

Utilisez /start pour revenir au menu principal.`,

    invalid_url: '❌ URL invalide! Veuillez envoyer une URL Pinterest valide.',
    invalid_url_format: '❌ Format d\'URL non reconnu. Utilisez:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ Traitement de votre vidéo... Veuillez patienter.',
    downloading: '📥 Téléchargement de la vidéo depuis Pinterest...',
    uploading: '📤 Envoi de la vidéo...',
    success: '✅ Vidéo téléchargée avec succès!',
    success_message: 'Votre vidéo est prête! Profitez-en! 🎉',
    error_generic: '❌ Une erreur s\'est produite lors du traitement. Réessayez plus tard.',
    error_download: '❌ Erreur lors du téléchargement. Vérifiez l\'URL et réessayez.',
    error_upload: '❌ Erreur lors de l\'envoi. Réessayez plus tard.',
    error_timeout: '⏱️ Le traitement a pris trop de temps. Essayez une vidéo plus petite.',
    error_file_size: '📦 La vidéo est trop grande (maximum 100 Mo). Essayez une autre vidéo.',
    error_not_found: '🔍 Vidéo non trouvée. Vérifiez l\'URL et si la vidéo existe encore.',
    error_api: '🔌 Erreur de connexion à l\'API Pinterest. Réessayez plus tard.',
    btn_help: '❓ Aide',
    btn_start: '🏠 Menu Principal',
    btn_retry: '🔄 Réessayer',
    btn_back: '⬅️ Retour',
  },

  // 🇷🇺 Русский (Russian)
  ru: {
    welcome_title: '🎬 Добро пожаловать в Pinterest Video Downloader!',
    welcome_message: `Привет! Я бот, который скачивает видео с Pinterest для вас.

*Как использовать:*
1️⃣ Скопируйте URL видео с Pinterest
2️⃣ Отправьте мне URL
3️⃣ Дождитесь обработки
4️⃣ Получите видео в высоком качестве!

*Принимаемые форматы:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

Используйте /help для получения дополнительной информации.`,
    
    help_title: '❓ Помощь - Как Использовать Бота',
    help_message: `*Инструкции по Использованию:*

1. *Отправьте URL Pinterest*
   Просто скопируйте и вставьте URL любого видео с Pinterest

2. *Принимаемые Форматы:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *Время Обработки:*
   Обычно занимает 5-30 секунд в зависимости от размера видео

4. *Ограничения:*
   • Максимум 100 МБ на видео
   • Только публичные видео

*Проблемы?*
Если возникла ошибка, проверьте:
• Действителен ли URL
• Существует ли видео на Pinterest
• Есть ли подключение к интернету

Используйте /start для возврата в главное меню.`,

    invalid_url: '❌ Неверный URL! Пожалуйста, отправьте действительный URL Pinterest.',
    invalid_url_format: '❌ Формат URL не распознан. Используйте:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ Обработка вашего видео... Пожалуйста, подождите.',
    downloading: '📥 Загрузка видео с Pinterest...',
    uploading: '📤 Отправка видео вам...',
    success: '✅ Видео успешно загружено!',
    success_message: 'Ваше видео готово! Наслаждайтесь! 🎉',
    error_generic: '❌ Произошла ошибка при обработке видео. Попробуйте позже.',
    error_download: '❌ Ошибка загрузки видео. Проверьте URL и попробуйте снова.',
    error_upload: '❌ Ошибка отправки видео. Попробуйте позже.',
    error_timeout: '⏱️ Обработка заняла слишком много времени. Попробуйте видео поменьше.',
    error_file_size: '📦 Видео слишком большое (максимум 100 МБ). Попробуйте другое видео.',
    error_not_found: '🔍 Видео не найдено. Проверьте правильность URL и существование видео.',
    error_api: '🔌 Ошибка подключения к API Pinterest. Попробуйте позже.',
    btn_help: '❓ Помощь',
    btn_start: '🏠 Главное Меню',
    btn_retry: '🔄 Повторить',
    btn_back: '⬅️ Назад',
  },

  // 🇩🇪 Deutsch (German)
  de: {
    welcome_title: '🎬 Willkommen beim Pinterest Video Downloader!',
    welcome_message: `Hallo! Ich bin ein Bot, der Videos von Pinterest für dich herunterlädt.

*So funktioniert's:*
1️⃣ Kopiere die URL eines Pinterest-Videos
2️⃣ Sende mir die URL
3️⃣ Warte auf die Verarbeitung
4️⃣ Erhalte das Video in hoher Qualität!

*Akzeptierte Formate:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

Verwende /help für weitere Informationen.`,
    
    help_title: '❓ Hilfe - So Verwendest du den Bot',
    help_message: `*Nutzungsanleitung:*

1. *Pinterest URL senden*
   Kopiere und füge einfach die URL eines Pinterest-Videos ein

2. *Akzeptierte Formate:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *Verarbeitungszeit:*
   Normalerweise 5-30 Sekunden je nach Videogröße

4. *Einschränkungen:*
   • Maximal 100 MB pro Video
   • Nur öffentliche Videos

*Probleme?*
Bei einem Fehler überprüfe:
• Ob die URL gültig ist
• Ob das Video noch auf Pinterest existiert
• Ob du eine Internetverbindung hast

Verwende /start um zum Hauptmenü zurückzukehren.`,

    invalid_url: '❌ Ungültige URL! Bitte sende eine gültige Pinterest-URL.',
    invalid_url_format: '❌ URL-Format nicht erkannt. Verwende:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ Dein Video wird verarbeitet... Bitte warte.',
    downloading: '📥 Video von Pinterest wird heruntergeladen...',
    uploading: '📤 Video wird gesendet...',
    success: '✅ Video erfolgreich heruntergeladen!',
    success_message: 'Dein Video ist fertig! Viel Spaß! 🎉',
    error_generic: '❌ Ein Fehler ist aufgetreten. Versuche es später erneut.',
    error_download: '❌ Fehler beim Herunterladen. Überprüfe die URL und versuche es erneut.',
    error_upload: '❌ Fehler beim Senden. Versuche es später erneut.',
    error_timeout: '⏱️ Verarbeitung hat zu lange gedauert. Versuche ein kleineres Video.',
    error_file_size: '📦 Das Video ist zu groß (maximal 100 MB). Versuche ein anderes Video.',
    error_not_found: '🔍 Video nicht gefunden. Überprüfe die URL und ob das Video noch existiert.',
    error_api: '🔌 Fehler bei der Verbindung zur Pinterest API. Versuche es später erneut.',
    btn_help: '❓ Hilfe',
    btn_start: '🏠 Hauptmenü',
    btn_retry: '🔄 Erneut versuchen',
    btn_back: '⬅️ Zurück',
  },

  // 🇯🇵 日本語 (Japanese)
  ja: {
    welcome_title: '🎬 Pinterest Video Downloaderへようこそ！',
    welcome_message: `こんにちは！Pinterestから動画をダウンロードするボットです。

*使い方：*
1️⃣ Pinterest動画のURLをコピー
2️⃣ URLを送信
3️⃣ 処理を待つ
4️⃣ 高画質で動画を受け取る！

*対応フォーマット：*
• https://www.pinterest.com/pin/...
• https://pin.it/...

詳細は /help をご利用ください。`,
    
    help_title: '❓ ヘルプ - ボットの使い方',
    help_message: `*使用方法：*

1. *Pinterest URLを送信*
   Pinterest動画のURLをコピー＆ペーストするだけ

2. *対応フォーマット：*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *処理時間：*
   動画サイズにより通常5〜30秒

4. *制限：*
   • 動画あたり最大100MB
   • 公開動画のみ

*問題がありますか？*
エラーが発生した場合は確認してください：
• URLが有効かどうか
• 動画がPinterestに存在するか
• インターネット接続があるか

メインメニューに戻るには /start を使用してください。`,

    invalid_url: '❌ 無効なURL！有効なPinterest URLを送信してください。',
    invalid_url_format: '❌ URL形式が認識されません。使用してください：\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ 動画を処理中... お待ちください。',
    downloading: '📥 Pinterestから動画をダウンロード中...',
    uploading: '📤 動画を送信中...',
    success: '✅ 動画のダウンロードに成功しました！',
    success_message: '動画の準備ができました！お楽しみください！🎉',
    error_generic: '❌ 動画の処理中にエラーが発生しました。後でもう一度お試しください。',
    error_download: '❌ ダウンロードエラー。URLを確認して再試行してください。',
    error_upload: '❌ 送信エラー。後でもう一度お試しください。',
    error_timeout: '⏱️ 処理に時間がかかりすぎました。小さい動画でお試しください。',
    error_file_size: '📦 動画が大きすぎます（最大100MB）。別の動画をお試しください。',
    error_not_found: '🔍 動画が見つかりません。URLが正しいか、動画が存在するか確認してください。',
    error_api: '🔌 Pinterest APIへの接続エラー。後でもう一度お試しください。',
    btn_help: '❓ ヘルプ',
    btn_start: '🏠 メインメニュー',
    btn_retry: '🔄 再試行',
    btn_back: '⬅️ 戻る',
  },

  // 🇮🇹 Italiano
  it: {
    welcome_title: '🎬 Benvenuto su Pinterest Video Downloader!',
    welcome_message: `Ciao! Sono un bot che scarica video da Pinterest per te.

*Come usare:*
1️⃣ Copia l'URL di un video Pinterest
2️⃣ Inviami l'URL
3️⃣ Attendi l'elaborazione
4️⃣ Ricevi il video in alta qualità!

*Formati accettati:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

Usa /help per maggiori informazioni.`,
    
    help_title: '❓ Aiuto - Come Usare il Bot',
    help_message: `*Istruzioni d'Uso:*

1. *Invia URL Pinterest*
   Copia e incolla semplicemente l'URL di qualsiasi video Pinterest

2. *Formati Accettati:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *Tempo di Elaborazione:*
   Di solito 5-30 secondi a seconda della dimensione del video

4. *Limitazioni:*
   • Massimo 100 MB per video
   • Solo video pubblici

*Problemi?*
Se ricevi un errore, verifica se:
• L'URL è valido
• Il video esiste ancora su Pinterest
• Hai una connessione internet

Usa /start per tornare al menu principale.`,

    invalid_url: '❌ URL non valido! Invia un URL Pinterest valido.',
    invalid_url_format: '❌ Formato URL non riconosciuto. Usa:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ Elaborazione del video... Attendere prego.',
    downloading: '📥 Download del video da Pinterest...',
    uploading: '📤 Invio del video...',
    success: '✅ Video scaricato con successo!',
    success_message: 'Il tuo video è pronto! Buona visione! 🎉',
    error_generic: '❌ Si è verificato un errore. Riprova più tardi.',
    error_download: '❌ Errore nel download. Verifica l\'URL e riprova.',
    error_upload: '❌ Errore nell\'invio. Riprova più tardi.',
    error_timeout: '⏱️ L\'elaborazione ha richiesto troppo tempo. Prova un video più piccolo.',
    error_file_size: '📦 Il video è troppo grande (massimo 100 MB). Prova un altro video.',
    error_not_found: '🔍 Video non trovato. Verifica l\'URL e se il video esiste ancora.',
    error_api: '🔌 Errore di connessione all\'API Pinterest. Riprova più tardi.',
    btn_help: '❓ Aiuto',
    btn_start: '🏠 Menu Principale',
    btn_retry: '🔄 Riprova',
    btn_back: '⬅️ Indietro',
  },

  // 🇰🇷 한국어 (Korean)
  ko: {
    welcome_title: '🎬 Pinterest Video Downloader에 오신 것을 환영합니다!',
    welcome_message: `안녕하세요! Pinterest에서 동영상을 다운로드해 드리는 봇입니다.

*사용 방법:*
1️⃣ Pinterest 동영상 URL 복사
2️⃣ URL을 보내주세요
3️⃣ 처리 대기
4️⃣ 고화질 동영상 수신!

*지원 형식:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

자세한 정보는 /help를 사용하세요.`,
    
    help_title: '❓ 도움말 - 봇 사용 방법',
    help_message: `*사용 안내:*

1. *Pinterest URL 보내기*
   Pinterest 동영상의 URL을 복사하여 붙여넣기만 하면 됩니다

2. *지원 형식:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *처리 시간:*
   동영상 크기에 따라 보통 5-30초 소요

4. *제한 사항:*
   • 동영상당 최대 100MB
   • 공개 동영상만 가능

*문제가 있나요?*
오류가 발생하면 확인하세요:
• URL이 유효한지
• 동영상이 Pinterest에 있는지
• 인터넷 연결이 있는지

메인 메뉴로 돌아가려면 /start를 사용하세요.`,

    invalid_url: '❌ 잘못된 URL입니다! 유효한 Pinterest URL을 보내주세요.',
    invalid_url_format: '❌ URL 형식을 인식할 수 없습니다. 사용:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ 동영상 처리 중... 잠시만 기다려 주세요.',
    downloading: '📥 Pinterest에서 동영상 다운로드 중...',
    uploading: '📤 동영상 전송 중...',
    success: '✅ 동영상 다운로드 성공!',
    success_message: '동영상이 준비되었습니다! 즐기세요! 🎉',
    error_generic: '❌ 동영상 처리 중 오류가 발생했습니다. 나중에 다시 시도하세요.',
    error_download: '❌ 다운로드 오류. URL을 확인하고 다시 시도하세요.',
    error_upload: '❌ 전송 오류. 나중에 다시 시도하세요.',
    error_timeout: '⏱️ 처리 시간이 너무 오래 걸렸습니다. 작은 동영상으로 시도하세요.',
    error_file_size: '📦 동영상이 너무 큽니다 (최대 100MB). 다른 동영상을 시도하세요.',
    error_not_found: '🔍 동영상을 찾을 수 없습니다. URL이 올바른지, 동영상이 있는지 확인하세요.',
    error_api: '🔌 Pinterest API 연결 오류. 나중에 다시 시도하세요.',
    btn_help: '❓ 도움말',
    btn_start: '🏠 메인 메뉴',
    btn_retry: '🔄 재시도',
    btn_back: '⬅️ 뒤로',
  },

  // 🇹🇷 Türkçe (Turkish)
  tr: {
    welcome_title: '🎬 Pinterest Video Downloader\'a Hoş Geldiniz!',
    welcome_message: `Merhaba! Pinterest'ten sizin için video indiren bir botum.

*Nasıl kullanılır:*
1️⃣ Pinterest video URL'sini kopyalayın
2️⃣ URL'yi bana gönderin
3️⃣ İşlenmesini bekleyin
4️⃣ Yüksek kalitede video alın!

*Kabul edilen formatlar:*
• https://www.pinterest.com/pin/...
• https://pin.it/...

Daha fazla bilgi için /help kullanın.`,
    
    help_title: '❓ Yardım - Bot Nasıl Kullanılır',
    help_message: `*Kullanım Talimatları:*

1. *Pinterest URL'si Gönderin*
   Herhangi bir Pinterest videosunun URL'sini kopyalayıp yapıştırın

2. *Kabul Edilen Formatlar:*
   • https://www.pinterest.com/pin/XXXXXX
   • https://pin.it/XXXXXX

3. *İşlem Süresi:*
   Video boyutuna bağlı olarak genellikle 5-30 saniye

4. *Sınırlamalar:*
   • Video başına maksimum 100 MB
   • Sadece herkese açık videolar

*Sorun mu var?*
Hata alırsanız kontrol edin:
• URL'nin geçerli olup olmadığını
• Videonun Pinterest'te hala var olup olmadığını
• İnternet bağlantınızın olup olmadığını

Ana menüye dönmek için /start kullanın.`,

    invalid_url: '❌ Geçersiz URL! Lütfen geçerli bir Pinterest URL\'si gönderin.',
    invalid_url_format: '❌ URL formatı tanınmadı. Kullanın:\n• https://www.pinterest.com/pin/...\n• https://pin.it/...',
    processing: '⏳ Videonuz işleniyor... Lütfen bekleyin.',
    downloading: '📥 Pinterest\'ten video indiriliyor...',
    uploading: '📤 Video gönderiliyor...',
    success: '✅ Video başarıyla indirildi!',
    success_message: 'Videonuz hazır! Keyfini çıkarın! 🎉',
    error_generic: '❌ Video işlenirken bir hata oluştu. Daha sonra tekrar deneyin.',
    error_download: '❌ İndirme hatası. URL\'yi kontrol edip tekrar deneyin.',
    error_upload: '❌ Gönderme hatası. Daha sonra tekrar deneyin.',
    error_timeout: '⏱️ İşlem çok uzun sürdü. Daha küçük bir video deneyin.',
    error_file_size: '📦 Video çok büyük (maksimum 100 MB). Başka bir video deneyin.',
    error_not_found: '🔍 Video bulunamadı. URL\'nin doğru olduğunu ve videonun var olduğunu kontrol edin.',
    error_api: '🔌 Pinterest API\'ye bağlanırken hata. Daha sonra tekrar deneyin.',
    btn_help: '❓ Yardım',
    btn_start: '🏠 Ana Menü',
    btn_retry: '🔄 Tekrar Dene',
    btn_back: '⬅️ Geri',
  },
};

/**
 * Lista de idiomas suportados com seus códigos
 */
export const SUPPORTED_LANGUAGES = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  zh: '中文',
  hi: 'हिन्दी',
  ar: 'العربية',
  fr: 'Français',
  ru: 'Русский',
  de: 'Deutsch',
  ja: '日本語',
  it: 'Italiano',
  ko: '한국어',
  tr: 'Türkçe',
};

/**
 * Detecta o idioma do usuário baseado no language_code do Telegram
 * @param {string} languageCode - Código de idioma do Telegram (ex: 'pt', 'en', 'pt-BR', 'en-US')
 * @returns {string} Idioma suportado
 */
export function detectLanguage(languageCode) {
  if (!languageCode) return 'en';
  
  const code = languageCode.toLowerCase();
  
  // Verifica correspondência exata primeiro (ex: 'pt', 'en', 'es')
  if (translations[code]) {
    return code;
  }
  
  // Verifica pelo prefixo do idioma (ex: 'pt-BR' -> 'pt', 'zh-CN' -> 'zh')
  const prefix = code.split('-')[0];
  if (translations[prefix]) {
    return prefix;
  }
  
  // Mapeamentos especiais para variantes de idiomas
  const languageMappings = {
    // Chinês
    'zh-cn': 'zh',
    'zh-tw': 'zh',
    'zh-hk': 'zh',
    'zh-hans': 'zh',
    'zh-hant': 'zh',
    // Português
    'pt-br': 'pt',
    'pt-pt': 'pt',
    // Espanhol
    'es-es': 'es',
    'es-mx': 'es',
    'es-ar': 'es',
    'es-419': 'es',
    // Inglês
    'en-us': 'en',
    'en-gb': 'en',
    'en-au': 'en',
    // Francês
    'fr-fr': 'fr',
    'fr-ca': 'fr',
    // Alemão
    'de-de': 'de',
    'de-at': 'de',
    'de-ch': 'de',
    // Árabe
    'ar-sa': 'ar',
    'ar-eg': 'ar',
    'ar-ae': 'ar',
    // Russo
    'ru-ru': 'ru',
    // Japonês
    'ja-jp': 'ja',
    // Italiano
    'it-it': 'it',
    // Coreano
    'ko-kr': 'ko',
    // Turco
    'tr-tr': 'tr',
    // Hindi
    'hi-in': 'hi',
  };
  
  if (languageMappings[code]) {
    return languageMappings[code];
  }
  
  // Padrão é Inglês
  return 'en';
}

/**
 * Retorna uma mensagem traduzida para o idioma do usuário
 * @param {string} key - Chave da mensagem
 * @param {string} language - Idioma
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

/**
 * Retorna o nome do idioma a partir do código
 * @param {string} languageCode - Código do idioma
 * @returns {string} Nome do idioma
 */
export function getLanguageName(languageCode) {
  const lang = detectLanguage(languageCode);
  return SUPPORTED_LANGUAGES[lang] || 'English';
}
