import { Request, Response } from 'express'
import { getFeedService } from '../../services'

export const getFeed = async (req: Request, res: Response) => {
  const { status, data } = await getFeedService(req.params.id)
  return res.status(status).send(data)
}
