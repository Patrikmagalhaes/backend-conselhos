import mongoose from "mongoose";

const PersonagemSchema = new mongoose.Schema({

  nome: {
    type: String,
    required: true,
  },
  ocupacao: {
    type: String,
    required: true,
  },
  vida: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  tom: {
    type: String,
    required: true,
  },
  estilo_linguagem: {
    type: String,
    required: true,
  },
  frase_icone: {
    type: String,
    required: true,
  },
  curiosidades: {
    type: [String],
    default: [],
  },
  contexto_prompt: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});


export default mongoose.model("Personagem", PersonagemSchema)