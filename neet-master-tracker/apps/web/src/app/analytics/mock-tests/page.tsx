import { ScoreChart } from "@/components/charts/score-chart";
import { AnalyticsTabs } from "@/components/dashboard/analytics-tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MockAnalyticsPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Mock Test Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">Score trend, subject breakup, weak topic reports, and error trends.</p>
      </div>
      <AnalyticsTabs active="Mock Tests" />
      <Card>
        <CardHeader>
          <CardTitle>Last five mock tests</CardTitle>
        </CardHeader>
        <CardContent>
          <ScoreChart />
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        <ErrorCard label="Silly mistakes" value="18%" />
        <ErrorCard label="Concept gaps" value="41%" />
        <ErrorCard label="Time pressure" value="27%" />
      </div>
    </div>
  );
}

function ErrorCard({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="mt-2 text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
