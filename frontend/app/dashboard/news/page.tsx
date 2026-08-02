"use client";

import { useMemo, useState } from "react";

import { FeaturedNews } from "@/components/news/featured-news";
import { TrendingStrip } from "@/components/news/trending-strip";
import { SearchBar } from "@/components/news/search-bar";
import { CategoryFilter } from "@/components/news/category-filter";
import { NewsGrid } from "@/components/news/news-grid";

import { useNews } from "@/hooks/useNews";

export default function NewsPage() {
  const { articles, loading, error } = useNews();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.content.toLowerCase().includes(search.toLowerCase()) ||
        article.source.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        article.category.toLowerCase() === category.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [articles, search, category]);

  return (
    <div className="space-y-10">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-serif font-semibold">
          News Feed
        </h1>

        <p className="mt-2 text-muted-foreground">
          Discover AI-curated news from trusted publishers.
        </p>

      </div>

      {/* Featured */}

      <FeaturedNews />

      <TrendingStrip articles={filteredArticles} />

      {/* Search */}

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      {/* Categories */}

      <CategoryFilter
        selected={category}
        onSelect={setCategory}
      />

      {/* Results */}

      <div className="flex items-center justify-between">

        <p className="text-sm text-muted-foreground">
          {filteredArticles.length} Articles Found
        </p>

        <p className="text-sm text-muted-foreground">
          {category}
        </p>

      </div>

      {/* Grid */}

      <NewsGrid
        articles={filteredArticles}
        loading={loading}
        error={error}
      />

    </div>
  );
}