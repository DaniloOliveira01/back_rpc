import { Request, Response, Router } from 'express'
import { showProgramsController } from '../useCases/ShowPrograms'

const routes = Router()

routes.get('/:date', (request: Request, response: Response) => {
  return showProgramsController.handle(request, response)
})

export { routes as programRouter }