import { CreateMessageService } from '@services/CreateMessageService'
import { Request, Response } from 'express'

export class CreateMessageController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { message } = request.body
    const user_id = request.userId
    const createMessageService = new CreateMessageService()
    const messageResponse = await createMessageService.execute(message, user_id)

    return response.status(201).json(messageResponse)
  }
}
