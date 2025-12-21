# 🎬 Pinterest Video Downloader Bot

Um bot do Telegram inteligente e multilíngue para baixar vídeos do Pinterest, executado em **Cloudflare Workers**. O bot detecta automaticamente o idioma do usuário (Português ou Inglês) e oferece uma experiência personalizada.

## ✨ Características Principais

### Suporte Multilíngue Automático
O bot detecta automaticamente o idioma do usuário através do campo `language_code` do Telegram e oferece mensagens em **Português (🇧🇷)** ou **Inglês (🇺🇲)**. Não é necessário configurar manualmente o idioma—o bot se adapta automaticamente.

### Download Rápido e Confiável
Integrado com a API `pinterest-downloader-api`, o bot processa URLs do Pinterest e entrega vídeos em alta qualidade. O sistema inclui validação robusta de URLs, tratamento de erros e indicadores de progresso em tempo real.

### Executado em Cloudflare Workers
O bot é um **Cloudflare Worker** sem servidor, o que significa:
- Sem custos de servidor tradicional
- Escalabilidade automática
- Latência baixa globalmente
- Sem necessidade de manutenção de infraestrutura

### Interface Intuitiva
Botões inline (`/start`, `/help`) e mensagens amigáveis guiam o usuário através do processo de download. Mensagens de erro explicam claramente o que deu errado e como resolver.

### Validação Inteligente de URLs
O bot aceita múltiplos formatos de URL do Pinterest:
- `https://www.pinterest.com/pin/XXXXXX`
- `https://pin.it/XXXXXX`

URLs inválidas são rejeitadas com mensagens claras em ambos os idiomas.

## 🚀 Como Usar

### Pré-requisitos

Antes de começar, você precisará de:

- **Node.js 18+** e **npm/pnpm** para gerenciar dependências
- **Conta Cloudflare** (gratuita em https://cloudflare.com)
- **Token do Bot Telegram** (já fornecido: `8326140110:AAGOufTHcRuFJ6DmzzSevt2OAk4I4qk9hMU`)
- **URL da API pinterest-downloader-api** (hospedada localmente ou em um servidor)

### Instalação Local

Comece clonando o repositório e instalando as dependências:

```bash
cd /home/ubuntu/pinterest-of-bot
npm install
# ou
pnpm install
```

### Compilar o Projeto

Para compilar o projeto para o Cloudflare:

```bash
npm run build
# ou
pnpm build
```

Isso criará um diretório `dist/` com os arquivos prontos para deploy.

### Testar Localmente

Para testar o bot localmente com o Cloudflare Wrangler:

```bash
npm run start
# ou
pnpm start
```

O bot estará disponível em `http://localhost:8787` (ou outra porta configurada pelo Wrangler).

### Configurar o Webhook do Telegram

Para que o Telegram envie as mensagens para seu bot, você precisa configurar o webhook. Acesse:

```
https://seu-dominio.workers.dev/setWebhook?url=https://seu-dominio.workers.dev/
```

Substitua `seu-dominio.workers.dev` pela URL real do seu Cloudflare Worker.

### Implantar no Cloudflare

Para implantar o bot no Cloudflare Workers:

```bash
npm run deploy
# ou
pnpm deploy
```

O Wrangler solicitará suas credenciais do Cloudflare na primeira vez. Após a autenticação, o bot será implantado automaticamente.

## 📋 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
pinterest-of-bot/
├── src/
│   ├── index.js           # Arquivo principal do bot (Cloudflare Worker)
│   ├── i18n.js            # Sistema de internacionalização (PT-BR, EN-US)
│   └── pinterest.js       # Utilitários para Pinterest (validação, download)
├── dist/                  # Arquivos compilados (gerados por `npm run build`)
├── package.json           # Dependências do projeto
├── wrangler.toml          # Configuração do Cloudflare Workers
├── README.md              # Este arquivo
└── .gitignore             # Arquivos ignorados pelo Git
```

## 🔧 Arquivos Principais

### `src/index.js`
Arquivo principal do bot com toda a lógica. Inclui:
- **Handlers de mensagens**: `/start`, `/help`, URLs do Pinterest
- **Handlers de callbacks**: Botões inline
- **Funções da API do Telegram**: `sendMessage`, `sendVideo`, `editMessageText`, etc.
- **Roteamento**: Webhook do Telegram, rota de status

### `src/i18n.js`
Sistema de internacionalização com suporte a Português e Inglês. Inclui:
- **`detectLanguage(languageCode)`**: Detecta o idioma do usuário
- **`getLocalizedMessage(key, language)`**: Retorna mensagens traduzidas
- **`translations`**: Objeto com todas as mensagens em ambos os idiomas

### `src/pinterest.js`
Utilitários para trabalhar com URLs do Pinterest:
- **`isPinterestUrl(url)`**: Valida se uma URL é do Pinterest
- **`extractPinId(url)`**: Extrai o ID do pin da URL
- **`downloadPinterestVideo(url, apiUrl)`**: Baixa o vídeo usando a API
- **`getVideoFileSize(videoUrl)`**: Obtém o tamanho do arquivo
- **`formatFileSize(bytes)`**: Formata tamanho de arquivo em formato legível

## 🌐 Idiomas Suportados

O bot suporta automaticamente:

| Idioma | Código | Detecção |
|--------|--------|----------|
| Português | `pt` | `pt-BR`, `pt-PT`, `pt` |
| Inglês | `en` | `en-US`, `en-GB`, `en` (padrão) |

Se o idioma do usuário não for detectado, o bot usa Inglês como padrão.

## ⚠️ Tratamento de Erros

O bot fornece mensagens de erro claras e úteis em ambos os idiomas:

| Erro | Mensagem |
|------|----------|
| URL inválida | "❌ URL inválida! Por favor, envie uma URL válida do Pinterest." |
| Arquivo muito grande | "📦 O vídeo é muito grande (máximo 100 MB). Tente outro vídeo." |
| Vídeo não encontrado | "🔍 Vídeo não encontrado. Verifique se a URL está correta..." |
| Erro de API | "🔌 Erro ao conectar com a API do Pinterest. Tente novamente..." |
| Erro genérico | "❌ Ocorreu um erro ao processar seu vídeo. Tente novamente mais tarde." |

## 🔐 Variáveis de Ambiente

As seguintes variáveis de ambiente podem ser configuradas no `wrangler.toml`:

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `PINTEREST_API_URL` | URL base da API pinterest-downloader-api | `http://localhost:3000` |

Para adicionar variáveis de ambiente, edite o arquivo `wrangler.toml`:

```toml
[env.production]
vars = { PINTEREST_API_URL = "https://seu-servidor-pinterest-api.com" }

[env.development]
vars = { PINTEREST_API_URL = "http://localhost:3000" }
```

## 📦 Dependências

O projeto utiliza apenas duas dependências principais:

- **itty-router** (v4.0.27): Roteador HTTP leve para Cloudflare Workers
- **wrangler** (v3.27.0): CLI do Cloudflare para desenvolvimento e deploy

Não há dependências Node.js pesadas—tudo é JavaScript puro compatível com Cloudflare Workers.

## 🚀 Fluxo de Uso

O fluxo típico de um usuário é:

1. **Usuário inicia o bot** com `/start`
   - Bot detecta o idioma do usuário
   - Exibe mensagem de boas-vindas personalizada
   - Mostra botão de ajuda

2. **Usuário envia URL do Pinterest**
   - Bot valida a URL
   - Mostra indicador de processamento
   - Baixa o vídeo da API pinterest-downloader-api
   - Valida o tamanho do arquivo (máximo 100 MB)
   - Envia o vídeo ao usuário

3. **Usuário recebe o vídeo**
   - Bot confirma sucesso com mensagem personalizada
   - Usuário pode enviar outra URL ou usar `/help` para mais informações

## 🔗 Endpoints Disponíveis

O bot expõe os seguintes endpoints:

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/` | Webhook do Telegram (recebe atualizações) |
| `GET` | `/setWebhook?url=...` | Configura o webhook do Telegram |
| `GET` | `/status` | Verifica o status do bot |

## 📝 Exemplo de Requisição Webhook

Quando um usuário envia uma mensagem, o Telegram envia uma requisição POST para o webhook:

```json
{
  "update_id": 123456789,
  "message": {
    "message_id": 1,
    "date": 1234567890,
    "chat": {
      "id": 987654321,
      "type": "private"
    },
    "from": {
      "id": 987654321,
      "first_name": "João",
      "language_code": "pt-BR"
    },
    "text": "https://www.pinterest.com/pin/123456789/"
  }
}
```

## 🤝 Contribuindo

Se você encontrar bugs ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou pull request no repositório.

## 📄 Licença

Este projeto está licenciado sob a ISC License.

## 💬 Suporte

Para suporte ou dúvidas sobre o bot, entre em contato através do repositório GitHub ou abra uma issue.

---

**Desenvolvido com ❤️ usando Cloudflare Workers, JavaScript e Telegram Bot API**

**Token do Bot:** `8326140110:AAGOufTHcRuFJ6DmzzSevt2OAk4I4qk9hMU`
