import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revisionsDue } from "@/lib/data";

const calendar = Array.from({ length: 30 }, (_, index) => ({
  day: index + 1,
  status: index % 7 === 0 ? "Overdue" : index % 4 === 0 ? "Due" : index % 3 === 0 ? "Upcoming" : ""
}));

export default function RevisionPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Revision Tracker</h1>
        <p className="mt-1 text-sm text-muted-foreground">Spaced repetition cycles for first, second, third, and custom revisions.</p>
      </div>
      <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader>
            <CardTitle>Due queue</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {revisionsDue.map((revision) => (
              <div key={revision.chapter} className="rounded-md border border-border p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{revision.chapter}</p>
                    <p className="text-xs text-muted-foreground">{revision.subject}</p>
                  </div>
                  <Badge>{revision.cycle}</Badge>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{revision.due}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Calendar view
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {calendar.map((day) => (
                <div key={day.day} className="aspect-square rounded-md border border-border bg-muted/40 p-2 text-xs">
                  <p className="font-semibold">{day.day}</p>
                  {day.status && (
                    <p className={day.status === "Overdue" ? "mt-2 text-danger" : day.status === "Due" ? "mt-2 text-primary" : "mt-2 text-muted-foreground"}>
                      {day.status}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
