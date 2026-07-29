"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { api } from "@/lib/api";

export function useBookmark(link: string) {
  const { user } = useUser();

  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user || !link) return;

    const loadBookmarkStatus = async () => {
      try {
        const result = await api.checkBookmark(user.id, link);
        setBookmarked(result.isBookmarked);
      } catch (error) {
        console.error("Failed to check bookmark:", error);
      }
    };

    loadBookmarkStatus();
  }, [user, link]);

  const toggleBookmark = async () => {
    if (!user || !link) return;

    setLoading(true);

    try {
      if (bookmarked) {
        await api.removeBookmark(user.id, link);
        setBookmarked(false);
      } else {
        await api.addBookmark(user.id, link);
        setBookmarked(true);
      }
    } catch (error) {
      console.error("Bookmark operation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    bookmarked,
    loading,
    toggleBookmark,
  };
}