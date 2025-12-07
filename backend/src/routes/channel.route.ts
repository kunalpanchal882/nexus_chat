import express from 'express'
import auth from '../middlewares/auth.middleware'
import channelController from '../controllers/channel.controller'


const route = express.Router()

route.get('/my-channel',auth,channelController.getChannels)
route.post('/create-channel',auth,channelController.createChannel)
route.post("/:channelId/join",auth,channelController.joinChannel)
route.post("/:channelId/invite",auth,channelController.joinChannel)


export default route

