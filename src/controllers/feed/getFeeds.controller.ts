import { Request, Response } from 'express'
import { getFeedsService } from '../../services'

export const getFeeds = async (_req: Request, res: Response) => {
  const { status, data } = await getFeedsService()
  return res.status(status).send(data)
}
