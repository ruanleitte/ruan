# Passo a Passo para Deploy no GitHub Pages

Este guia simplificado vai te mostrar como lançar seu site usando o GitHub Pages, mesmo se você for leigo em programação.

## Pré-requisitos

1. Ter uma conta no GitHub (crie uma em github.com se ainda não tiver)
2. Ter o Git instalado no seu computador
3. Ter o Node.js instalado no seu computador

## Método Simplificado (Recomendado)

Criamos scripts especiais para facilitar todo o processo. Siga os passos abaixo:

### Passo 1: Baixar os Arquivos do Replit

1. No menu superior do Replit, clique em "Files" (Arquivos)
2. Clique nos três pontos (...) e selecione "Download as zip"
3. Extraia o arquivo ZIP em uma pasta no seu computador

### Passo 2: Abrir o Terminal

Abra o terminal (Prompt de Comando no Windows) e navegue até a pasta do projeto:

```bash
cd caminho/para/a/pasta/extraida
```

### Passo 3: Preparar os Arquivos Necessários

Execute o script de preparação que criamos:

```bash
# Dar permissão de execução ao script
chmod +x prepare-deploy.sh

# Executar o script de preparação
./prepare-deploy.sh
```

Este script vai preparar todos os arquivos necessários para o deploy.

### Passo 4: Fazer o Deploy

Execute o script de deploy:

```bash
# Dar permissão de execução ao script (se ainda não fez)
chmod +x github-deploy.sh

# Executar o script de deploy
./github-deploy.sh
```

Siga as instruções na tela. O script vai guiar você em todo o processo.

### Passo 5: Configurar o GitHub Pages

Após o deploy, você precisa ativar o GitHub Pages no seu repositório:

1. Vá ao seu repositório no GitHub (https://github.com/ruanleitte/ruan)
2. Clique em "Settings" (Configurações)
3. No menu lateral, clique em "Pages" (Páginas)
4. Em "Source", selecione "Deploy from a branch"
5. Em "Branch", selecione "gh-pages" e clique em "Save"

### Passo 6: Acesse seu site

Após alguns minutos, seu site estará disponível em:
https://ruanleitte.github.io/ruan/

## Método Manual (Alternativo)

Se preferir fazer manualmente ou tiver problemas com os scripts:

### Passo 1: Preparar o Repositório Git

```bash
# Inicializar o Git
git init

# Configurar seu nome e email (se necessário)
git config user.name "Seu Nome"
git config user.email "seu.email@exemplo.com"

# Criar o arquivo README inicial
echo "# Portfolio de Ruan" >> README.md
git add README.md
git commit -m "first commit"

# Configurar o branch principal
git branch -M main

# Conectar ao repositório remoto
git remote add origin https://github.com/ruanleitte/ruan.git
```

### Passo 2: Garantir que todos os arquivos HTML estão prontos

```bash
# Criar pasta dist se não existir
mkdir -p dist

# Copiar arquivos necessários
cp index.html dist/

# Criar arquivo .nojekyll
touch dist/.nojekyll

# Criar arquivo 404.html para SPA
# (copie o conteúdo do arquivo 404.html que criamos)
```

### Passo 3: Deploy para o GitHub Pages

```bash
# Criar branch temporário para deploy
git checkout -b gh-pages-tmp

# Adicionar pasta dist ao Git
git add dist -f

# Commit das alterações
git commit -m "Deploy para GitHub Pages"

# Push para o branch gh-pages
git subtree push --prefix dist origin gh-pages

# Voltar para o branch principal
git checkout main
git branch -D gh-pages-tmp
```

## Solução de Problemas

### Se o HTML não mostrar o site completo:

Nosso HTML principal inclui vários métodos para carregar o seu site:
1. Redirecionamento automático para o client/index.html
2. Um botão manual para acessar o site se o redirecionamento falhar
3. Um fallback para carregar o site de caminhos alternativos

### Se tiver erros de autenticação:

Use o token de acesso pessoal do GitHub em vez de senha:

1. Vá para as configurações da sua conta GitHub
2. Acesse "Developer settings" > "Personal access tokens" > "Tokens (classic)"
3. Gere um novo token com permissões de "repo"
4. Use este token como senha quando solicitado

### Se o site não atualizar:

Às vezes, o GitHub Pages leva alguns minutos para mostrar as alterações. Se após 10 minutos não atualizar, verifique as configurações do GitHub Pages nas configurações do repositório.