import Chat from "../models/Chat.js";

export const newChat = async (data) => {
  try {
    const chat = await Chat.create(data);
    return chat;
  } catch (error) {
    console.log({ error: error });
    throw error;
  }
};


