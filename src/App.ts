import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { routes } from 'routes'

const app = express()
const PORT = 3333 || process.env.PORT

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta: ${PORT}`)
})
