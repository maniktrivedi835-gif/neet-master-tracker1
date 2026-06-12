import { Router } from "express";
import { z } from "zod";
import { analyzePerformance } from "../services/ai.js";

const requestSchema = z.object({
  studyHours: z.array(z.number()).default([]),
  mockScores: z.array(z.number()).default([]),
  weakChapters: z.array(z.string()).default([])
});

export const aiRouter = Router();

aiRouter.post("/analyze", async (request, response, next) => {
  try {
    const payload = requestSchema.parse(request.body);
    const insights = await analyzePerformance(payload);
    response.json({ insights });
  } catch (error) {
    next(error);
  }
});
