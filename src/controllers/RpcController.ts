import { Request, Response } from 'express'
import { ProgrammeType } from '../interfaces/date'
import { api } from '../services/api'
import dayjs from 'dayjs'
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
          time_start: dayjs.unix(prog.start_time).locale('en-US').format('H:mm').toString(),
          time_end: dayjs.unix(prog.end_time).locale('en-US').format('H:mm').toString(),
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
