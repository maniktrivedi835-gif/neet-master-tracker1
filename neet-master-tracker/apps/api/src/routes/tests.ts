import { Router } from "express";

export const testsRouter = Router();

testsRouter.get("/", (_request, response) => {
  response.json([
    { name: "Full Mock 37", marks: 635, accuracy: 84 },
    { name: "Full Mock 36", marks: 628, accuracy: 83 }
  ]);
});
