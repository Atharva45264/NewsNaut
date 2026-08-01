"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <section className="rounded-3xl border border-border bg-background p-5 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

        {/* Search Input */}

        <div className="relative flex-1">

          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics, authors, AI, technology..."
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-border
              bg-background
              pl-14
              pr-12
              text-sm
              outline-none
              transition-all
              duration-300
              focus:border-primary
              focus:ring-4
              focus:ring-primary/10
            "
          />

          {query.length > 0 && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 transition hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          )}

        </div>

        {/* Filters */}

        <button
          className="
            flex
            h-14
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-border
            px-6
            font-medium
            transition-all
            duration-300
            hover:border-primary
            hover:bg-primary/10
            hover:text-primary
          "
        >
          <SlidersHorizontal className="h-5 w-5" />

          Filters
        </button>

      </div>

    </section>
  );
}