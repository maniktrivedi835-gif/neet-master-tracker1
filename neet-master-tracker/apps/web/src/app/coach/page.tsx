import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const messages = [
  { role: "coach", text: "Your Physics mock trend is improving, but RC circuit questions still cost marks. Add one targeted block today." },
  { role: "student", text: "Can I cross 650 if I study 8 hours daily?" },
  { role: "coach", text: "Yes. With your current mock history, 8 focused hours and two weekly full mocks gives an estimated 87% target probability in 6 weeks." }
];

export default function CoachPage() {
  return (
    <div className="mx-auto grid max-w-4xl gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-normal">AI Study Coach</h1>
        <p className="mt-1 text-sm text-muted-foreground">Ask for schedules, weak topic plans, mock analysis, revision strategy, and motivation.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            Coach chat
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-3">
            {messages.map((message, index) => (
              <div key={index} className={message.role === "coach" ? "mr-8 rounded-lg bg-muted p-3" : "ml-8 rounded-lg bg-primary p-3 text-primary-foreground"}>
                <p className="text-sm">{message.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-md border border-border bg-card p-2">
            <input className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none" placeholder="Ask your AI coach..." />
            <Button size="icon" aria-label="Send">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
