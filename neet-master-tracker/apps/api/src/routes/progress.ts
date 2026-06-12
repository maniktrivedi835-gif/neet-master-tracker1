import { Router } from "express";

export const progressRouter = Router();

progressRouter.get("/dashboard", (_request, response) => {
  response.json({
    todayHours: 6.4,
    weeklyHours: 38,
    monthlyHours: 146,
    streak: 21,
    completionPercent: 68,
    predictedScore: 635,
    predictedRank: 5200
  });
});
