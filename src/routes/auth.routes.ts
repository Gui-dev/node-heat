import { Router } from 'express'

import { AuthenticateUserController } from '@controllers/AuthenticateUserController'

const routerAuth = Router()
const authenticateUserController = new AuthenticateUserController()

routerAuth.post('/', authenticateUserController.create)

export { routerAuth }
