export interface IStatsRequestQuery {
  excludeUsers?: "true" | "false";
  excludeLanguages?: "true" | "false";
  excludeQuestions?: "true" | "false";
};

export interface IStatsRequestResponse {
  questions?: number;
  languages?: number;
  users?: number;
};
