"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <section className="rounded-3xl border border-border bg-background p-5 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

        {/* Search */}

        <div className="relative flex-1">

          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search articles, topics, publishers..."
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

          {value.length > 0 && (
            <button
              onClick={() => onChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 transition hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          )}

        </div>

        {/* Results */}

        <div className="hidden rounded-2xl border border-border bg-muted/30 px-5 py-3 lg:block">

          <p className="text-sm font-medium text-muted-foreground">
            Live Search
          </p>

        </div>

        {/* Future Filters */}

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