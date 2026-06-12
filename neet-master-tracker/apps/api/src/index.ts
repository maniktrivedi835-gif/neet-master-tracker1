import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { aiRouter } from "./routes/ai.js";
import { plannerRouter } from "./routes/planner.js";
import { progressRouter } from "./routes/progress.js";
import { testsRouter } from "./routes/tests.js";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(helmet());
app.use(cors({ origin: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000" }));
app.use(express.json({ limit: "10mb" }));
app.use(morgan("tiny"));

app.get("/health", (_request, response) => {
  response.json({ ok: true, service: "neet-master-tracker-api" });
});

app.use("/ai", aiRouter);
app.use("/planner", plannerRouter);
app.use("/progress", progressRouter);
app.use("/tests", testsRouter);

app.listen(port, () => {
  console.log(`NEET Master Tracker API running on http://localhost:${port}`);
});
