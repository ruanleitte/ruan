// Este script pode ser executado diretamente no Replit
// para fazer deploy do site React completo para o GitHub Pages

const fs = require('fs');
const { execSync } = require('child_process');

console.log('========================================================');
console.log('  PREPARANDO E FAZENDO DEPLOY DO SITE REACT COMPLETO  ');
console.log('========================================================');

try {
  // Etapa 1: Criar um arquivo vite.config.js temporário com a configuração correta
  console.log('[1/5] Configurando o caminho base para GitHub Pages...');
  
  const viteConfig = `import { defineConfig } from "vite";
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
});`;

  fs.writeFileSync('vite.config.js', viteConfig);
  console.log('Arquivo vite.config.js criado com sucesso.');

  // Etapa 2: Construir o projeto
  console.log('[2/5] Construindo o projeto React...');
  execSync('npm run build', { stdio: 'inherit' });

  // Etapa 3: Adicionar arquivos especiais para GitHub Pages
  console.log('[3/5] Adicionando arquivos especiais para GitHub Pages...');
  fs.writeFileSync('dist/.nojekyll', '');

  // Criar arquivo 404.html para SPA routing
  const html404 = `<!DOCTYPE html>
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
</html>`;

  fs.writeFileSync('dist/404.html', html404);

  // Modificar o index.html para adicionar script de redirecionamento SPA
  console.log('[4/5] Modificando index.html para roteamento SPA...');
  if (fs.existsSync('dist/index.html')) {
    let indexHtml = fs.readFileSync('dist/index.html', 'utf8');
    const spaScript = `<!-- Script para lidar com rotas SPA no GitHub Pages -->
  <script type="text/javascript">
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>`;
    
    // Inserir o script antes do fechamento da tag head
    indexHtml = indexHtml.replace('</head>', `${spaScript}\n</head>`);
    fs.writeFileSync('dist/index.html', indexHtml);
    console.log('index.html modificado com sucesso.');
  } else {
    console.error('Arquivo index.html não encontrado na pasta dist!');
    process.exit(1);
  }

  // Etapa 5: Instruções finais
  console.log('[5/5] Preparação concluída!');
  console.log('\n✅ ARQUIVOS PREPARADOS COM SUCESSO! ✅\n');
  console.log('Para finalizar o deploy:');
  console.log('1. Baixe a pasta dist do Replit (Files -> clique na pasta dist -> Download)');
  console.log('2. No GitHub, acesse seu repositório: https://github.com/ruanleitte/ruan');
  console.log('3. Vá para a branch gh-pages ou crie-a se não existir');
  console.log('4. Clique em "Add file" -> "Upload files" e faça upload de todos os arquivos da pasta dist');
  console.log('5. Confirme o commit com a mensagem "Deploy site completo"');
  console.log('6. Certifique-se de configurar o GitHub Pages para usar a branch gh-pages nas configurações do repositório');
  
} catch (error) {
  console.error('Ocorreu um erro durante o processo:', error);
  process.exit(1);
}