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
  frase_icone: {
    type: String,
    required: true,
  },
  curiosidades: {
    type: [String],
    default: [],
  },
  image_link: {
    type: String,
    required: true // ou `false` se quiser tornar opcional
  }
}, {
  timestamps: true,
});
export default mongoose.model("Personagem", PersonagemSchema)