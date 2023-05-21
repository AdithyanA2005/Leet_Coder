import { Request, Response } from "express";
import { EDifficulty, IAddQuestionRequestBody, IQuestion } from "../types/question";
import Question from "../models/question";

// Send backs auth-token is login is successfull
async function addQuestionHandler(req: Request, res: Response): Promise<void> {
  // Extract title, statement and testcases from request body
  const { title, statement, testcases, difficulty }: IAddQuestionRequestBody = req.body;

  // Checks for mandatory fields missing
  let errorMessage: string | null = null;
  if (!title) errorMessage = "Mandatory field `title` is missing"
  else if (!statement) errorMessage = "Mandatory field `statement` is missing"
  else if (!difficulty) errorMessage = "Mandatory field `difficulty` is missing"
  else if (!testcases) errorMessage = "Mandatory field `testcases` is missing"
  else if (testcases.length === 0) errorMessage = "Testcases is empty"
  else if (!testcases[0].input && !"") errorMessage = "Textcase `input` field is missing"
  else if (!testcases[0].output && !"") errorMessage = "Textcase `output` field is missing"

  // Send error if any field is missing
  if (errorMessage) {
    res.status(400).json({ error: errorMessage });
    return;
  };

  // Check if a valid value is given for difficulty
  if (!Object.values(EDifficulty)
    .map(value => value.toLowerCase())
    .includes(difficulty.toLowerCase())
  ) {
    const availableValues: string = Object.values(EDifficulty).map(value => value).join(", ");
    res.status(400).json({ error: "Field `difficulty` value should be one of " + availableValues });
    return;
  };

  try {
    // Check if question with same title or statement exists and storing errorMessage in a variable
    const existingQuestionByTitle: IQuestion | null = await Question.findOne({ title });
    const existingQuestionByStatement: IQuestion | null = await Question.findOne({ statement });
    let errorMessage: string | null = null;

    if (existingQuestionByTitle && existingQuestionByStatement) {
      errorMessage = "Question with same title & statement already exists";
    } else if (existingQuestionByTitle) {
      errorMessage = "Question with same title already exists";
    } else if (existingQuestionByStatement) {
      errorMessage = "Question with same statement already exists";
    };

    // Send error is any conflict is found
    if (errorMessage) {
      res.status(409).json({ message: errorMessage });
      return;
    };

    // Set difficulty to one of the oprions provided in enum
    let parsedDifficulty: EDifficulty = EDifficulty.EASY;
    if (difficulty.toUpperCase() === "HARD") parsedDifficulty = EDifficulty.HARD
    else if (difficulty.toUpperCase() === "MEDIUM") parsedDifficulty = EDifficulty.MEDIUM

    // Create new question in tbe database
    const question: IQuestion = await Question.create({
      title,
      statement,
      testcases,
      difficulty: parsedDifficulty
    });

    // Send created  question as response
    res.status(201).json({ question });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

export default addQuestionHandler;
