"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

import {
  YoutubeChannel,
  getChannels,
  addChannel,
  removeChannel,
} from "@/lib/youtube";

export function useYoutube() {
  const { user } = useUser();

  const [channels, setChannels] = useState<YoutubeChannel[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function loadChannels() {
    if (!user?.id) return;

    try {
      setLoading(true);

      const data = await getChannels(user.id);

      setChannels(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load channels.");
    } finally {
      setLoading(false);
    }
  }

  async function createChannel(url: string) {
    if (!user?.id) return false;

    try {
      setSaving(true);

      await addChannel(user.id, url);

      await loadChannels();

      return true;
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      setSaving(false);
    }
  }

  async function deleteChannel(url: string) {
    if (!user?.id) return;

    try {
      await removeChannel(user.id, url);

      await loadChannels();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadChannels();
  }, [user?.id]);

  return {
    channels,
    loading,
    saving,
    error,

    createChannel,
    deleteChannel,
    refresh: loadChannels,
  };
}