"use client";

import Link from "next/link";
import {
  Bot,
  Sparkles,
  ExternalLink,
  Newspaper,
  Clock3,
} from "lucide-react";

import { useDashboard } from "@/hooks/useDashboard";

function formatTime(date?: string) {
  if (!date) return "Recently";

  const published = new Date(date);
  const now = new Date();

  const seconds = Math.floor(
    (now.getTime() - published.getTime()) / 1000
  );

  const minutes = Math.floor(seconds / 60);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);

  if (hours < 24)
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);

  if (days < 7)
    return `${days} day${days > 1 ? "s" : ""} ago`;

  return published.toLocaleDateString();
}

export function AISummaryCard() {
  const { todayBrief, loading } = useDashboard();

  if (loading) {
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
              Preparing today's top story...
            </p>

          </div>

        </div>

        <div className="mt-8 animate-pulse space-y-4">

          <div className="h-6 w-3/4 rounded bg-muted" />

          <div className="h-4 w-1/2 rounded bg-muted" />

          <div className="h-32 rounded-2xl bg-muted" />

        </div>

      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-primary/10 p-3">

            <Bot className="h-6 w-6 text-primary" />

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              Today's AI Brief
            </h2>

            <p className="text-muted-foreground">
              AI-generated highlights from today's top story.
            </p>

          </div>

        </div>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Updated Daily
        </span>

      </div>

      {/* Article Information */}

      <div className="mt-8 rounded-2xl border border-border bg-muted/20 p-6">

        <div className="mb-4 flex flex-wrap items-center gap-3">

          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold capitalize text-white">
            {todayBrief.category || "News"}
          </span>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <Newspaper className="h-4 w-4" />

            {todayBrief.source || "Unknown Source"}

          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <Clock3 className="h-4 w-4" />

            {formatTime(todayBrief.published_at)}

          </div>

        </div>

        <h3 className="text-2xl font-bold leading-9">

          {todayBrief.title || "No top story available"}

        </h3>

      </div>

      {/* AI Summary */}

      <div className="mt-6 rounded-2xl border border-border bg-background p-6">

        <div className="mb-4 flex items-center gap-2">

          <Sparkles className="h-5 w-5 text-primary" />

          <span className="font-semibold text-primary">
            AI Summary
          </span>

        </div>

        <p className="leading-8 text-muted-foreground">

          {todayBrief.summary?.trim()
            ? todayBrief.summary
            : "No summarized articles available yet."}

        </p>

      </div>

      {/* Footer */}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-5">

        <div className="text-sm text-muted-foreground">

          Generated automatically using NewsNaut AI.

        </div>

        {todayBrief.link ? (

          <Link
            href={todayBrief.link}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
          >

            Read Full Article

            <ExternalLink className="h-4 w-4" />

          </Link>

        ) : (

          <button
            disabled
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary"
          >

            Read Full Article

            <ExternalLink className="h-4 w-4" />

          </button>

        )}

      </div>

    </section>
  );
}