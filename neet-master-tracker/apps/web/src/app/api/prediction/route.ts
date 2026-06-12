import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { currentScore = 600, dailyHours = 6, mockAverage = currentScore } = await request.json();
  const effortLift = Math.min(45, dailyHours * 4.2);
  const trendLift = Math.max(-20, Math.min(30, (mockAverage - currentScore) * 0.6));
  const expectedScore = Math.round(currentScore + effortLift + trendLift);
  const targetProbability = Math.max(5, Math.min(95, Math.round((expectedScore - 590) * 0.9)));
  const expectedRank = Math.max(100, Math.round(180000 * Math.exp(-expectedScore / 92)));

  return NextResponse.json({
    expectedScore,
    targetProbability,
    expectedRank
  });
}
