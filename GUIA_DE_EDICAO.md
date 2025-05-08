# Guia de Edição do Site

Este guia explica como editar os diferentes componentes do seu site.

## Estrutura de Diretórios

```
├── client
│   ├── src
│   │   ├── components - Componentes reutilizáveis
│   │   ├── context - Contextos como idioma
│   │   ├── data - Arquivos de dados para o site
│   │   ├── hooks - Hooks personalizados
│   │   ├── layout - Componentes de layout (navbar, footer)
│   │   ├── lib - Funções utilitárias
│   │   └── pages - Páginas do site
│   └── index.html - Arquivo HTML principal
├── server - Backend
└── shared - Schemas compartilhados
```

## Como Editar Páginas

### Home Page
- **Arquivo**: `client/src/pages/home.tsx`
- **O que pode ser editado**:
  - Texto de boas-vindas
  - Imagem principal
  - Seções de destaque

### Página Sobre (About)
- **Arquivo**: `client/src/pages/about.tsx`
- **O que pode ser editado**:
  - Informações pessoais/profissionais
  - Texto biográfico
  - Fotos

### Currículo (Resume)
- **Arquivo**: `client/src/pages/resume-improved.tsx`
- **O que pode ser editado**:
  - Experiências profissionais
  - Formação acadêmica
  - Habilidades
  - Certificações

### Empresas
- **Arquivo**: `client/src/pages/empresas.tsx`
- **O que pode ser editado**:
  - Lista de empresas
  - Informações sobre cada empresa
  - Logos e imagens das empresas

### Contato
- **Arquivo**: `client/src/pages/contact-improved.tsx`
- **O que pode ser editado**:
  - Formulário de contato
  - Informações de contato
  - Links para redes sociais

## Como Editar Componentes Comuns

### Barra de Navegação
- **Arquivo**: `client/src/components/layout/navbar.tsx`
- **O que pode ser editado**:
  - Links de navegação
  - Logo
  - Funcionalidade de idioma

### Rodapé
- **Arquivo**: `client/src/components/layout/footer.tsx`
- **O que pode ser editado**:
  - Informações de copyright
  - Links adicionais
  - Redes sociais

## Como Editar o Conteúdo

### Adicionar ou Remover Empresas
1. Abra o arquivo `client/src/pages/empresas.tsx`
2. Procure a seção que contém a matriz ou objetos de empresas
3. Adicione um novo objeto de empresa ou remova um existente seguindo o mesmo formato

### Modificar Tamanhos de Cards
1. Os tamanhos dos cards são controlados por classes Tailwind CSS
2. Procure por classes como `w-full`, `md:w-1/2`, `lg:w-1/3` etc.
3. Modifique estas classes para alterar a largura dos cards
4. Para altura, procure por classes como `h-auto`, `h-full`, `h-[300px]` etc.

### Atualizar Texto
1. Localize o texto que deseja alterar na página respectiva
2. Edite o texto diretamente nos arquivos tsx
3. Para textos em diferentes idiomas, procure os arquivos de tradução na pasta de contexto

### Alterar Imagens
1. Adicione novas imagens à pasta `public` ou ao diretório apropriado
2. Atualize os caminhos das imagens nos arquivos de código

## Dicas de Edição
- Sempre teste as alterações localmente antes de fazer deploy
- Mantenha a consistência no design ao fazer mudanças
- Faça backup antes de edições importantes