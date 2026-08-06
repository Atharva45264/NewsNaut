"use client";

import { Newspaper } from "lucide-react";

interface NewsPillProps {
  title: string;
}

export function NewsPill({ title }: NewsPillProps) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      rounded-full
      border
      border-emerald-500/15
      bg-emerald-500/5
      px-7
      py-3
      backdrop-blur-md
      shadow-xl
      whitespace-nowrap
      "
    >
      <Newspaper
        className="
        h-5
        w-5
        text-emerald-600
        "
      />

      <span
        className="
        text-xl
        font-semibold
        tracking-wide
        text-emerald-700
        "
      >
        {title}
      </span>
    </div>
  );
}