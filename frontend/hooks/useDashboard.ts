"use client";

import { useEffect, useState } from "react";
import {
  DashboardStats,
  TodaySummary,
  getDashboardStats,
  getTodaySummary,
} from "@/lib/dashboard";

export function useDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const [todayBrief, setTodayBrief] = useState<TodaySummary>({
    title: "",
    summary: "",
    category: "",
    source: "",
    published_at: "",
    link: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [dashboardStats, summary] = await Promise.all([
          getDashboardStats(),
          getTodaySummary(),
        ]);

        setStats(dashboardStats);
        setTodayBrief(summary);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    stats,
    todayBrief,
    loading,
  };
}