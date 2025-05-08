# Implantação no GitHub Pages

Este documento explica como implantar este projeto no GitHub Pages para que seu site fique disponível online.

## Pré-requisitos

1. Ter uma conta no GitHub
2. Ter criado um repositório para este projeto
3. Ter acesso ao terminal

## Passos para implantação

### 1. Clone seu repositório localmente (se ainda não tiver feito)

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Configure o script de implantação

Edite o arquivo `deploy-setup.js` e atualize a linha do homepage com seu nome de usuário e nome do repositório:

```javascript
packageJson.homepage = "https://seu-usuario.github.io/seu-repositorio";
```

### 3. Execute o script de implantação

```bash
# Torne o script executável
chmod +x deploy-github.sh

# Execute o script
./deploy-github.sh
```

Este script fará o seguinte:
- Configurará seu package.json para deploy no GitHub Pages
- Construirá o projeto
- Criará um arquivo .nojekyll para garantir que o GitHub Pages trate seu projeto corretamente
- Fará o deploy no GitHub Pages

### 4. Verificar a implantação

Após executar o script, aguarde alguns minutos e acesse:
```
https://seu-usuario.github.io/seu-repositorio
```

## Notas importantes

- Certifique-se de que as configurações do seu repositório no GitHub permitam GitHub Pages (Settings > Pages)
- Se você estiver usando um domínio personalizado, precisará configurá-lo nas configurações do GitHub Pages
- Você pode precisar ajustar as rotas no seu aplicativo para trabalhar com GitHub Pages, já que ele não suporta roteamento do lado do servidor

## Resolução de problemas

- Se o site não estiver acessível após alguns minutos, verifique as configurações do GitHub Pages no seu repositório
- Certifique-se de que a branch gh-pages foi criada corretamente
- Verifique se há erros no console durante o processo de build e deploy