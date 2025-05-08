#!/bin/bash

# Este script prepara e faz deploy do site React completo para o GitHub Pages
# Ele configura corretamente todos os caminhos para que o site funcione no GitHub Pages

echo "========================================================="
echo "  PREPARANDO E FAZENDO DEPLOY DO SITE REACT COMPLETO  "
echo "========================================================="

# Etapa 1: Modificar temporariamente o arquivo vite.config.ts para configurar o caminho base
echo "[1/7] Configurando o caminho base para GitHub Pages..."

# Criar um arquivo temporário com a configuração correta
cat > vite.config.temp.js << EOF
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  base: "/ruan/", // Define o caminho base para GitHub Pages
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
EOF

# Substituir o arquivo original pela versão temporária usando o Node.js para evitar problemas de permissão
node -e "const fs = require('fs'); try { fs.copyFileSync('vite.config.temp.js', 'vite.config.ts'); console.log('Arquivo vite.config.ts atualizado com sucesso.'); } catch(err) { console.error('Erro ao atualizar vite.config.ts:', err); process.exit(1); }"

# Remover o arquivo temporário
rm vite.config.temp.js

# Etapa 2: Executar o build com a configuração atualizada
echo "[2/7] Construindo o projeto React (pode levar alguns minutos)..."
npm run build || { echo "Erro ao construir o projeto!"; exit 1; }

# Etapa 3: Adicionar arquivo .nojekyll
echo "[3/7] Adicionando arquivo .nojekyll..."
touch dist/.nojekyll

# Etapa 4: Criar arquivo 404.html para rotas SPA
echo "[4/7] Criando arquivo 404.html para rotas SPA..."
cat > dist/404.html << EOF
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecionando...</title>
  <script type="text/javascript">
    // Redirecionar qualquer caminho para o index.html (SPA routing)
    var pathSegmentsToKeep = 1; // Corresponde a "/ruan"
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
  <h1>Redirecionando...</h1>
  <p>Se você não for redirecionado automaticamente, <a href="https://ruanleitte.github.io/ruan/">clique aqui</a>.</p>
</body>
</html>
EOF

# Etapa 5: Modificar o index.html para adicionar o script de redirecionamento
echo "[5/7] Modificando o index.html para roteamento SPA..."
# Verificar se o arquivo index.html existe
if [ -f "dist/index.html" ]; then
  # Adicionar script de roteamento para SPA antes da tag </head>
  sed -i 's/<\/head>/<!-- Script para lidar com rotas SPA no GitHub Pages -->\n  <script type="text\/javascript">\n    (function(l) {\n      if (l.search[1] === "\/" ) {\n        var decoded = l.search.slice(1).split("\&").map(function(s) { \n          return s.replace(\/~and~\/g, "\&")\n        }).join("?");\n        window.history.replaceState(null, null,\n            l.pathname.slice(0, -1) + decoded + l.hash\n        );\n      }\n    }(window.location))\n  <\/script>\n<\/head>/' dist/index.html
  echo "Arquivo index.html modificado com sucesso."
else
  echo "Arquivo index.html não encontrado na pasta dist! Verifique se o build foi bem-sucedido."
  exit 1
fi

# Etapa 6: Fazer deploy para o GitHub Pages
echo "[6/7] Fazendo deploy para o GitHub Pages..."
# Verificar se o Git está inicializado
if [ ! -d ".git" ]; then
  echo "Inicializando repositório Git..."
  git init
  git branch -M main
fi

# Verificar se o remote origin está configurado
if ! git remote | grep -q "origin"; then
  echo "Configurando repositório remoto..."
  git remote add origin https://github.com/ruanleitte/ruan.git
fi

# Criar branch temporário para deploy
echo "Criando branch temporário para deploy..."
git checkout -b gh-pages-tmp

# Adicionar os arquivos da build
echo "Adicionando arquivos da build..."
git add dist -f
git commit -m "Deploy do site completo para GitHub Pages - $(date +'%d/%m/%Y %H:%M')"

# Push para o branch gh-pages
echo "Enviando para o branch gh-pages..."
git subtree push --prefix dist origin gh-pages

# Voltar para o branch principal
echo "Limpando ambiente de trabalho..."
git checkout main
git branch -D gh-pages-tmp

# Etapa 7: Instruções finais
echo "[7/7] Configurando o GitHub Pages..."
echo ""
echo "✅ DEPLOY CONCLUÍDO COM SUCESSO! ✅"
echo ""
echo "Seu site estará disponível em alguns minutos em:"
echo "https://ruanleitte.github.io/ruan/"
echo ""
echo "IMPORTANTE: Certifique-se de configurar corretamente o GitHub Pages:"
echo "1. Acesse https://github.com/ruanleitte/ruan/settings/pages"
echo "2. Em 'Source', selecione 'Deploy from a branch'"
echo "3. Em 'Branch', selecione 'gh-pages' e clique em 'Save'"
echo ""
echo "Observação: Pode levar alguns minutos para que as alterações sejam propagadas."