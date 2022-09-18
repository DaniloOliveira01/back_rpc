export interface IHoursProvider {
  getByUnix(unix: number, locale: string, format: string): string
}