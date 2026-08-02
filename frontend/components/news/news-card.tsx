"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  BookmarkCheck,
  Clock3,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import { useBookmark } from "@/hooks/useBookmarks";

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

function formatTime(date: string) {
  const published = new Date(date);
  const now = new Date();

  const seconds = Math.floor((now.getTime() - published.getTime()) / 1000);

  const minutes = Math.floor(seconds / 60);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);

  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);

  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

  return published.toLocaleDateString();
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
  const { bookmarked, toggleBookmark } = useBookmark(articleUrl);

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}

      <div className="relative h-52 overflow-hidden">
        <Image
          src={image || "/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold capitalize text-white">
          {category}
        </span>

        <button
          onClick={toggleBookmark}
          className={`
absolute
right-4
top-4
rounded-full
bg-white/90
p-2
shadow-md
backdrop-blur
transition-all
duration-300
hover:scale-110

${bookmarked ? "scale-110 bg-primary text-white" : ""}
`}
        >
          {bookmarked ? (
            <BookmarkCheck className="h-5 w-5 animate-in zoom-in duration-300" />
          ) : (
            <Bookmark className="h-5 w-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
      </div>

      {/* Content */}

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {source}
          </span>

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock3 className="h-3.5 w-3.5" />

            {formatTime(publishedAt)}
          </div>
        </div>

        <h3 className="line-clamp-2 text-lg font-bold leading-7 transition-colors group-hover:text-primary">
          {title}
        </h3>

        <div className="rounded-xl bg-muted/40 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              AI Summary
            </span>
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {summary?.trim() ? summary : "No AI summary available yet."}
          </p>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-muted-foreground">Category</p>

            <p className="font-semibold capitalize">{category}</p>
          </div>

          <Link
            href={articleUrl}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Read
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
