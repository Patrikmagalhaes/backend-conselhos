import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import personagemRoutes from './routes/personagensRoutes.js'
import  iaRoutes from './routes/iaRoutes.js'

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/api/personagem', personagemRoutes)
app.use('/api/ia', iaRoutes)

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