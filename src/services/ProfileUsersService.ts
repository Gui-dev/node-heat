import { User } from '@prisma/client'
import { prismaClient } from './../prisma'

export class ProfileUsersService {
  public async execute (user_id: string): Promise<User> {
    const user = await prismaClient.user.findUnique({
      where: {
        id: user_id
      }
    })

    return user
  }
}
