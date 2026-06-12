import Link from "next/link";
import { analyticsNav } from "@/lib/data";
import { cn } from "@/lib/utils";

export function AnalyticsTabs({ active }: { active: string }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {analyticsNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "shrink-0 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground",
            item.label === active && "border-primary bg-primary text-primary-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
