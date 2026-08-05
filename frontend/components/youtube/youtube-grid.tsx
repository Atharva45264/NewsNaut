"use client";

import { Loader2 } from "lucide-react";

import { useYoutube } from "@/hooks/useYoutube";

import { ChannelCard } from "./channel-card";
import { EmptyState } from "./empty-state";

function getChannelName(url: string) {
  const match = url.match(/@([^/?]+)/);

  if (match) {
    return match[1]
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  return "YouTube Channel";
}

function getHandle(url: string) {
  const match = url.match(/@([^/?]+)/);

  if (match) {
    return match[1];
  }

  return "channel";
}

export function YoutubeGrid() {
  const {
    channels,
    loading,
    deleteChannel,
  } = useYoutube();

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (channels.length === 0) {
    return <EmptyState />;
  }

  return (
    <section>

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-semibold">
            Your Channels
          </h2>

          <p className="text-muted-foreground">
            {channels.length} of 3 channels added
          </p>

        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {channels.map((channel) => (
          <ChannelCard
            key={channel._id}
            name={getChannelName(channel.url)}
            handle={channel.handle}
            thumbnail={channel.thumbnail}
            latestVideo="Latest upload will appear after YouTube integration."
            uploadedAt="Not synced yet"
            summaryReady={false}
            onRemove={() => deleteChannel(channel.url)}
          />
        ))}

      </div>

    </section>
  );
}