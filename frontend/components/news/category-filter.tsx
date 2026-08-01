"use client";

import { useState } from "react";
import {
  Cpu,
  Globe,
  Briefcase,
  Landmark,
  Trophy,
  FlaskConical,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    label: "All",
    icon: Sparkles,
  },
  {
    label: "AI",
    icon: Cpu,
  },
  {
    label: "Technology",
    icon: Cpu,
  },
  {
    label: "Business",
    icon: Briefcase,
  },
  {
    label: "Politics",
    icon: Landmark,
  },
  {
    label: "Sports",
    icon: Trophy,
  },
  {
    label: "World",
    icon: Globe,
  },
  {
    label: "Science",
    icon: FlaskConical,
  },
  {
    label: "Health",
    icon: HeartPulse,
  },
];

export function CategoryFilter() {
  const [selected, setSelected] = useState("All");

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">

      <div className="flex gap-3 overflow-x-auto p-5 scrollbar-hide">

        {categories.map((category) => {
          const Icon = category.icon;

          const active = selected === category.label;

          return (
            <button
              key={category.label}
              onClick={() => setSelected(category.label)}
              className={`
                flex shrink-0 items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300

                ${
                  active
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "border border-border bg-background hover:border-primary hover:bg-primary/10 hover:text-primary"
                }
              `}
            >
              <Icon className="h-4 w-4" />

              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}