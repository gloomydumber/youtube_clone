import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.noew
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;