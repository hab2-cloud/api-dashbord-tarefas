const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// Banco de dados em memória (array)
let tarefas = []
let proximoId = 1

// GET /tarefas → retorna todas as tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas)
})

// POST /tarefas → cria uma nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo } = req.body
  const novaTarefa = {
    id: proximoId++,
    titulo: titulo,
    concluida: false
  }
  tarefas.push(novaTarefa)
  res.status(201).json(novaTarefa)
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})