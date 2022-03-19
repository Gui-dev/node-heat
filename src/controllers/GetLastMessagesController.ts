import { GetLastMessagesService } from '@services/GetLastMessagesService'
import { Request, Response } from 'express'

export class GetLastMessagesController {
  public async index (request: Request, response: Response): Promise<Response> {
    const getLastMessagesService = new GetLastMessagesService()
    const messages = await getLastMessagesService.execute()

    return response.status(201).json(messages)
  }
}
