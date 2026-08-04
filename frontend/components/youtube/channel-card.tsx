"use client";

import {
  PlayCircle,
  Trash2,
  Clock3,
  CheckCircle2,
  Mail,
} from "lucide-react";

interface ChannelCardProps {
  name: string;
  handle: string;
  thumbnail: string;
  latestVideo: string;
  uploadedAt: string;
  summaryReady: boolean;
  onRemove: () => void;
}

export function ChannelCard({
  name,
  handle,
  thumbnail,
  latestVideo,
  uploadedAt,
  summaryReady,
  onRemove,
}: ChannelCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Channel */}

      <div className="flex items-center gap-4">

        <img
          src={thumbnail}
          alt={name}
          className="h-16 w-16 rounded-2xl object-cover"
        />

        <div className="flex-1">

          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          <p className="text-sm text-muted-foreground">
            @{handle}
          </p>

        </div>

        <PlayCircle className="h-8 w-8 text-red-600" />

      </div>

      {/* Latest Upload */}

      <div className="mt-6 rounded-2xl bg-muted/30 p-4">

        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Latest Upload
        </p>

        <h4 className="mt-2 line-clamp-2 font-semibold">
          {latestVideo}
        </h4>

        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">

          <Clock3 className="h-4 w-4" />

          {uploadedAt}

        </div>

      </div>

      {/* Status */}

      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-2">

          <CheckCircle2
            className={`h-5 w-5 ${
              summaryReady
                ? "text-green-600"
                : "text-orange-500"
            }`}
          />

          <span className="text-sm font-medium">

            {summaryReady
              ? "AI Summary Ready"
              : "Waiting for next summary"}

          </span>

        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">

          <Mail className="h-4 w-4" />

          Included in daily email digest

        </div>

      </div>

      {/* Remove */}

      <button
  onClick={onRemove}
  className="
    mt-6
    flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-2xl
    border
    border-red-200
    py-3
    text-sm
    font-medium
    text-red-600
    transition-all
    hover:bg-red-50
  "
>

        <Trash2 className="h-4 w-4" />

        Remove Channel

      </button>

    </article>
  );
}