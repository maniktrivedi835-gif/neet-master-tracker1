import { StudyHoursChart } from "@/components/charts/study-hours-chart";
import { AnalyticsTabs } from "@/components/dashboard/analytics-tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StudyAnalyticsPage() {
  return (
    <AnalyticsShell active="Study" title="Study Analytics" description="Track daily, weekly, and monthly study hours with productivity trends.">
      <Card>
        <CardHeader>
          <CardTitle>Subject-wise study hours</CardTitle>
        </CardHeader>
        <CardContent>
          <StudyHoursChart />
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        <Kpi label="Deep work ratio" value="74%" />
        <Kpi label="Average session" value="72 min" />
        <Kpi label="Peak focus slot" value="6-9 AM" />
      </div>
    </AnalyticsShell>
  );
}

function AnalyticsShell({ active, title, description, children }: { active: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <AnalyticsTabs active={active} />
      {children}
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="mt-2 text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
