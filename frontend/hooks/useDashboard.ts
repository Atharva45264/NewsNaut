"use client";

import { useEffect, useState } from "react";
import {
  DashboardStats,
  getDashboardStats,
  getTodaySummary,
} from "@/lib/dashboard";

export function useDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [summary, setSummary] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [dashboardStats, todaySummary] = await Promise.all([
          getDashboardStats(),
          getTodaySummary(),
        ]);

        setStats(dashboardStats);
        setSummary(todaySummary.summary);
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
    summary,
    loading,
  };
}