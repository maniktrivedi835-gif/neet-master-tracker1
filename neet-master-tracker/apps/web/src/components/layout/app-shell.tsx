"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/layout/theme-provider";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 border-r border-border bg-card p-4 lg:block">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">NM</div>
          <div>
            <p className="text-sm font-bold">NEET Master Tracker</p>
            <p className="text-xs text-muted-foreground">Aspirant command center</p>
          </div>
        </Link>
        <nav className="mt-6 grid gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center gap-3 rounded-md px-3 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground",
                  active && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <header className="sticky top-0 z-20 border-b border-border glass lg:ml-64">
        <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">NEET 2026 Prep Dashboard</p>
            <p className="truncate text-xs text-muted-foreground">146 study hours this month, 21 day streak</p>
          </div>
          <div className="hidden h-10 w-72 items-center gap-2 rounded-md border border-border bg-card px-3 sm:flex">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search notes, chapters, PYQs</span>
          </div>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <main className="px-4 py-4 pb-24 sm:px-6 lg:ml-64 lg:pb-8">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 safe-bottom lg:hidden">
        <div className="grid grid-cols-5 gap-1 px-2 pt-2">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("flex flex-col items-center gap-1 rounded-md p-2 text-[11px] text-muted-foreground", active && "text-primary")}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
