import { NextFunction, Request, Response } from 'express';

export abstract class BaseController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static baseRoute(req: Request, res: Response, next: NextFunction) {
    res.send('Hello');
  }
}
