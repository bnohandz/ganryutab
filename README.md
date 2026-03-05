# GanryuTab

Projeto web desenvolvido com Next.js para apresentar temas marcantes da história e da cultura japonesa tradicional.
A página inicial reúne os tópicos principais e cada item leva para uma landing page dedicada, com uma breve narrativa contextual.

## Objetivo
Criar uma experiência visual imersiva e moderna para divulgar conteúdos sobre o Japão feudal de forma acessível, organizada e agradável de navegar.

## Funcionalidades
- Página inicial com identidade visual temática.
- Lista de tópicos com navegação para páginas individuais.
- Landing page para cada tema com introdução e pequena história.
- Layout responsivo para diferentes resoluções de tela.
- Efeitos visuais sutis (hover, animações de entrada e painel com profundidade).
- Favicon personalizado com ícone de torii.

## Tópicos abordados
- Samurais e o código de honra Bushidō
- Grandes guerreiros da era Sengoku
- A vida no Japão durante o período Edo
- A história de lendas como Miyamoto Musashi
- Costumes e curiosidades da cultura japonesa antiga
- Literatura clássica como o Conto de Genji
- Castelos, tradições e filosofia do Japão feudal

## Tecnologias
- Next.js
- React
- CSS (estilização customizada)
- Prettier (padronização de código)

## Estrutura principal
- pages/index.js: página inicial com listagem dos tópicos
- pages/topicos/[slug].js: rota dinâmica para páginas de cada tema
- data/topics.js: base de conteúdo dos tópicos e histórias
- styles/styles.css: estilos globais e responsivos
- public/: assets visuais e favicon

## Como executar
`npm install`

`npm run dev`

Acesse em: `http://localhost:3000`

## Status
Projeto em desenvolvimento, com foco em expansão de conteúdo, refinamento visual e melhorias de experiência do usuário.


