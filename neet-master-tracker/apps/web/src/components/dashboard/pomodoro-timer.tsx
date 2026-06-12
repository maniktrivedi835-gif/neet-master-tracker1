"use client";

import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const focusSeconds = 25 * 60;

export function PomodoroTimer() {
  const [seconds, setSeconds] = useState(focusSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setSeconds((current) => Math.max(0, current - 1)), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pomodoro focus</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex aspect-square max-h-64 items-center justify-center rounded-full border-8 border-primary/20 bg-primary/10">
          <p className="text-5xl font-bold">{minutes}:{rest}</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button onClick={() => setRunning((value) => !value)}>
            {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {running ? "Pause" : "Start"}
          </Button>
          <Button variant="secondary" onClick={() => { setSeconds(focusSeconds); setRunning(false); }}>
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
