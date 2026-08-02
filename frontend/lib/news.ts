import { apiFetch } from "./api";

export interface Article {
  title: string;
  link: string;
  summary?: string;
  content: string;
  category: string;
  source: string;
  author: string;
  published_at: string;
  image: string;
  created_at: string;
}

// Get all articles
export async function getArticles() {
  return apiFetch<Article[]>("/articles");
}

// Latest 10 articles
export async function getLatestNews() {
  return apiFetch<Article[]>("/news/latest");
}

// Trending articles
export async function getTrendingNews() {
  return apiFetch<Article[]>("/news/trending");
}

// Dashboard statistics
export async function getDashboardStats() {
  return apiFetch("/dashboard/stats");
}

// Today's AI Summary
export interface TodaySummary {
  title: string;
  summary: string;
  category: string;
  source: string;
  published_at: string;
  link: string;
}

export async function getTodaySummary() {
  return apiFetch<TodaySummary>("/summary/today");
}