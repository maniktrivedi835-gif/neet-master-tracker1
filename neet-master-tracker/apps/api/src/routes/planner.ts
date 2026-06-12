import { Router } from "express";

export const plannerRouter = Router();

plannerRouter.get("/today", (_request, response) => {
  response.json({
    tasks: [
      { title: "Electrostatics MCQs", hours: 1.5, priority: "High" },
      { title: "Biomolecules revision", hours: 1, priority: "Medium" }
    ]
  });
});

plannerRouter.post("/reschedule", (request, response) => {
  response.json({
    optimized: true,
    tasks: request.body.tasks ?? []
  });
});
