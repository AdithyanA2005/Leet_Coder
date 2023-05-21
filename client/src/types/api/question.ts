interface TestCase {
  input: string;
  output: string;
  _id: string;
}

interface Question {
  difficulty: string;
  _id: string;
  title: string;
  statement: string;
  testcases: TestCase[];
  createdAt: string;
  updatedAt: string;
  acceptance: number;
}

export interface IQuestionResponse {
  currentPage: number;
  totalPages: number;
  totalQuestions: number;
  questions: Question[];
}


