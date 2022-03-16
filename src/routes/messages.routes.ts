import { Router } from 'express'

import { CreateMessageController } from '@controllers/CreateMessageController'
import { ensureAuthenticate } from '@middlewares/ensureAuthenticate'

const routerMessages = Router()
const createMessageController = new CreateMessageController()

routerMessages.post('/', ensureAuthenticate, createMessageController.create)

export { routerMessages }
