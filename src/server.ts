import express from 'express'
import cors from 'cors'
import { programRouter } from './api/routes/programs'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/program', programRouter)

app.listen(process.env.PORT || 3030, () => console.log("Server running."))
