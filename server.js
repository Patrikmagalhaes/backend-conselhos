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

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/characters', characterRoutes)
app.use('/users', userRoutes)
app.use('/messages', messageRoutes)
app.use('/chats', chatRoutes)

//private route
app.get("/user/:id", async (req, res) => {
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
        passwordHash,
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


//login user
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body

    //validation
    if (!email) {
        return res.status(422).json({ msg: "O Email é obrigatório" })
    }
    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatória" })
    }

    const user = await User.findOne({ email: email })
    if (!user) {
        return res.status(422).json({ msg: "Usuario não encontrado" })
    }

    //check password
    const checkPassword = await bcrypt.compare(password, user.passwordHash)

    if (!checkPassword)
        return res.status(422).json({ msg: 'Senha invalida' })

    try {

        const secret = process.env.SECRET
        const token = jwt.sign({ id: user._id }, secret)

        res.status(200).json({ "msg": "Autenticado", token })
    } catch (error) {
        res.status(500).json({ msg: " Erro interno" })
        console.log(error)
    }
})



connectDB()

app.listen(PORT, () => console.log(`O servidor esta rodando`))