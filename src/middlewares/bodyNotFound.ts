import { Request, Response, NextFunction } from 'express'

export const bodyNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(404).json({
        data: {
          status: 404,
          type: 'Not found',
          message: 'Body not found'
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
        message: 'bodyNotFound() middleware'
      }
    })
  }
}
