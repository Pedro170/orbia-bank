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


## 📐 Arquitetura da Aplicação -- Orbia Bank

### 📌 Visão Geral

A aplicação foi construída utilizando **React + TypeScript**, seguindo
princípios de separação de responsabilidades, reutilização de
componentes e organização por camadas.

------------------------------------------------------------------------

## 🧩 Separação de Componentes

### ✔ Decisão

A aplicação foi dividida em:

-   **Layouts**
    -   `PublicLayout`
    -   `PrivateLayout`
-   **Páginas**
    -   `Dashboard`
    -   `Produtos`
-   **Componentes reutilizáveis**
    -   `StatusBadge`
    -   `Breadcrumbs`
    -   `Input`
    -  `ProdutoItem`
    -  `Modal`
    -  `AlertModal`
-   **Hooks customizados**
    -   `useFetch`
    -   `useProdutos`
    -   `useTransacoes`
-   **Camada de API**
    -   `API.ts`

### ✔ Justificativa

Aplicação do princípio **Single Responsibility (SRP)**:

-   Layout → estrutura visual
-   Página → regra de negócio
-   Componente → UI isolada
-   Hook → dados e efeitos
-   API → centralização de endpoints

Benefícios:

-   Baixo acoplamento
-   Alta reutilização
-   Código testável
-   Escalável

------------------------------------------------------------------------

## 🌐 Organização das Chamadas de API

### ✔ Decisão

-   Centralização dos endpoints em `API.ts`
-   Hooks específicos para cada domínio (`useProdutos`, `useTransacoes`)
-   Hook genérico `useFetch`
-   Tratamento de erros dentro do hook

### ✔ Justificativa

Evita:

-   URLs hardcoded
-   Fetch espalhado pela aplicação

Garante:

-   Manutenção simples
-   Testabilidade
-   Padronização de erro
-   Facilidade para mock em testes

------------------------------------------------------------------------

## ⏳ Carregamento, Usabilidade e Acessibilidade

### ✔ Loading

-   Controle de `loading` via hooks
-   Renderização condicional com fallback visual
-   Cancelamento de requisição com `AbortController`

### ✔ Usabilidade

-   Breadcrumb para navegação
-   Sidebar com estado ativo
-   Filtros combináveis (status, categoria e busca)
-   Modal lateral para detalhes
-   Feedback visual com badges de status

### ✔ Acessibilidade

-   Uso de elementos semânticos (`nav`, `ul`, `button`)
-   Labels apropriados
-   Texto alternativo em imagens
-   Contraste adequado em estados visuais

------------------------------------------------------------------------

## 🚀 Técnicas de Performance

-   Filtros aplicados antes do agrupamento
-   Agrupamento com `reduce`
-   Cancelamento de requisições
-   Estado derivado (evitando duplicação)
-   Separação por hooks para evitar re-renderizações desnecessárias

------------------------------------------------------------------------

## 🧪 Estratégia de Testes

### ✔ Testes Unitários

-   Renderização do `StatusBadge`
-   Funcionamento de filtros
-   Agrupamento por categoria
-   Hooks com mock de API

### ✔ Testes de Integração

-   Fluxo de login
-   ProtectedRoute
-   Atualização de status
-   Abertura e fechamento de modal

### ✔ Testes Futuros Possíveis

-   Testes E2E (Cypress / Playwright)
-   Teste de acessibilidade (axe)
-   Teste de performance com grandes volumes de dados

------------------------------------------------------------------------

## 🏁 Conclusão

A arquitetura foi construída com foco em:

-   Separação de responsabilidades
-   Reutilização
-   Escalabilidade
-   Manutenção facilitada
-   Tipagem forte com TypeScript
-   Experiência do usuário consistente

A aplicação está preparada para evoluir para padrões ainda mais
robustos, como:

-   Camada de serviços
-   Cache inteligente
-   Interceptadores
-   Padrão SWR
-   Arquitetura Clean

------------------------------------------------------------------------

📌 Documento gerado automaticamente para fins de documentação técnica.

# 👨‍💻 Desenvolvido por:

## Pedro

### Projeto de Portfólio.
