import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'

import { routes } from 'routes'

const app = express()
const serverHTTP = http.createServer(app)
const io = new Server(serverHTTP, {
  cors: { origin: '*' }
})

app.use(cors())
app.use(express.json())

app.use(routes)

export {
  serverHTTP,
  io
}
