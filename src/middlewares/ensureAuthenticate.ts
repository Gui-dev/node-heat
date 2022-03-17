import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export const ensureAuthenticate = (request: Request, response: Response, next: NextFunction): void | Response => {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({ error: 'Token invalid' })
  }

  const [, token] = authToken.split(' ')

  if (!token) {
    return response.status(401).json({ error: 'Token invalid or nonexistent' })
  }

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload
    request.userId = sub
    return next()
  } catch {
    return response.status(401).json({ error: 'Token expired' })
  }
}
