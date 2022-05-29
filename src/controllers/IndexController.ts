import { Request, Response } from 'express'

export class IndexController {
  index(req: Request, res: Response) {
    return res.send('Hi, Welcome!')
  }
}
