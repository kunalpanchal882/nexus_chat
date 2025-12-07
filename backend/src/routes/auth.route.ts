import express from 'express'
import authController from '../controllers/auth.controller'
import auth from '../middlewares/auth.middleware'

const route = express.Router()

route.post('/register',authController.signup)

route.post('/login',authController.login)

route.get('/me',auth,authController.me)

export default route

