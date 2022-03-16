import { Router } from 'express'

const routerGithub = Router()

routerGithub.get('/', (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

export { routerGithub }
