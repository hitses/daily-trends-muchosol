import { Request, Response } from 'express'
import { getFeedService } from '../../services'

export const getFeed = async (_req: Request, res: Response) => {
  const { status, data } = await getFeedService()
  return res.status(status).send(data)
}
