import { Card, CardContent } from "@/components/ui/card";

type MetricCardProps = {
  label: string;
  value: string;
  delta: string;
  icon: React.ComponentType<{ className?: string }>;
};

export function MetricCard({ label, value, delta, icon: Icon }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="truncate text-xl font-bold">{value}</p>
          <p className="truncate text-xs text-muted-foreground">{delta}</p>
        </div>
      </CardContent>
    </Card>
  );
}
