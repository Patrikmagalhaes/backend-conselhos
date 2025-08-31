import Message from "../models/Message.js"

export const createMessage = async (req, res) => {
    try {
        const newMessage = await Message.create(req.body)
        res.json(newMessage)
    } catch (error) {
        console.log({ error: error })

    }
}

export const getMessages = async (req, res) => {
    try {
        const listMessages = await Message.find()
        res.json(listMessages)
    } catch (error) {
        console.log({ error: error })
    }
}
