import NewsFeed from "@/app/components/news/NewsFeed";

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 p-6">
      <div>
        <h1 className="text-4xl font-bold text-white">
          News Feed
        </h1>

        <p className="mt-2 text-slate-400">
          Browse AI, Politics and Sports news powered by NewsNaut.
        </p>
      </div>

      <NewsFeed />
    </main>
  );
}