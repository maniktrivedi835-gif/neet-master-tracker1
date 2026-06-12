import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
  const body = await request.json();
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      insights: [
        "Add OPENAI_API_KEY to enable live AI analysis.",
        "Fallback: Physics accuracy is the largest improvement lever based on recent mock data."
      ]
    });
  }

  const client = new OpenAI({ apiKey });
  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "You are a NEET UG study coach. Give concise, actionable preparation insights using the supplied study and mock data."
      },
      {
        role: "user",
        content: JSON.stringify(body)
      }
    ]
  });

  return NextResponse.json({ insights: completion.choices[0]?.message.content ?? "" });
}
