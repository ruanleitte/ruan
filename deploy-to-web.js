// Script para preparar e fazer deploy do site ao GitHub
const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== Preparando site para GitHub Pages ===');

try {
  // Criar pasta para build temporária se não existir
  if (!fs.existsSync('build-temp')) {
    fs.mkdirSync('build-temp');
  }

  console.log('1. Gerando build do projeto...');
  
  // Executar o build
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('2. Modificando arquivos para GitHub Pages...');
  
  // Criar arquivo .nojekyll
  fs.writeFileSync('dist/.nojekyll', '');
  
  // Criar arquivo 404.html para redirecionamento SPA
  const html404 = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecionando...</title>
  <script>
    // Para sites React no GitHub Pages
    // Redireciona todas as navegações para index.html para que o roteamento da SPA funcione
    sessionStorage.redirect = location.href;
    location.href = "/web/";
  </script>
</head>
<body>
  <h1>Redirecionando...</h1>
  <p>Se você não for redirecionado, <a href="/web/">clique aqui</a>.</p>
</body>
</html>`;
  
  fs.writeFileSync('dist/404.html', html404);
  
  // Modificar index.html para adicionar suporte a redirecionamento
  console.log('3. Modificando index.html...');
  
  if (fs.existsSync('dist/index.html')) {
    let indexContent = fs.readFileSync('dist/index.html', 'utf8');
    
    // Adicionar script para tratar redirecionamentos no <head>
    const scriptToAdd = `<script>
  // Esse script ajuda com o redirecionamento do GitHub Pages para SPAs
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>`;
    
    // Inserir o script antes do </head>
    indexContent = indexContent.replace('</head>', `${scriptToAdd}\n</head>`);
    
    // Salvar arquivo modificado
    fs.writeFileSync('dist/index.html', indexContent);
  }
  
  // Criar script para adicionar atributos base nos recursos
  console.log('4. Configurando caminhos base para recursos...');
  
  // Copiar toda a estrutura de dist para build-temp
  execSync('cp -r dist/* build-temp/');
  
  console.log('5. Criando um index.html na raiz para redirecionamento...');
  
  // Criar index.html na raiz do projeto para redirecionamento
  const rootIndex = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=dist/index.html">
  <title>Redirecionando para o Portfolio</title>
</head>
<body>
  <p>Redirecionando para o site principal... <a href="dist/index.html">Clique aqui</a> se não for redirecionado automaticamente.</p>
</body>
</html>`;
  
  fs.writeFileSync('index.html', rootIndex);
  
  console.log('6. Preparando arquivos para GitHub...');
  
  // Instruções para o usuário
  console.log('\n=== DEPLOYMENT PRONTO! ===\n');
  console.log('Siga as instruções:');
  console.log('1. No Replit, baixe TODO o projeto (Files > Download as zip)');
  console.log('2. Extraia o arquivo zip em seu computador');
  console.log('3. No GitHub (https://github.com/ruanleitte/web):');
  console.log('   - Clique em "Add file" > "Upload files"');
  console.log('   - Arraste TODOS os arquivos extraídos (incluindo as pastas dist e client)');
  console.log('   - Clique em "Commit changes"');
  console.log('4. Configure o GitHub Pages:');
  console.log('   - Vá para https://github.com/ruanleitte/web/settings/pages');
  console.log('   - Em "Source", selecione "Deploy from a branch"');
  console.log('   - Em "Branch", selecione "main" e "/ (root)"');
  console.log('   - Clique em "Save"');
  console.log('\nO site estará disponível em: https://ruanleitte.github.io/web/');
  
} catch (error) {
  console.error('Erro durante o processo:', error);
}