import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()


const app = express()
const PORT = 3000

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado ao mongo ")

    } catch (error) {
        console.log("DEU ERRO AO CONECTAR ", error)
    }
}
connectDB()
app.get('/', (req, res) => {

})

app.listen(PORT, () => console.log(`O servidor esta rodando`))