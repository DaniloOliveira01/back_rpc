import express from 'express'

import { IndexController } from '../controllers/IndexController'
import { RpcController } from '../controllers/RpcController'

export const routes = express.Router()

const indexController = new IndexController()

const rpcController = new RpcController()

routes.get('/', indexController.index)
routes.get('/getRPCProgamming/:date', rpcController.index)
