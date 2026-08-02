import { apiFetch } from "./api";
import { Article } from "./news";

export async function getBookmarks(
  userId: string
): Promise<Article[]> {
  return apiFetch<Article[]>(`/bookmarks/${userId}`);
}

export async function checkBookmark(
  userId: string,
  link: string
): Promise<{ isBookmarked: boolean }> {
  return apiFetch<{ isBookmarked: boolean }>(
    `/bookmarks/check/${userId}?link=${encodeURIComponent(link)}`
  );
}

export async function addBookmark(
  userId: string,
  link: string
): Promise<{ message: string }> {
  return apiFetch<{ message: string }>("/bookmarks", {
    method: "POST",
    body: JSON.stringify({
      userId,
      link,
    }),
  });
}

export async function removeBookmark(
  userId: string,
  link: string
): Promise<{ message: string }> {
  return apiFetch<{ message: string }>("/bookmarks", {
    method: "DELETE",
    body: JSON.stringify({
      userId,
      link,
    }),
  });
}