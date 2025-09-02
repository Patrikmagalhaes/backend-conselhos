import Chat from "../models/Chat.js";
import gerarResposta from "../services/huggingFaceService.js";
import { createMessage } from "./Message.js";

export const createChat = async (req, res) => {
  try {
    const newChat = await Chat.create(req.body);
    res.json(newChat);
  } catch (error) {
    console.log({ error: error });
  }
};

export const respondePergunta = async (req, res) => {
  try {
    const resposta = await gerarResposta(req.body);
    res.json(resposta);
    await createMessage({
      content: resposta.choices[0].message.content,
      sender: "character",
      chatId: '68b4771d73609c602193d695'
    });
  } catch (error) {
    console.log({ error: error });
  }
};
