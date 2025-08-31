import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import characterRoutes from './routes/Character.js'
import userRoutes from './routes/User.js'
import messageRoutes from './routes/Message.js'

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/character', characterRoutes)
app.use('/user', userRoutes)
app.use('/message', messageRoutes)


const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado ao mongo ")


    } catch (error) {
        console.log("Erro ao conectar com o mongoDb", error)
    }
}

connectDB()

app.listen(PORT, () => console.log(`O servidor esta rodando`))