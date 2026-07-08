## Projeto completo

Este projeto está dividido em dois repositórios:

- Backend (Laravel): https://github.com/pattisoares/backend
- Frontend (React): https://github.com/pattisoares/frontend

# Cadastro e Lista de Recados

Aplicação React desenvolvida para consumir a API Laravel de gerenciamento de recados pessoais.

## Tecnologias

- React 19
- JavaScript (ES6+)
- Axios
- CSS3

## Ferramentas utilizadas

- Node.js 24.17.0
- npm 11.13.0
- Git 2.54.0
- GitHub

## Funcionalidades

- Login
- Cadastro de usuário
- Listagem de recados
- Cadastro de recados
- Edição de recados
- Exclusão de recados
- Logout

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js 20 ou superior
- npm 10 ou superior
- Git 2.54.0 ou superior

> **Observação:** Para utilizar todas as funcionalidades da aplicação, o backend da API deve estar em execução.

## Como executar o projeto

## Backend

Esta aplicação depende da API desenvolvida em Laravel.

Caso ainda não tenha instalado o backend, faça o download do repositório:

👉 https://github.com/pattisoares/backend

Após clonar o repositório, siga as instruções presentes no README do backend para configurar o banco de dados e iniciar a API antes de executar o frontend.

### 1. Escolha a pasta onde deseja salvar o projeto

Exemplo:

```text
D:\ProjetoRecados
```
Abra um terminal NOVO no VS Code nessa pasta

### 2. Clonar o repositório

```bash
git clone https://github.com/pattisoares/frontend.git
```

### 3. Acesse a pasta criada pelo Git

```bash
cd frontend
```

### 4. Instalar as dependências

```bash
npm install
```

### 5. Iniciar a aplicação

```bash
npm start
```

A aplicação estará disponível em:

```
http://localhost:3000
```

## Comunicação com a API

O frontend consome a API Laravel disponível em:

```
http://127.0.0.1:8000/api
```

Antes de iniciar o frontend, é necessário que o backend esteja em execução.

## Desenvolvido para a disciplina

Desenvolvimento Web III - Fatec