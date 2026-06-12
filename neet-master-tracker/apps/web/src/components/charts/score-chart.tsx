"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { scoreTrend } from "@/lib/data";

export function ScoreChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={scoreTrend}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="test" tickLine={false} axisLine={false} />
          <YAxis domain={[0, 720]} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
          <Line type="monotone" dataKey="score" stroke="#0b8391" strokeWidth={3} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="physics" stroke="#d93c58" strokeWidth={2} />
          <Line type="monotone" dataKey="chemistry" stroke="#f4bd33" strokeWidth={2} />
          <Line type="monotone" dataKey="biology" stroke="#25a36a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
