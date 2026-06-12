import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ServiceWorker } from "@/components/layout/service-worker";

export const metadata: Metadata = {
  title: "NEET Master Tracker",
  description: "Study planning, mock analysis, revision tracking, AI coaching, and score prediction for NEET UG aspirants.",
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0b8391"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
          <ServiceWorker />
        </ThemeProvider>
      </body>
    </html>
  );
}
