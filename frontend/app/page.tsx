/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard";
import CategoryTabs from "./components/CategoryTabs";
import Navbar from "./components/Navbar";

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [category, setCategory] = useState("politics");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filtered = articles.filter((a) => a.category === category);

  return (
    <main>
      <Navbar />

      <div className="container px-4 py-6">
        <CategoryTabs category={category} setCategory={setCategory} />

        {loading ? (
          <p className="text-gray-400">Loading news...</p>
        ) : filtered.length === 0 ? (
          <p className="text-gray-500">No articles available.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <NewsCard key={i} article={article} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}