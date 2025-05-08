# Portfolio de Ruan

Este é o código fonte do meu portfolio profissional, mostrando minha experiência, habilidades e projetos.

## Visão Geral

Este site é desenvolvido com:
- React com TypeScript
- Tailwind CSS
- Componentes UI personalizados
- Design responsivo

## Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/ruanleitte/ruan.git
cd ruan
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

## Deploy

Este site está configurado para ser hospedado no GitHub Pages. Para fazer o deploy:

1. Certifique-se de que os arquivos index.html e 404.html estão na pasta dist
2. Execute o script de deploy:
```bash
chmod +x github-deploy.sh
./github-deploy.sh
```

3. Siga as instruções na tela

O site ficará disponível em: https://ruanleitte.github.io/ruan/

## Estrutura do Projeto

- `client/`: Código do frontend
  - `src/`: Código fonte principal
    - `components/`: Componentes React reutilizáveis
    - `pages/`: Páginas do site
    - `hooks/`: Hooks personalizados
    - `lib/`: Utilitários e funções auxiliares
- `server/`: Código do backend (para desenvolvimento local)
- `shared/`: Schemas e tipos compartilhados

## Edição e Manutenção

Veja os arquivos de documentação para detalhes sobre como editar o conteúdo:
- `GUIA_DE_EDICAO.md`: Como editar o conteúdo do site
- `DEPLOY_PASSO_A_PASSO.md`: Como fazer o deploy do site
- `AJUSTES_CONFIGURACAO.md`: Configurações especiais para deploy