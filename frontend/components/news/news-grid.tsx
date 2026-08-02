"use client";

import { Article } from "@/lib/news";
import { NewsCard } from "./news-card";

interface NewsGridProps {
  articles: Article[];
  loading: boolean;
  error: string;
}

export function NewsGrid({
  articles,
  loading,
  error,
}: NewsGridProps) {
  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-[460px] animate-pulse rounded-3xl border border-border bg-muted"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
        <h2 className="text-lg font-semibold text-red-600">
          Failed to load news
        </h2>

        <p className="mt-2 text-red-500">
          {error}
        </p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="rounded-3xl border border-border p-16 text-center">

        <h2 className="text-2xl font-semibold">
          No Articles Found
        </h2>

        <p className="mt-3 text-muted-foreground">
          Try changing your search or category filter.
        </p>

      </div>
    );
  }

  return (
    <section>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {articles.map((article) => (
          <NewsCard
            key={article.link}
            id={article.link}
            title={article.title}
            summary={article.content}
            image={article.image}
            category={article.category}
            source={article.source}
            publishedAt={article.published_at}
            articleUrl={article.link}
          />
        ))}

      </div>

    </section>
  );
}