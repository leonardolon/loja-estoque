# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

⚙️ Stack Utilizada

React + TypeScript

Vite (ambiente de desenvolvimento rápido)

Axios para consumo da API

React Router DOM para navegação entre páginas

React Hook Form + Yup para validação de formulários

TailwindCSS para estilização responsiva

PARA ACESSAR A APLICAÇÃO NO FRONT

Usuario: vendedor01@loja.com
Senha: 123456

✅ Requisitos Obrigatórios Atendidos
Requisito Implementação Status
React (JS ou TS) Aplicação desenvolvida em React com TypeScript ✅
Lista de Itens com:
├ Busca por nome (search) Campo de busca implementado na página de listagem, filtrando itens por nome ✅
├ Ordenação por coluna (createdAt ou name) Ordenação por data de criação e nome ✅
├ Paginação (page, limit) Paginação implementada com controle de página atual e limite de itens ✅
Formulário de criar/editar com validação e feedback Formulário funcional com validação de campos obrigatórios e mensagens de erro/sucesso ✅
Exclusão com confirmação Antes de excluir, o sistema solicita confirmação do usuário ✅
Consumo dos endpoints (GET, POST, PATCH, DELETE) Integração completa com o backend via Axios (api.ts) ✅
Base URL configurável via .env Utiliza variável de ambiente VITE_API_URL para definir o endpoint base da API ✅
💡 Funcionalidades Extras

Feedback visual de carregamento (loading) nas operações.

Atualização automática da lista após criar/editar/deletar.

Organização de código em componentes reutilizáveis.

Estrutura limpa e separação entre páginas (pages/) e componentes (components/).

🚀 Como executar o projeto

# Instalar dependências

npm install

# Rodar ambiente de desenvolvimento

npm run dev

# O frontend rodará por padrão em:

http://localhost:3001
