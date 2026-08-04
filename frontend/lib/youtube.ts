import { apiFetch } from "./api";

export interface YoutubeChannel {
  _id: string;
  userId: string;
  url: string;
  createdAt: string;
}

export async function getChannels(userId: string) {
  return apiFetch<YoutubeChannel[]>(
    `/youtube/${userId}`
  );
}

export async function addChannel(
  userId: string,
  url: string
) {
  return apiFetch<YoutubeChannel>("/youtube/", {
    method: "POST",
    body: JSON.stringify({
      userId,
      url,
    }),
  });
}

export async function removeChannel(
  userId: string,
  url: string
) {
  return apiFetch<{ success: boolean }>("/youtube/", {
    method: "DELETE",
    body: JSON.stringify({
      userId,
      url,
    }),
  });
}