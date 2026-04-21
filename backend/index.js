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
         /*------PARTE DO DAVI------*/
// PUT /tarefas/:id → atualiza uma tarefa existente
app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params
  const { titulo, concluida } = req.body

  const tarefa = tarefas.find(t => t.id === parseInt(id))

  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' })
  }

  if (titulo !== undefined) tarefa.titulo = titulo
  if (concluida !== undefined) tarefa.concluida = concluida

  res.json(tarefa)
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})M
