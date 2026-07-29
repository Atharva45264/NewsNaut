"use client";

import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { api } from "@/lib/api";

type Article = {
  title: string;
  category?: string;
};

export default function Trending() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        const data = (await api.trendingNews()) as Article[];
        setArticles(data ?? []);
      } catch (error) {
        console.error("Failed to load trending news:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTrending();
  }, []);

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-2">
        <Flame className="h-6 w-6 text-orange-500" />
        <h2 className="text-2xl font-bold text-white">
          Trending Today
        </h2>
      </div>

      {loading ? (
        <p className="text-slate-400">Loading...</p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {articles.slice(0, 4).map((article, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all hover:border-blue-500 hover:-translate-y-1"
            >
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                {article.category || "General"}
              </span>

              <h3 className="mt-4 text-white font-semibold leading-6">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}