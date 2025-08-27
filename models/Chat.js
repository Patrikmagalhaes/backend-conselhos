import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  characterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Character",
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

export default mongoose.model("Chat", chatSchema);
