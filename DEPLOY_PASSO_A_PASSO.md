# Passo a Passo para Deploy no GitHub Pages

Este guia vai te mostrar como lançar seu site usando o GitHub Pages, mesmo sendo leigo em programação.

## Pré-requisitos

1. Ter uma conta no GitHub (crie uma em github.com se ainda não tiver)
2. Ter o Git instalado no seu computador
3. Ter o Node.js instalado no seu computador

## Passo 1: Baixar os Arquivos do Replit

1. No menu superior do Replit, clique em "Files" (Arquivos)
2. Clique nos três pontos (...) e selecione "Download as zip"
3. Extraia o arquivo ZIP em uma pasta no seu computador

## Passo 2: Preparar o Repositório Git Local

Abra o terminal (Prompt de Comando no Windows) e navegue até a pasta do projeto:

```bash
cd caminho/para/a/pasta/extraida
```

## Passo 3: Iniciar o Git e Conectar ao GitHub

Execute os comandos que você já tem:

```bash
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ruanleitte/ruan.git
```

## Passo 4: Construir o Projeto

Execute o comando para construir o projeto:

```bash
npm install
npm run build
```

Isso vai criar uma pasta `dist` com os arquivos do site prontos para deploy.

## Passo 5: Preparar para o GitHub Pages

Crie um arquivo `.nojekyll` na pasta dist para informar ao GitHub Pages que não use o Jekyll:

```bash
touch dist/.nojekyll
```

## Passo 6: Deploy para o GitHub Pages

Temos duas opções para fazer o deploy:

### Opção 1: Usando o script que criamos

1. Dê permissão de execução ao script:
   ```bash
   chmod +x github-deploy.sh
   ```

2. Execute o script:
   ```bash
   ./github-deploy.sh
   ```

3. Siga as instruções na tela

### Opção 2: Comandos manuais

Se preferir fazer manualmente, siga estes passos:

1. Adicione a pasta dist ao Git:
   ```bash
   git add dist -f
   ```

2. Faça um commit:
   ```bash
   git commit -m "Deploy para GitHub Pages"
   ```

3. Crie e envie para o branch gh-pages:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

## Passo 7: Configurar o GitHub Pages

1. Vá ao seu repositório no GitHub (https://github.com/ruanleitte/ruan)
2. Clique em "Settings" (Configurações)
3. No menu lateral, clique em "Pages" (Páginas)
4. Em "Source", selecione "Deploy from a branch"
5. Em "Branch", selecione "gh-pages" e clique em "Save"

## Passo 8: Acesse seu site

Após alguns minutos, seu site estará disponível em:
https://ruanleitte.github.io/ruan/

## Dicas para Atualizações Futuras

Quando quiser atualizar seu site:

1. Faça as alterações necessárias nos arquivos
2. Construa o projeto novamente:
   ```bash
   npm run build
   ```
3. Execute o script de deploy novamente:
   ```bash
   ./github-deploy.sh
   ```

Isso enviará as novas alterações para o GitHub Pages.

## Solução de Problemas

### Se tiver erros de autenticação:

Use o token de acesso pessoal do GitHub em vez de senha:

1. Vá para as configurações da sua conta GitHub
2. Acesse "Developer settings" > "Personal access tokens" > "Tokens (classic)"
3. Gere um novo token com permissões de "repo"
4. Use este token como senha quando solicitado

### Se o site não atualizar:

Às vezes, o GitHub Pages leva alguns minutos para mostrar as alterações. Se após 10 minutos não atualizar, verifique as configurações do GitHub Pages nas configurações do repositório.