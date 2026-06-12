import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resourceLibrary } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">Resource Library</h1>
        <p className="mt-1 text-sm text-muted-foreground">NCERT links, PDFs, formula sheets, short notes, and videos categorized by chapter.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {resourceLibrary.map((resource) => (
          <Card key={resource.title}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-3">
                <span>{resource.title}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>{resource.type}</Badge>
              <Badge>{resource.subject}</Badge>
              <Badge>{resource.chapter}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
