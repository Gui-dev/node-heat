import { Router } from 'express'

const routerGithubResponse = Router()

routerGithubResponse.get('/callback', (request, response) => {
  const { code } = request.query

  return response.status(201).json(code)
})

export { routerGithubResponse }
