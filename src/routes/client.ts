import express from 'express'
import { IndexController, RpcController } from '../controllers'

export const routes = express.Router()
const indexController = new IndexController()
const rpcController = new RpcController()

routes.get('/ola', indexController.index)
routes.get('/getRPCProgramme/:date', rpcController.index)
