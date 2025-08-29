import User from "../models/User.js"

export const createUser = async (req, res) => {
    try {
        const newUserr = await User.create(req.body)
        res.json(newUserr)
    } catch (error) {
        console.log({ error: error })

    }
}

export const listUsers = async (req, res) => {
    try {
        const alllistCharacter = await User.find()
        res.json(alllistCharacter)
        console.log(alllistCharacter)
    } catch (error) {
        console.log({ error: error })
    }
}
