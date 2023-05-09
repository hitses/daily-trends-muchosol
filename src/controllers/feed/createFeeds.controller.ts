import { Request, Response } from 'express'
import { createFeedsService } from '../../services'

export const createFeeds = async (_req: Request, res: Response) => {
  const { status, data } = await createFeedsService()
  return res.status(status).send(data)
}
