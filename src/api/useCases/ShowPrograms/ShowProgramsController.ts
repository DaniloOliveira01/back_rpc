import { Request, Response } from 'express'
import { ShowProgramsUseCase } from './ShowProgramsUseCase'

export class ShowProgramsController {
  constructor(private showProgramsUseCase: ShowProgramsUseCase) {}

  async handle(request: Request, response: Response) {
    const { date } = request.params
    const data = await this.showProgramsUseCase.execute({ date })

    return response.status(200).json({
      success: true,
      ...data,
    })
  }
}
