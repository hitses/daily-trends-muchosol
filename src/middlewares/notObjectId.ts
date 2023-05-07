import { Request, Response, NextFunction } from 'express'
import { isValidObjectId } from 'mongoose'
import { RESPONSE } from '../constants'

export const notObjectId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!isValidObjectId(req.params.id))
      return res.status(RESPONSE.BAD_REQUEST.status).json({
        data: {
          status: RESPONSE.BAD_REQUEST.status,
          type: RESPONSE.BAD_REQUEST.type,
          message: 'Not valid MongoDB ID'
        }
      })

    next()

    return
  } catch (error) {
    return res.status(RESPONSE.SERVER_ERROR.status).json({
      data: {
        status: RESPONSE.SERVER_ERROR.status,
        type: RESPONSE.SERVER_ERROR.type,
        message: 'notObjectId() middleware'
      }
    })
  }
}
