export interface IFetchProvider {
  get(url: string): Promise<any>
}
