import { chatCompletion, InferenceClient } from "@huggingface/inference";
import dotenv from 'dotenv'
dotenv.config()

const client = new InferenceClient(process.env.API_TOKEN);

async function gerarResposta(prompt) {
  try {
    const respostaIa = await client.chatCompletion({
      provider: "nebius",
      model: "deepseek-ai/DeepSeek-R1",
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content: `${prompt.personagem}Você é ${prompt.personagem}, e deve responder a todas as perguntas como se fosse essa pessoa. Use o estilo de fala, a personalidade e o ponto de vista característicos de ${prompt.personagem}.As respostas devem ter no máximo 3 frases e devem conter apenas o que ${prompt.personagem} diria, sem descrições ou narrações externas.`
        },
        {
          role: "user",
          content: prompt.pergunta,
        },
      ],
    })

    console.log(respostaIa.choices[0].message.content)
    const partes = respostaIa.choices[0].message.content
    const arrayResposta = partes.split(/<\/think>\s*/i);
    const resultado = arrayResposta[1]?.trim() || '';
    console.log('resultado:', resultado)

    return resultado


  } catch (error) {
    console.error("Erro ao gerar resposta:", error);
  }
}

export default gerarResposta
