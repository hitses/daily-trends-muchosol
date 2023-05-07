import { Request, Response, NextFunction } from 'express'

export const paramsIdNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params.id)
      return res.status(404).json({
        data: {
          status: 404,
          type: 'Not found',
          message: 'Feed ID not found'
        }
      })

    next()

    return
  } catch (error) {
    return res.status(500).json({
      data: {
        status: 500,
        type: 'Server error',
        message: 'paramsIdNotFound() middleware'
      }
    })
  }
}
