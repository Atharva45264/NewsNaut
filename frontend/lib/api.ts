const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

async function request<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}

export const api = {
  latestNews: () => request("/news/latest"),
  trendingNews: () => request("/news/trending"),
  dashboardStats: () => request("/dashboard/stats"),
  todaySummary: () => request("/summary/today"),
};