import { Request, Response } from 'express'
import { deleteFeedService } from '../../services'

export const deleteFeed = async (_req: Request, res: Response) => {
  const { status, data } = await deleteFeedService()
  return res.status(status).send(data)
}
