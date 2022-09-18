import dayjs from 'dayjs'
import { IHoursProvider } from '../IHoursProvider'

export class DayjsProvider implements IHoursProvider {
  getByUnix(unix: number, locale: string, format: string): string {
    const date = dayjs.unix(unix).locale(locale).format(format).toString();
    return date
  }
}