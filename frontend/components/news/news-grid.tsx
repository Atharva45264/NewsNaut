"use client";

import { useNews } from "@/hooks/useNews";
import { NewsCard } from "./news-card";

export function NewsGrid() {
  const { articles, loading, error } = useNews();

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted-foreground">Loading latest news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
        <h2 className="text-lg font-semibold text-red-600">
          Failed to load news
        </h2>

        <p className="mt-2 text-red-500">{error}</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="rounded-3xl border border-border p-12 text-center">
        <h2 className="text-xl font-semibold">
          No Articles Found
        </h2>

        <p className="mt-3 text-muted-foreground">
          Try fetching new articles from the backend.
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