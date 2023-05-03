import { Request, Response } from 'express'
import { patchFeedService } from '../../services'

export const patchFeed = async (_req: Request, res: Response) => {
  const { status, data } = await patchFeedService()
  return res.status(status).send(data)
}
