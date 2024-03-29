import { programRouter } from './api/routes/programs'
import { errorHandle } from './api/middlewares/errorHandle'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/program', programRouter)
app.use(errorHandle)

app.listen(process.env.PORT || 3030, () => console.log('Server running.'))
