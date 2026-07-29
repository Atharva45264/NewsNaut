import Link from "next/link";
import { ExternalLink } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "OpenAI launches next-generation reasoning model",
    summary:
      "The latest model delivers stronger reasoning, coding capabilities, and multimodal understanding.",
    source: "OpenAI",
    category: "AI",
    published: "2 hours ago",
    url: "#",
  },
  {
    id: 2,
    title: "Apple introduces new AI-powered MacBook features",
    summary:
      "Apple expands on-device AI with productivity enhancements across macOS.",
    source: "Apple Newsroom",
    category: "Technology",
    published: "4 hours ago",
    url: "#",
  },
  {
    id: 3,
    title: "India wins thrilling T20 series finale",
    summary:
      "A spectacular chase secured the series victory in the final over.",
    source: "ESPN",
    category: "Sports",
    published: "6 hours ago",
    url: "#",
  },
];

export default function LatestNews() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Latest News
        </h2>

        <Link
          href="/news"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                {article.category}
              </span>

              <span className="text-xs text-slate-400">
                {article.source}
              </span>

              <span className="text-xs text-slate-500">
                • {article.published}
              </span>
            </div>

            <h3 className="mt-3 text-xl font-semibold text-white">
              {article.title}
            </h3>

            <p className="mt-3 text-slate-400">
              {article.summary}
            </p>

            <div className="mt-5 flex justify-end">
              <Link
                href={article.url}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                Read Article
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}