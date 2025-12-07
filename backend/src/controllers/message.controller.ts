import {Request,Response} from 'express'
import messageModel from '../models/messgae.model'

async function getmessage(req:Request,res:Response) {
    try {
        const channelId = req.params
        const user = req.user;

        const message = await messageModel.findOne({
            channelId:channelId
        })

        res.status(201).json(message)

    } catch (error) {
        console.log("error in geting message ",error); 
    }
}

async function sendmessage(req:Request,res:Response) {
    const { channelId, text } = req.body;
  const senderId = req.user.id;

  try {
    const message = await messageModel.create({ channelId, text, senderId });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export default {getmessage,sendmessage}