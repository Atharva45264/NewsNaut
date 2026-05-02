/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard";
import CategoryTabs from "./components/CategoryTabs";

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [category, setCategory] = useState("politics");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/articles")
      .then((res) => setArticles(res.data));
  }, []);

  const filtered = articles.filter(
    (a) => a.category === category
  );

  return (
    <main className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        📰 NewsNaut Dashboard
      </h1>

      <CategoryTabs setCategory={setCategory} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </main>
  );
}