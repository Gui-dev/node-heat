import { Router } from 'express'

import { routerGithub } from './github.routes'
import { routerGithubResponse } from './githubResponse.routes'
import { routerAuth } from './auth.routes'

const routes = Router()

routes.use('/github', routerGithub)
routes.use('/signin', routerGithubResponse)
routes.use('/authenticate', routerAuth)

export { routes }
