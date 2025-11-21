import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import characterRoutes from './routes/Character.js'
import userRoutes from './routes/User.js'
import messageRoutes from './routes/Message.js'
import chatRoutes from './routes/Chat.js'
import User from "./models/User.js"
import bcrypt from "bcrypt"
dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/characters', characterRoutes)
app.use('/users', userRoutes)
app.use('/messages', messageRoutes)
app.use('/chats', chatRoutes)

//register user
app.post('/auth/register', async (req, res) => {

    const { name, email, password } = req.body


    //validation
    if (!name) {
        return res.status(422).json({ msg: "O nome é obrigatório" })
    }
    if (!email) {
        return res.status(422).json({ msg: "O Email é obrigatório" })
    }
    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatória" })
    }

    //check user exist
    const userExists = await User.findOne({ email: email })
    if (userExists) {
        return res.status(422).json({ msg: "Email ja utilizado" })
    }

    //create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)


    //create user
    const user = new User({
        name,
        password,
        email
    })

    try {
        await user.save()
        res.status(201).json({ msg: "Usuário Criado" })
    } catch (error) {
        res.status(500).json({ msg: " Erro interno" })
        console.log(error)
    }

})


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