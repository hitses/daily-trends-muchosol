import { Request, Response } from 'express'
import { createFeedService } from '../../services'

export const createFeed = async (_req: Request, res: Response) => {
  const { status, data } = await createFeedService()
  return res.status(status).send(data)
}
