import User from "../models/User.js"

export const createUser = async (req, res) => {
    try {
        const newUserr = await User.create(req.body)
        res.json(newUserr)
    } catch (error) {
        console.log({ error: error })

    }
}

