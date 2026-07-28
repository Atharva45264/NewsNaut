import {
  Newspaper,
  Sparkles,
  Bookmark,
  Globe,
} from "lucide-react";

const stats = [
  {
    title: "Articles",
    value: "145",
    icon: Newspaper,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "AI Summaries",
    value: "145",
    icon: Sparkles,
    color: "bg-violet-500/10 text-violet-400",
  },
  {
    title: "Bookmarks",
    value: "12",
    icon: Bookmark,
    color: "bg-yellow-500/10 text-yellow-400",
  },
  {
    title: "Sources",
    value: "24",
    icon: Globe,
    color: "bg-emerald-500/10 text-emerald-400",
  },
];

export default function QuickStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:border-blue-500/40"
          >
            <div
              className={`mb-4 inline-flex rounded-xl p-3 ${stat.color}`}
            >
              <Icon className="h-6 w-6" />
            </div>

            <p className="text-sm text-slate-400">
              {stat.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {stat.value}
            </h2>
          </div>
        );
      })}
    </section>
  );
}