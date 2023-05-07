import { Request, Response, NextFunction } from 'express'
import { isValidObjectId } from 'mongoose'

export const notObjectId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!isValidObjectId(req.params.id))
      return res.status(400).json({
        data: {
          status: 400,
          type: 'Bad request',
          message: 'Not valid MongoDB ID'
        }
      })

    next()

    return
  } catch (error) {
    return res.status(500).json({
      data: {
        status: 500,
        type: 'Server error',
        message: 'notObjectId() middleware'
      }
    })
  }
}
