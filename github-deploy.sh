#!/bin/bash

# Script simplificado para deploy do site no GitHub Pages
# Feito para leigos em programação

echo "=========================================="
echo "  DEPLOY PARA GITHUB PAGES - PASSO A PASSO  "
echo "=========================================="

# Configurar Git se necessário
if [ -z "$(git config user.name)" ]; then
  echo "[1/7] Configurando seu nome no Git..."
  read -p "Digite seu nome: " username
  git config user.name "$username"
else
  echo "[1/7] Nome de usuário Git já configurado. ✓"
fi

if [ -z "$(git config user.email)" ]; then
  echo "[2/7] Configurando seu email no Git..."
  read -p "Digite seu email: " email
  git config user.email "$email"
else
  echo "[2/7] Email Git já configurado. ✓"
fi

# Verificar e configurar repositório
echo "[3/7] Configurando o repositório Git..."
if [ ! -d ".git" ]; then
  echo "Criando um novo repositório Git..."
  git init
  git branch -M main
  echo "Repositório Git criado com sucesso! ✓"
else
  echo "Repositório Git já existe. ✓"
fi

if ! git remote | grep -q "origin"; then
  echo "Adicionando o repositório remoto..."
  git remote add origin https://github.com/ruanleitte/ruan.git
  echo "Repositório remoto adicionado com sucesso! ✓"
else
  echo "Repositório remoto já configurado. ✓"
fi

# Verificar se a pasta dist existe e tem os arquivos necessários
echo "[4/7] Verificando arquivos necessários para deploy..."
if [ ! -f "dist/index.html" ] || [ ! -f "dist/404.html" ]; then
  echo "Alguns arquivos necessários estão faltando. Você já fez o build do projeto?"
  echo "Certifique-se de ter os arquivos index.html e 404.html na pasta dist."
  read -p "Deseja continuar mesmo assim? (s/n): " continuar
  if [ "$continuar" != "s" ]; then
    echo "Deploy cancelado. Execute o build antes de prosseguir."
    exit 1
  fi
else
  echo "Arquivos necessários encontrados. ✓"
fi

# Verificar se o arquivo .nojekyll existe
if [ ! -f "dist/.nojekyll" ]; then
  echo "Criando arquivo .nojekyll..."
  touch dist/.nojekyll
  echo "Arquivo .nojekyll criado com sucesso! ✓"
else
  echo "Arquivo .nojekyll já existe. ✓"
fi

# Fazer deploy para o branch gh-pages
echo "[5/7] Preparando deploy para o GitHub Pages..."
echo "Criando branch temporário para deploy..."
git checkout -b gh-pages-tmp 2>/dev/null || git checkout gh-pages-tmp

# Adicionar conteúdo da pasta dist
echo "[6/7] Adicionando arquivos para deploy..."
git add dist -f
git commit -m "Deploy do site para GitHub Pages - $(date +'%d/%m/%Y %H:%M')" 

# Push para o branch gh-pages
echo "[7/7] Enviando site para o GitHub..."
git subtree push --prefix dist origin gh-pages

# Voltar para o branch principal
echo "Limpando ambiente de trabalho..."
git checkout main
git branch -D gh-pages-tmp

echo ""
echo "✅ DEPLOY CONCLUÍDO COM SUCESSO! ✅"
echo ""
echo "Seu site estará disponível em alguns minutos em:"
echo "https://ruanleitte.github.io/ruan/"
echo ""
echo "IMPORTANTE: Se for a primeira vez que você faz o deploy,"
echo "você precisa habilitar o GitHub Pages nas configurações do repositório:"
echo "1. Acesse https://github.com/ruanleitte/ruan/settings/pages"
echo "2. Em 'Source', selecione 'Deploy from a branch'"
echo "3. Em 'Branch', selecione 'gh-pages' e clique em 'Save'"
echo ""