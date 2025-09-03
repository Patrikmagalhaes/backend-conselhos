import { newChat } from "../services/chatService.js";

export const createChat = async (req, res) => {
  try {
    const chat = await newChat(req.body);
    res.json(chat);
  } catch (error) {
    console.log({ error: error });
  }
};
