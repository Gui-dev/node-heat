import { Router } from 'express'

import { routerGithub } from './github.routes'
import { routerGithubResponse } from './githubResponse.routes'
import { routerAuth } from './auth.routes'
import { routerMessages } from './messages.routes'
import { routerUsers } from './users.routes'

const routes = Router()

routes.use('/github', routerGithub)
routes.use('/signin', routerGithubResponse)
routes.use('/authenticate', routerAuth)
routes.use('/messages', routerMessages)
routes.use('/users', routerUsers)

export { routes }
