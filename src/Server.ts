import { serverHTTP } from 'App'

const PORT = 3333 || process.env.PORT

serverHTTP.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta: ${PORT}`)
})
