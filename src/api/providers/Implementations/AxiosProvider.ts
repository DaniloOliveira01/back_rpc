import { api } from '../../../config/axios'
import { IFetchProvider } from '../IFetchProvider'

export class AxiosProvider implements IFetchProvider {
  async get(url: string): Promise<any> {
    try {
      const result = await api.get(url)
      return result
    } catch (error) {
      if (error) throw new Error('Request error')
      return null
    }
  }
}