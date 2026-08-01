"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Film,
  GraduationCap,
  HeartPulse,
  Landmark,
  Trophy,
  UtensilsCrossed,
  Briefcase,
  Globe,
  FlaskConical,
  PlayCircle,
} from "lucide-react";

import { useNews } from "@/hooks/useNews";

const categoryConfig: Record<
  string,
  {
    icon: any;
    color: string;
    bg: string;
    description: string;
  }
> = {
  ai: {
    icon: Bot,
    color: "text-violet-600",
    bg: "bg-violet-100",
    description: "AI, Machine Learning & Technology",
  },

  sports: {
    icon: Trophy,
    color: "text-amber-600",
    bg: "bg-amber-100",
    description: "Live matches & sporting events",
  },

  politics: {
    icon: Landmark,
    color: "text-red-600",
    bg: "bg-red-100",
    description: "Government & policy updates",
  },

  health: {
    icon: HeartPulse,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    description: "Healthcare & medical news",
  },

  education: {
    icon: GraduationCap,
    color: "text-blue-600",
    bg: "bg-blue-100",
    description: "Learning & education updates",
  },

  food: {
    icon: UtensilsCrossed,
    color: "text-orange-600",
    bg: "bg-orange-100",
    description: "Food, restaurants & nutrition",
  },

  entertainment: {
    icon: Film,
    color: "text-pink-600",
    bg: "bg-pink-100",
    description: "Movies, OTT & celebrities",
  },

  business: {
    icon: Briefcase,
    color: "text-cyan-600",
    bg: "bg-cyan-100",
    description: "Markets & business updates",
  },

  science: {
    icon: FlaskConical,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    description: "Research & discoveries",
  },

  world: {
    icon: Globe,
    color: "text-green-600",
    bg: "bg-green-100",
    description: "International headlines",
  },

  youtube: {
    icon: PlayCircle,
    color: "text-red-600",
    bg: "bg-red-100",
    description: "AI summarized YouTube videos",
  },
};

export function TrendingCategories() {
  const { articles, loading } = useNews();

  if (loading) {
    return (
      <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">
        <p className="text-muted-foreground">
          Loading categories...
        </p>
      </section>
    );
  }

  const categoryCount = articles.reduce((acc: any, article) => {
    const category = article.category?.toLowerCase();

    if (!category) return acc;

    acc[category] = (acc[category] || 0) + 1;

    return acc;
  }, {});

  const categories = Object.entries(categoryCount).sort(
    (a: any, b: any) => Number(b[1]) - Number(a[1])
  );

  return (
    <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-semibold tracking-tight">
            Trending Categories
          </h2>

          <p className="mt-2 text-muted-foreground">
            Browse news based on your interests.
          </p>

        </div>

        <div className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          {categories.length} Categories
        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {categories.map(([name, count]) => {
          const config =
            categoryConfig[name] ?? {
              icon: Globe,
              color: "text-gray-600",
              bg: "bg-gray-100",
              description: "Latest news updates",
            };

          const Icon = config.icon;

          return (
            <Link
              key={name}
              href="/dashboard/news"
              className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary/5 hover:to-background hover:shadow-xl"
            >
              <div className="flex items-start justify-between">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${config.bg}`}
                >
                  <Icon className={`h-8 w-8 ${config.color}`} />
                </div>

                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />

              </div>

              <h3 className="mt-6 text-2xl font-semibold capitalize">
                {name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {config.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">

                <div>
                  <p className="text-3xl font-bold text-primary">
                    {String(count)}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Articles
                  </p>
                </div>

                <span className="text-sm font-semibold text-primary transition-all group-hover:translate-x-1">
                  Explore →
                </span>

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}