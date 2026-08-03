"use client";

import { PlayCircle, Plus } from "lucide-react";

export function EmptyState() {
  return (
    <section className="rounded-3xl border border-dashed border-border bg-background py-20">

      <div className="mx-auto flex max-w-md flex-col items-center text-center">

        <div className="rounded-full bg-red-500/10 p-6">

          <PlayCircle className="h-14 w-14 text-red-600" />

        </div>

        <h2 className="mt-8 text-3xl font-bold">
          No Channels Added Yet
        </h2>

        <p className="mt-4 leading-7 text-muted-foreground">

          Add your favourite YouTube creators to receive
          AI-generated summaries of every new upload in your
          NewsNaut daily email digest.

        </p>

        <div className="mt-8 rounded-2xl bg-muted/40 px-6 py-4 text-sm text-muted-foreground">

          • Track up to <strong>3 channels</strong>

          <br />

          • Automatic AI summaries

          <br />

          • Daily email updates

        </div>

        <button
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-primary
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-primary/90
          "
        >

          <Plus className="h-5 w-5" />

          Add First Channel

        </button>

      </div>

    </section>
  );
}