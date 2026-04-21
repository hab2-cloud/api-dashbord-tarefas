# 📋 API Dashboard Tarefas

Projeto de API REST desenvolvido como trabalho do 1º bimestre, utilizando Node.js e Express. A API permite gerenciar uma lista de tarefas com as operações completas de CRUD.

---

## 👥 Integrantes

| Nome | Contribuição |
|---|---|
| Hiago Alves Barboza | Configuração inicial do projeto, rotas GET e POST |
| Davi Protásio da Silva | Rota PUT (atualizar tarefa) |
| Shayane Graziele da Silva | Rota DELETE (remover tarefa) |

---

## 🎯 Objetivos

### Trabalho 01 — Git e GitHub
- Criar e gerenciar repositórios no GitHub
- Realizar commits com mensagens descritivas
- Criar branches para funcionalidades separadas
- Realizar merges entre branches

### Trabalho 02 — API REST com Node.js
- Entender os conceitos de servidores web e de aplicação
- Implementar um servidor com Express
- Desenvolver uma API REST com as operações CRUD

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Função |
|---|---|
| Node.js | Motor de execução do JavaScript |
| Express | Framework para criação do servidor web |
| Git + GitHub | Versionamento e hospedagem do código |

---

## 📁 Estrutura do projeto

```
api-dashbord-tarefas/
├── backend/
│   ├── index.js        # servidor Express com todas as rotas
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org) instalado
- [Git](https://git-scm.com) instalado

### 1. Clone o repositório
```bash
git clone https://github.com/hab2-cloud/api-dashbord-tarefas.git
cd api-dashbord-tarefas
```

### 2. Instale as dependências
```bash
cd backend
npm install
```

### 3. Inicie o servidor
```bash
node index.js
```

O servidor estará rodando em **http://localhost:3000**

---

## 🔌 Rotas da API

| Método | Rota | O que faz | Responsável |
|---|---|---|---|
| `GET` | `/tarefas` | Retorna todas as tarefas | Hiago |
| `POST` | `/tarefas` | Cria uma nova tarefa | Hiago |
| `PUT` | `/tarefas/:id` | Atualiza título ou status da tarefa | Davi |
| `DELETE` | `/tarefas/:id` | Remove uma tarefa | Shayane |

---

## 📦 Exemplos de uso

### Criar uma tarefa (POST)
```json
// Requisição
POST /tarefas
{
  "titulo": "Estudar para a prova"
}

// Resposta 201
{
  "id": 1,
  "titulo": "Estudar para a prova",
  "concluida": false
}
```

### Atualizar uma tarefa (PUT)
```json
// Requisição
PUT /tarefas/1
{
  "titulo": "Estudar Node.js",
  "concluida": true
}

// Resposta 200
{
  "id": 1,
  "titulo": "Estudar Node.js",
  "concluida": true
}
```

### Deletar uma tarefa (DELETE)
```json
// Requisição
DELETE /tarefas/1

// Resposta 200
{
  "mensagem": "Tarefa removida com sucesso",
  "detalhes": {
    "id": 1,
    "titulo": "Estudar Node.js",
    "concluida": true
  }
}
```

---

## 🌿 Branches do projeto

| Branch | Descrição | Responsável |
|---|---|---|
| `main` | Versão final estável | — |
| `feature/configuracao-get-post` | Configuração inicial + GET e POST | Hiago |
| `feature/rota-put` | Rota PUT | Davi |
| `feature/rota-delete` | Rota DELETE | Shayane |