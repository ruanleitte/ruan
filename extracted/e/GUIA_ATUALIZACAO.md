# Guia de Atualização do Portfólio

Este guia explica como atualizar manualmente os diferentes elementos do seu portfólio pessoal, incluindo como adicionar novas empresas, experiências profissionais ou modificar informações existentes.

## Sumário

1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Adicionando Novas Empresas](#adicionando-novas-empresas)
3. [Atualizando Experiências Profissionais](#atualizando-experiências-profissionais)
4. [Modificando Textos e Traduções](#modificando-textos-e-traduções)
5. [Atualizando Informações de Contato](#atualizando-informações-de-contato)
6. [Considerações Importantes](#considerações-importantes)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `client/src/pages/`: Contém as páginas principais do site
  - `home.tsx`: Página inicial
  - `about.tsx`: Página Sobre Mim
  - `empresas.tsx`: Página que lista as empresas em que você trabalhou
  - `resume.tsx`: Página do currículo detalhado
  - `contact-improved.tsx`: Página de contato com formulário

- `client/src/lib/translations.ts`: Contém todas as traduções do site em diferentes idiomas

- `client/src/components/`: Contém os componentes reutilizáveis

## Adicionando Novas Empresas

Para adicionar uma nova empresa na página "Empresas", siga estes passos:

1. Abra o arquivo `client/src/pages/empresas.tsx`
2. Localize o array `companiesData` que contém todas as empresas em diferentes idiomas
3. Adicione a nova empresa em cada seção de idioma (`pt-br`, `en` e `es`), mantendo a estrutura existente:

```typescript
// Exemplo de adição de nova empresa (para português)
{
  id: 9, // Incremente este número para cada nova empresa
  name: "Nome da Nova Empresa",
  period: "Mês/Ano - Mês/Ano",
  industry: "Setor da Empresa",
  segment: "Segmento específico",
  locations: ["Cidade 1", "Cidade 2"],
  clients: ["Tipo de Cliente 1", "Tipo de Cliente 2"],
  category: "tecnologia", // Use uma das categorias existentes: "logistica", "tecnologia", "educacao", "servicos"
  color: "#HEXCODE" // Código de cor para o tema da empresa
}

// Siga o mesmo padrão para as versões em inglês e espanhol
```

**IMPORTANTE**: Mantenha as mesmas informações nas três versões, traduzindo apenas os textos para cada idioma.

## Atualizando Experiências Profissionais

Para adicionar ou atualizar experiências profissionais no currículo:

1. Abra o arquivo `client/src/pages/resume.tsx`
2. Existem duas seções a modificar:

### A. Timeline de empresas (ordem cronológica)

Localize o array de objetos na linha ~190:

```typescript
{[
  { id: "mills", company: "Mills", period: "2023-2024", icon: "🏢" },
  // ... outras empresas
]}
```

Adicione sua nova empresa mantendo a ordem cronológica e seguindo o mesmo formato:
- `id`: Um identificador único (geralmente o nome da empresa em minúsculas)
- `company`: Nome da empresa
- `period`: Período de trabalho no formato "AAAA-AAAA"
- `icon`: Um emoji que represente a empresa

### B. Detalhes das experiências

Localize o array `experiences` no início do arquivo (linha ~9) e adicione um novo objeto para a nova empresa:

```typescript
{
  id: "nome-empresa", // Mesmo ID usado na timeline
  company: "Nome da Empresa",
  period: "AAAA-AAAA",
  details: [
    {
      title: "Nome da Empresa",
      period: "Mês/AAAA – Mês/AAAA",
      position: "Cargo na Empresa",
      summary: "Breve descrição do papel desempenhado",
      activities: [
        "Atividade 1",
        "Atividade 2",
        // Adicione quantas atividades forem necessárias
      ]
    }
  ],
}
```

**Dica**: Você pode adicionar múltiplos cargos na mesma empresa adicionando mais objetos no array `details`.

### C. Atualizar Botões de Navegação Rápida

Depois de adicionar a nova empresa nos dois locais acima, também atualize o array nos botões de navegação rápida (linha ~296):

```typescript
{[
  { id: "mills", company: "Mills" },
  // Adicione a nova empresa aqui também
]}
```

## Modificando Textos e Traduções

Para atualizar textos em diferentes idiomas:

1. Abra o arquivo `client/src/lib/translations.ts`
2. Localize a seção correspondente ao idioma que deseja modificar (`pt-br`, `en` ou `es`)
3. Encontre a chave para o texto específico que deseja alterar
4. Modifique o valor mantendo a mesma estrutura

**IMPORTANTE**: Se você adicionar uma nova chave de tradução, certifique-se de adicioná-la em todos os idiomas para evitar erros.

Exemplo:
```typescript
'pt-br': {
  // ...
  about: {
    title: 'SOBRE MIM', // Você pode modificar este texto
    // ...
  }
}
```

## Atualizando Informações de Contato

Para atualizar informações de contato:

1. Abra o arquivo `client/src/pages/contact-improved.tsx`
2. Localize o array `contactInfo` (linha ~102)
3. Modifique os valores como endereço, telefone ou email:

```typescript
const contactInfo = [
  {
    icon: (/* ... */),
    title: t('contact.location'),
    content: "Seu novo endereço",
    delay: 0,
  },
  // ... outros itens
];
```

4. Para atualizar os links de redes sociais, localize o array `socialLinks` (linha ~129) e atualize os links:

```typescript
const socialLinks = [
  {
    name: "LinkedIn",
    icon: (/* ... */),
    href: "https://linkedin.com/seu-novo-perfil",
  },
  // ... outros links
];
```

## Considerações Importantes

1. **Ordem Cronológica**: Mantenha a ordem cronológica das empresas consistente em todas as páginas
2. **Traduções**: Ao adicionar novas informações, sempre atualize as três versões de idioma (PT, EN, ES)
3. **Categorias**: Use apenas as categorias existentes para empresas: "logistica", "tecnologia", "educacao", "servicos"
4. **Email de Contato**: Se precisar mudar o email para o formulário de contato, atualize em todos os locais (3 ocorrências no arquivo `contact-improved.tsx`)
5. **Icons**: Os ícones de empresas na linha do tempo usam emojis para simplicidade. Escolha um que represente bem a empresa

Ao seguir estas instruções, você conseguirá manter seu portfólio atualizado com suas mais recentes experiências profissionais e informações de contato.