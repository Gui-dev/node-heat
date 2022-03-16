import axios from 'axios'
import { sign } from 'jsonwebtoken'
import { User } from '@prisma/client'

import { prismaClient } from './../prisma'

type IAccessTokenReponse = {
  access_token: string
}

interface IUserResponse {
  id: number
  name: string
  login: string
  avatar_url: string
}

interface IResponse {
  user: User
  userToken: string
}

export class AuthenticateUserService {
  public async execute (code: string): Promise<IResponse> {
    const url = process.env.GITHUB_AUTH_URL
    const { data } = await axios.post<IAccessTokenReponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      },
      headers: {
        Accept: 'application/json'
      }
    })

    const githubUserToken = data.access_token

    const response = await axios.get<IUserResponse>('https://api.github.com/user', {
      headers: {
        authorization: `Bearer ${githubUserToken}`
      }
    })

    const { id, name, login, avatar_url } = response.data

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id
      }
    })

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_id: id,
          name,
          login,
          avatar_url
        }
      })
    }

    const userToken = sign(
      {
        user: {
          id: user.id,
          name: user.name,
          avatar: user.avatar_url
        }
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: process.env.JWT_EXPIRES_IN
      }
    )

    return {
      user,
      userToken
    }
  }
}
