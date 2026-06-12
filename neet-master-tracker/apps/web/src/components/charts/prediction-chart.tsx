"use client";

import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const prediction = [
  { week: "Now", expected: 635, target: 650, probability: 71 },
  { week: "W2", expected: 642, target: 650, probability: 76 },
  { week: "W4", expected: 651, target: 650, probability: 82 },
  { week: "W6", expected: 660, target: 650, probability: 87 },
  { week: "W8", expected: 668, target: 650, probability: 90 }
];

export function PredictionChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={prediction}>
          <defs>
            <linearGradient id="predictionFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#0b8391" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#0b8391" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="week" tickLine={false} axisLine={false} />
          <YAxis domain={[600, 690]} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
          <ReferenceLine y={650} stroke="#f4bd33" strokeDasharray="4 4" />
          <Area type="monotone" dataKey="expected" stroke="#0b8391" fill="url(#predictionFill)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
