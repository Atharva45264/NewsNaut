"use client";

import {
  Briefcase,
  Cpu,
  FlaskConical,
  Globe,
  HeartPulse,
  Landmark,
  Sparkles,
  Trophy,
  Film,
  GraduationCap,
  UtensilsCrossed,
} from "lucide-react";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const categoryIcons: Record<string, any> = {
  All: Sparkles,
  AI: Cpu,
  Business: Briefcase,
  Politics: Landmark,
  Sports: Trophy,
  World: Globe,
  Science: FlaskConical,
  Health: HeartPulse,
  Entertainment: Film,
  Education: GraduationCap,
  Food: UtensilsCrossed,
};

const categories = [
  "All",
  "AI",
  "Business",
  "Politics",
  "Sports",
  "World",
  "Science",
  "Health",
  "Entertainment",
  "Education",
  "Food",
];

export function CategoryFilter({
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">

      <div className="flex gap-3 overflow-x-auto p-5 scrollbar-hide">

        {categories.map((category) => {
          const Icon = categoryIcons[category];

          const active = selected === category;

          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
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

              {category}
            </button>
          );
        })}
      </div>

    </section>
  );
}