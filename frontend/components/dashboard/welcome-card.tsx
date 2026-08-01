"use client";

import { Sparkles } from "lucide-react";
import { useDashboard } from "@/hooks/useDashboard";

export function WelcomeCard() {
  const { stats, loading } = useDashboard();

  const greeting =
    new Date().getHours() < 12
      ? "Good Morning ☀️"
      : new Date().getHours() < 17
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-background to-background p-8">

      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">

            <Sparkles className="h-4 w-4" />

            {greeting}

          </span>

          <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight">
            Welcome to NewsNaut
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Stay updated with AI-powered summaries, trusted journalism and
            personalized news recommendations.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <StatCard
            title="Articles"
            value={loading ? "--" : stats?.total_articles ?? 0}
          />

          <StatCard
            title="AI Summaries"
            value={loading ? "--" : stats?.summarized ?? 0}
          />

          <StatCard
            title="Sources"
            value={loading ? "--" : stats?.sources ?? 0}
          />

          <StatCard
            title="Categories"
            value={loading ? "--" : stats?.categories ?? 0}
          />

        </div>

      </div>

    </section>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/80 p-5 shadow-sm backdrop-blur">

      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-primary">
        {value}
      </h2>

    </div>
  );
}