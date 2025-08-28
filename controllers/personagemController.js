import Character from "../models/Character.js"

export const criarPersonagem = async (req, res) => {
    try {
        const novoPersonagem = await Character.create(req.body)
        res.json(novoPersonagem)
    } catch (error) {
        console.log({ error: error })

    }
}

export const listarPersonagens = async (req, res) => {
    try {
        const todosPersonagens = await Personagem.find()
        res.json(todosPersonagens)
        console.log(todosPersonagens)
    } catch (error) {
        console.log({ error: error })
    }
}

export const editarPersonagem = async (req, res) => {
    try {
        const alteraPersonagem = await Personagem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true })

        res.json(alteraPersonagem)
    } catch (error) {
        console.log({ error: error })

    }
}

export const deletarPersonagem = async (req, res) => {
    try {
        const alteraPersonagem = await Personagem.findByIdAndDelete(req.params.id)
        res.json(alteraPersonagem)
    } catch (error) {
        console.log({ error: error })

    }
}