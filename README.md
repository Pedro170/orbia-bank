# 🏦 Orbia Bank -- Banco Digital

Aplicação Full Stack de um banco digital fictício chamada **Orbia
Bank**, composta por:

-   🔹 Front-end em React + Vite + TypeScript
-   🔹 API REST simulada com json-server
-   🔹 Deploy do Front no GitHub Pages
-   🔹 Deploy da API no Render

Projeto desenvolvido para fins educacionais e portfólio.

------------------------------------------------------------------------

# 📌 Visão Geral

O sistema simula funcionalidades de uma instituição financeira digital:

-   🔐 Login de usuário
-   💳 Listagem de produtos financeiros
-   📊 Categorias (Cartões, Investimentos, Empréstimos, Financiamentos)
-   💰 Listagem de transações
-   🔄 Atualização de status de produtos

------------------------------------------------------------------------

# 🛠️ Tecnologias Utilizadas

## Front-end

-   React
-   TypeScript
-   Vite
-   Context API
-   Custom Hooks

## Back-end (Simulado)

-   Node.js
-   json-server
-   REST API

## Deploy

-   GitHub Pages (Front-end)
-   Render (API)

------------------------------------------------------------------------

# 🚀 Como Rodar o Projeto Completo

## ✅ Pré-requisitos

Instale:

-   Node.js (versão 18+ recomendada)

Verifique:

node -v\
npm -v

------------------------------------------------------------------------

# 🔹 1️⃣ Rodando a API

Entre na pasta da API:

cd api

Instale as dependências:

npm install

Inicie o servidor:

npx json-server --watch db.json --port 3000

A API estará disponível em:

http://localhost:3000

------------------------------------------------------------------------

# 🔹 2️⃣ Rodando o Front-end

Abra outro terminal.

Entre na pasta do front:

cd front-end

Instale as dependências:

npm install

Inicie o projeto:

npm run dev

O projeto abrirá em:

http://localhost:5173

------------------------------------------------------------------------

# 🔗 Configuração da API no Front

Para rodar localmente:

export const BASE_URL = "http://localhost:3000/";

Para usar a API em produção (Render):

export const BASE_URL = "https://orbia-bank-api.onrender.com/";

------------------------------------------------------------------------

# 📚 Endpoints da API

Login: GET /usuarios?email={email}&senha={senha}

Produtos: GET /produtos?usuarioId={id}

Transações: GET /transacoes?usuarioId={id}

Atualização de Produto: PATCH /produtos/{id}

Exemplo Body: { "ativo": true }

------------------------------------------------------------------------

# ⚠️ Observações

-   Utiliza json-server (não há banco de dados real)
-   Os dados ficam no arquivo db.json
-   Alterações via PATCH/POST modificam o db.json
-   No plano gratuito do Render os dados podem reiniciar

------------------------------------------------------------------------

# 🎯 Objetivo

Este projeto demonstra:

-   Estruturação de aplicação Full Stack
-   Integração Front-end / API REST
-   Organização com hooks e contexto
-   Simulação de sistema financeiro
-   Deploy em produção

------------------------------------------------------------------------

# 👨‍💻 Desenvolvido por

## Pedro

### Projeto de Portfólio.
