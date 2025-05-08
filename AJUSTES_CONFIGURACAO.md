# Ajustes de Configuração para GitHub Pages

Antes de fazer o deploy para o GitHub Pages, você precisará fazer as seguintes alterações em arquivos de configuração:

## 1. Ajuste no vite.config.ts

Abra o arquivo `vite.config.ts` em um editor de texto e faça as seguintes modificações:

```typescript
// Adicione a linha base: "/ruan/" após a seção de resolve
base: "/ruan/", // Isso define o caminho base para o GitHub Pages

// Modifique a seção build para:
build: {
  outDir: path.resolve(import.meta.dirname, "dist"), // Remova o '/public' do caminho
  emptyOutDir: true,
},
```

Esta configuração é crucial para que seu site funcione corretamente no GitHub Pages.

## 2. Criação de arquivo de roteamento

Como estamos usando o React Router (ou Wouter), precisamos criar um arquivo para ajudar o GitHub Pages a lidar com as rotas. Crie um arquivo chamado `404.html` na pasta `public` com o seguinte conteúdo:

```html
<!DOCTYPE html>
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
</html>
```

E adicione o seguinte script ao seu `index.html`, dentro da tag `<head>`:

```html
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
</script>
```

Estes ajustes são necessários para que as rotas funcionem corretamente quando o site estiver hospedado no GitHub Pages.

## 3. Modificação do package.json

Se possível, adicione as seguintes linhas ao seu package.json:

```json
"homepage": "https://ruanleitte.github.io/ruan",
"scripts": {
  // outros scripts já existentes
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Lembre-se de fazer esses ajustes antes de executar o script de deploy que criamos anteriormente.