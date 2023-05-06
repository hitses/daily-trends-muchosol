import { Request, Response } from 'express'
import { deleteFeedService } from '../../services'

export const deleteFeed = async (req: Request, res: Response) => {
  const { status, data } = await deleteFeedService(req.params.id)
  return res.status(status).send(data)
}
