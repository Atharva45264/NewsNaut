"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNews } from "@/hooks/useNews";

export function FeaturedNews() {
  const { articles, loading } = useNews();

  if (loading || articles.length === 0) return null;

  const featured = articles[0];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border shadow-lg">

      <div className="relative h-[420px]">

        <Image
          src={featured.image || "/placeholder.jpg"}
          alt={featured.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

        <div className="absolute inset-0 flex max-w-3xl flex-col justify-end p-10">

          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">

            <Sparkles className="h-4 w-4" />

            Featured Story

          </div>

          <h2 className="text-4xl font-bold leading-tight text-white">
            {featured.title}
          </h2>

          <p className="mt-5 line-clamp-3 max-w-2xl text-lg text-white/80">
            {featured.content}
          </p>

          <div className="mt-8 flex items-center gap-4">

            <span className="rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur">
              {featured.category}
            </span>

            <span className="text-sm text-white/70">
              {featured.source}
            </span>

          </div>

          <Link
            href={featured.link}
            target="_blank"
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:gap-4"
          >
            Read Full Story

            <ArrowRight className="h-5 w-5" />

          </Link>

        </div>

      </div>

    </section>
  );
}