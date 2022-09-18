import { AxiosProvider } from '../../providers/Implementations/AxiosProvider'
import { DayjsProvider } from '../../providers/Implementations/DayjsProvider'
import { ShowProgramsController } from './ShowProgramsController'
import { ShowProgramsUseCase } from './ShowProgramsUseCase'

const axiosProvider = new AxiosProvider()
const dayjsProvider = new DayjsProvider()
const showProgramsUseCase = new ShowProgramsUseCase(
    axiosProvider,
    dayjsProvider
)
const showProgramsController = new ShowProgramsController(showProgramsUseCase)

export { showProgramsController }