import { Router } from 'express'

import { ProfileUserController } from '@controllers/ProfileUserController'
import { ensureAuthenticate } from '@middlewares/ensureAuthenticate'

const routerUsers = Router()
const profileUserController = new ProfileUserController()

routerUsers.get('/profile', ensureAuthenticate, profileUserController.show)

export { routerUsers }
