// Different question diffuculties available
export enum EDifficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
};

// Structure of test case of a question
interface ITestcase {
  input: string;
  output: string;
};

// The questions structure which is also a mongodb document
export interface IQuestion extends Document {
  title: string;
  statement: string;
  difficulty: EDifficulty;
  acceptance: number;
  testcases: ITestcase[];
  createdAt: Date;
  updatedAt: Date,
};

// Get questions query parameters types
export interface IQuestionsRequestQuery {
  pageNo?: string;
  pageSize?: string;
};

// Get questions response types
export interface IQuestionsRequestResponse {
  currentPage: number;
  totalQuestions: number;
  totalPages: number;
  questions: IQuestion[];
};

// Add question request body type
export interface IAddQuestionRequestBody {
  title: string;
  statement: string;
  difficulty: string;
  testcases: ITestcase[];
};
