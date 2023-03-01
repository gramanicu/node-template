import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

const errorMiddleware = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(err)
}

export default errorMiddleware
