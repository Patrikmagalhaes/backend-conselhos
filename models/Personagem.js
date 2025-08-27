import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  birth: {
    type: Date,
    required: true
  },
  death: {
    type: Date,
    required: false // pode ter personagem vivo
  },
  description: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: false
  },
  promptConfig: {
    style: {
      type: String,
      required: true
    },
    systemMessage: {
      type: String,
      required: true
    }
  }
}, { timestamps: true }); // cria createdAt e updatedAt automaticamente

export default mongoose.model("Personagem", characterSchema)