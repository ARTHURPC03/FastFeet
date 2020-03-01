import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import RecipientsController from './app/controllers/RecipientsController'
import FileController from './app/controllers/FileController'
import DeliverymanController from './app/controllers/DeliverymanController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/recipients', RecipientsController.store)
routes.put('/recipients/:id', RecipientsController.update)

routes.put('/users', UserController.update)

routes.put('/recipients', RecipientsController.update)

routes.post('/files', upload.single('file'), FileController.store)

routes.get('/deliveryman', DeliverymanController.index)
routes.post('/deliveryman', DeliverymanController.store)
routes.put('/deliveryman/:id', DeliverymanController.update)
routes.delete('/deliveryman/:id', DeliverymanController.delete)

export default routes
