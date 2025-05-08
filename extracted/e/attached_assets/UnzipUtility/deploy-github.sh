#!/bin/bash

# Execute o script de configuração
node deploy-setup.js

# Construa o projeto
npm run build

# Crie o arquivo .nojekyll
touch dist/.nojekyll

# Execute o deploy
npm run deploy

echo "Deploy concluído! Seu site estará disponível em alguns minutos em https://yourusername.github.io/your-repo-name"
echo "Certifique-se de que atualizou o campo 'homepage' no package.json com o seu usuário e nome do repositório GitHub."