"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

import {
  addBookmark,
  removeBookmark,
  checkBookmark,
} from "@/lib/bookmarks";

export function useBookmark(link: string) {
  const { user } = useUser();

  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
  const userId = user?.id;

  if (!userId) return;

  async function load() {
    try {
      const res = await checkBookmark(userId!, link);
      setBookmarked(res.isBookmarked);
    } catch (err) {
      console.error(err);
    }
  }

  load();
}, [user?.id, link]);

async function toggleBookmark() {
  if (!user?.id) return;

  try {
    if (bookmarked) {
      await removeBookmark(user.id, link);

      setBookmarked(false);

      toast.success("Removed from Bookmarks", {
        description: "The article has been removed.",
      });

    } else {
      await addBookmark(user.id, link);

      setBookmarked(true);

      toast.success("Saved to Bookmarks", {
        description: "You can find it in your Bookmarks page.",
      });
    }
  } catch (err) {
    console.error(err);

    toast.error("Something went wrong");
  }
}

  return {
    bookmarked,
    toggleBookmark,
  };
}