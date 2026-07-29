const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export type Article = {
  title: string;
  content: string;
  summary_ai?: string;
  category: string;
  source: string;
  author?: string;
  image?: string;
  link: string;
  published_at?: string;
};

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
  // News
  latestNews: () => request<Article[]>("/news/latest"),
  trendingNews: () => request<Article[]>("/news/trending"),

  // Dashboard
  dashboardStats: () => request("/dashboard/stats"),
  todaySummary: () => request("/summary/today"),

  // Bookmarks
  addBookmark: async (userId: string, link: string) => {
    const res = await fetch(`${API_URL}/bookmarks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        link,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to add bookmark");
    }

    return res.json();
  },

  removeBookmark: async (userId: string, link: string) => {
    const res = await fetch(`${API_URL}/bookmarks/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        link,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to remove bookmark");
    }

    return res.json();
  },

  getBookmarks: async (userId: string): Promise<Article[]> => {
    const res = await fetch(`${API_URL}/bookmarks/${userId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch bookmarks");
    }

    return res.json();
  },

  checkBookmark: async (userId: string, link: string) => {
    const res = await fetch(
      `${API_URL}/bookmarks/check/${userId}?link=${encodeURIComponent(link)}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to check bookmark");
    }

    return res.json() as Promise<{ isBookmarked: boolean }>;
  },
};