// Script para configurar o GitHub Pages
const fs = require('fs');
const path = require('path');

// Lê o arquivo package.json
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Adiciona os scripts de deploy
packageJson.scripts = {
  ...packageJson.scripts,
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
};

// Adiciona a configuração da homepage (substitua pelo seu usuário/repositório no GitHub)
packageJson.homepage = "https://yourusername.github.io/your-repo-name";

// Escreve o arquivo package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Configuração para GitHub Pages adicionada com sucesso!');
console.log('Por favor, substitua "yourusername" e "your-repo-name" no campo "homepage" do package.json pelo seu usuário e nome do repositório GitHub.');