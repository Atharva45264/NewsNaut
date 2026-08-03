import { AddChannelForm } from "../../../components/youtube/add-channel-form";
import { YoutubeGrid } from "../../../components/youtube/youtube-grid";

export default function YoutubeTrackerPage() {
  return (
    <div className="space-y-10">

      <div>

        <h1 className="text-4xl font-serif font-semibold">
          YouTube Tracker
        </h1>

        <p className="mt-2 text-muted-foreground">
          Track your favourite YouTube creators and receive AI-powered summaries
          of every new upload directly in your NewsNaut email digest.
        </p>

      </div>

      <AddChannelForm />

      <YoutubeGrid />

    </div>
  );
}