import { apiFetch } from "./api";

export interface DashboardStats {
  total_articles: number;
  summarized: number;
  sources: number;
  categories: number;
}

export interface TodaySummary {
  title: string;
  summary: string;
  category: string;
  source: string;
  published_at: string;
  link: string;
}

export async function getDashboardStats() {
  return apiFetch<DashboardStats>("/dashboard/stats");
}

export async function getTodaySummary() {
  return apiFetch<TodaySummary>("/summary/today");
}