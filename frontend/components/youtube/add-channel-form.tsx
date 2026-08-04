"use client";

import { useState } from "react";
import {
  Plus,
  PlayCircle,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

import { useYoutube } from "@/hooks/useYoutube";

export function AddChannelForm() {
  const {
    channels,
    createChannel,
    saving,
  } = useYoutube();

  const [url, setUrl] = useState("");

  const isValidYoutube =
    url === "" ||
    /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(url);

  const reachedLimit = channels.length >= 3;

  async function handleSubmit() {
    if (!url || !isValidYoutube || reachedLimit) return;

    const success = await createChannel(url);

    if (success) {
      toast.success("Channel added successfully!");

      setUrl("");
    } else {
      toast.error("Unable to add channel.");
    }
  }

  return (
    <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-red-500/10 p-3">

          <PlayCircle className="h-6 w-6 text-red-600" />

        </div>

        <div>

          <h2 className="text-2xl font-semibold">
            Add YouTube Channel
          </h2>

          <p className="text-muted-foreground">
            Track up to{" "}
            <span className="font-semibold">
              3 YouTube channels
            </span>
            . Every new upload will be summarized by AI and
            included in your NewsNaut daily email.
          </p>

        </div>

      </div>

      {/* Input */}

      <div className="mt-8 space-y-5">

        <div>

          <label className="mb-2 block text-sm font-medium">
            YouTube Channel URL
          </label>

          <input
            type="url"
            placeholder="https://youtube.com/@Fireship"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-border
              px-5
              outline-none
              transition-all
              focus:border-red-500
              focus:ring-4
              focus:ring-red-500/10
            "
          />

        </div>

        {/* Invalid URL */}

        {!isValidYoutube && (

          <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-600">

            <AlertCircle className="h-4 w-4" />

            Please enter a valid YouTube channel URL.

          </div>

        )}

        {/* Limit */}

        {reachedLimit && (

          <div className="flex items-center gap-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-700">

            <AlertCircle className="h-4 w-4" />

            You've reached the maximum limit of 3 channels.

          </div>

        )}

        {/* Footer */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium">

              {channels.length} / 3 Channels Added

            </p>

            <div className="mt-2 h-2 w-48 overflow-hidden rounded-full bg-muted">

              <div
                className="h-full rounded-full bg-red-600 transition-all"
                style={{
                  width: `${(channels.length / 3) * 100}%`,
                }}
              />

            </div>

          </div>

          <button
            onClick={handleSubmit}
            disabled={
              !url ||
              !isValidYoutube ||
              reachedLimit ||
              saving
            }
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-red-600
              px-6
              py-3
              font-medium
              text-white
              transition-all
              hover:bg-red-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >

            <Plus className="h-5 w-5" />

            {saving ? "Adding..." : "Add Channel"}

          </button>

        </div>

      </div>

    </section>
  );
}