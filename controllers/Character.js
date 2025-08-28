import Character from "../models/Character.js"

export const createCharacter = async (req, res) => {
    try {
        const newCharacter = await Character.create(req.body)
        res.json(newCharacter)
    } catch (error) {
        console.log({ error: error })

    }
}

export const listCharacter = async (req, res) => {
    try {
        const alllistCharacter = await Character.find()
        res.json(alllistCharacter)
        console.log(alllistCharacter)
    } catch (error) {
        console.log({ error: error })
    }
}

export const editCharacter = async (req, res) => {
    try {
        const putCharacter = await Character.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true })

        res.json(putCharacter)
    } catch (error) {
        console.log({ error: error })

    }
}

export const deleteCharacter = async (req, res) => {
    try {
        const delCharacter = await Character.findByIdAndDelete(req.params.id)
        res.json(delCharacter)
    } catch (error) {
        console.log({ error: error })

    }
}