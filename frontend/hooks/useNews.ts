"use client";

import { useEffect, useState } from "react";
import { Article, getArticles } from "@/lib/news";

export function useNews() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  return {
    articles,
    loading,
    error,
  };
}