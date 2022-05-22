import { Request, Response } from 'express'
import { api } from '../services/api'
import { ProgrammeType } from '../interfaces/date'
import moment from 'moment'
export class RpcController {
  async index(req: Request, res: Response) {
    const { date } = req.params

    const programmeParse: ProgrammeType[] = []

    const data = date || new Date().toLocaleString().split(' ')[0]

    try {
      const url = await api.get(`/programmes/1337?date=${date}`)

      const programeData = url.data.programme.entries
      for (const prog of programeData) {
        const programme = {
          title: prog.title,
          description: prog.description,
          time_start: moment.unix(prog.start_time).format('H:mm').toString(),
          time_end: moment.unix(prog.end_time).format('H:mm').toString(),
          URL_IMG: prog.custom_info.Graficos.URL,
        }
        programmeParse.push(programme)
      }
      return res.json({ data: data, programmeParse })
      

    } catch (error) {

      return res.json('Deu uma bugadinha!' + error)
    }
  }
}
