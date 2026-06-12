import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { chapters, statusCycle } from "@/lib/data";

export default function SubjectsPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Subject and Chapter Tracking</h1>
        <p className="mt-1 text-sm text-muted-foreground">Track completion, notes, practice, PYQs, revisions, and confidence per chapter.</p>
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        {Object.entries(chapters).map(([subject, list], subjectIndex) => (
          <Card key={subject}>
            <CardHeader>
              <CardTitle>{subject}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {list.slice(0, 10).map((chapter, index) => {
                const status = statusCycle[(index + subjectIndex) % statusCycle.length];
                const completion = Math.min(96, 18 + index * 8 + subjectIndex * 7);
                return (
                  <div key={chapter} className="rounded-md border border-border p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">{chapter}</p>
                        <p className="text-xs text-muted-foreground">MCQs {120 + index * 18} - PYQ {completion}% - R{(index % 3) + 1}</p>
                      </div>
                      <Badge>{status}</Badge>
                    </div>
                    <Progress value={completion} className="mt-3" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
