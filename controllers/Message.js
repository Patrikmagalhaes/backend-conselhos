import Message from "../models/Message.js"

export const sendMessage = async (req, res) => {
    try {
        const newMessage = await Message.create(req.body)
        res.json(newMessage)
    } catch (error) {
        console.log({ error: error })

    }
}