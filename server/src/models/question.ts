import { model, Schema } from "mongoose";
import { EDifficulty, IQuestion } from "../types/question";

// Scheme for Questions Document
const questionSchema = new Schema<IQuestion>({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  statement: {
    type: String,
    unique: true,
    required: true,
  },
  difficulty: {
    type: String,
    enum: Object.values(EDifficulty),
    default: EDifficulty.EASY,
    required: true,
  },
  acceptance: {
    type: Number,
    default: 0,
    required: true,
  },
  testcases: [{
    input: String,
    output: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create the model
const Question = model<IQuestion>("Question", questionSchema);
export default Question;
