import { PredictionChart } from "@/components/charts/prediction-chart";
import { AnalyticsTabs } from "@/components/dashboard/analytics-tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PredictionAnalyticsPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Score Prediction Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">Forecast expected score, target probability, and expected rank from study hours and mocks.</p>
      </div>
      <AnalyticsTabs active="Prediction" />
      <Card>
        <CardHeader>
          <CardTitle>Expected score path</CardTitle>
        </CardHeader>
        <CardContent>
          <PredictionChart />
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        <Predict label="Current score" value="635" />
        <Predict label="Target probability" value="71%" />
        <Predict label="Expected rank" value="5.2k" />
      </div>
    </div>
  );
}

function Predict({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="mt-2 text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
