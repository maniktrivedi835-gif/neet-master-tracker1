"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { studyTrend } from "@/lib/data";

export function StudyHoursChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={studyTrend}>
          <defs>
            <linearGradient id="physicsFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#0b8391" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#0b8391" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="chemFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#f4bd33" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#f4bd33" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="bioFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#25a36a" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#25a36a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
          <Area type="monotone" dataKey="Physics" stroke="#0b8391" fill="url(#physicsFill)" strokeWidth={2} />
          <Area type="monotone" dataKey="Chemistry" stroke="#f4bd33" fill="url(#chemFill)" strokeWidth={2} />
          <Area type="monotone" dataKey="Biology" stroke="#25a36a" fill="url(#bioFill)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
