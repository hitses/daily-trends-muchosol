import { Request, Response, NextFunction } from 'express'
import { RESPONSE } from '../constants'

export const invalidNewspaperType = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newspaper = req.body.newspaper
    if (
      typeof newspaper !== 'string' ||
      (newspaper !== 'El País' && newspaper !== 'El Mundo')
    ) {
      return res.status(RESPONSE.BAD_REQUEST.status).json({
        data: {
          status: RESPONSE.BAD_REQUEST.status,
          type: RESPONSE.BAD_REQUEST.type,
          message: 'NewsPaper type is invalid'
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
        message: 'invalidNewspaperType() middleware'
      }
    })
  }
}
