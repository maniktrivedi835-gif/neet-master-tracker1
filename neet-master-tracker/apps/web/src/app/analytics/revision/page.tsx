import { AnalyticsTabs } from "@/components/dashboard/analytics-tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const revisionHealth = [
  { label: "Due today completed", value: 64 },
  { label: "Overdue recovered", value: 38 },
  { label: "Mastered retention", value: 81 }
];

export default function RevisionAnalyticsPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Revision Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">Measure spaced repetition health and overdue recovery.</p>
      </div>
      <AnalyticsTabs active="Revision" />
      <Card>
        <CardHeader>
          <CardTitle>Revision health</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5">
          {revisionHealth.map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>{item.label}</span>
                <span className="font-semibold">{item.value}%</span>
              </div>
              <Progress value={item.value} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
