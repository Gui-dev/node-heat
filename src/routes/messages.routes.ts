import { Router } from 'express'

import { CreateMessageController } from '@controllers/CreateMessageController'
import { GetLastMessagesController } from '@controllers/GetLastMessagesController'
import { ensureAuthenticate } from '@middlewares/ensureAuthenticate'

const routerMessages = Router()
const createMessageController = new CreateMessageController()
const getLastMessagesController = new GetLastMessagesController()

routerMessages.get('/last-messages', getLastMessagesController.index)
routerMessages.post('/', ensureAuthenticate, createMessageController.create)

export { routerMessages }
