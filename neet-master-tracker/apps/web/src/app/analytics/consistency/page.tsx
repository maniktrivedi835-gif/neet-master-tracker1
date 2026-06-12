import { AnalyticsTabs } from "@/components/dashboard/analytics-tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { badges, consistency } from "@/lib/data";

export default function ConsistencyAnalyticsPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Consistency Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">Study streaks, monthly heatmaps, productivity scores, XP, levels, and badges.</p>
      </div>
      <AnalyticsTabs active="Consistency" />
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Monthly heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {consistency.map((day) => (
                <div
                  key={day.day}
                  className="aspect-square rounded-md border border-border"
                  style={{ background: `color-mix(in srgb, hsl(var(--primary)) ${day.score * 18}%, hsl(var(--muted)))` }}
                  title={`Day ${day.day}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Gamification</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <div className="rounded-md bg-muted p-4">
              <p className="text-xs text-muted-foreground">XP points</p>
              <p className="mt-1 text-3xl font-bold">12,480</p>
              <p className="mt-1 text-sm text-muted-foreground">Level 8 - 520 XP to next level</p>
            </div>
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.title} className="flex items-center gap-3 rounded-md border border-border p-3">
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold">{badge.title}</span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
