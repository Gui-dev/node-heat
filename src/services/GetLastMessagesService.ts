import { Message } from '@prisma/client'

import { prismaClient } from '../prisma'

export class GetLastMessagesService {
  public async execute (): Promise<Message[]> {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        user: true
      }
    })

    return messages
  }
}
