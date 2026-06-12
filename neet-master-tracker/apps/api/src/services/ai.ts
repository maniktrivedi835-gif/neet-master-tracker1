import OpenAI from "openai";

type AnalyzePayload = {
  studyHours: number[];
  mockScores: number[];
  weakChapters: string[];
};

export async function analyzePerformance(payload: AnalyzePayload) {
  if (!process.env.OPENAI_API_KEY) {
    return [
      "OpenAI API key is not configured. Returning sample coaching insights.",
      "Prioritize weak chapters from recent mock errors before adding new material."
    ];
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "You are a concise NEET UG study coach. Return five actionable insights."
      },
      {
        role: "user",
        content: JSON.stringify(payload)
      }
    ]
  });

  return completion.choices[0]?.message.content ?? "";
}
