import { ProfileUsersService } from '@services/ProfileUsersService'
import { Request, Response } from 'express'

export class ProfileUserController {
  public async show (request: Request, response: Response): Promise<Response> {
    const user_id = request.userId
    const profileUsersService = new ProfileUsersService()
    const user = await profileUsersService.execute(user_id)

    return response.status(201).json(user)
  }
}
