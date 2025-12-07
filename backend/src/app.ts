import cookieParser from 'cookie-parser'
import express from 'express'
import connectDb from './db/db'
import authRoute from './routes/auth.route'
import messageRoute from './routes/message.route'
import channelRoute from './routes/channel.route'

const app = express()
connectDb()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoute)
app.use('/api/msg',messageRoute)
app.use('/api/channel',channelRoute)

export default app
