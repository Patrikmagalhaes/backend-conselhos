import gerarResposta from "../services/huggingFaceService.js";

export const respondePergunta = async (req, res) => {
  try {
    const resposta = await gerarResposta(req.body);
    res.json(resposta);
    createMessage(resposta);

  } catch (error) {
    console.log({ error: error });
  }
};
