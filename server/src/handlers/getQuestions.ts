import { Request, Response } from "express";
import { IQuestion, IQuestionsRequestQuery, IQuestionsRequestResponse } from "../types/question";
import Question from "../models/question";

// This function will send a list of questions from DB 
async function getQuestionsHandler(req: Request, res: Response): Promise<void> {
  // Extract pagination details page and pageSize from req query
  const { pageNo, pageSize }: IQuestionsRequestQuery = req.query;

  // Converting the pagination details to appropriate data types
  const parsedPageNo: number = pageNo ? parseInt(pageNo, 10) : 1;
  const parsedPageSize: number = pageSize ? parseInt(pageSize, 10) : 10;

  try {
    // Get total no of questions available in the DB
    const totalQuestions: number = await Question.countDocuments();

    // Fetch questions from DB after pagination
    const questions: IQuestion[] = await Question.find()
      .skip((parsedPageNo - 1) * parsedPageSize)
      .limit(parsedPageSize)
      .select("-updatedAt -createdAt");

    // The Response data for the requests response
    const responseData: IQuestionsRequestResponse = {
      currentPage: parsedPageNo,
      totalPages: Math.ceil(totalQuestions / parsedPageSize),
      totalQuestions,
      questions
    };

    // Send pagination details and questions
    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  };
};

export default getQuestionsHandler;
