import { apiFetch } from "./api";

export interface DashboardStats {
  total_articles: number;
  summarized: number;
  sources: number;
  categories: number;
}

export async function getDashboardStats() {
  return apiFetch<DashboardStats>("/dashboard/stats");
}

export async function getTodaySummary() {
  return apiFetch<{ summary: string }>("/summary/today");
}