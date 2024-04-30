import express, { urlencoded } from 'express'
import config from './config.js'
import messagesRouter from './routes/messages.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/messages', messagesRouter)

const PORT = config.port

app.listen(PORT, ()=> {
    console.log(`Listening to ${PORT} port`);
})