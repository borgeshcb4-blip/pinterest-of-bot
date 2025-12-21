# 🚀 Guia de Configuração - Pinterest Video Downloader Bot

Este guia fornece instruções passo a passo para configurar e implantar o bot no Cloudflare Workers.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

1. **Node.js 18+** instalado (verifique com `node --version`)
2. **npm ou pnpm** para gerenciar dependências
3. **Conta Cloudflare** (crie uma gratuitamente em https://cloudflare.com)
4. **Token do Bot Telegram**: `8326140110:AAGOufTHcRuFJ6DmzzSevt2OAk4I4qk9hMU`
5. **URL da API pinterest-downloader-api** (hospedada em algum lugar)

## 🔧 Passo 1: Configurar o Cloudflare

### 1.1 Criar uma Conta Cloudflare

Se você ainda não tem uma conta, acesse https://cloudflare.com e crie uma conta gratuita.

### 1.2 Instalar o Wrangler CLI

O Wrangler é a ferramenta oficial do Cloudflare para gerenciar Workers. Instale globalmente:

```bash
npm install -g wrangler
# ou
pnpm add -g wrangler
```

### 1.3 Autenticar com Cloudflare

Execute o comando abaixo e siga as instruções para fazer login:

```bash
wrangler login
```

Isso abrirá seu navegador para autenticar. Após a autenticação, você estará pronto para implantar.

## 📦 Passo 2: Preparar o Projeto

### 2.1 Clonar ou Baixar o Repositório

```bash
cd /home/ubuntu/pinterest-of-bot
```

### 2.2 Instalar Dependências

```bash
npm install
# ou
pnpm install
```

### 2.3 Compilar o Projeto

```bash
npm run build
# ou
pnpm build
```

Isso criará um diretório `dist/` com os arquivos prontos para deploy.

## 🌐 Passo 3: Configurar Variáveis de Ambiente

### 3.1 Editar wrangler.toml

Abra o arquivo `wrangler.toml` e configure a URL da API pinterest-downloader-api:

```toml
name = "pinterest-of-bot"
main = "dist/index.js"
compatibility_date = "2024-01-01"
workers_dev = true

[env.production]
vars = { PINTEREST_API_URL = "https://seu-servidor-pinterest-api.com" }

[env.development]
vars = { PINTEREST_API_URL = "http://localhost:3000" }
```

Substitua `https://seu-servidor-pinterest-api.com` pela URL real da sua API.

## 🚀 Passo 4: Testar Localmente

### 4.1 Iniciar o Servidor Local

```bash
npm run start
# ou
pnpm start
```

O bot estará disponível em `http://localhost:8787` (ou outra porta configurada).

### 4.2 Verificar o Status

Acesse `http://localhost:8787/status` em seu navegador. Você deve ver:

```json
{
  "status": "ok",
  "bot": "pinterest-downloader"
}
```

## 🌍 Passo 5: Implantar no Cloudflare

### 5.1 Fazer Deploy

```bash
npm run deploy
# ou
pnpm deploy
```

O Wrangler compilará e implantará o bot automaticamente. Você verá uma URL como:

```
✓ Deployed to https://pinterest-of-bot.seu-usuario.workers.dev
```

### 5.2 Anotar a URL do Worker

Copie a URL do seu Worker. Você precisará dela para configurar o webhook do Telegram.

## 🤖 Passo 6: Configurar o Webhook do Telegram

### 6.1 Acessar a Rota de Configuração

Abra seu navegador e acesse:

```
https://pinterest-of-bot.seu-usuario.workers.dev/setWebhook?url=https://pinterest-of-bot.seu-usuario.workers.dev/
```

Substitua `pinterest-of-bot.seu-usuario.workers.dev` pela URL real do seu Worker.

### 6.2 Verificar a Resposta

Você deve receber uma resposta JSON como:

```json
{
  "ok": true,
  "result": true,
  "description": "Webhook was set"
}
```

Se receber `"ok": false`, verifique se a URL está correta e se o Worker está funcionando.

## ✅ Passo 7: Testar o Bot

### 7.1 Abrir o Telegram

Procure pelo bot no Telegram usando o nome ou ID:

- **ID do Bot**: `8326140110`
- **Nome**: Procure por "Pinterest Video Downloader" ou similar

### 7.2 Enviar /start

Envie o comando `/start` para o bot. Você deve receber uma mensagem de boas-vindas no seu idioma.

### 7.3 Testar com uma URL

Envie uma URL do Pinterest, como:

```
https://www.pinterest.com/pin/123456789/
```

O bot deve processar a URL e tentar baixar o vídeo.

## 🔍 Solução de Problemas

### Problema: "Webhook was not set"

**Solução**: Verifique se:
- A URL do Worker está correta
- O Worker está funcionando (acesse `/status`)
- Não há espaços extras na URL

### Problema: Bot não responde

**Solução**: Verifique:
- Se o webhook foi configurado corretamente
- Os logs do Cloudflare Worker (use `wrangler tail`)
- Se a API pinterest-downloader-api está acessível

### Problema: Erro ao baixar vídeo

**Solução**: Verifique:
- Se a URL da API pinterest-downloader-api está correta em `wrangler.toml`
- Se a API está funcionando
- Se a URL do Pinterest é válida

### Ver Logs em Tempo Real

Para ver os logs do seu Worker em tempo real:

```bash
wrangler tail
```

Isso mostrará todos os logs e erros do bot enquanto ele processa requisições.

## 📊 Monitorar o Bot

### Acessar o Dashboard do Cloudflare

1. Acesse https://dash.cloudflare.com
2. Selecione sua conta
3. Vá para "Workers" no menu lateral
4. Clique em "pinterest-of-bot"
5. Você verá métricas como requisições, erros e latência

## 🔄 Atualizar o Bot

Quando você fizer alterações no código:

1. Compile o projeto: `npm run build`
2. Faça deploy: `npm run deploy`
3. O webhook do Telegram continuará funcionando automaticamente

## 🛑 Parar o Bot

Para desativar o bot, acesse:

```
https://pinterest-of-bot.seu-usuario.workers.dev/setWebhook?url=
```

Isso removerá o webhook e o bot deixará de receber mensagens.

## 📝 Notas Importantes

- O token do bot (`8326140110:AAGOufTHcRuFJ6DmzzSevt2OAk4I4qk9hMU`) está embutido no código. Em produção, considere usar Secrets do Cloudflare.
- A API pinterest-downloader-api deve estar acessível publicamente para que o Worker possa fazer requisições.
- O Cloudflare Workers tem limites de requisição por minuto. Para uso em larga escala, considere um plano pago.

## 🎉 Sucesso!

Se você chegou até aqui, o bot está configurado e funcionando! Parabéns! 🚀

---

**Desenvolvido com ❤️ para Cloudflare Workers**
