"use client";

import Link from "next/link";
import { Flame } from "lucide-react";
import { Article } from "@/lib/news";

interface TrendingStripProps {
  articles: Article[];
}

export function TrendingStrip({
  articles,
}: TrendingStripProps) {
  const trending = articles.slice(0, 8);

  if (trending.length === 0) return null;

  return (
    <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">

      <div className="mb-5 flex items-center gap-3">

        <div className="rounded-xl bg-orange-100 p-2">
          <Flame className="h-5 w-5 text-orange-600" />
        </div>

        <div>

          <h2 className="text-xl font-semibold">
            Trending Today
          </h2>

          <p className="text-sm text-muted-foreground">
            Most recent headlines from trusted publishers
          </p>

        </div>

      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

        {trending.map((article) => (
          <Link
            key={article.link}
            href={article.link}
            target="_blank"
            className="min-w-[320px] rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
          >
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold capitalize text-primary">
              {article.category}
            </span>

            <h3 className="mt-4 line-clamp-3 text-lg font-semibold">
              {article.title}
            </h3>

            <p className="mt-4 text-sm text-muted-foreground">
              {article.source}
            </p>
          </Link>
        ))}

      </div>

    </section>
  );
}