import { Request, Response } from 'express'
import { patchFeedService } from '../../services'

export const patchFeed = async (req: Request, res: Response) => {
  const { status, data } = await patchFeedService(
    req.params.id,
    req.body.newspaper,
    req.body.text,
    req.body.href
  )
  return res.status(status).send(data)
}
