"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

import { api, Article } from "@/lib/api";
import NewsCard from "@/app/components/news/NewsCard";

export default function BookmarksPage() {
  const { user } = useUser();

  const [bookmarks, setBookmarks] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookmarks() {
      if (!user) return;

      try {
        const data = await api.getBookmarks(user.id);
        setBookmarks(data);
      } catch (error) {
        console.error("Failed to load bookmarks:", error);
      } finally {
        setLoading(false);
      }
    }

    loadBookmarks();
  }, [user]);

  if (loading) {
    return (
      <div className="p-6 text-white">
        Loading bookmarks...
      </div>
    );
  }

  return (
    <main className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Bookmarks
        </h1>

        <p className="text-slate-400">
          Your saved articles.
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-700 p-10 text-center text-slate-400">
          No bookmarks yet.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {bookmarks.map((article) => (
            <NewsCard
              key={article.link}
              article={article}
            />
          ))}
        </div>
      )}
    </main>
  );
}