import cookieParser from 'cookie-parser'
import express from 'express'
import connectDb from './db/db'
import authRoute from './routes/auth.route'
import messageRoute from './routes/message.route'
import channelRoute from './routes/channel.route'
import cors from 'cors'

const app = express()
connectDb()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/auth',authRoute)
app.use('/api/msg',messageRoute)
app.use('/api/channel',channelRoute)

export default app
