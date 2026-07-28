import { Flame } from "lucide-react";

const trending = [
  {
    category: "AI",
    title: "OpenAI releases a new reasoning model",
  },
  {
    category: "Technology",
    title: "Apple unveils next generation chips",
  },
  {
    category: "Sports",
    title: "India wins thrilling T20 series",
  },
  {
    category: "Politics",
    title: "Global leaders discuss AI regulations",
  },
];

export default function Trending() {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-2">
        <Flame className="h-6 w-6 text-orange-500" />
        <h2 className="text-2xl font-bold text-white">
          Trending Today
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {trending.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500"
          >
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
              {item.category}
            </span>

            <h3 className="mt-4 font-semibold text-white">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}