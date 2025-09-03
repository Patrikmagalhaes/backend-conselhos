import { listMessages } from "../services/messageService";

export const responseMessage = async (req, res) => {
  const { chatId, messageUser } = req.body;

  try {
    await newMessage({ chatId, content: messageUser, sender: "user" }); //salva a mensagem do usuario no db
    const responseIa = await generateResponse(content); //resposta da ia
    const messageCharacter = await newMessage({
      chatId,
      content: responseIa,
      sender: "character",
    }); //salva a mensagem do personagem no db

    res.json(messageCharacter);
  } catch (error) {
    console.log({ error: error });
  }
};

export const getMessages = async (req, res) => {
  const { chatId } = req.body;
  try {
    const messages = await listMessages(chatId);
    res.json(messages);
  } catch (error) {
    console.log({ error: error });
  }
};
