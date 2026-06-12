"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { subjectPerformance } from "@/lib/data";

export function SubjectRadar() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={subjectPerformance}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
          <Radar name="Completion" dataKey="completion" stroke="#0b8391" fill="#0b8391" fillOpacity={0.18} />
          <Radar name="Accuracy" dataKey="accuracy" stroke="#25a36a" fill="#25a36a" fillOpacity={0.12} />
          <Radar name="Confidence" dataKey="confidence" stroke="#f4bd33" fill="#f4bd33" fillOpacity={0.12} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
