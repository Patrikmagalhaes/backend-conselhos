import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  plan: {
    type: {
      type: String,
      enum: ["free", "premium"],
      default: "free"
    },
    expiresAt: {
      type: Date,
      required: false
    }
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);