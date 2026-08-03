"use client";

import { ChannelCard } from "./channel-card";
import { EmptyState } from "./empty-state";

const demoChannels = [
  {
    name: "Fireship",
    handle: "fireship",
    thumbnail: "https://yt3.googleusercontent.com/ytc-demo1",
    latestVideo: "AI Agents Explained in 100 Seconds",
    uploadedAt: "2 hours ago",
    summaryReady: true,
  },
  {
    name: "AI Explained",
    handle: "aiexplained",
    thumbnail: "https://yt3.googleusercontent.com/ytc-demo2",
    latestVideo: "Claude vs Gemini vs GPT-5",
    uploadedAt: "Yesterday",
    summaryReady: true,
  },
];

export function YoutubeGrid() {

  const channels = demoChannels;

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
            key={channel.handle}
            {...channel}
          />
        ))}

      </div>

    </section>
  );
}