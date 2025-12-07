import express from 'express'
import auth from '../middlewares/auth.middleware'
import message  from '../controllers/message.controller'

const route = express.Router()

route.get('/:channelId',auth,message.getmessage)
route.post('/',auth,message.sendmessage)


export default route

