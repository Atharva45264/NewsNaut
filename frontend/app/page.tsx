import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold">NewsNaut</h1>

      <p className="mt-4 max-w-xl text-center text-gray-500">
        AI-powered news aggregator with smart summaries, personalized feeds,
        and daily newsletters.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/sign-up"
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          Get Started
        </Link>

        <Link
          href="/sign-in"
          className="rounded-lg border px-6 py-3"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}