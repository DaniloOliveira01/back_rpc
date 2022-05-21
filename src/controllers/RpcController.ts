import { Request, Response } from 'express'
import { api } from '../services/api'

type Entrie = {
  title: string
  description: string
}

type Programme = {
  programme: {
    date: string
    entries: Entrie[]
  }
}


export class RpcController {
  async index(req: Request, res: Response) {
    const { date } = req.params

    try {
      const { data } = await api.get('/programmes/1337', {
        params: {
          data: date,
        },
      })
      const programme: Programme = {
        date: data.programme.date,
        entries: data.programme.entries.map(entrie => {
            title: entrie.title,
            description: entrie.description,
        })
      }
      return res.json(programme)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}
