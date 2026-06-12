import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { pyqRows } from "@/lib/data";

export default function PyqPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-normal">PYQ Tracker</h1>
          <p className="mt-1 text-sm text-muted-foreground">Filter by year, subject, and chapter to calculate mastery score.</p>
        </div>
        <Button variant="secondary">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>
      <div className="grid gap-3">
        {pyqRows.map((row) => (
          <Card key={`${row.year}-${row.chapter}`}>
            <CardContent className="grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold">{row.chapter}</p>
                  <Badge>{row.subject}</Badge>
                  <Badge>{row.year}</Badge>
                  <Badge>{row.difficulty}</Badge>
                </div>
                <div className="mt-3 max-w-xl">
                  <Progress value={row.completion} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <Metric label="Done" value={`${row.completion}%`} />
                <Metric label="Correct" value={`${row.correct}%`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-muted px-4 py-2">
      <p className="font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
