// Script para construir o projeto especificamente para GitHub Pages
// Execute com: node build-for-github.js

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cores para o console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

console.log(`${colors.blue}Preparando build para GitHub Pages...${colors.reset}`);

// Função para executar comandos e mostrar saída
function run(command) {
  console.log(`${colors.yellow}Executando: ${command}${colors.reset}`);
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`${colors.red}Erro ao executar comando: ${error}${colors.reset}`);
    return false;
  }
}

// Limpa o diretório dist
if (fs.existsSync(path.join(__dirname, 'dist'))) {
  console.log(`${colors.yellow}Limpando diretório dist...${colors.reset}`);
  fs.rmSync(path.join(__dirname, 'dist'), { recursive: true, force: true });
}

// Executa o build com as configurações modificadas
console.log(`${colors.blue}Iniciando build...${colors.reset}`);
const buildSuccess = run('NODE_ENV=production npx vite build --base=/ruan/ --outDir=../dist client');

if (!buildSuccess) {
  console.error(`${colors.red}Build falhou!${colors.reset}`);
  process.exit(1);
}

// Cria arquivo .nojekyll
fs.writeFileSync(path.join(__dirname, 'dist', '.nojekyll'), '');
console.log(`${colors.green}Arquivo .nojekyll criado.${colors.reset}`);

// Cria arquivo 404.html para SPA routing
const html404 = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecionando...</title>
  <script type="text/javascript">
    // Redirecionar todas as requisições para o index.html
    var pathSegmentsToKeep = 1; // Isso corresponde a "/ruan"
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
  Redirecionando...
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'dist', '404.html'), html404);
console.log(`${colors.green}Arquivo 404.html criado para roteamento SPA.${colors.reset}`);

// Modifica o index.html para adicionar script de redirecionamento
try {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  const redirectScript = `
  <script type="text/javascript">
    // Código para lidar com o redirecionamento do GitHub Pages para SPA
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
  
  // Insere o script após a tag head
  if (indexContent.includes('</head>')) {
    indexContent = indexContent.replace('</head>', `${redirectScript}\n</head>`);
    fs.writeFileSync(indexPath, indexContent);
    console.log(`${colors.green}Script de redirecionamento adicionado ao index.html.${colors.reset}`);
  }
} catch (error) {
  console.error(`${colors.red}Erro ao modificar index.html: ${error}${colors.reset}`);
}

console.log(`${colors.green}Build para GitHub Pages concluído com sucesso!${colors.reset}`);
console.log(`${colors.blue}Arquivos prontos para deploy na pasta 'dist'.${colors.reset}`);
console.log(`${colors.yellow}Execute o script github-deploy.sh para fazer o deploy.${colors.reset}`);