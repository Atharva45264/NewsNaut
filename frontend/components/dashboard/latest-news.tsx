import {
  ArrowUpRight,
  Clock3,
  ExternalLink,
  Newspaper,
} from "lucide-react";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "OpenAI introduces new multimodal capabilities.",
    summary:
      "The latest update improves reasoning, image understanding and developer workflows.",
    category: "AI",
    source: "OpenAI",
    time: "12 min ago",
  },
  {
    id: 2,
    title: "Global markets remain steady after inflation report.",
    summary:
      "Investors reacted positively as inflation cooled across several major economies.",
    category: "Business",
    source: "Reuters",
    time: "30 min ago",
  },
  {
    id: 3,
    title: "NASA announces upcoming lunar mission timeline.",
    summary:
      "The next Artemis mission is expected to move forward after successful testing.",
    category: "Science",
    source: "NASA",
    time: "52 min ago",
  },
  {
    id: 4,
    title: "Premier League clubs prepare for the new season.",
    summary:
      "Transfer activity continues as clubs finalize their squads before kickoff.",
    category: "Sports",
    source: "BBC Sport",
    time: "1 hr ago",
  },
];

export function LatestNews() {
  return (
    <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-primary/10 p-3">

            <Newspaper className="h-5 w-5 text-primary" />

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              Latest News
            </h2>

            <p className="text-sm text-muted-foreground">
              Fresh stories from trusted publishers
            </p>

          </div>

        </div>

        <Link
          href="/news"
          className="flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
        >
          View All

          <ArrowUpRight className="h-4 w-4" />

        </Link>

      </div>

      <div className="space-y-5">

        {news.map((article) => (

          <article
            key={article.id}
            className="group rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:shadow-lg"
          >

            <div className="flex items-center gap-3">

              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {article.category}
              </span>

              <span className="text-xs text-muted-foreground">
                {article.source}
              </span>

              <div className="flex items-center gap-1 text-xs text-muted-foreground">

                <Clock3 className="h-3.5 w-3.5" />

                {article.time}

              </div>

            </div>

            <h3 className="mt-4 text-xl font-semibold transition group-hover:text-primary">
              {article.title}
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              {article.summary}
            </p>

            <button className="mt-5 flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3">

              Read Article

              <ExternalLink className="h-4 w-4" />

            </button>

          </article>

        ))}

      </div>

    </section>
  );
}