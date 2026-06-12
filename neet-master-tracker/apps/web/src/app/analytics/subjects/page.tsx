import { SubjectRadar } from "@/components/charts/subject-radar";
import { AnalyticsTabs } from "@/components/dashboard/analytics-tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { subjectPerformance } from "@/lib/data";

export default function SubjectAnalyticsPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Subject Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">Compare completion, accuracy, and confidence across Physics, Chemistry, and Biology.</p>
      </div>
      <AnalyticsTabs active="Subjects" />
      <Card>
        <CardHeader>
          <CardTitle>Subject health radar</CardTitle>
        </CardHeader>
        <CardContent>
          <SubjectRadar />
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        {subjectPerformance.map((subject) => (
          <Card key={subject.subject}>
            <CardContent className="p-4">
              <p className="font-semibold">{subject.subject}</p>
              <p className="mt-2 text-sm text-muted-foreground">Completion {subject.completion}% - Accuracy {subject.accuracy}% - Confidence {subject.confidence}%</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
