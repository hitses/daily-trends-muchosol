import { Request, Response, NextFunction } from 'express'
import feedModel from '../models/feed.model'

export const feedNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const feed = await feedModel.findOne({ _id: req.params.id, delete: false })

    if (!feed)
      return res.status(404).json({
        data: {
          status: 404,
          type: 'Not found',
          message: 'Feed not found'
        }
      })

    next()

    return
  } catch (error) {
    return res.status(500).json({
      data: {
        status: 500,
        type: 'Server error',
        message: 'feedNotFound() middleware'
      }
    })
  }
}
