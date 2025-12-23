/**
 * Sistema de Internacionalização (i18n) para o Bot PinSave
 * Suporta os idiomas mais falados do mundo
 */

export const translations = {
  // 🇧🇷 Português
  pt: {
    welcome_title: '📌 PinSave',
    welcome_message: `Bem-vindo *{{name}}* ao PinSave - o melhor bot para baixar conteúdo do Pinterest! 🎯

📥 *O que você pode baixar:*

✅ | Vídeos em HD
✅ | Fotos em alta resolução  
✅ | GIFs animados

✨ *Nossos recursos:*

✅ | Processamento rápido
✅ | Qualidade original
✅ | Interface intuitiva
✅ | 100% gratuito

Clique no botão abaixo para começar! 👇`,
    
    btn_open_app: '🚀 Abrir PinSave',
    btn_how_it_works: '❓ Como Funciona',
    btn_terms: '📜 Termos',
    
    how_it_works_title: '❓ Como Funciona',
    how_it_works_message: `*Guia de Utilização do PinSave*

Este guia apresenta as instruções para utilizar o PinSave e realizar o download de conteúdos do Pinterest.

*Passo a Passo:*

*1. Enviar o Link*
Copie a URL do conteúdo desejado no Pinterest e envie diretamente no chat do bot.

*2. Processamento*
Aguarde alguns instantes enquanto o sistema processa o seu pedido.

*3. Conclusão*
O conteúdo será enviado diretamente no chat. Para salvar, toque e segure o arquivo e selecione "Salvar na galeria".

*Links Aceitos:*
• pinterest.com/pin/...
• pin.it/...

*Tipos de Conteúdo Suportados:*
• Vídeos (MP4)
• Fotos (JPEG/PNG)
• GIFs Animados

*Limitações:*
• Tamanho máximo: 100 MB por arquivo.
• Apenas conteúdos públicos podem ser baixados.`,

    terms_title: '📜 Termos de Uso',
    terms_message: `*Termos de Uso do PinSave*

Ao utilizar os serviços do PinSave, você concorda com os seguintes termos e condições:

*1. Natureza do Serviço*
O PinSave é um serviço comercial que permite o download de conteúdo público da plataforma Pinterest. Este serviço não possui qualquer vínculo oficial com o Pinterest, Inc.

*2. Direitos Autorais e Propriedade Intelectual*
O usuário é inteiramente responsável por garantir que o uso do conteúdo baixado esteja em conformidade com as leis de direitos autorais e os termos de serviço do Pinterest. O PinSave não se responsabiliza pelo uso indevido do material baixado.

*3. Disponibilidade e Garantia*
O serviço é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos a disponibilidade contínua, ininterrupta ou isenta de erros do serviço.

*4. Privacidade e Proteção de Dados*
O PinSave compromete-se a proteger a sua privacidade. Não armazenamos cópias dos conteúdos baixados nem coletamos dados pessoais dos nossos usuários.

*5. Limitação de Responsabilidade*
Em nenhuma circunstância o PinSave será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar o serviço.

*6. Modificações nos Termos de Uso*
Reservamo-nos o direito de modificar estes termos a qualquer momento, a nosso exclusivo critério. As alterações entrarão em vigor imediatamente após a sua publicação. É da sua responsabilidade rever periodicamente os termos de uso.

Ao continuar a utilizar o serviço, você confirma que leu, compreendeu e concorda em ficar vinculado a estes termos.`,

    btn_back: '⬅️ Voltar',
    btn_accept: '✅ Aceitar e Continuar',
    btn_back_to_start: '🏠 Voltar ao Início',
    btn_change_language: '🌍 Trocar Idioma',
    
    // Mensagens de idioma
    language_title: '🌍 Selecionar Idioma',
    language_message: 'Escolha seu idioma preferido:',
    language_changed: '✅ Idioma alterado com sucesso!',
    
    // Mensagens de download
    processing: '⏳ Processando...',
    download_success: '✅ *Download concluído!*\n\nAqui está seu conteúdo, {{name}}! 🎉',
    download_error: '❌ *Erro no download*\n\nNão foi possível baixar o conteúdo. Verifique se:\n\n• A URL está correta\n• O pin é público\n• O conteúdo ainda existe\n\nTente novamente com outra URL.',
    invalid_url: '⚠️ O link enviado não é uma URL válida do Pinterest.\n\n*Formatos aceitos:*\n• pinterest.com/pin/...\n• pin.it/...\n\nPor favor, copie o link correto e tente novamente.',
    send_pinterest_url: '📌 *Envie uma URL do Pinterest*\n\nCole aqui o link do vídeo, foto ou GIF que deseja baixar:\n\n🔗 *Formatos aceitos:*\n• pinterest.com/pin/...\n• pin.it/...',
    btn_download_more: '📥 Baixar Mais',
    btn_download_media: '📥 Baixar Mídia',
    download_media_prompt: '📌 Envie a URL do Pinterest que deseja baixar:\n\n🔗 *Formatos aceitos:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // Mensagens de limite e premium
    limit_reached: '⚠️ *Limite Diário Atingido*\n\nVocê usou {{used}}/{{limit}} downloads gratuitos hoje.\n\n⭐ *Assine o Premium* para downloads ilimitados!\n\n✅ Downloads ilimitados\n✅ Sem espera\n✅ Suporte prioritário',
    btn_get_premium: '⭐ Obter Premium',
    premium_title: '⭐ PinSave Premium',
    premium_description: 'Downloads ilimitados por 30 dias! Baixe quantos vídeos, fotos e GIFs quiser do Pinterest.',
    premium_activated: '🎉 *Parabéns!*\n\nSeu *Premium* foi ativado com sucesso!\n\n✅ Downloads ilimitados por 30 dias\n✅ Aproveite sem limites!\n\nObrigado por apoiar o PinSave! ❤️',
    
    // Mensagens de conta
    btn_my_account: '👤 Minha Conta',
    account_title: '👤 *Minha Conta*',
    account_id: 'ID',
    account_plan: 'Plano',
    account_downloads: 'Downloads Hoje',
    account_plan_free: '🆓 Free',
    account_plan_premium: '⭐ Premium',
    account_downloads_unlimited: '∞ Ilimitado',
    account_premium_expires: '⏰ Premium expira em {{days}} dias',
  },
  
  // 🇺🇸 English
  en: {
    welcome_title: '📌 PinSave',
    welcome_message: `Welcome *{{name}}* to PinSave - the best bot to download Pinterest content! 🎯

📥 *What you can download:*

✅ | HD Videos
✅ | High-resolution Photos
✅ | Animated GIFs

✨ *Our features:*

✅ | Fast processing
✅ | Original quality
✅ | Intuitive interface
✅ | 100% free

Click the button below to get started! 👇`,
    
    btn_open_app: '🚀 Open PinSave',
    btn_how_it_works: '❓ How It Works',
    btn_terms: '📜 Terms',
    
    how_it_works_title: '❓ How It Works',
    how_it_works_message: `*PinSave User Guide*

This guide provides detailed instructions for using PinSave and downloading content from the Pinterest platform efficiently.

*Step by Step:*

*1. Access the Service*
Copy the URL of the desired Pinterest content and send it directly in the bot chat.

*2. Insert the Link*
Copy the URL of the desired content on Pinterest and paste it into the indicated input field.

*3. Processing*
Wait a few moments while our system processes your request and prepares the file for download.

*4. Completion*
Once processing is complete, the content will be transferred and automatically saved to your device.

*Additional Information:*

*Accepted Links:*
The service is compatible with the platform's standard URL formats:
• pinterest.com/pin/...
• pin.it/...

*Supported Content Types:*
The tool is optimized for downloading:
• Videos (MP4)
• Photos (JPEG/PNG)
• Animated GIFs

*Limitations and Restrictions:*
• *Capacity:* The maximum allowed size is 100 MB per file.
• *Privacy:* For security and ethical reasons, only publicly accessible content can be downloaded. Private profiles are not supported.`,

    terms_title: '📜 Terms of Use',
    terms_message: `*PinSave Terms of Use*

By using PinSave services, you agree to the following terms and conditions:

*1. Nature of the Service*
PinSave is a commercial service that allows downloading public content from the Pinterest platform. This service has no official affiliation with Pinterest, Inc.

*2. Copyright and Intellectual Property*
The user is entirely responsible for ensuring that the use of downloaded content complies with copyright laws and Pinterest's terms of service. PinSave is not responsible for misuse of downloaded material.

*3. Availability and Warranty*
The service is provided "as is," without warranties of any kind, express or implied. We do not guarantee continuous, uninterrupted, or error-free availability of the service.

*4. Privacy and Data Protection*
PinSave is committed to protecting your privacy. We do not store copies of downloaded content nor collect personal data from our users.

*5. Limitation of Liability*
Under no circumstances shall PinSave be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.

*6. Modifications to Terms of Use*
We reserve the right to modify these terms at any time, at our sole discretion. Changes will take effect immediately upon publication. It is your responsibility to periodically review the terms of use.

By continuing to use the service, you confirm that you have read, understood, and agree to be bound by these terms.`,

    btn_back: '⬅️ Back',
    btn_accept: '✅ Accept and Continue',
    btn_back_to_start: '🏠 Back to Start',
    btn_change_language: '🌍 Change Language',
    
    // Language messages
    language_title: '🌍 Select Language',
    language_message: 'Choose your preferred language:',
    language_changed: '✅ Language changed successfully!',
    
    // Download messages
    processing: '⏳ Processing...',
    download_success: '✅ *Download complete!*\n\nHere is your content, {{name}}! 🎉',
    download_error: '❌ *Download error*\n\nCould not download the content. Please check if:\n\n• The URL is correct\n• The pin is public\n• The content still exists\n\nTry again with another URL.',
    invalid_url: '⚠️ The link you sent is not a valid Pinterest URL.\n\n*Accepted formats:*\n• pinterest.com/pin/...\n• pin.it/...\n\nPlease copy the correct link and try again.',
    send_pinterest_url: '📌 *Send a Pinterest URL*\n\nPaste here the link to the video, photo or GIF you want to download:\n\n🔗 *Accepted formats:*\n• pinterest.com/pin/...\n• pin.it/...',
    btn_download_more: '📥 Download More',
    btn_download_media: '📥 Download Media',
    download_media_prompt: '📌 Send the Pinterest URL you want to download:\n\n🔗 *Accepted formats:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // Limit and premium messages
    limit_reached: '⚠️ *Daily Limit Reached*\n\nYou have used {{used}}/{{limit}} free downloads today.\n\n⭐ *Get Premium* for unlimited downloads!\n\n✅ Unlimited downloads\n✅ No waiting\n✅ Priority support',
    btn_get_premium: '⭐ Get Premium',
    premium_title: '⭐ PinSave Premium',
    premium_description: 'Unlimited downloads for 30 days! Download as many videos, photos and GIFs as you want from Pinterest.',
    premium_activated: '🎉 *Congratulations!*\n\nYour *Premium* has been activated successfully!\n\n✅ Unlimited downloads for 30 days\n✅ Enjoy without limits!\n\nThank you for supporting PinSave! ❤️',
    
    // Account messages
    btn_my_account: '👤 My Account',
    account_title: '👤 *My Account*',
    account_id: 'ID',
    account_plan: 'Plan',
    account_downloads: 'Downloads Today',
    account_plan_free: '🆓 Free',
    account_plan_premium: '⭐ Premium',
    account_downloads_unlimited: '∞ Unlimited',
    account_premium_expires: '⏰ Premium expires in {{days}} days',
  },
  
  // 🇪🇸 Español
  es: {
    welcome_title: '📌 PinSave',
    welcome_message: `¡Bienvenido *{{name}}* a PinSave - el mejor bot para descargar contenido de Pinterest! 🎯

📥 *Lo que puedes descargar:*

✅ | Videos en HD
✅ | Fotos en alta resolución
✅ | GIFs animados

✨ *Nuestras características:*

✅ | Procesamiento rápido
✅ | Calidad original
✅ | Interfaz intuitiva
✅ | 100% gratis

¡Haz clic en el botón de abajo para comenzar! 👇`,
    
    btn_open_app: '🚀 Abrir PinSave',
    btn_how_it_works: '❓ Cómo Funciona',
    btn_terms: '📜 Términos',
    
    how_it_works_title: '❓ Cómo Funciona',
    how_it_works_message: `*Guía de Uso de PinSave*

Esta guía presenta las instrucciones detalladas para utilizar PinSave y realizar la descarga de contenidos de la plataforma Pinterest de forma eficiente.

*Paso a Paso:*

*1. Acceso al Servicio*
Copie la URL del contenido deseado en Pinterest y envíela directamente en el chat del bot.

*2. Inserción del Enlace*
Copie la URL del contenido deseado en Pinterest y péguela en el campo de entrada indicado.

*3. Procesamiento*
Espere unos instantes mientras nuestro sistema procesa su solicitud y prepara el archivo para descarga.

*4. Conclusión*
Una vez finalizado el procesamiento, el contenido será transferido y guardado automáticamente en su dispositivo.

*Información Adicional:*

*Enlaces Aceptados:*
El servicio es compatible con los formatos de URL estándar de la plataforma:
• pinterest.com/pin/...
• pin.it/...

*Tipos de Contenido Soportados:*
La herramienta está optimizada para la descarga de:
• Videos (MP4)
• Fotos (JPEG/PNG)
• GIFs Animados

*Limitaciones y Restricciones:*
• *Capacidad:* El tamaño máximo permitido es de 100 MB por archivo.
• *Privacidad:* Por cuestiones de seguridad y ética, solo se pueden descargar contenidos de acceso público. Los perfiles privados no son compatibles.`,

    terms_title: '📜 Términos de Uso',
    terms_message: `*Términos de Uso de PinSave*

Al utilizar los servicios de PinSave, usted acepta los siguientes términos y condiciones:

*1. Naturaleza del Servicio*
PinSave es un servicio comercial que permite la descarga de contenido público de la plataforma Pinterest. Este servicio no tiene ningún vínculo oficial con Pinterest, Inc.

*2. Derechos de Autor y Propiedad Intelectual*
El usuario es enteramente responsable de garantizar que el uso del contenido descargado cumpla con las leyes de derechos de autor y los términos de servicio de Pinterest. PinSave no se responsabiliza por el uso indebido del material descargado.

*3. Disponibilidad y Garantía*
El servicio se proporciona "tal cual", sin garantías de ningún tipo, expresas o implícitas. No garantizamos la disponibilidad continua, ininterrumpida o libre de errores del servicio.

*4. Privacidad y Protección de Datos*
PinSave se compromete a proteger su privacidad. No almacenamos copias de los contenidos descargados ni recopilamos datos personales de nuestros usuarios.

*5. Limitación de Responsabilidad*
En ninguna circunstancia PinSave será responsable por daños directos, indirectos, incidentales, especiales o consecuentes resultantes del uso o la incapacidad de usar el servicio.

*6. Modificaciones en los Términos de Uso*
Nos reservamos el derecho de modificar estos términos en cualquier momento, a nuestro exclusivo criterio. Los cambios entrarán en vigor inmediatamente después de su publicación. Es su responsabilidad revisar periódicamente los términos de uso.

Al continuar utilizando el servicio, usted confirma que ha leído, comprendido y acepta quedar vinculado a estos términos.`,

    btn_back: '⬅️ Volver',
    btn_accept: '✅ Aceptar y Continuar',
    btn_back_to_start: '🏠 Volver al Inicio',
    btn_change_language: '🌍 Cambiar Idioma',
    
    // Mensajes de idioma
    language_title: '🌍 Seleccionar Idioma',
    language_message: 'Elige tu idioma preferido:',
    language_changed: '✅ ¡Idioma cambiado con éxito!',
    
    // Download messages
    processing: '⏳ Procesando...',
    download_success: `✅ *¡Descarga completada!*

¡Aquí está tu contenido, {{name}}! 🎉`,
    download_error: `❌ *Error de descarga*

No se pudo descargar el contenido. Verifica si:

• La URL es correcta
• El pin es público
• El contenido aún existe

Intenta de nuevo con otra URL.`,
    invalid_url: '⚠️ El enlace enviado no es una URL válida de Pinterest.\n\n*Formatos aceptados:*\n• pinterest.com/pin/...\n• pin.it/...\n\nPor favor, copie el enlace correcto e intente nuevamente.',
    send_pinterest_url: `📌 *Envía una URL de Pinterest*

Pega aquí el enlace del video, foto o GIF que deseas descargar:

🔗 *Formatos aceptados:*
• pinterest.com/pin/...
• pin.it/...`,
    btn_download_more: '📥 Descargar Más',
    btn_download_media: '📥 Descargar Medios',
    download_media_prompt: '📌 Envía la URL de Pinterest que deseas descargar:\n\n🔗 *Formatos aceptados:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // Mensajes de límite y premium
    limit_reached: '⚠️ *Límite Diario Alcanzado*\n\nHas usado {{used}}/{{limit}} descargas gratuitas hoy.\n\n⭐ *Obtén Premium* para descargas ilimitadas!\n\n✅ Descargas ilimitadas\n✅ Sin esperas\n✅ Soporte prioritario',
    btn_get_premium: '⭐ Obtener Premium',
    premium_title: '⭐ PinSave Premium',
    premium_description: '¡Descargas ilimitadas por 30 días! Descarga todos los videos, fotos y GIFs que quieras de Pinterest.',
    premium_activated: '🎉 *¡Felicidades!*\n\n¡Tu *Premium* ha sido activado con éxito!\n\n✅ Descargas ilimitadas por 30 días\n✅ ¡Disfruta sin límites!\n\n¡Gracias por apoyar PinSave! ❤️',
    
    // Mensajes de cuenta
    btn_my_account: '👤 Mi Cuenta',
    account_title: '👤 *Mi Cuenta*',
    account_id: 'ID',
    account_plan: 'Plan',
    account_downloads: 'Descargas Hoy',
    account_plan_free: '🆓 Gratis',
    account_plan_premium: '⭐ Premium',
    account_downloads_unlimited: '∞ Ilimitado',
    account_premium_expires: '⏰ Premium expira en {{days}} días',
  },

  // 🇨🇳 中文 (简体)
  zh: {
    welcome_title: '📌 PinSave',
    welcome_message: `欢迎 *{{name}}* 使用 PinSave - 下载 Pinterest 内容的最佳机器人！🎯

📥 *可下载内容：*

✅ | 高清视频
✅ | 高分辨率照片
✅ | 动态 GIF

✨ *我们的功能：*

✅ | 快速处理
✅ | 原始质量
✅ | 直观界面
✅ | 100% 免费

点击下方按钮开始！👇`,
    
    btn_open_app: '🚀 打开 PinSave',
    btn_how_it_works: '❓ 使用方法',
    btn_terms: '📜 条款',
    
    how_it_works_title: '❓ 使用方法',
    how_it_works_message: `*PinSave 使用指南*

本指南提供了使用 PinSave 高效下载 Pinterest 平台内容的详细说明。

*操作步骤：*

*1. 访问服务*
复制 Pinterest 内容的 URL，直接发送到机器人聊天中。

*2. 插入链接*
复制 Pinterest 上所需内容的 URL，并将其粘贴到指定的输入框中。

*3. 处理中*
请稍候，我们的系统正在处理您的请求并准备下载文件。

*4. 完成*
处理完成后，内容将自动传输并保存到您的设备。

*附加信息：*

*支持的链接：*
该服务兼容平台的标准 URL 格式：
• pinterest.com/pin/...
• pin.it/...

*支持的内容类型：*
该工具针对以下内容的下载进行了优化：
• 视频 (MP4)
• 照片 (JPEG/PNG)
• 动态 GIF

*限制和约束：*
• *容量：* 每个文件的最大允许大小为 100 MB。
• *隐私：* 出于安全和道德原因，只能下载公开访问的内容。不支持私人资料。`,

    terms_title: '📜 使用条款',
    terms_message: `*PinSave 使用条款*

使用 PinSave 服务即表示您同意以下条款和条件：

*1. 服务性质*
PinSave 是一项商业服务，允许从 Pinterest 平台下载公开内容。本服务与 Pinterest, Inc. 没有任何官方关联。

*2. 版权和知识产权*
用户完全负责确保下载内容的使用符合版权法和 Pinterest 的服务条款。PinSave 不对下载材料的滥用负责。

*3. 可用性和保证*
服务按"原样"提供，不提供任何明示或暗示的保证。我们不保证服务的持续、不间断或无错误可用性。

*4. 隐私和数据保护*
PinSave 致力于保护您的隐私。我们不存储下载内容的副本，也不收集用户的个人数据。

*5. 责任限制*
在任何情况下，PinSave 均不对因使用或无法使用服务而导致的任何直接、间接、附带、特殊或后果性损害负责。

*6. 使用条款的修改*
我们保留随时自行修改这些条款的权利。更改将在发布后立即生效。您有责任定期查看使用条款。

继续使用该服务即表示您确认已阅读、理解并同意受这些条款的约束。`,

    btn_back: '⬅️ 返回',
    btn_accept: '✅ 接受并继续',
    btn_back_to_start: '🏠 返回首页',
    btn_change_language: '🌍 更改语言',
    
    // 语言消息
    language_title: '🌍 选择语言',
    language_message: '选择您的首选语言：',
    language_changed: '✅ 语言更改成功！',
    
    // Download messages
    processing: '⏳ 处理中...',
    download_success: `✅ *下载完成！*

这是您的内容，{{name}}！🎉`,
    download_error: `❌ *下载错误*

无法下载内容。请检查：

• URL是否正确
• Pin是否公开
• 内容是否仍然存在

请使用其他URL重试.`,
    invalid_url: '⚠️ 您发送的链接不是有效的 Pinterest URL。\n\n*支持的格式：*\n• pinterest.com/pin/...\n• pin.it/...\n\n请复制正确的链接后重试。',
    send_pinterest_url: `📌 *发送Pinterest链接*

粘贴您要下载的视频、照片或GIF链接：

🔗 *支持的格式：*
• pinterest.com/pin/...
• pin.it/...`,
    btn_download_more: '📥 下载更多',
    btn_download_media: '📥 下载媒体',
    download_media_prompt: '📌 发送您要下载的Pinterest链接：\n\n🔗 *支持的格式：*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // 限制和高级消息
    limit_reached: '⚠️ *已达到每日限制*\n\n您今天已使用 {{used}}/{{limit}} 次免费下载。\n\n⭐ *购买高级版* 获取无限下载！\n\n✅ 无限下载\n✅ 无需等待\n✅ 优先支持',
    btn_get_premium: '⭐ 获取高级版',
    premium_title: '⭐ PinSave 高级版',
    premium_description: '30天无限下载！从Pinterest下载任意数量的视频、照片和GIF。',
    premium_activated: '🎉 *恭喜！*\n\n您的*高级版*已成功激活！\n\n✅ 30天无限下载\n✅ 无限制享用！\n\n感谢您支持PinSave！❤️',
    
    // 账户消息
    btn_my_account: '👤 我的账户',
    account_title: '👤 *我的账户*',
    account_id: 'ID',
    account_plan: '计划',
    account_downloads: '今日下载',
    account_plan_free: '🆓 免费',
    account_plan_premium: '⭐ 高级版',
    account_downloads_unlimited: '∞ 无限',
    account_premium_expires: '⏰ 高级版将在 {{days}} 天后过期',
  },

  // 🇮🇳 हिन्दी (Hindi)
  hi: {
    welcome_title: '📌 PinSave',
    welcome_message: `स्वागत *{{name}}* PinSave में - Pinterest सामग्री डाउनलोड करने का सबसे अच्छा बॉट! 🎯

📥 *आप क्या डाउनलोड कर सकते हैं:*

✅ | HD वीडियो
✅ | उच्च रिज़ॉल्यूशन फ़ोटो
✅ | एनिमेटेड GIF

✨ *हमारी विशेषताएं:*

✅ | तेज़ प्रोसेसिंग
✅ | मूल गुणवत्ता
✅ | सहज इंटरफ़ेस
✅ | 100% मुफ़्त

शुरू करने के लिए नीचे बटन पर क्लिक करें! 👇`,
    
    btn_open_app: '🚀 PinSave खोलें',
    btn_how_it_works: '❓ कैसे काम करता है',
    btn_terms: '📜 शर्तें',
    
    how_it_works_title: '❓ कैसे काम करता है',
    how_it_works_message: `*PinSave उपयोग गाइड*

यह गाइड PinSave का उपयोग करने और Pinterest प्लेटफ़ॉर्म से कुशलतापूर्वक सामग्री डाउनलोड करने के लिए विस्तृत निर्देश प्रदान करती है।

*चरण दर चरण:*

*1. सेवा तक पहुंच*
Pinterest सामग्री का URL कॉपी करें और बॉट चैट में सीधे भेजें।

*2. लिंक डालें*
Pinterest पर वांछित सामग्री का URL कॉपी करें और इसे निर्दिष्ट इनपुट फ़ील्ड में पेस्ट करें।

*3. प्रोसेसिंग*
कुछ क्षण प्रतीक्षा करें जब तक हमारा सिस्टम आपके अनुरोध को प्रोसेस करता है और डाउनलोड के लिए फ़ाइल तैयार करता है।

*4. पूर्णता*
प्रोसेसिंग पूर्ण होने के बाद, सामग्री स्वचालित रूप से आपके डिवाइस में स्थानांतरित और सहेजी जाएगी।

*अतिरिक्त जानकारी:*

*स्वीकृत लिंक:*
सेवा प्लेटफ़ॉर्म के मानक URL प्रारूपों के साथ संगत है:
• pinterest.com/pin/...
• pin.it/...

*समर्थित सामग्री प्रकार:*
यह टूल निम्नलिखित के डाउनलोड के लिए अनुकूलित है:
• वीडियो (MP4)
• फ़ोटो (JPEG/PNG)
• एनिमेटेड GIF

*सीमाएं और प्रतिबंध:*
• *क्षमता:* प्रति फ़ाइल अधिकतम अनुमत आकार 100 MB है।
• *गोपनीयता:* सुरक्षा और नैतिक कारणों से, केवल सार्वजनिक रूप से सुलभ सामग्री डाउनलोड की जा सकती है। निजी प्रोफ़ाइल समर्थित नहीं हैं।`,

    terms_title: '📜 उपयोग की शर्तें',
    terms_message: `*PinSave उपयोग की शर्तें*

PinSave सेवाओं का उपयोग करके, आप निम्नलिखित नियमों और शर्तों से सहमत होते हैं:

*1. सेवा की प्रकृति*
PinSave एक वाणिज्यिक सेवा है जो Pinterest प्लेटफ़ॉर्म से सार्वजनिक सामग्री डाउनलोड करने की अनुमति देती है। इस सेवा का Pinterest, Inc. के साथ कोई आधिकारिक संबंध नहीं है।

*2. कॉपीराइट और बौद्धिक संपदा*
उपयोगकर्ता पूरी तरह से यह सुनिश्चित करने के लिए जिम्मेदार है कि डाउनलोड की गई सामग्री का उपयोग कॉपीराइट कानूनों और Pinterest की सेवा की शर्तों के अनुपालन में है। PinSave डाउनलोड की गई सामग्री के दुरुपयोग के लिए जिम्मेदार नहीं है।

*3. उपलब्धता और वारंटी*
सेवा "जैसी है" प्रदान की जाती है, बिना किसी प्रकार की वारंटी के, व्यक्त या निहित। हम सेवा की निरंतर, निर्बाध या त्रुटि-मुक्त उपलब्धता की गारंटी नहीं देते हैं।

*4. गोपनीयता और डेटा सुरक्षा*
PinSave आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है। हम डाउनलोड की गई सामग्री की प्रतियां संग्रहीत नहीं करते हैं और न ही हमारे उपयोगकर्ताओं से व्यक्तिगत डेटा एकत्र करते हैं।

*5. दायित्व की सीमा*
किसी भी परिस्थिति में PinSave सेवा के उपयोग या उपयोग करने में असमर्थता से उत्पन्न किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, विशेष या परिणामी क्षति के लिए उत्तरदायी नहीं होगा।

*6. उपयोग की शर्तों में संशोधन*
हम अपने एकमात्र विवेक पर किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। परिवर्तन प्रकाशन के तुरंत बाद प्रभावी होंगे। उपयोग की शर्तों की समय-समय पर समीक्षा करना आपकी जिम्मेदारी है।

सेवा का उपयोग जारी रखकर, आप पुष्टि करते हैं कि आपने इन शर्तों को पढ़ा, समझा और इनसे बंधे रहने के लिए सहमत हैं।`,

    btn_back: '⬅️ वापस',
    btn_accept: '✅ स्वीकार करें और जारी रखें',
    btn_back_to_start: '🏠 शुरू पर वापस',
    btn_change_language: '🌍 भाषा बदलें',
    
    // भाषा संदेश
    language_title: '🌍 भाषा चुनें',
    language_message: 'अपनी पसंदीदा भाषा चुनें:',
    language_changed: '✅ भाषा सफलतापूर्वक बदली गई!',
    
    // Download messages
    processing: '⏳ प्रोसेसिंग...',
    download_success: `✅ *डाउनलोड पूर्ण!*

यहाँ आपकी सामग्री है, {{name}}! 🎉`,
    download_error: `❌ *डाउनलोड त्रुटि*

सामग्री डाउनलोड नहीं हो सकी।`,
    invalid_url: '⚠️ आपके द्वारा भेजा गया लिंक एक वैध Pinterest URL नहीं है।\n\n*स्वीकृत प्रारूप:*\n• pinterest.com/pin/...\n• pin.it/...\n\nकृपया सही लिंक कॉपी करें और पुनः प्रयास करें।',
    send_pinterest_url: `📌 *Pinterest URL भेजें*

वीडियो, फोटो या GIF का लिंक पेस्ट करें।`,
    btn_download_more: '📥 और डाउनलोड करें',
    btn_download_media: '📥 मीडिया डाउनलोड करें',
    download_media_prompt: '📌 वह Pinterest URL भेजें जिसे आप डाउनलोड करना चाहते हैं:\n\n🔗 *स्वीकृत प्रारूप:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // सीमा और प्रीमियम संदेश
    limit_reached: '⚠️ *दैनिक सीमा पूरी*\n\nआपने आज {{used}}/{{limit}} मुफ्त डाउनलोड का उपयोग किया।\n\n⭐ असीमित डाउनलोड के लिए *प्रीमियम* प्राप्त करें!\n\n✅ असीमित डाउनलोड\n✅ कोई प्रतीक्षा नहीं\n✅ प्राथमिकता समर्थन',
    btn_get_premium: '⭐ प्रीमियम प्राप्त करें',
    premium_title: '⭐ PinSave प्रीमियम',
    premium_description: '30 दिनों के लिए असीमित डाउनलोड! Pinterest से जितने चाहें वीडियो, फोटो और GIF डाउनलोड करें।',
    premium_activated: '🎉 *बधाई!*\n\nआपका *प्रीमियम* सफलतापूर्वक सक्रिय हो गया!\n\n✅ 30 दिनों के लिए असीमित डाउनलोड\n✅ बिना सीमा के आनंद लें!\n\nPinSave का समर्थन करने के लिए धन्यवाद! ❤️',
    
    // खाता संदेश
    btn_my_account: '👤 मेरा खाता',
    account_title: '👤 *मेरा खाता*',
    account_id: 'ID',
    account_plan: 'योजना',
    account_downloads: 'आज के डाउनलोड',
    account_plan_free: '🆓 मुफ्त',
    account_plan_premium: '⭐ प्रीमियम',
    account_downloads_unlimited: '∞ असीमित',
    account_premium_expires: '⏰ प्रीमियम {{days}} दिनों में समाप्त होगा',
  },

  // 🇸🇦 العربية (Arabic)
  ar: {
    welcome_title: '📌 PinSave',
    welcome_message: `مرحباً *{{name}}* في PinSave - أفضل بوت لتحميل محتوى Pinterest! 🎯

📥 *ما يمكنك تحميله:*

✅ | فيديوهات HD
✅ | صور عالية الدقة
✅ | صور GIF متحركة

✨ *مميزاتنا:*

✅ | معالجة سريعة
✅ | جودة أصلية
✅ | واجهة سهلة
✅ | مجاني 100%

انقر على الزر أدناه للبدء! 👇`,
    
    btn_open_app: '🚀 فتح PinSave',
    btn_how_it_works: '❓ كيف يعمل',
    btn_terms: '📜 الشروط',
    
    how_it_works_title: '❓ كيف يعمل',
    how_it_works_message: `*دليل استخدام PinSave*

يقدم هذا الدليل تعليمات مفصلة لاستخدام PinSave وتنزيل المحتوى من منصة Pinterest بكفاءة.

*خطوة بخطوة:*

*1. الوصول إلى الخدمة*
انقر على زر "تنزيل الوسائط" لفتح الواجهة الرئيسية للتطبيق المصغر.

*2. إدخال الرابط*
انسخ عنوان URL للمحتوى المطلوب على Pinterest والصقه في حقل الإدخال المحدد.

*3. المعالجة*
انتظر بضع لحظات بينما يقوم نظامنا بمعالجة طلبك وإعداد الملف للتنزيل.

*4. الإكمال*
بمجرد اكتمال المعالجة، سيتم نقل المحتوى وحفظه تلقائياً على جهازك.

*معلومات إضافية:*

*الروابط المقبولة:*
الخدمة متوافقة مع تنسيقات URL القياسية للمنصة:
• pinterest.com/pin/...
• pin.it/...

*أنواع المحتوى المدعومة:*
الأداة محسنة لتنزيل:
• مقاطع الفيديو (MP4)
• الصور (JPEG/PNG)
• صور GIF المتحركة

*القيود والمحددات:*
• *السعة:* الحد الأقصى المسموح به هو 100 ميجابايت لكل ملف.
• *الخصوصية:* لأسباب أمنية وأخلاقية، يمكن تنزيل المحتوى المتاح للعامة فقط. الملفات الشخصية الخاصة غير مدعومة.`,

    terms_title: '📜 شروط الاستخدام',
    terms_message: `*شروط استخدام PinSave*

باستخدام خدمات PinSave، فإنك توافق على الشروط والأحكام التالية:

*1. طبيعة الخدمة*
PinSave هي خدمة تجارية تتيح تنزيل المحتوى العام من منصة Pinterest. هذه الخدمة ليس لها أي ارتباط رسمي بشركة Pinterest, Inc.

*2. حقوق النشر والملكية الفكرية*
المستخدم مسؤول بالكامل عن ضمان أن استخدام المحتوى المنزل يتوافق مع قوانين حقوق النشر وشروط خدمة Pinterest. PinSave غير مسؤول عن إساءة استخدام المواد المنزلة.

*3. التوفر والضمان*
يتم تقديم الخدمة "كما هي"، دون ضمانات من أي نوع، صريحة أو ضمنية. نحن لا نضمن التوفر المستمر أو غير المنقطع أو الخالي من الأخطاء للخدمة.

*4. الخصوصية وحماية البيانات*
تلتزم PinSave بحماية خصوصيتك. نحن لا نخزن نسخاً من المحتوى المنزل ولا نجمع بيانات شخصية من مستخدمينا.

*5. تحديد المسؤولية*
لن تكون PinSave تحت أي ظرف من الظروف مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام الخدمة أو عدم القدرة على استخدامها.

*6. التعديلات على شروط الاستخدام*
نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وفقاً لتقديرنا الخاص. ستدخل التغييرات حيز التنفيذ فور نشرها. تقع على عاتقك مسؤولية مراجعة شروط الاستخدام بشكل دوري.

بالاستمرار في استخدام الخدمة، فإنك تؤكد أنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط.`,

    btn_back: '⬅️ رجوع',
    btn_accept: '✅ قبول والمتابعة',
    btn_back_to_start: '🏠 العودة للبداية',
    btn_change_language: '🌍 تغيير اللغة',
    
    // رسائل اللغة
    language_title: '🌍 اختر اللغة',
    language_message: 'اختر لغتك المفضلة:',
    language_changed: '✅ تم تغيير اللغة بنجاح!',
    
    // Download messages
    processing: '⏳ جاري المعالجة...',
    download_success: `✅ *تم التحميل!*

إليك المحتوى، {{name}}! 🎉`,
    download_error: `❌ *خطأ في التحميل*

تعذر تحميل المحتوى.`,
    invalid_url: '⚠️ الرابط الذي أرسلته ليس رابط Pinterest صالحاً.\n\n*الصيغ المقبولة:*\n• pinterest.com/pin/...\n• pin.it/...\n\nيرجى نسخ الرابط الصحيح والمحاولة مرة أخرى.',
    send_pinterest_url: `📌 *أرسل رابط Pinterest*

الصق رابط الفيديو أو الصورة.`,
    btn_download_more: '📥 تحميل المزيد',
    btn_download_media: '📥 تحميل الوسائط',
    download_media_prompt: '📌 أرسل رابط Pinterest الذي تريد تحميله:\n\n🔗 *الصيغ المقبولة:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // رسائل الحد والبريميوم
    limit_reached: '⚠️ *تم الوصول للحد اليومي*\n\nلقد استخدمت {{used}}/{{limit}} تحميلات مجانية اليوم.\n\n⭐ احصل على *البريميوم* لتحميلات غير محدودة!\n\n✅ تحميلات غير محدودة\n✅ بدون انتظار\n✅ دعم أولوي',
    btn_get_premium: '⭐ احصل على البريميوم',
    premium_title: '⭐ PinSave بريميوم',
    premium_description: 'تحميلات غير محدودة لمدة 30 يوماً! حمّل ما تشاء من الفيديوهات والصور وGIF من Pinterest.',
    premium_activated: '🎉 *تهانينا!*\n\nتم تفعيل *البريميوم* بنجاح!\n\n✅ تحميلات غير محدودة لمدة 30 يوماً\n✅ استمتع بدون حدود!\n\nشكراً لدعمك PinSave! ❤️',
    
    // رسائل الحساب
    btn_my_account: '👤 حسابي',
    account_title: '👤 *حسابي*',
    account_id: 'المعرف',
    account_plan: 'الخطة',
    account_downloads: 'تحميلات اليوم',
    account_plan_free: '🆓 مجاني',
    account_plan_premium: '⭐ بريميوم',
    account_downloads_unlimited: '∞ غير محدود',
    account_premium_expires: '⏰ البريميوم ينتهي في {{days}} يوم',
  },

  // 🇫🇷 Français
  fr: {
    welcome_title: '📌 PinSave',
    welcome_message: `Bienvenue *{{name}}* sur PinSave - le meilleur bot pour télécharger du contenu Pinterest! 🎯

📥 *Ce que vous pouvez télécharger:*

✅ | Vidéos HD
✅ | Photos haute résolution
✅ | GIFs animés

✨ *Nos fonctionnalités:*

✅ | Traitement rapide
✅ | Qualité originale
✅ | Interface intuitive
✅ | 100% gratuit

Cliquez sur le bouton ci-dessous pour commencer! 👇`,
    
    btn_open_app: '🚀 Ouvrir PinSave',
    btn_how_it_works: '❓ Comment ça marche',
    btn_terms: '📜 Conditions',
    
    how_it_works_title: '❓ Comment ça marche',
    how_it_works_message: `*Guide d'utilisation de PinSave*

Ce guide présente les instructions détaillées pour utiliser PinSave et télécharger efficacement du contenu depuis la plateforme Pinterest.

*Étape par étape :*

*1. Accès au service*
Copiez l'URL du contenu Pinterest souhaité et envoyez-la directement dans le chat du bot.

*2. Insertion du lien*
Copiez l'URL du contenu souhaité sur Pinterest et collez-la dans le champ de saisie indiqué.

*3. Traitement*
Patientez quelques instants pendant que notre système traite votre demande et prépare le fichier pour le téléchargement.

*4. Finalisation*
Une fois le traitement terminé, le contenu sera transféré et enregistré automatiquement sur votre appareil.

*Informations supplémentaires :*

*Liens acceptés :*
Le service est compatible avec les formats d'URL standard de la plateforme :
• pinterest.com/pin/...
• pin.it/...

*Types de contenu pris en charge :*
L'outil est optimisé pour le téléchargement de :
• Vidéos (MP4)
• Photos (JPEG/PNG)
• GIFs animés

*Limitations et restrictions :*
• *Capacité :* La taille maximale autorisée est de 100 Mo par fichier.
• *Confidentialité :* Pour des raisons de sécurité et d'éthique, seul le contenu accessible au public peut être téléchargé. Les profils privés ne sont pas pris en charge.`,

    terms_title: '📜 Conditions d\'utilisation',
    terms_message: `*Conditions d'utilisation de PinSave*

En utilisant les services de PinSave, vous acceptez les termes et conditions suivants :

*1. Nature du service*
PinSave est un service commercial qui permet de télécharger du contenu public depuis la plateforme Pinterest. Ce service n'a aucune affiliation officielle avec Pinterest, Inc.

*2. Droits d'auteur et propriété intellectuelle*
L'utilisateur est entièrement responsable de s'assurer que l'utilisation du contenu téléchargé est conforme aux lois sur le droit d'auteur et aux conditions d'utilisation de Pinterest. PinSave n'est pas responsable de l'utilisation abusive du matériel téléchargé.

*3. Disponibilité et garantie*
Le service est fourni "tel quel", sans garantie d'aucune sorte, expresse ou implicite. Nous ne garantissons pas la disponibilité continue, ininterrompue ou sans erreur du service.

*4. Confidentialité et protection des données*
PinSave s'engage à protéger votre vie privée. Nous ne stockons pas de copies du contenu téléchargé et ne collectons pas de données personnelles de nos utilisateurs.

*5. Limitation de responsabilité*
En aucun cas PinSave ne sera responsable de tout dommage direct, indirect, accessoire, spécial ou consécutif résultant de l'utilisation ou de l'impossibilité d'utiliser le service.

*6. Modifications des conditions d'utilisation*
Nous nous réservons le droit de modifier ces conditions à tout moment, à notre seule discrétion. Les modifications prendront effet immédiatement après leur publication. Il est de votre responsabilité de consulter périodiquement les conditions d'utilisation.

En continuant à utiliser le service, vous confirmez avoir lu, compris et accepté d'être lié par ces conditions.`,

    btn_back: '⬅️ Retour',
    btn_accept: '✅ Accepter et Continuer',
    btn_back_to_start: '🏠 Retour au Début',
    btn_change_language: '🌍 Changer de Langue',
    
    // Messages de langue
    language_title: '🌍 Sélectionner la Langue',
    language_message: 'Choisissez votre langue préférée:',
    language_changed: '✅ Langue changée avec succès!',
    
    // Download messages
    processing: '⏳ Traitement...',
    download_success: `✅ *Téléchargement terminé!*

Voici votre contenu, {{name}}! 🎉`,
    download_error: `❌ *Erreur de téléchargement*

Impossible de télécharger.`,
    invalid_url: '⚠️ Le lien envoyé n\'est pas une URL Pinterest valide.\n\n*Formats acceptés :*\n• pinterest.com/pin/...\n• pin.it/...\n\nVeuillez copier le lien correct et réessayer.',
    send_pinterest_url: `📌 *Envoyez une URL Pinterest*

Collez le lien de la vidéo, photo ou GIF.`,
    btn_download_more: '📥 Télécharger Plus',
    btn_download_media: '📥 Télécharger Média',
    download_media_prompt: '📌 Envoyez l\'URL Pinterest que vous souhaitez télécharger:\n\n🔗 *Formats acceptés:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // Messages de limite et premium
    limit_reached: '⚠️ *Limite Quotidienne Atteinte*\n\nVous avez utilisé {{used}}/{{limit}} téléchargements gratuits aujourd\'hui.\n\n⭐ *Obtenez Premium* pour des téléchargements illimités!\n\n✅ Téléchargements illimités\n✅ Sans attente\n✅ Support prioritaire',
    btn_get_premium: '⭐ Obtenir Premium',
    premium_title: '⭐ PinSave Premium',
    premium_description: 'Téléchargements illimités pendant 30 jours! Téléchargez autant de vidéos, photos et GIFs que vous voulez de Pinterest.',
    premium_activated: '🎉 *Félicitations!*\n\nVotre *Premium* a été activé avec succès!\n\n✅ Téléchargements illimités pendant 30 jours\n✅ Profitez sans limites!\n\nMerci de soutenir PinSave! ❤️',
    
    // Messages de compte
    btn_my_account: '👤 Mon Compte',
    account_title: '👤 *Mon Compte*',
    account_id: 'ID',
    account_plan: 'Plan',
    account_downloads: 'Téléchargements Aujourd\'hui',
    account_plan_free: '🆓 Gratuit',
    account_plan_premium: '⭐ Premium',
    account_downloads_unlimited: '∞ Illimité',
    account_premium_expires: '⏰ Premium expire dans {{days}} jours',
  },

  // 🇷🇺 Русский (Russian)
  ru: {
    welcome_title: '📌 PinSave',
    welcome_message: `Добро пожаловать *{{name}}* в PinSave - лучший бот для скачивания контента с Pinterest! 🎯

📥 *Что можно скачать:*

✅ | HD Видео
✅ | Фото высокого разрешения
✅ | Анимированные GIF

✨ *Наши возможности:*

✅ | Быстрая обработка
✅ | Оригинальное качество
✅ | Интуитивный интерфейс
✅ | 100% бесплатно

Нажмите кнопку ниже, чтобы начать! 👇`,
    
    btn_open_app: '🚀 Открыть PinSave',
    btn_how_it_works: '❓ Как это работает',
    btn_terms: '📜 Условия',
    
    how_it_works_title: '❓ Как это работает',
    how_it_works_message: `*Руководство по использованию PinSave*

Это руководство содержит подробные инструкции по использованию PinSave и эффективной загрузке контента с платформы Pinterest.

*Пошаговая инструкция:*

*1. Доступ к сервису*
Скопируйте URL нужного контента Pinterest и отправьте его прямо в чат бота.

*2. Вставка ссылки*
Скопируйте URL нужного контента на Pinterest и вставьте его в указанное поле ввода.

*3. Обработка*
Подождите несколько мгновений, пока наша система обрабатывает ваш запрос и готовит файл для загрузки.

*4. Завершение*
После завершения обработки контент будет автоматически передан и сохранён на вашем устройстве.

*Дополнительная информация:*

*Принимаемые ссылки:*
Сервис совместим со стандартными форматами URL платформы:
• pinterest.com/pin/...
• pin.it/...

*Поддерживаемые типы контента:*
Инструмент оптимизирован для загрузки:
• Видео (MP4)
• Фото (JPEG/PNG)
• Анимированные GIF

*Ограничения и запреты:*
• *Объём:* Максимально допустимый размер — 100 МБ на файл.
• *Конфиденциальность:* По соображениям безопасности и этики можно загружать только общедоступный контент. Приватные профили не поддерживаются.`,

    terms_title: '📜 Условия использования',
    terms_message: `*Условия использования PinSave*

Используя сервисы PinSave, вы соглашаетесь со следующими условиями:

*1. Характер сервиса*
PinSave — это коммерческий сервис, позволяющий загружать публичный контент с платформы Pinterest. Этот сервис не имеет официальной связи с Pinterest, Inc.

*2. Авторские права и интеллектуальная собственность*
Пользователь несёт полную ответственность за соблюдение законов об авторском праве и условий использования Pinterest при использовании загруженного контента. PinSave не несёт ответственности за неправомерное использование загруженных материалов.

*3. Доступность и гарантии*
Сервис предоставляется "как есть", без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем непрерывную, бесперебойную или безошибочную доступность сервиса.

*4. Конфиденциальность и защита данных*
PinSave обязуется защищать вашу конфиденциальность. Мы не храним копии загруженного контента и не собираем персональные данные наших пользователей.

*5. Ограничение ответственности*
Ни при каких обстоятельствах PinSave не несёт ответственности за любые прямые, косвенные, случайные, особые или последующие убытки, возникшие в результате использования или невозможности использования сервиса.

*6. Изменения условий использования*
Мы оставляем за собой право изменять эти условия в любое время по нашему усмотрению. Изменения вступают в силу сразу после публикации. Вы обязаны периодически просматривать условия использования.

Продолжая использовать сервис, вы подтверждаете, что прочитали, поняли и согласны соблюдать эти условия.`,

    btn_back: '⬅️ Назад',
    btn_accept: '✅ Принять и продолжить',
    btn_back_to_start: '🏠 Вернуться в начало',
    btn_change_language: '🌍 Изменить язык',
    
    // Сообщения о языке
    language_title: '🌍 Выбрать язык',
    language_message: 'Выберите предпочитаемый язык:',
    language_changed: '✅ Язык успешно изменён!',
    
    // Download messages
    processing: '⏳ Обработка...',
    download_success: `✅ *Загрузка завершена!*

Вот ваш контент, {{name}}! 🎉`,
    download_error: `❌ *Ошибка загрузки*

Не удалось загрузить контент.`,
    invalid_url: '⚠️ Отправленная вами ссылка не является действительной ссылкой Pinterest.\n\n*Принимаемые форматы:*\n• pinterest.com/pin/...\n• pin.it/...\n\nПожалуйста, скопируйте правильную ссылку и попробуйте снова.',
    send_pinterest_url: `📌 *Отправьте URL Pinterest*

Вставьте ссылку на видео, фото или GIF.`,
    btn_download_more: '📥 Скачать Ещё',
    btn_download_media: '📥 Скачать Медиа',
    download_media_prompt: '📌 Отправьте URL Pinterest, который хотите скачать:\n\n🔗 *Поддерживаемые форматы:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // Сообщения о лимите и премиум
    limit_reached: '⚠️ *Дневной лимит достигнут*\n\nВы использовали {{used}}/{{limit}} бесплатных загрузок сегодня.\n\n⭐ *Получите Премиум* для неограниченных загрузок!\n\n✅ Неограниченные загрузки\n✅ Без ожидания\n✅ Приоритетная поддержка',
    btn_get_premium: '⭐ Получить Премиум',
    premium_title: '⭐ PinSave Премиум',
    premium_description: 'Неограниченные загрузки на 30 дней! Скачивайте сколько угодно видео, фото и GIF с Pinterest.',
    premium_activated: '🎉 *Поздравляем!*\n\nВаш *Премиум* успешно активирован!\n\n✅ Неограниченные загрузки на 30 дней\n✅ Наслаждайтесь без ограничений!\n\nСпасибо за поддержку PinSave! ❤️',
    
    // Сообщения аккаунта
    btn_my_account: '👤 Мой Аккаунт',
    account_title: '👤 *Мой Аккаунт*',
    account_id: 'ID',
    account_plan: 'План',
    account_downloads: 'Загрузки сегодня',
    account_plan_free: '🆓 Бесплатный',
    account_plan_premium: '⭐ Премиум',
    account_downloads_unlimited: '∞ Неограниченно',
    account_premium_expires: '⏰ Премиум истекает через {{days}} дней',
  },

  // 🇩🇪 Deutsch (German)
  de: {
    welcome_title: '📌 PinSave',
    welcome_message: `Willkommen *{{name}}* bei PinSave - der beste Bot zum Herunterladen von Pinterest-Inhalten! 🎯

📥 *Was Sie herunterladen können:*

✅ | HD Videos
✅ | Hochauflösende Fotos
✅ | Animierte GIFs

✨ *Unsere Funktionen:*

✅ | Schnelle Verarbeitung
✅ | Originalqualität
✅ | Intuitive Oberfläche
✅ | 100% kostenlos

Klicken Sie unten, um zu starten! 👇`,
    
    btn_open_app: '🚀 PinSave öffnen',
    btn_how_it_works: '❓ Wie es funktioniert',
    btn_terms: '📜 Bedingungen',
    
    how_it_works_title: '❓ Wie es funktioniert',
    how_it_works_message: `*PinSave Benutzerhandbuch*

Diese Anleitung enthält detaillierte Anweisungen zur Nutzung von PinSave und zum effizienten Herunterladen von Inhalten von der Pinterest-Plattform.

*Schritt für Schritt:*

*1. Zugang zum Service*
Kopieren Sie die URL des gewünschten Pinterest-Inhalts und senden Sie sie direkt im Bot-Chat.

*2. Link einfügen*
Kopieren Sie die URL des gewünschten Inhalts auf Pinterest und fügen Sie sie in das angegebene Eingabefeld ein.

*3. Verarbeitung*
Warten Sie einige Augenblicke, während unser System Ihre Anfrage verarbeitet und die Datei zum Download vorbereitet.

*4. Abschluss*
Nach Abschluss der Verarbeitung wird der Inhalt automatisch auf Ihr Gerät übertragen und gespeichert.

*Zusätzliche Informationen:*

*Akzeptierte Links:*
Der Service ist mit den Standard-URL-Formaten der Plattform kompatibel:
• pinterest.com/pin/...
• pin.it/...

*Unterstützte Inhaltstypen:*
Das Tool ist für den Download optimiert von:
• Videos (MP4)
• Fotos (JPEG/PNG)
• Animierte GIFs

*Einschränkungen und Beschränkungen:*
• *Kapazität:* Die maximal zulässige Größe beträgt 100 MB pro Datei.
• *Datenschutz:* Aus Sicherheits- und ethischen Gründen können nur öffentlich zugängliche Inhalte heruntergeladen werden. Private Profile werden nicht unterstützt.`,

    terms_title: '📜 Nutzungsbedingungen',
    terms_message: `*PinSave Nutzungsbedingungen*

Durch die Nutzung der PinSave-Dienste stimmen Sie den folgenden Bedingungen zu:

*1. Art des Dienstes*
PinSave ist ein kommerzieller Dienst, der das Herunterladen öffentlicher Inhalte von der Pinterest-Plattform ermöglicht. Dieser Dienst hat keine offizielle Verbindung zu Pinterest, Inc.

*2. Urheberrecht und geistiges Eigentum*
Der Benutzer ist vollständig dafür verantwortlich, sicherzustellen, dass die Nutzung heruntergeladener Inhalte den Urheberrechtsgesetzen und den Nutzungsbedingungen von Pinterest entspricht. PinSave ist nicht verantwortlich für den Missbrauch heruntergeladener Materialien.

*3. Verfügbarkeit und Garantie*
Der Dienst wird "wie besehen" bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Garantien. Wir garantieren keine kontinuierliche, ununterbrochene oder fehlerfreie Verfügbarkeit des Dienstes.

*4. Datenschutz und Datensicherheit*
PinSave verpflichtet sich, Ihre Privatsphäre zu schützen. Wir speichern keine Kopien heruntergeladener Inhalte und erheben keine persönlichen Daten unserer Benutzer.

*5. Haftungsbeschränkung*
Unter keinen Umständen haftet PinSave für direkte, indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung oder der Unfähigkeit zur Nutzung des Dienstes entstehen.

*6. Änderungen der Nutzungsbedingungen*
Wir behalten uns das Recht vor, diese Bedingungen jederzeit nach eigenem Ermessen zu ändern. Änderungen treten sofort nach Veröffentlichung in Kraft. Es liegt in Ihrer Verantwortung, die Nutzungsbedingungen regelmäßig zu überprüfen.

Durch die weitere Nutzung des Dienstes bestätigen Sie, dass Sie diese Bedingungen gelesen und verstanden haben und sich an sie gebunden fühlen.`,

    btn_back: '⬅️ Zurück',
    btn_accept: '✅ Akzeptieren und fortfahren',
    btn_back_to_start: '🏠 Zurück zum Start',
    btn_change_language: '🌍 Sprache ändern',
    
    // Sprachnachrichten
    language_title: '🌍 Sprache auswählen',
    language_message: 'Wählen Sie Ihre bevorzugte Sprache:',
    language_changed: '✅ Sprache erfolgreich geändert!',
    
    // Download messages
    processing: '⏳ Verarbeitung...',
    download_success: `✅ *Download abgeschlossen!*

Hier ist Ihr Inhalt, {{name}}! 🎉`,
    download_error: `❌ *Download-Fehler*

Inhalt konnte nicht heruntergeladen werden.`,
    invalid_url: '⚠️ Der gesendete Link ist keine gültige Pinterest-URL.\n\n*Akzeptierte Formate:*\n• pinterest.com/pin/...\n• pin.it/...\n\nBitte kopieren Sie den richtigen Link und versuchen Sie es erneut.',
    send_pinterest_url: `📌 *Senden Sie eine Pinterest-URL*

Fügen Sie den Link zum Video, Foto oder GIF ein.`,
    btn_download_more: '📥 Mehr Herunterladen',
    btn_download_media: '📥 Medien Herunterladen',
    download_media_prompt: '📌 Senden Sie die Pinterest-URL, die Sie herunterladen möchten:\n\n🔗 *Akzeptierte Formate:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // Limit- und Premium-Nachrichten
    limit_reached: '⚠️ *Tägliches Limit Erreicht*\n\nSie haben heute {{used}}/{{limit}} kostenlose Downloads verwendet.\n\n⭐ *Holen Sie sich Premium* für unbegrenzte Downloads!\n\n✅ Unbegrenzte Downloads\n✅ Keine Wartezeit\n✅ Prioritäts-Support',
    btn_get_premium: '⭐ Premium Holen',
    premium_title: '⭐ PinSave Premium',
    premium_description: 'Unbegrenzte Downloads für 30 Tage! Laden Sie so viele Videos, Fotos und GIFs von Pinterest herunter, wie Sie möchten.',
    premium_activated: '🎉 *Herzlichen Glückwunsch!*\n\nIhr *Premium* wurde erfolgreich aktiviert!\n\n✅ Unbegrenzte Downloads für 30 Tage\n✅ Genießen Sie ohne Limits!\n\nDanke für Ihre Unterstützung von PinSave! ❤️',
    
    // Konto-Nachrichten
    btn_my_account: '👤 Mein Konto',
    account_title: '👤 *Mein Konto*',
    account_id: 'ID',
    account_plan: 'Plan',
    account_downloads: 'Downloads Heute',
    account_plan_free: '🆓 Kostenlos',
    account_plan_premium: '⭐ Premium',
    account_downloads_unlimited: '∞ Unbegrenzt',
    account_premium_expires: '⏰ Premium läuft in {{days}} Tagen ab',
  },

  // 🇯🇵 日本語 (Japanese)
  ja: {
    welcome_title: '📌 PinSave',
    welcome_message: `ようこそ *{{name}}* さん、PinSaveへ - Pinterestコンテンツをダウンロードする最高のボット！🎯

📥 *ダウンロード可能：*

✅ | HD動画
✅ | 高解像度写真
✅ | アニメーションGIF

✨ *機能：*

✅ | 高速処理
✅ | オリジナル品質
✅ | 直感的なインターフェース
✅ | 100%無料

下のボタンをクリックして開始！👇`,
    
    btn_open_app: '🚀 PinSaveを開く',
    btn_how_it_works: '❓ 使い方',
    btn_terms: '📜 利用規約',
    
    how_it_works_title: '❓ 使い方',
    how_it_works_message: `*PinSave 利用ガイド*

このガイドでは、PinSaveを使用してPinterestプラットフォームから効率的にコンテンツをダウンロードするための詳細な手順を説明します。

*ステップバイステップ：*

*1. サービスへのアクセス*
PinterestコンテンツのURLをコピーして、ボットのチャットに直接送信してください。

*2. リンクの挿入*
Pinterest上の目的のコンテンツのURLをコピーし、指定された入力フィールドに貼り付けます。

*3. 処理中*
システムがリクエストを処理し、ダウンロード用のファイルを準備している間、しばらくお待ちください。

*4. 完了*
処理が完了すると、コンテンツは自動的にデバイスに転送され、保存されます。

*追加情報：*

*対応リンク：*
このサービスは、プラットフォームの標準URLフォーマットに対応しています：
• pinterest.com/pin/...
• pin.it/...

*対応コンテンツタイプ：*
このツールは以下のダウンロードに最適化されています：
• 動画（MP4）
• 写真（JPEG/PNG）
• アニメーションGIF

*制限事項：*
• *容量：* ファイルあたりの最大許容サイズは100MBです。
• *プライバシー：* セキュリティと倫理上の理由から、公開されているコンテンツのみダウンロードできます。プライベートプロフィールはサポートされていません。`,

    terms_title: '📜 利用規約',
    terms_message: `*PinSave 利用規約*

PinSaveサービスを利用することにより、以下の利用規約に同意したものとみなされます：

*1. サービスの性質*
PinSaveは、Pinterestプラットフォームから公開コンテンツをダウンロードできる商用サービスです。このサービスはPinterest, Inc.との公式な提携関係はありません。

*2. 著作権と知的財産権*
ダウンロードしたコンテンツの使用が著作権法およびPinterestの利用規約に準拠していることを確認する責任は、ユーザーにあります。PinSaveは、ダウンロードした素材の不正使用について責任を負いません。

*3. 可用性と保証*
サービスは「現状のまま」提供され、明示的または黙示的ないかなる保証もありません。サービスの継続的、中断のない、またはエラーのない可用性を保証するものではありません。

*4. プライバシーとデータ保護*
PinSaveはお客様のプライバシーを保護することをお約束します。ダウンロードしたコンテンツのコピーを保存したり、ユーザーの個人データを収集したりすることはありません。

*5. 責任の制限*
いかなる場合も、PinSaveは、サービスの使用または使用不能から生じる直接的、間接的、偶発的、特別、または結果的な損害について責任を負いません。

*6. 利用規約の変更*
当社は、独自の裁量により、いつでもこれらの規約を変更する権利を留保します。変更は公開後直ちに有効となります。利用規約を定期的に確認することはお客様の責任です。

サービスを引き続き使用することにより、これらの規約を読み、理解し、これに拘束されることに同意したことを確認します。`,

    btn_back: '⬅️ 戻る',
    btn_accept: '✅ 同意して続ける',
    btn_back_to_start: '🏠 スタートに戻る',
    btn_change_language: '🌍 言語を変更',
    
    // 言語メッセージ
    language_title: '🌍 言語を選択',
    language_message: 'ご希望の言語を選択してください：',
    language_changed: '✅ 言語が正常に変更されました！',
    
    // Download messages
    processing: '⏳ 処理中...',
    download_success: `✅ *ダウンロード完了！*

こちらがコンテンツです、{{name}}！🎉`,
    download_error: `❌ *ダウンロードエラー*

コンテンツをダウンロードできませんでした。`,
    invalid_url: '⚠️ 送信されたリンクは有効なPinterest URLではありません。\n\n*対応フォーマット：*\n• pinterest.com/pin/...\n• pin.it/...\n\n正しいリンクをコピーして、もう一度お試しください。',
    send_pinterest_url: `📌 *Pinterest URLを送信*

動画、写真、GIFのリンクを貼り付けてください。`,
    btn_download_more: '📥 もっとダウンロード',
    btn_download_media: '📥 メディアをダウンロード',
    download_media_prompt: '📌 ダウンロードしたいPinterest URLを送信してください:\n\n🔗 *対応フォーマット:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // 制限とプレミアムメッセージ
    limit_reached: '⚠️ *日次制限に達しました*\n\n今日{{used}}/{{limit}}回の無料ダウンロードを使用しました。\n\n⭐ *プレミアム*で無制限ダウンロード！\n\n✅ 無制限ダウンロード\n✅ 待ち時間なし\n✅ 優先サポート',
    btn_get_premium: '⭐ プレミアムを取得',
    premium_title: '⭐ PinSave プレミアム',
    premium_description: '30日間無制限ダウンロード！Pinterestから動画、写真、GIFを好きなだけダウンロード。',
    premium_activated: '🎉 *おめでとうございます！*\n\n*プレミアム*が正常に有効化されました！\n\n✅ 30日間無制限ダウンロード\n✅ 制限なくお楽しみください！\n\nPinSaveをご支援いただきありがとうございます！❤️',
    
    // アカウントメッセージ
    btn_my_account: '👤 マイアカウント',
    account_title: '👤 *マイアカウント*',
    account_id: 'ID',
    account_plan: 'プラン',
    account_downloads: '今日のダウンロード',
    account_plan_free: '🆓 無料',
    account_plan_premium: '⭐ プレミアム',
    account_downloads_unlimited: '∞ 無制限',
    account_premium_expires: '⏰ プレミアムは{{days}}日後に期限切れ',
  },

  // 🇮🇹 Italiano
  it: {
    welcome_title: '📌 PinSave',
    welcome_message: `Benvenuto *{{name}}* su PinSave - il miglior bot per scaricare contenuti Pinterest! 🎯

📥 *Cosa puoi scaricare:*

✅ | Video HD
✅ | Foto alta risoluzione
✅ | GIF animate

✨ *Le nostre funzionalità:*

✅ | Elaborazione veloce
✅ | Qualità originale
✅ | Interfaccia intuitiva
✅ | 100% gratuito

Clicca il pulsante sotto per iniziare! 👇`,
    
    btn_open_app: '🚀 Apri PinSave',
    btn_how_it_works: '❓ Come Funziona',
    btn_terms: '📜 Termini',
    
    how_it_works_title: '❓ Come Funziona',
    how_it_works_message: `*Guida all'uso di PinSave*

Questa guida presenta le istruzioni dettagliate per utilizzare PinSave e scaricare contenuti dalla piattaforma Pinterest in modo efficiente.

*Passo dopo passo:*

*1. Accesso al servizio*
Copia l'URL del contenuto Pinterest desiderato e invialo direttamente nella chat del bot.

*2. Inserimento del link*
Copia l'URL del contenuto desiderato su Pinterest e incollalo nel campo di inserimento indicato.

*3. Elaborazione*
Attendi qualche istante mentre il nostro sistema elabora la tua richiesta e prepara il file per il download.

*4. Completamento*
Una volta completata l'elaborazione, il contenuto verrà trasferito e salvato automaticamente sul tuo dispositivo.

*Informazioni aggiuntive:*

*Link accettati:*
Il servizio è compatibile con i formati URL standard della piattaforma:
• pinterest.com/pin/...
• pin.it/...

*Tipi di contenuto supportati:*
Lo strumento è ottimizzato per il download di:
• Video (MP4)
• Foto (JPEG/PNG)
• GIF animate

*Limitazioni e restrizioni:*
• *Capacità:* La dimensione massima consentita è di 100 MB per file.
• *Privacy:* Per motivi di sicurezza ed etici, è possibile scaricare solo contenuti accessibili pubblicamente. I profili privati non sono supportati.`,

    terms_title: '📜 Termini di Utilizzo',
    terms_message: `*Termini di utilizzo di PinSave*

Utilizzando i servizi di PinSave, accetti i seguenti termini e condizioni:

*1. Natura del servizio*
PinSave è un servizio commerciale che consente di scaricare contenuti pubblici dalla piattaforma Pinterest. Questo servizio non ha alcuna affiliazione ufficiale con Pinterest, Inc.

*2. Diritti d'autore e proprietà intellettuale*
L'utente è interamente responsabile di garantire che l'uso dei contenuti scaricati sia conforme alle leggi sul diritto d'autore e ai termini di servizio di Pinterest. PinSave non è responsabile per l'uso improprio del materiale scaricato.

*3. Disponibilità e garanzia*
Il servizio è fornito "così com'è", senza garanzie di alcun tipo, esplicite o implicite. Non garantiamo la disponibilità continua, ininterrotta o priva di errori del servizio.

*4. Privacy e protezione dei dati*
PinSave si impegna a proteggere la tua privacy. Non memorizziamo copie dei contenuti scaricati né raccogliamo dati personali dei nostri utenti.

*5. Limitazione di responsabilità*
In nessun caso PinSave sarà responsabile per eventuali danni diretti, indiretti, incidentali, speciali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare il servizio.

*6. Modifiche ai termini di utilizzo*
Ci riserviamo il diritto di modificare questi termini in qualsiasi momento, a nostra esclusiva discrezione. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione. È tua responsabilità rivedere periodicamente i termini di utilizzo.

Continuando a utilizzare il servizio, confermi di aver letto, compreso e accettato di essere vincolato da questi termini.`,

    btn_back: '⬅️ Indietro',
    btn_accept: '✅ Accetta e Continua',
    btn_back_to_start: '🏠 Torna all\'Inizio',
    btn_change_language: '🌍 Cambia Lingua',
    
    // Messaggi lingua
    language_title: '🌍 Seleziona Lingua',
    language_message: 'Scegli la tua lingua preferita:',
    language_changed: '✅ Lingua cambiata con successo!',
    
    // Download messages
    processing: '⏳ Elaborazione...',
    download_success: `✅ *Download completato!*

Ecco il tuo contenuto, {{name}}! 🎉`,
    download_error: `❌ *Errore di download*

Impossibile scaricare il contenuto.`,
    invalid_url: '⚠️ Il link inviato non è un URL Pinterest valido.\n\n*Formati accettati:*\n• pinterest.com/pin/...\n• pin.it/...\n\nPer favore, copia il link corretto e riprova.',
    send_pinterest_url: `📌 *Invia un URL Pinterest*

Incolla il link del video, foto o GIF.`,
    btn_download_more: '📥 Scarica Altro',
    btn_download_media: '📥 Scarica Media',
    download_media_prompt: '📌 Invia l\'URL Pinterest che vuoi scaricare:\n\n🔗 *Formati accettati:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // Messaggi limite e premium
    limit_reached: '⚠️ *Limite Giornaliero Raggiunto*\n\nHai usato {{used}}/{{limit}} download gratuiti oggi.\n\n⭐ *Ottieni Premium* per download illimitati!\n\n✅ Download illimitati\n✅ Nessuna attesa\n✅ Supporto prioritario',
    btn_get_premium: '⭐ Ottieni Premium',
    premium_title: '⭐ PinSave Premium',
    premium_description: 'Download illimitati per 30 giorni! Scarica quanti video, foto e GIF vuoi da Pinterest.',
    premium_activated: '🎉 *Congratulazioni!*\n\nIl tuo *Premium* è stato attivato con successo!\n\n✅ Download illimitati per 30 giorni\n✅ Goditi senza limiti!\n\nGrazie per supportare PinSave! ❤️',
    
    // Messaggi account
    btn_my_account: '👤 Il Mio Account',
    account_title: '👤 *Il Mio Account*',
    account_id: 'ID',
    account_plan: 'Piano',
    account_downloads: 'Download Oggi',
    account_plan_free: '🆓 Gratuito',
    account_plan_premium: '⭐ Premium',
    account_downloads_unlimited: '∞ Illimitato',
    account_premium_expires: '⏰ Premium scade tra {{days}} giorni',
  },

  // 🇰🇷 한국어 (Korean)
  ko: {
    welcome_title: '📌 PinSave',
    welcome_message: `환영합니다 *{{name}}*님, PinSave에 - Pinterest 콘텐츠 다운로드 최고의 봇! 🎯

📥 *다운로드 가능:*

✅ | HD 동영상
✅ | 고해상도 사진
✅ | 애니메이션 GIF

✨ *기능:*

✅ | 빠른 처리
✅ | 원본 품질
✅ | 직관적인 인터페이스
✅ | 100% 무료

아래 버튼을 클릭하여 시작하세요! 👇`,
    
    btn_open_app: '🚀 PinSave 열기',
    btn_how_it_works: '❓ 사용 방법',
    btn_terms: '📜 약관',
    
    how_it_works_title: '❓ 사용 방법',
    how_it_works_message: `*PinSave 사용 가이드*

이 가이드는 PinSave를 사용하여 Pinterest 플랫폼에서 효율적으로 콘텐츠를 다운로드하는 방법에 대한 자세한 지침을 제공합니다.

*단계별 안내:*

*1. 서비스 접속*
Pinterest 콘텐츠의 URL을 복사하여 봇 채팅에 직접 보내세요.

*2. 링크 삽입*
Pinterest에서 원하는 콘텐츠의 URL을 복사하여 지정된 입력 필드에 붙여넣습니다.

*3. 처리 중*
시스템이 요청을 처리하고 다운로드할 파일을 준비하는 동안 잠시 기다려 주세요.

*4. 완료*
처리가 완료되면 콘텐츠가 자동으로 기기에 전송되어 저장됩니다.

*추가 정보:*

*허용되는 링크:*
이 서비스는 플랫폼의 표준 URL 형식과 호환됩니다:
• pinterest.com/pin/...
• pin.it/...

*지원되는 콘텐츠 유형:*
이 도구는 다음 다운로드에 최적화되어 있습니다:
• 비디오 (MP4)
• 사진 (JPEG/PNG)
• 애니메이션 GIF

*제한 사항:*
• *용량:* 파일당 최대 허용 크기는 100MB입니다.
• *개인정보:* 보안 및 윤리적 이유로 공개적으로 접근 가능한 콘텐츠만 다운로드할 수 있습니다. 비공개 프로필은 지원되지 않습니다.`,

    terms_title: '📜 이용약관',
    terms_message: `*PinSave 이용약관*

PinSave 서비스를 이용함으로써 다음 약관에 동의하게 됩니다:

*1. 서비스의 성격*
PinSave는 Pinterest 플랫폼에서 공개 콘텐츠를 다운로드할 수 있는 상업 서비스입니다. 이 서비스는 Pinterest, Inc.와 공식적인 제휴 관계가 없습니다.

*2. 저작권 및 지적재산권*
다운로드한 콘텐츠의 사용이 저작권법 및 Pinterest 서비스 약관을 준수하는지 확인하는 것은 전적으로 사용자의 책임입니다. PinSave는 다운로드한 자료의 오용에 대해 책임지지 않습니다.

*3. 가용성 및 보증*
서비스는 명시적이든 묵시적이든 어떠한 종류의 보증 없이 "있는 그대로" 제공됩니다. 서비스의 지속적이고 중단 없는 또는 오류 없는 가용성을 보장하지 않습니다.

*4. 개인정보 보호 및 데이터 보호*
PinSave는 귀하의 개인정보를 보호하기 위해 최선을 다합니다. 다운로드한 콘텐츠의 사본을 저장하거나 사용자의 개인 데이터를 수집하지 않습니다.

*5. 책임의 제한*
어떠한 경우에도 PinSave는 서비스 사용 또는 사용 불능으로 인한 직접적, 간접적, 우발적, 특별 또는 결과적 손해에 대해 책임지지 않습니다.

*6. 이용약관 변경*
당사는 단독 재량으로 언제든지 이 약관을 수정할 권리를 보유합니다. 변경 사항은 게시 후 즉시 효력이 발생합니다. 이용약관을 정기적으로 검토하는 것은 귀하의 책임입니다.

서비스를 계속 사용함으로써 귀하는 이 약관을 읽고 이해했으며 이에 구속되는 것에 동의함을 확인합니다.`,

    btn_back: '⬅️ 뒤로',
    btn_accept: '✅ 동의하고 계속',
    btn_back_to_start: '🏠 시작으로 돌아가기',
    btn_change_language: '🌍 언어 변경',
    
    // 언어 메시지
    language_title: '🌍 언어 선택',
    language_message: '원하는 언어를 선택하세요:',
    language_changed: '✅ 언어가 성공적으로 변경되었습니다!',
    
    // Download messages
    processing: '⏳ 처리 중...',
    download_success: `✅ *다운로드 완료!*

여기 콘텐츠입니다, {{name}}! 🎉`,
    download_error: `❌ *다운로드 오류*

콘텐츠를 다운로드할 수 없습니다.`,
    invalid_url: '⚠️ 보내신 링크는 유효한 Pinterest URL이 아닙니다.\n\n*허용되는 형식:*\n• pinterest.com/pin/...\n• pin.it/...\n\n올바른 링크를 복사하여 다시 시도해 주세요.',
    send_pinterest_url: `📌 *Pinterest URL 보내기*

동영상, 사진 또는 GIF 링크를 붙여넣으세요.`,
    btn_download_more: '📥 더 다운로드',
    btn_download_media: '📥 미디어 다운로드',
    download_media_prompt: '📌 다운로드하려는 Pinterest URL을 보내주세요:\n\n🔗 *허용되는 형식:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // 제한 및 프리미엄 메시지
    limit_reached: '⚠️ *일일 한도 도달*\n\n오늘 {{used}}/{{limit}}회 무료 다운로드를 사용했습니다.\n\n⭐ *프리미엄*으로 무제한 다운로드!\n\n✅ 무제한 다운로드\n✅ 대기 시간 없음\n✅ 우선 지원',
    btn_get_premium: '⭐ 프리미엄 받기',
    premium_title: '⭐ PinSave 프리미엄',
    premium_description: '30일간 무제한 다운로드! Pinterest에서 원하는 만큼 동영상, 사진, GIF를 다운로드하세요.',
    premium_activated: '🎉 *축하합니다!*\n\n*프리미엄*이 성공적으로 활성화되었습니다!\n\n✅ 30일간 무제한 다운로드\n✅ 제한 없이 즐기세요!\n\nPinSave를 지원해 주셔서 감사합니다! ❤️',
    
    // 계정 메시지
    btn_my_account: '👤 내 계정',
    account_title: '👤 *내 계정*',
    account_id: 'ID',
    account_plan: '플랜',
    account_downloads: '오늘 다운로드',
    account_plan_free: '🆓 무료',
    account_plan_premium: '⭐ 프리미엄',
    account_downloads_unlimited: '∞ 무제한',
    account_premium_expires: '⏰ 프리미엄이 {{days}}일 후 만료',
  },

  // 🇹🇷 Türkçe (Turkish)
  tr: {
    welcome_title: '📌 PinSave',
    welcome_message: `Hoş geldiniz *{{name}}* PinSave'e - Pinterest içeriklerini indirmek için en iyi bot! 🎯

📥 *İndirebilecekleriniz:*

✅ | HD Videolar
✅ | Yüksek çözünürlüklü Fotoğraflar
✅ | Animasyonlu GIF'ler

✨ *Özelliklerimiz:*

✅ | Hızlı işleme
✅ | Orijinal kalite
✅ | Sezgisel arayüz
✅ | %100 ücretsiz

Başlamak için aşağıdaki düğmeye tıklayın! 👇`,
    
    btn_open_app: '🚀 PinSave\'i Aç',
    btn_how_it_works: '❓ Nasıl Çalışır',
    btn_terms: '📜 Şartlar',
    
    how_it_works_title: '❓ Nasıl Çalışır',
    how_it_works_message: `*PinSave Kullanım Kılavuzu*

Bu kılavuz, PinSave'i kullanarak Pinterest platformundan verimli bir şekilde içerik indirmek için ayrıntılı talimatlar sunmaktadır.

*Adım Adım:*

*1. Hizmete Erişim*
İstediğiniz Pinterest içeriğinin URL'sini kopyalayın ve doğrudan bot sohbetine gönderin.

*2. Bağlantı Ekleme*
Pinterest'teki istenen içeriğin URL'sini kopyalayın ve belirtilen giriş alanına yapıştırın.

*3. İşleme*
Sistemimiz isteğinizi işlerken ve dosyayı indirmeye hazırlarken birkaç dakika bekleyin.

*4. Tamamlama*
İşlem tamamlandığında, içerik otomatik olarak cihazınıza aktarılacak ve kaydedilecektir.

*Ek Bilgiler:*

*Kabul Edilen Bağlantılar:*
Hizmet, platformun standart URL formatlarıyla uyumludur:
• pinterest.com/pin/...
• pin.it/...

*Desteklenen İçerik Türleri:*
Araç, aşağıdakilerin indirilmesi için optimize edilmiştir:
• Videolar (MP4)
• Fotoğraflar (JPEG/PNG)
• Animasyonlu GIF'ler

*Sınırlamalar ve Kısıtlamalar:*
• *Kapasite:* Dosya başına izin verilen maksimum boyut 100 MB'dir.
• *Gizlilik:* Güvenlik ve etik nedenlerle yalnızca herkese açık içerikler indirilebilir. Özel profiller desteklenmemektedir.`,

    terms_title: '📜 Kullanım Şartları',
    terms_message: `*PinSave Kullanım Şartları*

PinSave hizmetlerini kullanarak aşağıdaki şart ve koşulları kabul etmiş olursunuz:

*1. Hizmetin Niteliği*
PinSave, Pinterest platformundan kamuya açık içeriklerin indirilmesine olanak tanıyan ticari bir hizmettir. Bu hizmetin Pinterest, Inc. ile resmi bir bağlantısı yoktur.

*2. Telif Hakkı ve Fikri Mülkiyet*
İndirilen içeriğin kullanımının telif hakkı yasalarına ve Pinterest'in hizmet şartlarına uygun olmasını sağlamak tamamen kullanıcının sorumluluğundadır. PinSave, indirilen materyalin kötüye kullanımından sorumlu değildir.

*3. Kullanılabilirlik ve Garanti*
Hizmet, açık veya zımni herhangi bir garanti olmaksızın "olduğu gibi" sağlanmaktadır. Hizmetin sürekli, kesintisiz veya hatasız kullanılabilirliğini garanti etmiyoruz.

*4. Gizlilik ve Veri Koruma*
PinSave, gizliliğinizi korumaya kararlıdır. İndirilen içeriklerin kopyalarını saklamıyor veya kullanıcılarımızdan kişisel veri toplamıyoruz.

*5. Sorumluluk Sınırlaması*
Hiçbir koşulda PinSave, hizmetin kullanımından veya kullanılamamasından kaynaklanan doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz.

*6. Kullanım Şartlarında Değişiklikler*
Bu şartları istediğimiz zaman, tamamen kendi takdirimize bağlı olarak değiştirme hakkını saklı tutarız. Değişiklikler yayınlandıktan hemen sonra yürürlüğe girer. Kullanım şartlarını düzenli olarak gözden geçirmek sizin sorumluluğunuzdadır.

Hizmeti kullanmaya devam ederek, bu şartları okuduğunuzu, anladığınızı ve bunlara bağlı kalmayı kabul ettiğinizi onaylarsınız.`,

    btn_back: '⬅️ Geri',
    btn_accept: '✅ Kabul Et ve Devam Et',
    btn_back_to_start: '🏠 Başa Dön',
    btn_change_language: '🌍 Dili Değiştir',
    
    // Dil mesajları
    language_title: '🌍 Dil Seç',
    language_message: 'Tercih ettiğiniz dili seçin:',
    language_changed: '✅ Dil başarıyla değiştirildi!',
    
    // Download messages
    processing: '⏳ İşleniyor...',
    download_success: `✅ *İndirme tamamlandı!*

İşte içeriğiniz, {{name}}! 🎉`,
    download_error: `❌ *İndirme hatası*

İçerik indirilemedi.`,
    invalid_url: '⚠️ Gönderdiğiniz bağlantı geçerli bir Pinterest URL\'si değil.\n\n*Kabul edilen formatlar:*\n• pinterest.com/pin/...\n• pin.it/...\n\nLütfen doğru bağlantıyı kopyalayın ve tekrar deneyin.',
    send_pinterest_url: `📌 *Pinterest URL gönderin*

Video, fotoğraf veya GIF linkini yapıştırın.`,
    btn_download_more: '📥 Daha Fazla İndir',
    btn_download_media: '📥 Medya İndir',
    download_media_prompt: '📌 İndirmek istediğiniz Pinterest URL\'sini gönderin:\n\n🔗 *Kabul edilen formatlar:*\n• pinterest.com/pin/...\n• pin.it/...',
    
    // Limit ve premium mesajları
    limit_reached: '⚠️ *Günlük Limite Ulaşıldı*\n\nBugün {{used}}/{{limit}} ücretsiz indirme kullandınız.\n\n⭐ Sınırsız indirme için *Premium* alın!\n\n✅ Sınırsız indirme\n✅ Bekleme yok\n✅ Öncelikli destek',
    btn_get_premium: '⭐ Premium Al',
    premium_title: '⭐ PinSave Premium',
    premium_description: '30 gün sınırsız indirme! Pinterest\'ten istediğiniz kadar video, fotoğraf ve GIF indirin.',
    premium_activated: '🎉 *Tebrikler!*\n\n*Premium*\'unuz başarıyla etkinleştirildi!\n\n✅ 30 gün sınırsız indirme\n✅ Limitsiz keyfini çıkarın!\n\nPinSave\'i desteklediğiniz için teşekkürler! ❤️',
    
    // Hesap mesajları
    btn_my_account: '👤 Hesabım',
    account_title: '👤 *Hesabım*',
    account_id: 'ID',
    account_plan: 'Plan',
    account_downloads: 'Bugünkü İndirmeler',
    account_plan_free: '🆓 Ücretsiz',
    account_plan_premium: '⭐ Premium',
    account_downloads_unlimited: '∞ Sınırsız',
    account_premium_expires: '⏰ Premium {{days}} gün içinde sona eriyor',
  },
};

/**
 * Lista de idiomas suportados
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
 * Detecta o idioma do usuário
 */
export function detectLanguage(languageCode) {
  if (!languageCode) return 'en';
  
  const code = languageCode.toLowerCase();
  
  if (translations[code]) return code;
  
  const prefix = code.split('-')[0];
  if (translations[prefix]) return prefix;
  
  const languageMappings = {
    'zh-cn': 'zh', 'zh-tw': 'zh', 'zh-hk': 'zh',
    'pt-br': 'pt', 'pt-pt': 'pt',
    'es-es': 'es', 'es-mx': 'es', 'es-ar': 'es',
    'en-us': 'en', 'en-gb': 'en',
    'fr-fr': 'fr', 'fr-ca': 'fr',
    'de-de': 'de', 'de-at': 'de',
    'ar-sa': 'ar', 'ar-eg': 'ar',
    'ru-ru': 'ru', 'ja-jp': 'ja',
    'it-it': 'it', 'ko-kr': 'ko',
    'tr-tr': 'tr', 'hi-in': 'hi',
  };
  
  if (languageMappings[code]) return languageMappings[code];
  
  return 'en';
}

/**
 * Retorna uma mensagem traduzida
 */
export function getLocalizedMessage(key, language, params = {}) {
  let message = translations[language]?.[key];
  
  if (!message) {
    message = translations['en']?.[key] || key;
  }
  
  Object.keys(params).forEach(param => {
    message = message.replace(new RegExp(`{{${param}}}`, 'g'), params[param]);
  });
  
  return message;
}

/**
 * Retorna o nome do idioma
 */
export function getLanguageName(languageCode) {
  const lang = detectLanguage(languageCode);
  return SUPPORTED_LANGUAGES[lang] || 'English';
}
