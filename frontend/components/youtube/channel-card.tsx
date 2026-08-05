"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  CheckCircle2,
  Sparkles,
  Mail,
  Clock3,
  PlayCircle,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ChannelCardProps {
  name: string;
  handle: string;
  thumbnail: string;
  description: string;

  latestVideo: string;
  videoThumbnail: string;
  uploadedAt: string;
  videoId: string;

  summary: string;
  summaryReady: boolean;

  onRemove: () => void;
}

export function ChannelCard({
  name,
  handle,
  thumbnail,
  description,
  latestVideo,
  videoThumbnail,
  uploadedAt,
  videoId,
  summary,
  summaryReady,
  onRemove,
}: ChannelCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/20 hover:shadow-xl">

      {/* Header */}

      <div className="flex items-start gap-4 p-6">

        <Image
          src={thumbnail}
          alt={name}
          width={72}
          height={72}
          className="rounded-2xl object-cover"
        />

        <div className="flex-1">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-xl font-bold">
                {name}
              </h2>

              <p className="text-sm text-muted-foreground">
                @{handle}
              </p>

            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              ✓ Tracking
            </span>

          </div>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {description}
          </p>

        </div>

      </div>

      {/* Latest Video */}

      <div className="border-y border-border p-6">

        <div className="mb-4 flex items-center justify-between">

          <h3 className="font-semibold">
            Latest Upload
          </h3>

          <Link
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
          >
            <PlayCircle className="h-4 w-4" />
            Watch
          </Link>

        </div>

        <Link
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          className="block overflow-hidden rounded-2xl"
        >

          <Image
            src={videoThumbnail}
            alt={latestVideo}
            width={800}
            height={450}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

        </Link>

        <h4 className="mt-5 line-clamp-2 text-lg font-semibold">
          {latestVideo}
        </h4>

        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">

          <Clock3 className="h-4 w-4" />

          {formatDistanceToNow(
            new Date(uploadedAt),
            {
              addSuffix: true,
            }
          )}

        </div>

      </div>

      {/* AI Summary */}

      <div className="space-y-4 p-6">

        <div className="rounded-2xl bg-muted/40 p-5">

          <div className="mb-3 flex items-center gap-2">

            <Sparkles className="h-5 w-5 text-red-600" />

            <h4 className="font-semibold">
              AI Summary
            </h4>

          </div>

          {summaryReady ? (

            <p className="line-clamp-4 text-sm leading-7 text-muted-foreground">
              {summary}
            </p>

          ) : (

            <p className="text-sm leading-7 text-muted-foreground">
              Summary will be generated automatically after the next daily sync.
            </p>

          )}

        </div>

        {/* Email Status */}

        <div className="flex items-center gap-3 rounded-2xl bg-blue-50 p-4">

          <Mail className="h-5 w-5 text-blue-600" />

          <div>

            <p className="font-medium">
              Daily Email Digest
            </p>

            <p className="text-sm text-muted-foreground">
              This channel is included in your NewsNaut email.
            </p>

          </div>

        </div>

        {/* Monitoring */}

        <div className="flex items-center gap-3 rounded-2xl bg-green-50 p-4">

          <CheckCircle2 className="h-5 w-5 text-green-600" />

          <div>

            <p className="font-medium text-green-700">
              Active Monitoring
            </p>

            <p className="text-sm text-green-600">
              New uploads are checked automatically every day.
            </p>

          </div>

        </div>

        {/* Remove */}

        <button
          onClick={onRemove}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 py-3 font-medium text-red-600 transition-all hover:bg-red-50"
        >

          <Trash2 className="h-5 w-5" />

          Remove Channel

        </button>

      </div>

    </article>
  );
}