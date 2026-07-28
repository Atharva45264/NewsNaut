export default function Hero() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 text-white shadow-xl">
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10">
        <p className="text-sm text-blue-200">{today}</p>

        <h1 className="mt-3 text-4xl font-bold leading-tight">
          Stay Ahead with
          <span className="text-cyan-300"> AI-Powered News</span>
        </h1>

        <p className="mt-4 max-w-2xl text-gray-300">
          Discover the latest headlines, AI-generated summaries,
          and personalized news from trusted sources—all in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-gray-200">
            Explore News
          </button>

          <button className="rounded-xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10">
            View AI Digest
          </button>
        </div>
      </div>
    </section>
  );
}