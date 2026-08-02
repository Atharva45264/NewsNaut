"use client";

import Link from "next/link";
import {
  Newspaper,
  Bookmark,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Browse News",
    description: "Explore AI-curated news from trusted publishers.",
    href: "/dashboard/news",
    icon: Newspaper,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Saved Articles",
    description: "Continue reading your bookmarked stories anytime.",
    href: "/dashboard/bookmarks",
    icon: Bookmark,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "YouTube Tracker",
    description: "Track your favorite channels and receive AI summaries of new uploads.",
    href: "/dashboard/youtube",
    icon: PlayCircle,
    color: "bg-red-500/10 text-red-600",
  },
];

export function QuickActions() {
  return (
    <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-2xl font-semibold tracking-tight">
          Quick Actions
        </h2>

        <p className="mt-2 text-muted-foreground">
          Jump directly to your favorite NewsNaut features.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
            >

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
              >
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {action.title}
              </h3>

              <p className="mt-3 min-h-[56px] leading-7 text-muted-foreground">
                {action.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">

                {action.title === "YouTube Tracker"
                  ? "Coming Soon"
                  : "Open"}

                <ArrowRight className="h-4 w-4" />

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}