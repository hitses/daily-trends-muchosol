import { Request, Response, NextFunction } from 'express'

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
      return res.status(400).json({
        data: {
          status: 400,
          type: 'Bad request',
          message: 'At least one property is falsy'
        }
      })
    }

    next()

    return
  } catch (error) {
    return res.status(500).json({
      data: {
        status: 500,
        type: 'Server error',
        message: 'falsyBodyProperties() middleware'
      }
    })
  }
}
