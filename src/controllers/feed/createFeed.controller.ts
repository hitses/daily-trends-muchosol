import { Request, Response } from 'express'
import { createFeedService } from '../../services'

export const createFeed = async (req: Request, res: Response) => {
  const { status, data } = await createFeedService(req.body)
  return res.status(status).send(data)
}
