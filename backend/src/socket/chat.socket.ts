import {Server} from 'socket.io'
import {Server as HttpServer} from 'http'
import messageModel from '../models/messgae.model'

async function initSocketServer(httpServer:HttpServer) {
    const io = new Server(httpServer,{
        cors:{
            origin:"http://localhost:5173",
            credentials:true
        }
    })

    io.on("connection",(socket) => {
        console.log("connected",socket.id);

        // JOIN CHANNEL

        socket.on("join-channel",(channelId:string) => {
            socket.join(channelId)
            console.log(`User joined channel:${channelId}`);
        })

        // LEAVE CHANNEL
        socket.on("leave-channel",(channelId:string) => {
            socket.leave(channelId)
            console.log(`user leaved channel:${channelId}`);
        })

        //SEND MESSAGE
        socket.on("send-message",async (payload) => {
            try {
                const msg = await messageModel.create({payload})

                io.to(payload.channelId).emit("recive-message",msg)
            } catch (error) {
                console.log("Message send error:", error);
            }
        })

        socket.on("disconnect",() => {
            console.log("User disconnected:", socket.id);
        })
    })

}

export default initSocketServer