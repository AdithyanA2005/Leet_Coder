import { Request, Response } from "express";
import { IStatsRequestQuery, IStatsRequestResponse } from "../types/stats";
import Question from "../models/question";
import User from "../models/user";
import Language from "../models/language";

// This function will send no Of users, no of questions and no of languages supported
async function getStatsHandler(req: Request, res: Response): Promise<void> {
  // Extract conditional datas from request queries
  const { excludeUsers, excludeLanguages, excludeQuestions }: IStatsRequestQuery = req.query;

  // The Response data for the requests response
  let responseData: IStatsRequestResponse = {};

  try {
    // To only add stats which are not marked as exclued in the request query    
    if (excludeUsers?.toLowerCase() !== "true") responseData.questions = await Question.countDocuments();
    if (excludeLanguages?.toLowerCase() !== "true") responseData.languages = await Language.countDocuments();
    if (excludeQuestions?.toLowerCase() !== "true") responseData.users = await User.countDocuments();

    // Send the collected statistics
    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  };
};

export default getStatsHandler;
