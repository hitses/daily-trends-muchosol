import { Request, Response, NextFunction } from 'express'

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
      return res.status(400).json({
        data: {
          status: 400,
          type: 'Bad request',
          message: 'NewsPaper type is invalid'
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
        message: 'invalidNewspaperType() middleware'
      }
    })
  }
}
