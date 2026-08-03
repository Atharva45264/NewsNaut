"use client";

import { useEffect, useMemo, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Bookmark } from "lucide-react";

import { getBookmarks } from "@/lib/bookmarks";
import { Article } from "@/lib/news";

import { SearchBar } from "@/components/news/search-bar";
import { CategoryFilter } from "@/components/news/category-filter";
import { NewsGrid } from "@/components/news/news-grid";

export default function BookmarksPage() {
  const { user } = useUser();

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (!user?.id) return;

    async function loadBookmarks() {
      try {
        const data = await getBookmarks(user!.id);
        setArticles(data);
      } catch {
        setError("Failed to load bookmarks.");
      } finally {
        setLoading(false);
      }
    }

    loadBookmarks();
  }, [user?.id]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        (article.summary ?? article.content ?? "")
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        article.source.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        article.category.toLowerCase() === category.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [articles, search, category]);

  return (
    <div className="space-y-8">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-primary/10 p-3">
          <Bookmark className="h-6 w-6 text-primary" />
        </div>

        <div>

          <h1 className="text-4xl font-serif font-semibold">
            My Bookmarks
          </h1>

          <p className="text-muted-foreground">
            Read your saved articles anytime.
          </p>

        </div>

      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        selected={category}
        onSelect={setCategory}
      />

      <div className="flex items-center justify-between">

        <p className="text-sm text-muted-foreground">
          {filteredArticles.length} Saved Articles
        </p>

      </div>

      <NewsGrid
        articles={filteredArticles}
        loading={loading}
        error={error}
      />

    </div>
  );
}