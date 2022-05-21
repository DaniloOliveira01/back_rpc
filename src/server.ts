import express from 'express'
import cors from 'cors'
import { routes } from './routes/client'

const app = express()

app.use(cors())

app.use(routes)

app.use(express.json())

app.listen(8080)
