#!/bin/bash

# Script para preparar os arquivos para deploy
# Este script copia os arquivos necessários para a pasta dist

echo "==================================================="
echo "  PREPARANDO ARQUIVOS PARA DEPLOY NO GITHUB PAGES  "
echo "==================================================="

# Garantir que a pasta dist exista
if [ ! -d "dist" ]; then
  echo "Criando pasta dist..."
  mkdir -p dist
fi

# Verificar se o arquivo .nojekyll existe
if [ ! -f "dist/.nojekyll" ]; then
  echo "Criando arquivo .nojekyll..."
  touch dist/.nojekyll
fi

# Copiar versão modificada do index.html para dist se ainda não existir
if [ -f "index.html" ] && [ ! -f "dist/index.html" ]; then
  echo "Copiando index.html para pasta dist..."
  cp index.html dist/
fi

# Garantir que o arquivo 404.html existe
if [ ! -f "dist/404.html" ]; then
  echo "Criando arquivo 404.html para GitHub Pages..."
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
  echo "Arquivo 404.html criado com sucesso!"
fi

# Garantir que existe uma pasta client dentro de dist
if [ ! -d "dist/client" ]; then
  echo "Criando pasta dist/client..."
  mkdir -p dist/client
  
  # Se houver um client/index.html, copiar para dist/client
  if [ -f "client/index.html" ]; then
    echo "Copiando client/index.html para dist/client..."
    cp client/index.html dist/client/
  fi
fi

# Verificar se existe uma pasta build dentro de client e copiar para dist se necessário
if [ -d "client/build" ] && [ ! -d "dist/client/build" ]; then
  echo "Copiando client/build para dist/client/build..."
  cp -r client/build dist/client/
fi

# Verificar se existe uma pasta dist/assets
if [ ! -d "dist/assets" ] && [ -d "client/src" ]; then
  echo "Criando link para assets..."
  mkdir -p dist/assets
  ln -sf ../../client/src dist/assets/src 2>/dev/null || echo "Não foi possível criar link simbólico para src"
fi

# Criar um script de fallback que será útil em qualquer ambiente
echo "Criando script de fallback..."
cat > dist/fallback.js << EOF
// Script que tenta carregar o aplicativo de várias maneiras
(function() {
  function tryLoadApp() {
    // Lista de possíveis caminhos para tentar carregar o aplicativo
    var paths = [
      './assets/index.js',
      './assets/main.js',
      './client/index.html',
      './client/src/main.js',
      './src/main.js',
      './index.js'
    ];
    
    // Tenta cada caminho
    for (var i = 0; i < paths.length; i++) {
      try {
        var script = document.createElement('script');
        script.src = paths[i];
        script.type = 'module';
        document.body.appendChild(script);
        console.log('Tentando carregar: ' + paths[i]);
      } catch (e) {
        console.error('Erro ao carregar ' + paths[i] + ': ' + e);
      }
    }
  }
  
  // Tenta carregar o app quando a página terminar de carregar
  window.addEventListener('DOMContentLoaded', tryLoadApp);
})();
EOF
echo "Script de fallback criado com sucesso!"

echo ""
echo "✅ ARQUIVOS PREPARADOS COM SUCESSO! ✅"
echo ""
echo "Agora você pode executar o script github-deploy.sh para fazer o deploy:"
echo "$ ./github-deploy.sh"
echo ""