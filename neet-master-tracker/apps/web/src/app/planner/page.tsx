import { PlannerBoard } from "@/components/dashboard/planner-board";

export default function PlannerPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Daily Study Planner</h1>
        <p className="mt-1 text-sm text-muted-foreground">Plan targets, prioritize topics, run focus blocks, and recover missed tasks.</p>
      </div>
      <PlannerBoard />
    </div>
  );
}
