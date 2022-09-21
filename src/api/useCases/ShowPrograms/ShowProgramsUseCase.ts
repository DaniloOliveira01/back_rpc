import { ProgrammeType } from '../../interfaces/date'
import { IFetchProvider } from '../../providers/IFetchProvider'
import { IHoursProvider } from '../../providers/IHoursProvider'
import { IShowProgramsDTO } from './ShowProgramsDTO'

export class ShowProgramsUseCase {
  constructor(
    private fetchProvider: IFetchProvider,
    private hoursProvider: IHoursProvider
  ) {}

  async executeDateProgrammes({ date }: IShowProgramsDTO) {
    const programmeParse: ProgrammeType[] = []
    const data = date || new Date().toLocaleString().split(' ')[0]

    try {
      const url = await this.fetchProvider.get(
        `/programmes/1337?date=${date}`
      )

      const programeData = url.data.programme.entries
        for (const prog of programeData) {
        const now = new Date()
        const startTime = new Date(prog.start_time * 1000)
        const endTime = new Date(prog.end_time * 1000)
        const isLive = now >= startTime && now <= endTime

        const programme = {
          title: prog.title,
          description: prog.description,
          time_start: this.hoursProvider.getByUnix(prog.start_time, 'pt-BR', 'H:mm'),
          time_end: this.hoursProvider.getByUnix(prog.end_time, 'pt-BR', 'H:mm'),
          URL_IMG: prog.custom_info.Graficos.URL,
        }
          programmeParse.push({ programme, isLive })
        }

      } catch (error) {
        if (error) throw new Error('Request error')
      }

      return {
        data,
        programmeParse,
    }
  }
}
