import {
  Compass,
  Sparkles,
  Bookmark,
  Globe,
  Cpu,
  LineChart,
  Landmark,
  HeartPulse,
  Check,
  Clock,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Logo } from "@/components/logo";

const sidebarItems = [
  { label: "Today", icon: Compass, active: true },
  { label: "For You", icon: Sparkles, active: false },
  { label: "Saved", icon: Bookmark, active: false },
];

const categories = [
  { label: "World", icon: Globe, count: 128 },
  { label: "Technology", icon: Cpu, count: 94 },
  { label: "Markets", icon: LineChart, count: 76 },
  { label: "Politics", icon: Landmark, count: 61 },
  { label: "Health", icon: HeartPulse, count: 43 },
];

const summaryPoints = [
  "Central banks signal a coordinated hold on rates as inflation cools across major economies.",
  "Chip makers report record demand, pushing the sector to a third straight quarter of growth.",
  "Renewable capacity additions outpaced fossil fuels for the first time on record.",
];

const sources = ["Reuters", "Bloomberg", "The Verge", "AP", "+37 more"];

const recentArticles = [
  {
    tag: "Technology",
    title: "AI chip demand reshapes the global supply chain",
    meta: "12 sources · 3 min brief",
    time: "18m",
  },
  {
    tag: "Markets",
    title: "Investors weigh a soft landing as volatility eases",
    meta: "9 sources · 2 min brief",
    time: "41m",
  },
  {
    tag: "Climate",
    title: "Grid-scale storage hits an inflection point",
    meta: "15 sources · 4 min brief",
    time: "1h",
  },
  {
    tag: "World",
    title: "Trade talks resume as tariffs near a resolution",
    meta: "21 sources · 3 min brief",
    time: "2h",
  },
];

const bookmarks = [
  { title: "The quiet rise of on-device AI models", tag: "Technology" },
  { title: "Why bond markets stopped worrying", tag: "Markets" },
];

const trending = [
  { rank: 1, title: "Semiconductor export rules tighten", reads: "24.1k" },
  { rank: 2, title: "Fusion startup posts net energy gain", reads: "18.7k" },
  { rank: 3, title: "Housing starts rebound in Q2", reads: "12.3k" },
];

export function DashboardPreview() {
  return (
    <section id="product" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <div
        className="animate-fade-scale overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/5"
        style={{ animationDelay: "320ms" }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-4 border-b border-border bg-muted/40 px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-yellow-400" />
            <span className="size-3 rounded-full bg-green-500" />
          </div>
          <div className="mx-auto flex w-full max-w-sm items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-xs text-muted-foreground">
            <Logo className="size-3.5 text-primary" />
            app.newsnaut.com
          </div>
          <div className="hidden items-center gap-2 text-xs font-medium text-primary sm:flex">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            Updated 2m ago
          </div>
        </div>

        {/* App body */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr_300px]">
          {/* Sidebar */}
          <aside className="hidden flex-col gap-6 border-r border-border p-5 md:flex">
            <div>
              <p className="px-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Feed
              </p>
              <nav className="mt-2 flex flex-col gap-0.5">
                {sidebarItems.map((item) => (
                  <span
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-all duration-200 ${
                      item.active
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground hover:translate-x-1"
                    }`}
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </span>
                ))}
              </nav>
            </div>
            <div>
              <p className="px-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Trending categories
              </p>
              <nav className="mt-2 flex flex-col gap-0.5">
                {categories.map((cat) => (
                  <span
                    key={cat.label}
                    className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground"
                  >
                    <span className="flex items-center gap-2.5">
                      <cat.icon className="size-4" />
                      {cat.label}
                    </span>
                    <span className="text-xs tabular-nums text-muted-foreground/70">
                      {cat.count}
                    </span>
                  </span>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main brief */}
          <div className="p-6 md:p-8">
            {/* Breaking news */}
            <div className="mb-6 flex items-center gap-3 rounded-lg border border-border bg-surface-tint px-3.5 py-2.5">
              <span className="flex items-center gap-1.5 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                <Zap className="size-3" />
                Breaking
              </span>
              <p className="truncate text-sm font-medium text-foreground/90">
                Fed holds rates steady, signals patience on future cuts
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              AI DAILY BRIEF
            </div>
            <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight md:text-3xl">
              What matters this morning
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Tuesday, June 3 · Synthesized from 61 verified reports
            </p>

            <ul className="mt-6 flex flex-col gap-4">
              {summaryPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-foreground/90">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-5">
              <span className="text-xs text-muted-foreground">
                Sourced from
              </span>
              {sources.map((source) => (
                <span
                  key={source}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {source}
                </span>
              ))}
            </div>

            {/* Recent articles */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Recent articles
                </p>
                <span className="text-xs text-primary">View all</span>
              </div>
              <div className="mt-2 flex flex-col">
                {recentArticles.map((item) => (
                  <article
                    key={item.title}
                    className="-mx-2 flex cursor-pointer items-start justify-between gap-4 rounded-lg px-2 py-3 transition-colors hover:bg-muted/40

hover:shadow-sm

hover:border

hover:border-primary/15"
                  >
                    <div>
                      <span className="text-xs font-medium text-primary">
                        {item.tag}
                      </span>
                      <h4 className="mt-1 text-sm font-medium leading-snug tracking-tight">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.meta}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      {item.time}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Right rail */}
          <aside className="hidden flex-col gap-8 border-l border-border p-6 lg:flex">
            {/* Bookmarks */}
            <div>
              <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                <Bookmark className="size-3.5" />
                Bookmarks
              </p>
              <div className="mt-4 flex flex-col divide-y divide-border">
                {bookmarks.map((item) => (
                  <article key={item.title} className="py-3 first:pt-0">
                    <span className="text-xs font-medium text-primary">
                      {item.tag}
                    </span>
                    <h4 className="mt-1 text-sm font-medium leading-snug tracking-tight">
                      {item.title}
                    </h4>
                  </article>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div>
              <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                <TrendingUp className="size-3.5" />
                Most read today
              </p>
              <div className="mt-4 flex flex-col gap-4">
                {trending.map((item) => (
                  <article key={item.title} className="flex gap-3">
                    <span className="font-serif text-lg font-medium leading-none text-muted-foreground/50">
                      {item.rank}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium leading-snug tracking-tight">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.reads} reads
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
