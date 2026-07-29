"use client";

import { useEffect, useState } from "react";
import {
  Newspaper,
  Sparkles,
  Bookmark,
  Globe,
} from "lucide-react";

import { api } from "@/lib/api";

type DashboardStats = {
  total_articles: number;
  summarized: number;
  sources: number;
  categories: number;
};

export default function QuickStats() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await api.dashboardStats() as DashboardStats;
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const cards = [
    {
      title: "Articles",
      value: stats?.total_articles ?? 0,
      icon: Newspaper,
      color: "bg-blue-500/10 text-blue-400",
    },
    {
      title: "AI Summaries",
      value: stats?.summarized ?? 0,
      icon: Sparkles,
      color: "bg-violet-500/10 text-violet-400",
    },
    {
      title: "Bookmarks",
      value: 12, // We'll make this dynamic after Clerk integration
      icon: Bookmark,
      color: "bg-yellow-500/10 text-yellow-400",
    },
    {
      title: "Sources",
      value: stats?.sources ?? 0,
      icon: Globe,
      color: "bg-emerald-500/10 text-emerald-400",
    },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:border-blue-500/40"
          >
            <div
              className={`mb-4 inline-flex rounded-xl p-3 ${stat.color}`}
            >
              <Icon className="h-6 w-6" />
            </div>

            <p className="text-sm text-slate-400">
              {stat.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {loading ? "--" : stat.value}
            </h2>
          </div>
        );
      })}
    </section>
  );
}