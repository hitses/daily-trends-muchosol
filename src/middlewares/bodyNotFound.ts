import { Request, Response, NextFunction } from 'express'
import { RESPONSE } from '../constants'

export const bodyNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(RESPONSE.NOT_FOUND.status).json({
        data: {
          status: RESPONSE.NOT_FOUND.status,
          type: RESPONSE.NOT_FOUND.type,
          message: 'Body not found'
        }
      })
    }

    next()

    return
  } catch (error) {
    return res.status(RESPONSE.SERVER_ERROR.status).json({
      data: {
        status: RESPONSE.SERVER_ERROR.status,
        type: RESPONSE.SERVER_ERROR.type,
        message: 'bodyNotFound() middleware'
      }
    })
  }
}
