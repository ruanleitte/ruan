# Instruções para Deploy no Netlify (Full-Stack App)

Seu site é uma aplicação full-stack com React no frontend e Express.js no backend. Para fazer deploy no Netlify, siga estes passos:

## Preparação do projeto (já feita)

1. ✅ Criei o arquivo `netlify.toml` com as configurações para função serverless
2. ✅ Criei a pasta `netlify/functions` com um arquivo `api.js` para servir como proxy para seu backend
3. ✅ Adicionei um `package-netlify.json` com as dependências necessárias

## Passos para o deploy no Netlify

### Opção 1: Via GitHub (recomendado)

1. **Renomeie o arquivo package-netlify.json**:
   ```bash
   mv package-netlify.json package.json
   ```

2. **Envie seu código para o GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Configuração para Netlify"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -f origin main
   ```

3. **No Netlify**:
   - Acesse https://app.netlify.com/
   - Clique em "Add new site" > "Import an existing project"
   - Selecione "GitHub" e encontre seu repositório
   - Configurações de build:
     - Build command: `npm run build`
     - Publish directory: `dist/public`
   - Clique em "Show advanced" e adicione variáveis de ambiente se necessário
   - Clique em "Deploy site"

### Opção 2: Deploy Manual (mais complicado)

1. **Renomeie o arquivo package-netlify.json**:
   ```bash
   mv package-netlify.json package.json
   ```

2. **Instale as dependências e faça o build**:
   ```bash
   npm install
   npm run build
   ```

3. **Prepare os arquivos para upload**:
   - Baixe o conteúdo completo do projeto (incluindo a pasta `dist` e `netlify`)
   - Compacte em um arquivo ZIP

4. **No Netlify**:
   - Acesse https://app.netlify.com/
   - Clique em "Add new site" > "Deploy manually"
   - Arraste o arquivo ZIP
   - Configure as variáveis de ambiente se necessário

## Verificando o deploy

1. Após o deploy, o Netlify fornecerá um URL (algo como `seu-site.netlify.app`)
2. Acesse o URL para verificar se a aplicação está funcionando corretamente
3. Teste tanto o frontend quanto as APIs do backend

## Importante: Banco de Dados

Se sua aplicação utiliza banco de dados:

1. No Netlify, vá para "Site settings" > "Environment variables"
2. Adicione o `DATABASE_URL` e outras variáveis de ambiente necessárias
3. Para bancos de dados, recomendamos:
   - Neon Database (PostgreSQL) - https://neon.tech
   - Supabase - https://supabase.com
   - Railway - https://railway.app

## Solução de Problemas

Se o site não funcionar corretamente:

1. Verifique os logs de build no Netlify
2. Verifique as funções serverless na seção "Functions" do Netlify
3. Certifique-se de que todas as variáveis de ambiente estão configuradas