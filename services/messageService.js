import Message from "../models/Message.js";

export const newMessage = async (data) => {
  try {
    const message = await Message.create(data);
    return message;
  } catch (error) {
    console.log({ error: error });
    throw error;
  }
};


export const listMessages = async (data) => {
  try {
    const chat = await Message.find(data);
    return chat;
  } catch (error) {
    console.log({ error: error });
    throw error;
  }
};
