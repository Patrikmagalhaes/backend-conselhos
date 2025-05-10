import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Personagem from "./Personagem.js"

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado ao mongo ")

    } catch (error) {
        console.log("DEU ERRO AO CONECTAR ", error)
    }
}
connectDB()

//Read
app.get('/personagem', async (req, res) => {

    try {
        const todosPersonagens = await Personagem.find()
        res.json(todosPersonagens)
    } catch (error) {
        console.log({ error: error })
    }
})

//Create
app.post('/personagem', async (req, res) => {
    try {
        const novoPersonagem = await Personagem.create(req.body)
        res.json(novoPersonagem)
    } catch (error) {
        console.log({ error: error })

    }
})

//Update
app.put('/personagem/:id', async (req, res) => {
    try {
        const alteraPersonagem = await Personagem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true })

        res.json(alteraPersonagem)
    } catch (error) {
        console.log({ error: error })

    }
})

//Delete
app.delete('/personagem/:id', async (req, res) => {
    try {
        const alteraPersonagem = await Personagem.findByIdAndDelete(req.params.id)
        res.json(alteraPersonagem)
    } catch (error) {
        console.log({ error: error })

    }
})

app.listen(PORT, () => console.log(`O servidor esta rodando`))