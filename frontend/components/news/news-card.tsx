"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  Clock3,
  ExternalLink,
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
    <article className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">

      <div className="relative aspect-[16/9] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>

      </div>

      <div className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <span className="text-sm font-medium text-primary">
            {source}
          </span>

          <button className="rounded-lg p-2 transition hover:bg-primary/10">
            <Bookmark className="h-4 w-4" />
          </button>

        </div>

        <h3 className="line-clamp-2 text-xl font-semibold transition-colors group-hover:text-primary">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
  {summary?.trim()
    ? summary
    : "No AI summary available yet. Click 'Read' to view the full article."}
</p>

        <div className="flex items-center justify-between pt-2">

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="h-4 w-4" />
            {publishedAt}
          </div>

          <Link
            href={articleUrl}
            target="_blank"
            className="flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Read
            <ExternalLink className="h-4 w-4" />
          </Link>

        </div>

      </div>

    </article>
  );
}