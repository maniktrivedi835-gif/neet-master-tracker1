import { FileText, Search, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notes = [
  { title: "Electrostatics formulas", tag: "Physics", type: "Handwritten", summary: "Key capacitor combinations and potential shortcuts." },
  { title: "Biomolecules NCERT highlights", tag: "Biology", type: "PDF", summary: "Enzymes, proteins, and nucleic acid tables ready for recall." },
  { title: "Coordination compounds", tag: "Chemistry", type: "Text", summary: "Ligands, CFT splitting, and isomerism patterns." }
];

export default function NotesPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-normal">Notes Management</h1>
          <p className="mt-1 text-sm text-muted-foreground">Create notes, upload PDFs, tag chapters, search, and summarize with AI.</p>
        </div>
        <Button>
          <Upload className="h-4 w-4" />
          Upload notes
        </Button>
      </div>
      <div className="flex h-11 items-center gap-2 rounded-md border border-border bg-card px-3">
        <Search className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Search by chapter, formula, keyword, or tag</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {notes.map((note) => (
          <Card key={note.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {note.title}
              </CardTitle>
              <p className="text-xs text-muted-foreground">{note.tag} - {note.type}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{note.summary}</p>
              <Button variant="secondary" className="mt-4 w-full">Summarize</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
