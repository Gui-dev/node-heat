import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3333 || process.env.PORT

app.use(cors())

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta: ${PORT}`)
})
