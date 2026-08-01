import Link from "next/link";
import Image from "next/image";
import {
  Bookmark,
  Clock3,
  ExternalLink,
} from "lucide-react";

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  source: string;
  publishedAt: string;
  articleUrl: string;
}

export function NewsCard({
  title,
  summary,
  image,
  category,
  source,
  publishedAt,
  articleUrl,
}: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">

      {/* Image */}

      <div className="relative aspect-[16/9] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex items-center justify-between">

          <span className="text-sm font-medium text-primary">
            {source}
          </span>

          <button className="rounded-lg p-2 transition hover:bg-primary/10">
            <Bookmark className="h-4 w-4" />
          </button>

        </div>

        <h3 className="mt-4 text-xl font-semibold leading-snug transition group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 leading-7 text-muted-foreground">
          {summary}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <Clock3 className="h-4 w-4" />

            {publishedAt}

          </div>

          <Link
            href={articleUrl}
            target="_blank"
            className="flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
          >
            Read

            <ExternalLink className="h-4 w-4" />

          </Link>

        </div>

      </div>

    </article>
  );
}