# Como Fazer Deploy do Site React Completo no GitHub Pages

Este guia explica como fazer o deploy do site React completo (que você está vendo no Replit) para o GitHub Pages.

## Por que o site não está aparecendo corretamente?

O problema ocorre porque:

1. O GitHub Pages espera configurações específicas para sites React (SPA - Single Page Applications)
2. O caminho base dos arquivos JS/CSS não está configurado corretamente para o GitHub Pages
3. O roteamento precisa ser especialmente tratado no GitHub Pages

## Solução: Deploy do Site Completo

Criamos um script específico que configura tudo corretamente para fazer o deploy do site React completo:

### Passo 1: Baixe os arquivos do Replit

1. No menu superior do Replit, clique em "Files" (Arquivos)
2. Clique nos três pontos (...) e selecione "Download as zip"
3. Extraia o arquivo ZIP em uma pasta no seu computador

### Passo 2: Execute o script de deploy completo

Abra o terminal (Prompt de Comando no Windows) e navegue até a pasta do projeto:

```bash
cd caminho/para/a/pasta/extraida
```

Execute o script de deploy completo:

```bash
# No Linux/Mac:
chmod +x deploy-full-site.sh
./deploy-full-site.sh

# No Windows (PowerShell):
bash deploy-full-site.sh
```

Este script fará automaticamente:

1. Configurar o caminho base correto para o GitHub Pages
2. Construir o projeto React com as configurações corretas
3. Adicionar arquivos especiais para SPA routing
4. Fazer o deploy para o branch gh-pages

### Passo 3: Configure o GitHub Pages

Após o script terminar:

1. Vá para https://github.com/ruanleitte/ruan/settings/pages
2. Em "Source", selecione "Deploy from a branch"
3. Em "Branch", selecione "gh-pages" e clique em "Save"

### Passo 4: Aguarde e acesse seu site

Aguarde alguns minutos para que o GitHub Pages processe as alterações e então acesse:
https://ruanleitte.github.io/ruan/

## Solução Alternativa (se o script não funcionar)

Se você estiver tendo problemas com o script, pode tentar esta abordagem manual:

1. **Edite manualmente o arquivo `vite.config.ts`**:
   - Adicione a linha `base: "/ruan/",` dentro do objeto de configuração
   - Este é o ponto mais importante para fazer o site funcionar

2. **Execute o build manualmente**:
   ```bash
   npm run build
   ```

3. **Adicione os arquivos especiais para GitHub Pages**:
   ```bash
   touch dist/.nojekyll
   ```

4. **Faça o deploy manualmente**:
   ```bash
   git add dist -f
   git commit -m "Deploy do site completo"
   git subtree push --prefix dist origin gh-pages
   ```

## Verificando se Funcionou

Você saberá que o site está funcionando corretamente quando:

1. A página inicial carrega completamente (sem a mensagem "Carregando portfolio...")
2. A navegação entre as páginas funciona (você pode clicar nos links do menu)
3. Os estilos e imagens aparecem corretamente

Se o site ainda não estiver funcionando após seguir estes passos, pode ser necessário limpar o cache do navegador ou aguardar mais tempo para que o GitHub Pages atualize.