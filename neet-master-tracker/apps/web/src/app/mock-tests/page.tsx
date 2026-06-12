import { TrendingUp } from "lucide-react";
import { ScoreChart } from "@/components/charts/score-chart";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockTests } from "@/lib/data";

export default function MockTestsPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Mock Test Management</h1>
        <p className="mt-1 text-sm text-muted-foreground">Store tests, analyze errors, and convert every mock into a revision plan.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Performance graph
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScoreChart />
        </CardContent>
      </Card>
      <div className="grid gap-4 lg:grid-cols-3">
        {mockTests.map((test) => (
          <Card key={test.name}>
            <CardHeader>
              <CardTitle>{test.name}</CardTitle>
              <p className="text-xs text-muted-foreground">{test.date}</p>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">{test.marks}</p>
                  <p className="text-xs text-muted-foreground">out of {test.total}</p>
                </div>
                <Badge>{test.accuracy}% accuracy</Badge>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <Metric label="Phy" value={test.Physics} />
                <Metric label="Chem" value={test.Chemistry} />
                <Metric label="Bio" value={test.Biology} />
              </div>
              <p className="text-xs text-muted-foreground">Attempted {test.attempted} - Unattempted {test.unattempted}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md bg-muted p-2">
      <p className="font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
