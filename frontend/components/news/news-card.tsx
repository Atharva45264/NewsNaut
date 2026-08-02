"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  Clock3,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  source: string;
  publishedAt: string;
  articleUrl: string;
}

export function NewsCard({
  title,
  summary,
  image,
  category,
  source,
  publishedAt,
  articleUrl,
}: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-2xl">

      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">

        <Image
          src={image || "/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold capitalize text-white shadow">
          {category}
        </span>

        {/* Bookmark */}
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur transition hover:scale-110 hover:bg-primary hover:text-white">
          <Bookmark className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">

        {/* Source */}
        <div className="flex items-center justify-between">

          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {source}
          </span>

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock3 className="h-3.5 w-3.5" />
            {publishedAt}
          </div>

        </div>

        {/* Title */}
        <h3 className="line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-primary">
          {title}
        </h3>

        {/* AI Summary */}
        <div className="rounded-2xl bg-muted/40 p-4">

          <div className="mb-2 flex items-center gap-2">

            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              AI Summary
            </span>

          </div>

          <p className="line-clamp-4 text-sm leading-7 text-muted-foreground">
            {summary?.trim()
              ? summary
              : "No AI summary available yet. Open the article to read the complete story."}
          </p>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-4">

          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Category
            </p>

            <p className="font-semibold capitalize">
              {category}
            </p>
          </div>

          <Link
            href={articleUrl}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:gap-3 hover:bg-primary/90"
          >
            Read Full Article
            <ExternalLink className="h-4 w-4" />
          </Link>

        </div>

      </div>

    </article>
  );
}