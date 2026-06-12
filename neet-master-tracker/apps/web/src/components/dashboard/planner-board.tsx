"use client";

import { useMemo, useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Plus, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PomodoroTimer } from "@/components/dashboard/pomodoro-timer";

type PlannerTask = {
  id: string;
  title: string;
  subject: string;
  hours: number;
  priority: "High" | "Medium" | "Low";
};

const initialTasks: PlannerTask[] = [
  { id: "task-1", title: "Revise Electrostatics formulas", subject: "Physics", hours: 1.5, priority: "High" },
  { id: "task-2", title: "Solve 90 NCERT Biology MCQs", subject: "Biology", hours: 2, priority: "Medium" },
  { id: "task-3", title: "Organic mechanisms notebook", subject: "Chemistry", hours: 1.25, priority: "High" },
  { id: "task-4", title: "Review wrong mock questions", subject: "Mock Review", hours: 1, priority: "High" }
];

export function PlannerBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const totalHours = useMemo(() => tasks.reduce((sum, task) => sum + task.hours, 0), [tasks]);

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setTasks((items) => {
      const oldIndex = items.findIndex((task) => task.id === active.id);
      const newIndex = items.findIndex((task) => task.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-3">
          <div>
            <CardTitle>Daily study planner</CardTitle>
            <p className="text-xs text-muted-foreground">Drag tasks to reorder your execution plan.</p>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4" />
            Task
          </Button>
        </CardHeader>
        <CardContent>
          <DndContext onDragEnd={onDragEnd}>
            <SortableContext items={tasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
              <div className="grid gap-3">
                {tasks.map((task) => (
                  <SortableTask key={task.id} task={task} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Metric label="Planned hours" value={`${totalHours}h`} />
            <Metric label="Missed auto-reschedule" value="2 tasks" />
            <Metric label="Smart reminders" value="5 active" />
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4">
        <PomodoroTimer />
        <Card>
          <CardHeader>
            <CardTitle>Auto-rescheduling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Missed high-priority tasks are moved into the next available focus block.</p>
            <Button variant="secondary" className="w-full">
              <RotateCcw className="h-4 w-4" />
              Optimize Today
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SortableTask({ task }: { task: PlannerTask }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
    >
      <button className="text-muted-foreground" aria-label="Drag task" {...attributes} {...listeners}>
        <GripVertical className="h-5 w-5" />
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{task.title}</p>
        <p className="text-xs text-muted-foreground">{task.subject} - {task.hours}h</p>
      </div>
      <Badge className={task.priority === "High" ? "border-danger/30 bg-danger/10 text-danger" : ""}>{task.priority}</Badge>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-muted/60 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-bold">{value}</p>
    </div>
  );
}
