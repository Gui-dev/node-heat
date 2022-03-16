import { Request, Response } from 'express'

import { AuthenticateUserService } from '@services/AuthenticateUserService'

export class AuthenticateUserController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { code } = request.body
    const authenticateUserService = new AuthenticateUserService()
    const authenticateUser = await authenticateUserService.execute(code)

    return response.status(201).json(authenticateUser)
  }
}
