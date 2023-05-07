import { Request, Response, NextFunction } from 'express'
import { RESPONSE } from '../constants'

export const paramsIdNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params.id)
      return res.status(RESPONSE.NOT_FOUND.status).json({
        data: {
          status: RESPONSE.NOT_FOUND.status,
          type: RESPONSE.NOT_FOUND.type,
          message: 'Feed ID not found'
        }
      })

    next()

    return
  } catch (error) {
    return res.status(RESPONSE.SERVER_ERROR.status).json({
      data: {
        status: RESPONSE.SERVER_ERROR.status,
        type: RESPONSE.SERVER_ERROR.type,
        message: 'paramsIdNotFound() middleware'
      }
    })
  }
}
