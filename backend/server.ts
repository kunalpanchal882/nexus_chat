import dotenv from "dotenv"
dotenv.config()
import app from "./src/app";
import cors from 'cors'
import {createServer} from 'http'
import initSocketServer from './src/socket/chat.socket'



const httpServer = createServer(app)
initSocketServer(httpServer)

httpServer.listen(3000,() => {
    console.log("server is running on port 3000");
})