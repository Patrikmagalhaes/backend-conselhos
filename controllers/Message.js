import Message from "../models/Message.js"

export const createMessage = async (data) => {
    try {
        const newMessage = await Message.create(data)
        res.json(newMessage)
        console.log("Mensagem criada", newMessage)
    } catch (error) {
        console.log({ error: error })

    }
}

export const getMessages = async (req, res) => {
    try {
        const listMessages = await Message.find({ id: req.params.chatId })
        res.json(listMessages)
    } catch (error) {
        console.log({ error: error })
    }
}
