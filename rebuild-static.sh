#!/bin/bash

# Este script cria uma versão estática e simplificada do site para GitHub Pages
# Ideal para resolver problemas de carregamento em sites React/SPA

echo "===================================================="
echo "  GERANDO BUILD ESTÁTICA PARA GITHUB PAGES  "
echo "===================================================="

# Garantir que as pastas necessárias existam
mkdir -p dist/assets
mkdir -p dist/client

# Copiar os principais arquivos HTML
echo "Copiando arquivos HTML principais..."
cp -f index.html dist/
[ -f client/index.html ] && cp -f client/index.html dist/client/

# Garantir que arquivos especiais para GitHub Pages existam
echo "Garantindo arquivos especiais para GitHub Pages..."
touch dist/.nojekyll
cp -f dist/index.html dist/404.html

# Verificar se existem arquivos importantes na pasta client/src
if [ -d "client/src" ]; then
  echo "Copiando recursos essenciais da pasta client/src..."
  mkdir -p dist/client/src
  
  # Copiar arquivos CSS importantes
  find client/src -name "*.css" -exec cp -f {} dist/client/src/ \; 2>/dev/null || true
  
  # Copiar arquivos de imagem importantes
  mkdir -p dist/client/src/assets
  find client/src -name "*.jpg" -o -name "*.png" -o -name "*.svg" -o -name "*.gif" -exec cp -f {} dist/client/src/assets/ \; 2>/dev/null || true
fi

# Criar uma página Home estática completa que não depende de nada
echo "Criando página Home estática..."
cat > dist/static-home.html << EOF
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ruan Jasiel | Portfolio Estático</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        header {
            background-color: #3b82f6;
            color: white;
            padding: 30px 0;
            text-align: center;
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        h2 {
            font-size: 2rem;
            margin: 40px 0 20px;
            color: #3b82f6;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
        }
        h3 {
            font-size: 1.5rem;
            margin: 25px 0 15px;
        }
        p {
            margin-bottom: 15px;
        }
        section {
            margin: 50px 0;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .btn {
            display: inline-block;
            background: #3b82f6;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin: 10px 5px;
        }
        .btn:hover {
            background: #2563eb;
        }
        .center {
            text-align: center;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        .card {
            background: #f1f5f9;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        footer {
            background: #1e3a8a;
            color: white;
            text-align: center;
            padding: 30px 0;
            margin-top: 50px;
        }
        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }
            h2 {
                font-size: 1.7rem;
            }
            .grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Ruan Jasiel</h1>
            <p>Desenvolvimento Web | Planejamento Estratégico</p>
        </div>
    </header>

    <div class="container">
        <div class="center" style="margin: 30px 0;">
            <p>Esta é uma versão estática do meu portfolio profissional, otimizada para visualização no GitHub Pages.</p>
            <a href="./index.html" class="btn">Versão Completa</a>
            <a href="https://github.com/ruanleitte/ruan" class="btn" style="background: #64748b;">Código Fonte</a>
        </div>

        <section id="sobre">
            <h2>Sobre Mim</h2>
            <p>Profissional dedicado e apaixonado por desenvolvimento web e planejamento estratégico, com experiência em criar soluções eficientes e inovadoras para diversos clientes e empresas.</p>
        </section>

        <section id="experiencia">
            <h2>Experiência Profissional</h2>
            <div class="grid">
                <div class="card">
                    <h3>Desenvolvimento Web</h3>
                    <p>Criação de websites e aplicações web responsivas, com foco em experiência do usuário e performance.</p>
                </div>
                <div class="card">
                    <h3>Planejamento Estratégico</h3>
                    <p>Elaboração de estratégias e planos de ação para alcançar objetivos específicos de negócios.</p>
                </div>
                <div class="card">
                    <h3>Gestão de Projetos</h3>
                    <p>Coordenação de equipes e recursos para garantir a entrega de projetos dentro de prazos e orçamentos.</p>
                </div>
            </div>
        </section>

        <section id="habilidades">
            <h2>Habilidades</h2>
            <div class="grid">
                <div class="card">
                    <h3>Tecnologias</h3>
                    <p>HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB</p>
                </div>
                <div class="card">
                    <h3>Ferramentas</h3>
                    <p>Git, GitHub, VS Code, Adobe Creative Suite, Figma</p>
                </div>
                <div class="card">
                    <h3>Soft Skills</h3>
                    <p>Comunicação, Trabalho em equipe, Resolução de problemas, Adaptabilidade</p>
                </div>
            </div>
        </section>

        <section id="contato">
            <h2>Contato</h2>
            <p class="center">Entre em contato para discutir oportunidades de colaboração ou para saber mais sobre meus projetos.</p>
            <div class="center">
                <a href="mailto:contato@exemplo.com" class="btn">Email</a>
                <a href="https://linkedin.com/in/exemplo" class="btn" style="background: #0077b5;">LinkedIn</a>
                <a href="https://github.com/ruanleitte" class="btn" style="background: #333;">GitHub</a>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2023 Ruan Jasiel. Todos os direitos reservados.</p>
        </div>
    </footer>
</body>
</html>
EOF

echo "Criando arquivo README para o diretório dist..."
cat > dist/README.md << EOF
# Portfolio de Ruan Jasiel

Este é o diretório de build do portfolio, otimizado para hospedagem no GitHub Pages.

## Arquivos Importantes

- \`index.html\`: Página inicial do portfolio
- \`404.html\`: Página de erro 404 para SPA routing
- \`static-home.html\`: Versão simplificada e totalmente estática do portfolio
- \`.nojekyll\`: Arquivo para desativar processamento Jekyll no GitHub Pages

## Como Visualizar

1. Acesse diretamente o arquivo index.html nesta pasta
2. Para a versão estática, acesse static-home.html
3. Para a versão completa, acesse client/index.html

## Solução de Problemas

Se a versão principal não carregar corretamente, tente acessar a versão estática usando o arquivo static-home.html.
EOF

echo "✅ Build estática concluída com sucesso!"
echo "Agora você pode fazer o deploy dos arquivos da pasta dist para o GitHub Pages."
echo "Use o comando: ./github-deploy.sh"