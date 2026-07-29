"use client";

import { useEffect, useMemo, useState } from "react";

import { api, Article } from "@/lib/api";
import NewsCard from "./NewsCard";
import SearchBar from "./SearchBar";
import NewsFilters from "./NewsFilters";

export default function NewsFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function load() {
      try {
        const data = await api.latestNews();
        setArticles(data as Article[]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        category === "All" ||
        article.category.toLowerCase() === category.toLowerCase();

      const text = `
        ${article.title}
        ${article.content}
        ${article.summary_ai ?? ""}
      `.toLowerCase();

      const matchesSearch = text.includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [articles, search, category]);

  return (
    <div className="space-y-6">
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <NewsFilters
        selected={category}
        onSelect={setCategory}
      />

      {loading ? (
        <p className="text-slate-400">Loading...</p>
      ) : filteredArticles.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
          No articles found.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredArticles.map((article) => (
            <NewsCard
              key={article.link}
              article={article}
            />
          ))}
        </div>
      )}
    </div>
  );
}