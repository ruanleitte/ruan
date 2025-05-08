#!/bin/bash

# Este script configura e realiza o deploy para o GitHub Pages

echo "Iniciando processo de deploy para GitHub Pages..."

# Configuração do Git (se necessário)
if [ -z "$(git config user.name)" ]; then
  echo "Configurando usuário Git..."
  read -p "Digite seu nome de usuário Git: " username
  git config user.name "$username"
fi

if [ -z "$(git config user.email)" ]; then
  echo "Configurando email Git..."
  read -p "Digite seu email Git: " email
  git config user.email "$email"
fi

# Construindo o projeto (apenas a parte do frontend)
echo "Construindo o projeto..."
npm run build

# Verificando se a pasta dist foi criada
if [ ! -d "dist" ]; then
  echo "Erro: A pasta dist não foi criada. O build falhou."
  exit 1
fi

# Criando arquivo .nojekyll para o GitHub Pages
echo "Criando arquivo .nojekyll..."
touch dist/.nojekyll

# Configurando o repositório remoto
echo "Configurando o repositório remoto..."
if ! git remote | grep -q "origin"; then
  git remote add origin https://github.com/ruanleitte/ruan.git
fi

# Inicializando Git se necessário
if [ ! -d ".git" ]; then
  echo "Inicializando repositório Git..."
  git init
  git branch -M main
fi

# Criando branch gh-pages temporária
echo "Criando branch para GitHub Pages..."
git checkout -b gh-pages-tmp

# Adicionando apenas a pasta dist
echo "Adicionando arquivos para deploy..."
git add dist -f

# Commit das alterações
echo "Realizando commit..."
git commit -m "Deploy para GitHub Pages"

# Forçando push para branch gh-pages
echo "Enviando para GitHub Pages..."
git subtree push --prefix dist origin gh-pages

# Voltando para o branch principal
echo "Voltando para o branch principal..."
git checkout main
git branch -D gh-pages-tmp

echo "Deploy concluído! Seu site estará disponível em https://ruanleitte.github.io/ruan/"
echo "Pode levar alguns minutos para que as alterações sejam propagadas."