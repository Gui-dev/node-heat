import express from 'express'

const app = express()
const PORT = 3333 || process.env.PORT

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})
