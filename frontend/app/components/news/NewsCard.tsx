"use client";

import Image from "next/image";
import { ExternalLink, Bookmark } from "lucide-react";

export type NewsArticle = {
  title: string;
  content: string;
  summary_ai?: string;
  category: string;
  source: string;
  author?: string;
  image?: string;
  link: string;
  published_at?: string;
};

type Props = {
  article: NewsArticle;
};

export default function NewsCard({ article }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:border-blue-500">

      {article.image ? (
        <div className="relative h-56 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      ) : (
        <div className="flex h-56 items-center justify-center bg-slate-800 text-slate-500">
          No Image Available
        </div>
      )}

      <div className="space-y-4 p-6">

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium capitalize text-blue-400">
          {article.category}
        </span>

        <h2 className="line-clamp-2 text-2xl font-bold text-white">
          {article.title}
        </h2>

        <p className="line-clamp-3 text-slate-400">
          {article.summary_ai || article.content}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span>{article.source}</span>

          {article.published_at && (
            <span>{article.published_at}</span>
          )}
        </div>

        <div className="flex items-center justify-between">

          <button className="rounded-lg border border-slate-700 p-2 transition hover:border-yellow-400 hover:text-yellow-400">
            <Bookmark size={18} />
          </button>

          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Read Original
            <ExternalLink size={16} />
          </a>

        </div>

      </div>
    </article>
  );
}