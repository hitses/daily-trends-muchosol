import { Request, Response, NextFunction } from 'express'
import feedModel from '../models/feed.model'
import { RESPONSE } from '../constants'

export const feedNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const feed = await feedModel.findOne({ _id: req.params.id, delete: false })

    if (!feed)
      return res.status(RESPONSE.NOT_FOUND.status).json({
        data: {
          status: RESPONSE.NOT_FOUND.status,
          type: RESPONSE.NOT_FOUND.type,
          message: 'Feed not found'
        }
      })

    next()

    return
  } catch (error) {
    return res.status(RESPONSE.SERVER_ERROR.status).json({
      data: {
        status: RESPONSE.SERVER_ERROR.status,
        type: RESPONSE.SERVER_ERROR.type,
        message: 'feedNotFound() middleware'
      }
    })
  }
}
