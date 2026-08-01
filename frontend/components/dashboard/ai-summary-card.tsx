"use client";

import { Bot } from "lucide-react";
import { useDashboard } from "@/hooks/useDashboard";

export function AISummaryCard() {
  const { summary, loading } = useDashboard();

  return (
    <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">

          <Bot className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h2 className="text-2xl font-semibold">
            Today's AI Brief
          </h2>

          <p className="text-muted-foreground">
            Generated automatically from today's top stories.
          </p>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-primary/5 p-6 leading-8 text-muted-foreground">

        {loading
          ? "Generating today's summary..."
          : summary || "No summary available today."}

      </div>

    </section>
  );
}