import { Request, Response, NextFunction } from 'express'
import { RESPONSE } from '../constants'

function hasFalsyProperty(obj: Record<string, any>) {
  return Object.values(obj).some(value => !value)
}

export const falsyBodyProperties = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (hasFalsyProperty(req.body)) {
      return res.status(RESPONSE.BAD_REQUEST.status).json({
        data: {
          status: RESPONSE.BAD_REQUEST.status,
          type: RESPONSE.BAD_REQUEST.type,
          message: 'At least one property is falsy'
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
        message: 'falsyBodyProperties() middleware'
      }
    })
  }
}
