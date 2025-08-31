import Chat from "../models/Chat.js";
import gerarResposta from "../services/huggingFaceService.js";

export const createChat = async (req, res) => {
    try {
        const newChat = await Chat.create(req.body)
        res.json(newChat)
    } catch (error) {
        console.log({ error: error })

    }
}

export const respondePergunta = async (req, res) => {
  try {
    const resposta = await gerarResposta(req.body);
    res.json(resposta);
    createMessage(resposta);

  } catch (error) {
    console.log({ error: error });
  }
};
