import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import characterRoutes from './routes/Character.js'
import userRoutes from './routes/User.js'
import messageRoutes from './routes/Message.js'
import chatRoutes from './routes/Chat.js'
import User from "./models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { loginUser } from "./services/newUserService.js"

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/characters', characterRoutes)
app.use('/auth/register', userRoutes)
app.use('/messages', messageRoutes)
app.use('/chats', chatRoutes)
app.use('/login', userRoutes)
//private route
app.get("/user/:id", checkToken, async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "ID inválido" })
    }

    //check user
    const user = await User.findById(id, '-passwordHash')
    if (!user) { return res.status(404).json({ msg: " Usuario não encontrado" }) }

    res.status(200).json(user)
})

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({ msg: "Acesso negado" })
    }

    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
    } catch (error) {
        res.status(400).json({ msg: " Token Invalido" })
    }
}




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