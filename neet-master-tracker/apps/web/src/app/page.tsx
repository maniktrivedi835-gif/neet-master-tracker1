import { ArrowRight, CalendarClock, Sparkles } from "lucide-react";
import { MetricCard } from "@/components/dashboard/metric-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PredictionChart } from "@/components/charts/prediction-chart";
import { ScoreChart } from "@/components/charts/score-chart";
import { StudyHoursChart } from "@/components/charts/study-hours-chart";
import { aiInsights, dashboardStats, mockSchedule, revisionsDue, upcomingTasks } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <section className="grid gap-4 lg:grid-cols-[1.6fr_0.9fr]">
        <div className="rounded-lg border border-border bg-card p-5 shadow-soft sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary">Goal: 650+ by NEET UG</Badge>
              <h1 className="text-2xl font-bold tracking-normal sm:text-3xl">Today is a high-impact study day.</h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Prioritize Physics accuracy, complete Biology NCERT recall, and review mistakes before the next full mock.
              </p>
            </div>
            <Button>
              Start Session
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div>
              <p className="text-xs text-muted-foreground">Daily target</p>
              <p className="mt-1 text-2xl font-bold">6.4 / 8h</p>
              <Progress value={80} className="mt-3" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Revision due</p>
              <p className="mt-1 text-2xl font-bold">3 chapters</p>
              <Progress value={45} className="mt-3" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Target probability</p>
              <p className="mt-1 text-2xl font-bold">71%</p>
              <Progress value={71} className="mt-3" />
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              AI performance insights
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {aiInsights.map((insight) => (
              <div key={insight} className="rounded-md border border-border bg-muted/50 p-3 text-sm">
                {insight}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        {dashboardStats.map((stat) => (
          <MetricCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Weekly study hours</CardTitle>
          </CardHeader>
          <CardContent>
            <StudyHoursChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Score prediction</CardTitle>
          </CardHeader>
          <CardContent>
            <PredictionChart />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming tasks</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {upcomingTasks.map((task) => (
              <div key={`${task.time}-${task.title}`} className="flex items-center justify-between gap-3 rounded-md bg-muted/60 p-3">
                <div>
                  <p className="text-sm font-semibold">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.time} - {task.subject}</p>
                </div>
                <Badge>{task.priority}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revision due today</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {revisionsDue.map((item) => (
              <div key={item.chapter} className="flex items-center justify-between rounded-md border border-border p-3">
                <div>
                  <p className="text-sm font-semibold">{item.chapter}</p>
                  <p className="text-xs text-muted-foreground">{item.subject} - {item.due}</p>
                </div>
                <Badge>{item.cycle}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4" />
              Mock schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {mockSchedule.map((mock) => (
              <div key={mock.test} className="rounded-md bg-muted/60 p-3">
                <p className="text-sm font-semibold">{mock.test}</p>
                <p className="text-xs text-muted-foreground">{mock.date} - {mock.scope}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Mock score trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ScoreChart />
        </CardContent>
      </Card>
    </div>
  );
}
