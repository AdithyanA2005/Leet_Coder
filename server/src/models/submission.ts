import { PopulatedDoc, Document, Schema, model } from "mongoose";
import Question from "./question";
import { IUser } from "./user";
import { IQuestion } from "types/question";

// Status enums
enum Status {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
};

// Interface for Submission document
export interface ISubmission extends Document {
  questionId: PopulatedDoc<IQuestion & Document>;
  userId: PopulatedDoc<IUser & Document>;
  code: string;
  language: string;
  status: Status;
  output?: string;
  error?: string;
};

// Submission Schema
const submissionSchema = new Schema<ISubmission>(
  {
    questionId: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.PENDING,
      required: true,
    },
    output: {
      type: String,
    },
    error: {
      type: String,
    },
  },
  {
    timestamps: true, // To automatically add `createdAt` and `updatedAt` fields
    versionKey: false, // `__v` attribute in mongodb will not be added
  }
);

submissionSchema.post<ISubmission>("save", async function () {
  const questionId: Schema.Types.ObjectId = this.questionId;
  const acceptedCount: number = await Submission.countDocuments({ questionId, status: Status.ACCEPTED });
  const totalCount: number = await Submission.countDocuments({ questionId });
  const acceptance: number = (acceptedCount / totalCount) * 100;
  await Question.findByIdAndUpdate(questionId, { acceptance });
});

// Export the Submission model
const Submission = model<ISubmission>("Submission", submissionSchema);
export default Submission;

