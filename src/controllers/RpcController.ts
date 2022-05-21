import { Request, Response } from 'express'
import { api } from '../services/api'
export class RpcController {
  async index(req: Request, res: Response) {
    const { date } = req.params

    const programmeParse = []

    try {
      const url = await api.get('/programmes/1337', {
        params: {
          data: date,
        },
      })

      const programeData = url.data.programme.entries;
      for (const prog of programeData) {
        const programme = {
          title: prog.title,
          description: prog.description,
          start: prog.human_start_time,
          end: prog.human_end_time      
        }
        programmeParse.push(programme)
      }

      return res.json({ programmeParse })

    } catch (error) {
      return res.json("Deu uma bugadinha!" + error)
    }
  }
}
