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
    how_it_works_message: `Olá, {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *Guia de Uso | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Siga os passos abaixo para baixar seu conteúdo:

┌─────────────────────────┐
│  *PASSO A PASSO*
├─────────────────────────┤
│
│  1️⃣ │ Abra o Mini App
│      └─ Clique em "Abrir PinSave"
│
│  2️⃣ │ Cole o Link
│      └─ Copie a URL do Pinterest
│
│  3️⃣ │ Baixe
│      └─ Aguarde o processamento
│
│  4️⃣ │ Pronto!
│      └─ Conteúdo salvo ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *Links Aceitos:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *Tipos de Conteúdo:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 Vídeos
├─ 📷 Fotos
└─ 🎞️ GIFs

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *Limitações:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° Máx. 100 MB por arquivo
└─ ° Apenas conteúdo público`,

    terms_title: '📜 Termos de Uso',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *Termos de Uso | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Ao utilizar este serviço, você concorda com:

┌─────────────────────────┐
│  ⚠️ *AVISO IMPORTANTE*
├─────────────────────────┤
│  Este serviço NÃO possui
│  vínculo oficial com o
│  Pinterest Inc.
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *Termos:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *Natureza do Serviço*
    └─ Serviço comercial de download
       de conteúdo público do Pinterest

2️⃣ │ *Direitos Autorais*
    └─ O usuário é responsável por
       respeitar os direitos autorais

3️⃣ │ *Disponibilidade*
    └─ Serviço fornecido "como está"
       sem garantia de disponibilidade

4️⃣ │ *Privacidade*
    └─ Não armazenamos seus arquivos
       ou dados pessoais

5️⃣ │ *Responsabilidade*
    └─ Não nos responsabilizamos pelo
       uso indevido dos conteúdos

6️⃣ │ *Modificações*
    └─ Reservamos o direito de alterar
       estes termos a qualquer momento

━━━━━━━━━━━━━━━━━━━━━━
✅ Ao continuar, você aceita os termos
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ Voltar',
    btn_accept: '✅ Aceitar e Continuar',
    btn_back_to_start: '🏠 Voltar ao Início',
    btn_change_language: '🌍 Trocar Idioma',
    
    // Mensagens de idioma
    language_title: '🌍 Selecionar Idioma',
    language_message: 'Escolha seu idioma preferido:',
    language_changed: '✅ Idioma alterado com sucesso!',
    
    // Mensagens de download
    processing: '⏳ *Processando...*\n\nAguarde enquanto baixamos seu conteúdo do Pinterest.',
    download_success: '✅ *Download concluído!*\n\nAqui está seu conteúdo, {{name}}! 🎉',
    download_error: '❌ *Erro no download*\n\nNão foi possível baixar o conteúdo. Verifique se:\n\n• A URL está correta\n• O pin é público\n• O conteúdo ainda existe\n\nTente novamente com outra URL.',
    send_pinterest_url: '📌 *Envie uma URL do Pinterest*\n\nCole aqui o link do vídeo, foto ou GIF que deseja baixar:\n\n🔗 *Formatos aceitos:*\n• pinterest.com/pin/...\n• pin.it/...',
    btn_download_more: '📥 Baixar Mais',
    btn_download_media: '📥 Baixar Mídia',
    download_media_prompt: '📌 *Baixar Mídia do Pinterest*\n\nEnvie a URL do Pinterest que deseja baixar:\n\n🔗 *Formatos aceitos:*\n• pinterest.com/pin/...\n• pin.it/...',
    
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
    how_it_works_message: `Hello, {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *User Guide | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Follow the steps below to download your content:

┌─────────────────────────┐
│  *STEP BY STEP*
├─────────────────────────┤
│
│  1️⃣ │ Open the Mini App
│      └─ Click "Open PinSave"
│
│  2️⃣ │ Paste the Link
│      └─ Copy the Pinterest URL
│
│  3️⃣ │ Download
│      └─ Wait for processing
│
│  4️⃣ │ Done!
│      └─ Content saved ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *Accepted Links:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *Content Types:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 Videos
├─ 📷 Photos
└─ 🎞️ GIFs

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *Limitations:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° Max. 100 MB per file
└─ ° Public content only`,

    terms_title: '📜 Terms of Use',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *Terms of Use | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

By using this service, you agree to:

┌─────────────────────────┐
│  ⚠️ *IMPORTANT NOTICE*
├─────────────────────────┤
│  This service has NO
│  official affiliation with
│  Pinterest Inc.
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *Terms:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *Nature of Service*
    └─ Commercial service for downloading
       public Pinterest content

2️⃣ │ *Copyright*
    └─ User is responsible for
       respecting copyright

3️⃣ │ *Availability*
    └─ Service provided "as is"
       without availability guarantee

4️⃣ │ *Privacy*
    └─ We don't store your files
       or personal data

5️⃣ │ *Liability*
    └─ We're not responsible for
       misuse of content

6️⃣ │ *Modifications*
    └─ We reserve the right to change
       these terms at any time

━━━━━━━━━━━━━━━━━━━━━━
✅ By continuing, you accept the terms
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ Back',
    btn_accept: '✅ Accept and Continue',
    btn_back_to_start: '🏠 Back to Start',
    btn_change_language: '🌍 Change Language',
    
    // Language messages
    language_title: '🌍 Select Language',
    language_message: 'Choose your preferred language:',
    language_changed: '✅ Language changed successfully!',
    
    // Download messages
    processing: '⏳ *Processing...*\n\nPlease wait while we download your Pinterest content.',
    download_success: '✅ *Download complete!*\n\nHere is your content, {{name}}! 🎉',
    download_error: '❌ *Download error*\n\nCould not download the content. Please check if:\n\n• The URL is correct\n• The pin is public\n• The content still exists\n\nTry again with another URL.',
    send_pinterest_url: '📌 *Send a Pinterest URL*\n\nPaste here the link to the video, photo or GIF you want to download:\n\n🔗 *Accepted formats:*\n• pinterest.com/pin/...\n• pin.it/...',
    btn_download_more: '📥 Download More',
    btn_download_media: '📥 Download Media',
    download_media_prompt: '📌 *Download Pinterest Media*\n\nSend the Pinterest URL you want to download:\n\n🔗 *Accepted formats:*\n• pinterest.com/pin/...\n• pin.it/...',
    
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
    how_it_works_message: `¡Hola, {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *Guía de Uso | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Sigue los pasos para descargar tu contenido:

┌─────────────────────────┐
│  *PASO A PASO*
├─────────────────────────┤
│
│  1️⃣ │ Abre la Mini App
│      └─ Clic en "Abrir PinSave"
│
│  2️⃣ │ Pega el Enlace
│      └─ Copia la URL de Pinterest
│
│  3️⃣ │ Descarga
│      └─ Espera el procesamiento
│
│  4️⃣ │ ¡Listo!
│      └─ Contenido guardado ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *Enlaces Aceptados:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *Tipos de Contenido:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 Videos
├─ 📷 Fotos
└─ 🎞️ GIFs

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *Limitaciones:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° Máx. 100 MB por archivo
└─ ° Solo contenido público`,

    terms_title: '📜 Términos de Uso',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *Términos de Uso | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Al usar este servicio, aceptas:

┌─────────────────────────┐
│  ⚠️ *AVISO IMPORTANTE*
├─────────────────────────┤
│  Este servicio NO tiene
│  afiliación oficial con
│  Pinterest Inc.
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *Términos:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *Naturaleza del Servicio*
    └─ Servicio comercial de descarga
       de contenido público de Pinterest

2️⃣ │ *Derechos de Autor*
    └─ El usuario es responsable de
       respetar los derechos de autor

3️⃣ │ *Disponibilidad*
    └─ Servicio proporcionado "tal cual"
       sin garantía de disponibilidad

4️⃣ │ *Privacidad*
    └─ No almacenamos tus archivos
       ni datos personales

5️⃣ │ *Responsabilidad*
    └─ No somos responsables del
       mal uso del contenido

6️⃣ │ *Modificaciones*
    └─ Nos reservamos el derecho de
       cambiar estos términos

━━━━━━━━━━━━━━━━━━━━━━
✅ Al continuar, aceptas los términos
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ Volver',
    btn_accept: '✅ Aceptar y Continuar',
    btn_back_to_start: '🏠 Volver al Inicio',
    btn_change_language: '🌍 Cambiar Idioma',
    
    // Mensajes de idioma
    language_title: '🌍 Seleccionar Idioma',
    language_message: 'Elige tu idioma preferido:',
    language_changed: '✅ ¡Idioma cambiado con éxito!',
    
    // Download messages
    processing: `⏳ *Procesando...*

Espera mientras descargamos tu contenido de Pinterest.`,
    download_success: `✅ *¡Descarga completada!*

¡Aquí está tu contenido, {{name}}! 🎉`,
    download_error: `❌ *Error de descarga*

No se pudo descargar el contenido. Verifica si:

• La URL es correcta
• El pin es público
• El contenido aún existe

Intenta de nuevo con otra URL.`,
    send_pinterest_url: `📌 *Envía una URL de Pinterest*

Pega aquí el enlace del video, foto o GIF que deseas descargar:

🔗 *Formatos aceptados:*
• pinterest.com/pin/...
• pin.it/...`,
    btn_download_more: '📥 Descargar Más',
    btn_download_media: '📥 Descargar Medios',
    download_media_prompt: '📌 *Descargar Medios de Pinterest*\n\nEnvía la URL de Pinterest que deseas descargar:\n\n🔗 *Formatos aceptados:*\n• pinterest.com/pin/...\n• pin.it/...',
    
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
    how_it_works_message: `你好，{{name}}！👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *使用指南 | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

按以下步骤下载内容：

┌─────────────────────────┐
│  *操作步骤*
├─────────────────────────┤
│
│  1️⃣ │ 打开迷你应用
│      └─ 点击"打开 PinSave"
│
│  2️⃣ │ 粘贴链接
│      └─ 复制 Pinterest 链接
│
│  3️⃣ │ 下载
│      └─ 等待处理
│
│  4️⃣ │ 完成！
│      └─ 内容已保存 ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *支持的链接：*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *内容类型：*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 视频
├─ 📷 照片
└─ 🎞️ GIF

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *限制：*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° 每个文件最大 100 MB
└─ ° 仅限公开内容`,

    terms_title: '📜 使用条款',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *使用条款 | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

使用本服务即表示您同意：

┌─────────────────────────┐
│  ⚠️ *重要通知*
├─────────────────────────┤
│  本服务与 Pinterest Inc.
│  无任何官方关联
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *条款：*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *服务性质*
    └─ 下载 Pinterest 公开内容的
       商业服务

2️⃣ │ *版权*
    └─ 用户有责任尊重版权

3️⃣ │ *可用性*
    └─ 服务按"原样"提供
       不保证可用性

4️⃣ │ *隐私*
    └─ 我们不存储您的文件
       或个人数据

5️⃣ │ *责任*
    └─ 我们不对内容的滥用负责

6️⃣ │ *修改*
    └─ 我们保留随时修改
       这些条款的权利

━━━━━━━━━━━━━━━━━━━━━━
✅ 继续使用即表示接受条款
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ 返回',
    btn_accept: '✅ 接受并继续',
    btn_back_to_start: '🏠 返回首页',
    btn_change_language: '🌍 更改语言',
    
    // 语言消息
    language_title: '🌍 选择语言',
    language_message: '选择您的首选语言：',
    language_changed: '✅ 语言更改成功！',
    
    // Download messages
    processing: `⏳ *处理中...*

请稍候，我们正在下载您的Pinterest内容。`,
    download_success: `✅ *下载完成！*

这是您的内容，{{name}}！🎉`,
    download_error: `❌ *下载错误*

无法下载内容。请检查：

• URL是否正确
• Pin是否公开
• 内容是否仍然存在

请使用其他URL重试。`,
    send_pinterest_url: `📌 *发送Pinterest链接*

粘贴您要下载的视频、照片或GIF链接：

🔗 *支持的格式：*
• pinterest.com/pin/...
• pin.it/...`,
    btn_download_more: '📥 下载更多',
    btn_download_media: '📥 下载媒体',
    download_media_prompt: '📌 *下载Pinterest媒体*\n\n发送您要下载的Pinterest链接：\n\n🔗 *支持的格式：*\n• pinterest.com/pin/...\n• pin.it/...',
    
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
    how_it_works_message: `नमस्ते, {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *उपयोग गाइड | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

अपनी सामग्री डाउनलोड करने के लिए इन चरणों का पालन करें:

┌─────────────────────────┐
│  *चरण दर चरण*
├─────────────────────────┤
│
│  1️⃣ │ Mini App खोलें
│      └─ "PinSave खोलें" पर क्लिक करें
│
│  2️⃣ │ लिंक पेस्ट करें
│      └─ Pinterest URL कॉपी करें
│
│  3️⃣ │ डाउनलोड करें
│      └─ प्रोसेसिंग का इंतज़ार करें
│
│  4️⃣ │ हो गया!
│      └─ सामग्री सहेजी गई ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *स्वीकृत लिंक:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *सामग्री के प्रकार:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 वीडियो
├─ 📷 फ़ोटो
└─ 🎞️ GIF

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *सीमाएं:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° प्रति फ़ाइल अधिकतम 100 MB
└─ ° केवल सार्वजनिक सामग्री`,

    terms_title: '📜 उपयोग की शर्तें',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *उपयोग की शर्तें | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

इस सेवा का उपयोग करके, आप सहमत हैं:

┌─────────────────────────┐
│  ⚠️ *महत्वपूर्ण सूचना*
├─────────────────────────┤
│  इस सेवा का Pinterest Inc.
│  से कोई आधिकारिक संबंध नहीं है
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *शर्तें:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *सेवा की प्रकृति*
    └─ Pinterest की सार्वजनिक सामग्री
       डाउनलोड करने की वाणिज्यिक सेवा

2️⃣ │ *कॉपीराइट*
    └─ उपयोगकर्ता कॉपीराइट का
       सम्मान करने के लिए जिम्मेदार है

3️⃣ │ *उपलब्धता*
    └─ सेवा "जैसी है" प्रदान की जाती है
       उपलब्धता की गारंटी के बिना

4️⃣ │ *गोपनीयता*
    └─ हम आपकी फ़ाइलें या
       व्यक्तिगत डेटा संग्रहीत नहीं करते

5️⃣ │ *दायित्व*
    └─ सामग्री के दुरुपयोग के लिए
       हम जिम्मेदार नहीं हैं

6️⃣ │ *संशोधन*
    └─ हम किसी भी समय इन शर्तों को
       बदलने का अधिकार रखते हैं

━━━━━━━━━━━━━━━━━━━━━━
✅ जारी रखकर, आप शर्तों को स्वीकार करते हैं
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ वापस',
    btn_accept: '✅ स्वीकार करें और जारी रखें',
    btn_back_to_start: '🏠 शुरू पर वापस',
    btn_change_language: '🌍 भाषा बदलें',
    
    // भाषा संदेश
    language_title: '🌍 भाषा चुनें',
    language_message: 'अपनी पसंदीदा भाषा चुनें:',
    language_changed: '✅ भाषा सफलतापूर्वक बदली गई!',
    
    // Download messages
    processing: `⏳ *प्रोसेसिंग...*

कृपया प्रतीक्षा करें।`,
    download_success: `✅ *डाउनलोड पूर्ण!*

यहाँ आपकी सामग्री है, {{name}}! 🎉`,
    download_error: `❌ *डाउनलोड त्रुटि*

सामग्री डाउनलोड नहीं हो सकी।`,
    send_pinterest_url: `📌 *Pinterest URL भेजें*

वीडियो, फोटो या GIF का लिंक पेस्ट करें।`,
    btn_download_more: '📥 और डाउनलोड करें',
    btn_download_media: '📥 मीडिया डाउनलोड करें',
    download_media_prompt: '📌 *Pinterest मीडिया डाउनलोड करें*\n\nवह Pinterest URL भेजें जिसे आप डाउनलोड करना चाहते हैं।',
    
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
    how_it_works_message: `مرحباً، {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *دليل الاستخدام | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

اتبع الخطوات لتحميل المحتوى:

┌─────────────────────────┐
│  *خطوة بخطوة*
├─────────────────────────┤
│
│  1️⃣ │ افتح التطبيق المصغر
│      └─ انقر "فتح PinSave"
│
│  2️⃣ │ الصق الرابط
│      └─ انسخ رابط Pinterest
│
│  3️⃣ │ حمّل
│      └─ انتظر المعالجة
│
│  4️⃣ │ تم!
│      └─ تم حفظ المحتوى ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *الروابط المقبولة:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *أنواع المحتوى:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 فيديوهات
├─ 📷 صور
└─ 🎞️ GIF

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *القيود:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° الحد الأقصى 100 ميجابايت لكل ملف
└─ ° المحتوى العام فقط`,

    terms_title: '📜 شروط الاستخدام',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *شروط الاستخدام | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

باستخدام هذه الخدمة، فإنك توافق على:

┌─────────────────────────┐
│  ⚠️ *إشعار مهم*
├─────────────────────────┤
│  هذه الخدمة ليس لها
│  أي ارتباط رسمي مع
│  Pinterest Inc.
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *الشروط:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *طبيعة الخدمة*
    └─ خدمة تجارية لتحميل
       المحتوى العام من Pinterest

2️⃣ │ *حقوق النشر*
    └─ المستخدم مسؤول عن
       احترام حقوق النشر

3️⃣ │ *التوفر*
    └─ الخدمة مقدمة "كما هي"
       بدون ضمان التوفر

4️⃣ │ *الخصوصية*
    └─ لا نخزن ملفاتك
       أو بياناتك الشخصية

5️⃣ │ *المسؤولية*
    └─ لسنا مسؤولين عن
       سوء استخدام المحتوى

6️⃣ │ *التعديلات*
    └─ نحتفظ بالحق في تغيير
       هذه الشروط في أي وقت

━━━━━━━━━━━━━━━━━━━━━━
✅ بالاستمرار، فإنك تقبل الشروط
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ رجوع',
    btn_accept: '✅ قبول والمتابعة',
    btn_back_to_start: '🏠 العودة للبداية',
    btn_change_language: '🌍 تغيير اللغة',
    
    // رسائل اللغة
    language_title: '🌍 اختر اللغة',
    language_message: 'اختر لغتك المفضلة:',
    language_changed: '✅ تم تغيير اللغة بنجاح!',
    
    // Download messages
    processing: `⏳ *جاري المعالجة...*

يرجى الانتظار.`,
    download_success: `✅ *تم التحميل!*

إليك المحتوى، {{name}}! 🎉`,
    download_error: `❌ *خطأ في التحميل*

تعذر تحميل المحتوى.`,
    send_pinterest_url: `📌 *أرسل رابط Pinterest*

الصق رابط الفيديو أو الصورة.`,
    btn_download_more: '📥 تحميل المزيد',
    btn_download_media: '📥 تحميل الوسائط',
    download_media_prompt: '📌 *تحميل وسائط Pinterest*\n\nأرسل رابط Pinterest الذي تريئ تحميله।',
    
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
    how_it_works_message: `Bonjour, {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *Guide d'utilisation | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Suivez les étapes pour télécharger:

┌─────────────────────────┐
│  *ÉTAPE PAR ÉTAPE*
├─────────────────────────┤
│
│  1️⃣ │ Ouvrez la Mini App
│      └─ Cliquez "Ouvrir PinSave"
│
│  2️⃣ │ Collez le Lien
│      └─ Copiez l'URL Pinterest
│
│  3️⃣ │ Téléchargez
│      └─ Attendez le traitement
│
│  4️⃣ │ Terminé!
│      └─ Contenu sauvegardé ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *Liens Acceptés:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *Types de Contenu:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 Vidéos
├─ 📷 Photos
└─ 🎞️ GIFs

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *Limitations:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° Max. 100 Mo par fichier
└─ ° Contenu public uniquement`,

    terms_title: '📜 Conditions d\'utilisation',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *Conditions | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

En utilisant ce service, vous acceptez:

┌─────────────────────────┐
│  ⚠️ *AVIS IMPORTANT*
├─────────────────────────┤
│  Ce service n'a AUCUNE
│  affiliation officielle avec
│  Pinterest Inc.
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *Conditions:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *Nature du Service*
    └─ Service commercial de téléchargement
       de contenu public Pinterest

2️⃣ │ *Droits d'Auteur*
    └─ L'utilisateur est responsable
       du respect des droits d'auteur

3️⃣ │ *Disponibilité*
    └─ Service fourni "tel quel"
       sans garantie de disponibilité

4️⃣ │ *Confidentialité*
    └─ Nous ne stockons pas vos fichiers
       ni vos données personnelles

5️⃣ │ *Responsabilité*
    └─ Nous ne sommes pas responsables
       de l'utilisation abusive

6️⃣ │ *Modifications*
    └─ Nous nous réservons le droit
       de modifier ces conditions

━━━━━━━━━━━━━━━━━━━━━━
✅ En continuant, vous acceptez les conditions
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ Retour',
    btn_accept: '✅ Accepter et Continuer',
    btn_back_to_start: '🏠 Retour au Début',
    btn_change_language: '🌍 Changer de Langue',
    
    // Messages de langue
    language_title: '🌍 Sélectionner la Langue',
    language_message: 'Choisissez votre langue préférée:',
    language_changed: '✅ Langue changée avec succès!',
    
    // Download messages
    processing: `⏳ *Traitement...*

Veuillez patienter.`,
    download_success: `✅ *Téléchargement terminé!*

Voici votre contenu, {{name}}! 🎉`,
    download_error: `❌ *Erreur de téléchargement*

Impossible de télécharger.`,
    send_pinterest_url: `📌 *Envoyez une URL Pinterest*

Collez le lien de la vidéo, photo ou GIF.`,
    btn_download_more: '📥 Télécharger Plus',
    btn_download_media: '📥 Télécharger Média',
    download_media_prompt: '📌 *Télécharger Média Pinterest*\n\nEnvoyez l\'URL Pinterest que vous souhaitez télécharger:\n\n🔗 *Formats acceptés:*\n• pinterest.com/pin/...\n• pin.it/...',
    
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
    how_it_works_message: `Привет, {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *Руководство | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Следуйте шагам для скачивания:

┌─────────────────────────┐
│  *ШАГ ЗА ШАГОМ*
├─────────────────────────┤
│
│  1️⃣ │ Откройте мини-приложение
│      └─ Нажмите "Открыть PinSave"
│
│  2️⃣ │ Вставьте ссылку
│      └─ Скопируйте URL Pinterest
│
│  3️⃣ │ Скачайте
│      └─ Дождитесь обработки
│
│  4️⃣ │ Готово!
│      └─ Контент сохранён ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *Принимаемые ссылки:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *Типы контента:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 Видео
├─ 📷 Фото
└─ 🎞️ GIF

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *Ограничения:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° Макс. 100 МБ на файл
└─ ° Только публичный контент`,

    terms_title: '📜 Условия использования',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *Условия | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Используя этот сервис, вы соглашаетесь:

┌─────────────────────────┐
│  ⚠️ *ВАЖНОЕ УВЕДОМЛЕНИЕ*
├─────────────────────────┤
│  Этот сервис НЕ имеет
│  официальной связи с
│  Pinterest Inc.
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *Условия:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *Характер услуги*
    └─ Коммерческий сервис для скачивания
       публичного контента Pinterest

2️⃣ │ *Авторские права*
    └─ Пользователь несёт ответственность
       за соблюдение авторских прав

3️⃣ │ *Доступность*
    └─ Сервис предоставляется "как есть"
       без гарантии доступности

4️⃣ │ *Конфиденциальность*
    └─ Мы не храним ваши файлы
       или личные данные

5️⃣ │ *Ответственность*
    └─ Мы не несём ответственности
       за неправомерное использование

6️⃣ │ *Изменения*
    └─ Мы оставляем за собой право
       изменять эти условия

━━━━━━━━━━━━━━━━━━━━━━
✅ Продолжая, вы принимаете условия
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ Назад',
    btn_accept: '✅ Принять и продолжить',
    btn_back_to_start: '🏠 Вернуться в начало',
    btn_change_language: '🌍 Изменить язык',
    
    // Сообщения о языке
    language_title: '🌍 Выбрать язык',
    language_message: 'Выберите предпочитаемый язык:',
    language_changed: '✅ Язык успешно изменён!',
    
    // Download messages
    processing: `⏳ *Обработка...*

Пожалуйста, подождите.`,
    download_success: `✅ *Загрузка завершена!*

Вот ваш контент, {{name}}! 🎉`,
    download_error: `❌ *Ошибка загрузки*

Не удалось загрузить контент.`,
    send_pinterest_url: `📌 *Отправьте URL Pinterest*

Вставьте ссылку на видео, фото или GIF.`,
    btn_download_more: '📥 Скачать Ещё',
    btn_download_media: '📥 Скачать Медиа',
    download_media_prompt: '📌 *Скачать медиа Pinterest*\n\nОтправьте URL Pinterest, который хотите скачать:\n\n🔗 *Поддерживаемые форматы:*\n• pinterest.com/pin/...\n• pin.it/...',
    
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
    how_it_works_message: `Hallo, {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *Benutzerhandbuch | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Folgen Sie den Schritten zum Herunterladen:

┌─────────────────────────┐
│  *SCHRITT FÜR SCHRITT*
├─────────────────────────┤
│
│  1️⃣ │ Öffnen Sie die Mini App
│      └─ Klicken Sie "PinSave öffnen"
│
│  2️⃣ │ Link einfügen
│      └─ Pinterest-URL kopieren
│
│  3️⃣ │ Herunterladen
│      └─ Auf Verarbeitung warten
│
│  4️⃣ │ Fertig!
│      └─ Inhalt gespeichert ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *Akzeptierte Links:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *Inhaltstypen:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 Videos
├─ 📷 Fotos
└─ 🎞️ GIFs

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *Einschränkungen:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° Max. 100 MB pro Datei
└─ ° Nur öffentliche Inhalte`,

    terms_title: '📜 Nutzungsbedingungen',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *Bedingungen | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Durch die Nutzung stimmen Sie zu:

┌─────────────────────────┐
│  ⚠️ *WICHTIGER HINWEIS*
├─────────────────────────┤
│  Dieser Dienst hat KEINE
│  offizielle Verbindung zu
│  Pinterest Inc.
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *Bedingungen:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *Art des Dienstes*
    └─ Kommerzieller Dienst zum Herunterladen
       öffentlicher Pinterest-Inhalte

2️⃣ │ *Urheberrecht*
    └─ Der Benutzer ist verantwortlich
       für die Einhaltung des Urheberrechts

3️⃣ │ *Verfügbarkeit*
    └─ Dienst wird "wie besehen" bereitgestellt
       ohne Verfügbarkeitsgarantie

4️⃣ │ *Datenschutz*
    └─ Wir speichern Ihre Dateien
       oder persönlichen Daten nicht

5️⃣ │ *Haftung*
    └─ Wir haften nicht für
       Missbrauch der Inhalte

6️⃣ │ *Änderungen*
    └─ Wir behalten uns das Recht vor,
       diese Bedingungen zu ändern

━━━━━━━━━━━━━━━━━━━━━━
✅ Durch Fortfahren akzeptieren Sie die Bedingungen
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ Zurück',
    btn_accept: '✅ Akzeptieren und fortfahren',
    btn_back_to_start: '🏠 Zurück zum Start',
    btn_change_language: '🌍 Sprache ändern',
    
    // Sprachnachrichten
    language_title: '🌍 Sprache auswählen',
    language_message: 'Wählen Sie Ihre bevorzugte Sprache:',
    language_changed: '✅ Sprache erfolgreich geändert!',
    
    // Download messages
    processing: `⏳ *Verarbeitung...*

Bitte warten Sie.`,
    download_success: `✅ *Download abgeschlossen!*

Hier ist Ihr Inhalt, {{name}}! 🎉`,
    download_error: `❌ *Download-Fehler*

Inhalt konnte nicht heruntergeladen werden.`,
    send_pinterest_url: `📌 *Senden Sie eine Pinterest-URL*

Fügen Sie den Link zum Video, Foto oder GIF ein.`,
    btn_download_more: '📥 Mehr Herunterladen',
    btn_download_media: '📥 Medien Herunterladen',
    download_media_prompt: '📌 *Pinterest-Medien Herunterladen*\n\nSenden Sie die Pinterest-URL, die Sie herunterladen möchten:\n\n🔗 *Akzeptierte Formate:*\n• pinterest.com/pin/...\n• pin.it/...',
    
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
    how_it_works_message: `こんにちは、{{name}}さん！👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *使用ガイド | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

以下の手順でダウンロード:

┌─────────────────────────┐
│  *ステップバイステップ*
├─────────────────────────┤
│
│  1️⃣ │ ミニアプリを開く
│      └─ 「PinSaveを開く」をクリック
│
│  2️⃣ │ リンクを貼り付け
│      └─ Pinterest URLをコピー
│
│  3️⃣ │ ダウンロード
│      └─ 処理を待つ
│
│  4️⃣ │ 完了！
│      └─ コンテンツ保存済み ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *対応リンク:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *コンテンツタイプ:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 動画
├─ 📷 写真
└─ 🎞️ GIF

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *制限:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° ファイルあたり最大100MB
└─ ° 公開コンテンツのみ`,

    terms_title: '📜 利用規約',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *利用規約 | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

このサービスを使用することで同意:

┌─────────────────────────┐
│  ⚠️ *重要なお知らせ*
├─────────────────────────┤
│  このサービスは
│  Pinterest Inc.との
│  公式な提携はありません
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *規約:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *サービスの性質*
    └─ Pinterest公開コンテンツを
       ダウンロードする商用サービス

2️⃣ │ *著作権*
    └─ ユーザーは著作権を
       尊重する責任があります

3️⃣ │ *可用性*
    └─ サービスは「現状のまま」提供
       可用性の保証なし

4️⃣ │ *プライバシー*
    └─ ファイルや個人データは
       保存しません

5️⃣ │ *責任*
    └─ コンテンツの悪用について
       責任を負いません

6️⃣ │ *変更*
    └─ これらの規約を変更する
       権利を留保します

━━━━━━━━━━━━━━━━━━━━━━
✅ 続行することで規約に同意
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ 戻る',
    btn_accept: '✅ 同意して続ける',
    btn_back_to_start: '🏠 スタートに戻る',
    btn_change_language: '🌍 言語を変更',
    
    // 言語メッセージ
    language_title: '🌍 言語を選択',
    language_message: 'ご希望の言語を選択してください：',
    language_changed: '✅ 言語が正常に変更されました！',
    
    // Download messages
    processing: `⏳ *処理中...*

お待ちください。`,
    download_success: `✅ *ダウンロード完了！*

こちらがコンテンツです、{{name}}！🎉`,
    download_error: `❌ *ダウンロードエラー*

コンテンツをダウンロードできませんでした。`,
    send_pinterest_url: `📌 *Pinterest URLを送信*

動画、写真、GIFのリンクを貼り付けてください。`,
    btn_download_more: '📥 もっとダウンロード',
    btn_download_media: '📥 メディアをダウンロード',
    download_media_prompt: '📌 *Pinterestメディアをダウンロード*\n\nダウンロードしたいPinterest URLを送信してください。',
    
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
    how_it_works_message: `Ciao, {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *Guida all'uso | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Segui i passaggi per scaricare:

┌─────────────────────────┐
│  *PASSO DOPO PASSO*
├─────────────────────────┤
│
│  1️⃣ │ Apri la Mini App
│      └─ Clicca "Apri PinSave"
│
│  2️⃣ │ Incolla il Link
│      └─ Copia l'URL di Pinterest
│
│  3️⃣ │ Scarica
│      └─ Attendi l'elaborazione
│
│  4️⃣ │ Fatto!
│      └─ Contenuto salvato ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *Link Accettati:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *Tipi di Contenuto:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 Video
├─ 📷 Foto
└─ 🎞️ GIF

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *Limitazioni:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° Max. 100 MB per file
└─ ° Solo contenuti pubblici`,

    terms_title: '📜 Termini di Utilizzo',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *Termini | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Usando questo servizio, accetti:

┌─────────────────────────┐
│  ⚠️ *AVVISO IMPORTANTE*
├─────────────────────────┤
│  Questo servizio NON ha
│  affiliazione ufficiale con
│  Pinterest Inc.
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *Termini:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *Natura del Servizio*
    └─ Servizio commerciale per scaricare
       contenuti pubblici di Pinterest

2️⃣ │ *Copyright*
    └─ L'utente è responsabile
       del rispetto del copyright

3️⃣ │ *Disponibilità*
    └─ Servizio fornito "così com'è"
       senza garanzia di disponibilità

4️⃣ │ *Privacy*
    └─ Non memorizziamo i tuoi file
       o dati personali

5️⃣ │ *Responsabilità*
    └─ Non siamo responsabili
       dell'uso improprio

6️⃣ │ *Modifiche*
    └─ Ci riserviamo il diritto
       di modificare questi termini

━━━━━━━━━━━━━━━━━━━━━━
✅ Continuando, accetti i termini
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ Indietro',
    btn_accept: '✅ Accetta e Continua',
    btn_back_to_start: '🏠 Torna all\'Inizio',
    btn_change_language: '🌍 Cambia Lingua',
    
    // Messaggi lingua
    language_title: '🌍 Seleziona Lingua',
    language_message: 'Scegli la tua lingua preferita:',
    language_changed: '✅ Lingua cambiata con successo!',
    
    // Download messages
    processing: `⏳ *Elaborazione...*

Attendi per favore.`,
    download_success: `✅ *Download completato!*

Ecco il tuo contenuto, {{name}}! 🎉`,
    download_error: `❌ *Errore di download*

Impossibile scaricare il contenuto.`,
    send_pinterest_url: `📌 *Invia un URL Pinterest*

Incolla il link del video, foto o GIF.`,
    btn_download_more: '📥 Scarica Altro',
    btn_download_media: '📥 Scarica Media',
    download_media_prompt: '📌 *Scarica Media Pinterest*\n\nInvia l\'URL Pinterest che vuoi scaricare:\n\n🔗 *Formati accettati:*\n• pinterest.com/pin/...\n• pin.it/...',
    
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
    how_it_works_message: `안녕하세요, {{name}}님! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *사용 가이드 | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

다운로드 단계를 따르세요:

┌─────────────────────────┐
│  *단계별 안내*
├─────────────────────────┤
│
│  1️⃣ │ 미니 앱 열기
│      └─ "PinSave 열기" 클릭
│
│  2️⃣ │ 링크 붙여넣기
│      └─ Pinterest URL 복사
│
│  3️⃣ │ 다운로드
│      └─ 처리 대기
│
│  4️⃣ │ 완료!
│      └─ 콘텐츠 저장됨 ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *지원 링크:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *콘텐츠 유형:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 동영상
├─ 📷 사진
└─ 🎞️ GIF

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *제한:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° 파일당 최대 100MB
└─ ° 공개 콘텐츠만`,

    terms_title: '📜 이용약관',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *이용약관 | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

이 서비스를 사용함으로써 동의:

┌─────────────────────────┐
│  ⚠️ *중요 공지*
├─────────────────────────┤
│  이 서비스는 Pinterest Inc.와
│  공식적인 제휴가 없습니다
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *약관:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *서비스 성격*
    └─ Pinterest 공개 콘텐츠를
       다운로드하는 상업 서비스

2️⃣ │ *저작권*
    └─ 사용자는 저작권을
       존중할 책임이 있습니다

3️⃣ │ *가용성*
    └─ 서비스는 "있는 그대로" 제공
       가용성 보장 없음

4️⃣ │ *개인정보*
    └─ 파일이나 개인 데이터를
       저장하지 않습니다

5️⃣ │ *책임*
    └─ 콘텐츠 오용에 대해
       책임지지 않습니다

6️⃣ │ *수정*
    └─ 이 약관을 변경할
       권리를 보유합니다

━━━━━━━━━━━━━━━━━━━━━━
✅ 계속하면 약관에 동의
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ 뒤로',
    btn_accept: '✅ 동의하고 계속',
    btn_back_to_start: '🏠 시작으로 돌아가기',
    btn_change_language: '🌍 언어 변경',
    
    // 언어 메시지
    language_title: '🌍 언어 선택',
    language_message: '원하는 언어를 선택하세요:',
    language_changed: '✅ 언어가 성공적으로 변경되었습니다!',
    
    // Download messages
    processing: `⏳ *처리 중...*

잠시만 기다려 주세요.`,
    download_success: `✅ *다운로드 완료!*

여기 콘텐츠입니다, {{name}}! 🎉`,
    download_error: `❌ *다운로드 오류*

콘텐츠를 다운로드할 수 없습니다.`,
    send_pinterest_url: `📌 *Pinterest URL 보내기*

동영상, 사진 또는 GIF 링크를 붙여넣으세요.`,
    btn_download_more: '📥 더 다운로드',
    btn_download_media: '📥 미디어 다운로드',
    download_media_prompt: '📌 *Pinterest 미디어 다운로드*\n\n다운로드하려는 Pinterest URL을 보내주세요.',
    
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
    how_it_works_message: `Merhaba, {{name}}! 👋

━━━━━━━━━━━━━━━━━━━━━━
📖 *Kullanım Kılavuzu | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

İndirmek için adımları izleyin:

┌─────────────────────────┐
│  *ADIM ADIM*
├─────────────────────────┤
│
│  1️⃣ │ Mini Uygulamayı Aç
│      └─ "PinSave'i Aç"a tıklayın
│
│  2️⃣ │ Linki Yapıştır
│      └─ Pinterest URL'sini kopyalayın
│
│  3️⃣ │ İndir
│      └─ İşlemeyi bekleyin
│
│  4️⃣ │ Tamam!
│      └─ İçerik kaydedildi ✓
│
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
🔗 *Kabul Edilen Linkler:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° pinterest.com/pin/...
└─ ° pin.it/...

━━━━━━━━━━━━━━━━━━━━━━
📦 *İçerik Türleri:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ 🎬 Videolar
├─ 📷 Fotoğraflar
└─ 🎞️ GIF'ler

━━━━━━━━━━━━━━━━━━━━━━
⚙️ *Sınırlamalar:*
━━━━━━━━━━━━━━━━━━━━━━
│
├─ ° Dosya başına maks. 100 MB
└─ ° Sadece herkese açık içerik`,

    terms_title: '📜 Kullanım Şartları',
    terms_message: `━━━━━━━━━━━━━━━━━━━━━━
📜 *Şartlar | PinSave*
━━━━━━━━━━━━━━━━━━━━━━

Bu hizmeti kullanarak kabul edersiniz:

┌─────────────────────────┐
│  ⚠️ *ÖNEMLİ BİLDİRİM*
├─────────────────────────┤
│  Bu hizmetin Pinterest Inc.
│  ile resmi bir bağlantısı
│  YOKTUR
└─────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━
📋 *Şartlar:*
━━━━━━━━━━━━━━━━━━━━━━

1️⃣ │ *Hizmetin Niteliği*
    └─ Pinterest'in herkese açık
       içeriklerini indirmek için
       ticari hizmet

2️⃣ │ *Telif Hakkı*
    └─ Kullanıcı telif haklarına
       saygı göstermekten sorumludur

3️⃣ │ *Kullanılabilirlik*
    └─ Hizmet "olduğu gibi" sağlanır
       kullanılabilirlik garantisi yok

4️⃣ │ *Gizlilik*
    └─ Dosyalarınızı veya kişisel
       verilerinizi saklamıyoruz

5️⃣ │ *Sorumluluk*
    └─ İçeriğin kötüye kullanımından
       sorumlu değiliz

6️⃣ │ *Değişiklikler*
    └─ Bu şartları değiştirme
       hakkını saklı tutarız

━━━━━━━━━━━━━━━━━━━━━━
✅ Devam ederek şartları kabul edersiniz
━━━━━━━━━━━━━━━━━━━━━━`,

    btn_back: '⬅️ Geri',
    btn_accept: '✅ Kabul Et ve Devam Et',
    btn_back_to_start: '🏠 Başa Dön',
    btn_change_language: '🌍 Dili Değiştir',
    
    // Dil mesajları
    language_title: '🌍 Dil Seç',
    language_message: 'Tercih ettiğiniz dili seçin:',
    language_changed: '✅ Dil başarıyla değiştirildi!',
    
    // Download messages
    processing: `⏳ *İşleniyor...*

Lütfen bekleyin.`,
    download_success: `✅ *İndirme tamamlandı!*

İşte içeriğiniz, {{name}}! 🎉`,
    download_error: `❌ *İndirme hatası*

İçerik indirilemedi.`,
    send_pinterest_url: `📌 *Pinterest URL gönderin*

Video, fotoğraf veya GIF linkini yapıştırın.`,
    btn_download_more: '📥 Daha Fazla İndir',
    btn_download_media: '📥 Medya İndir',
    download_media_prompt: '📌 *Pinterest Medya İndir*\n\nİndirmek istediğiniz Pinterest URL\'sini gönderin:\n\n🔗 *Kabul edilen formatlar:*\n• pinterest.com/pin/...\n• pin.it/...',
    
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
