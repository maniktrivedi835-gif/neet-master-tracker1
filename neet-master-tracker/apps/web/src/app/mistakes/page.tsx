import { Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mistakes } from "@/lib/data";

export default function MistakesPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-normal">Mistake Notebook</h1>
          <p className="mt-1 text-sm text-muted-foreground">Save incorrect, guessed, and forgotten concepts with automatic revision reminders.</p>
        </div>
        <Button>
          <Upload className="h-4 w-4" />
          Upload screenshot
        </Button>
      </div>
      <div className="grid gap-3">
        {mistakes.map((mistake) => (
          <Card key={`${mistake.chapter}-${mistake.topic}`}>
            <CardContent className="grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-semibold">{mistake.topic}</p>
                <p className="text-sm text-muted-foreground">{mistake.subject} - {mistake.chapter}</p>
                <p className="mt-2 text-sm">Explanation: Rebuild the concept, solve five similar MCQs, then add it to spaced revision.</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                <Badge>{mistake.type}</Badge>
                <Badge>Review {mistake.review}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
