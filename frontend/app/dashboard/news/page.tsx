import { SearchBar } from "@/components/news/search-bar";
import { CategoryFilter } from "@/components/news/category-filter";
import { NewsGrid } from "@/components/news/news-grid";

export default function NewsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-serif font-semibold">
          News Feed
        </h1>

        <p className="mt-2 text-muted-foreground">
          Discover the latest AI-curated news from trusted publishers.
        </p>

      </div>

      <SearchBar />

      <CategoryFilter />

      <NewsGrid />

    </div>
  );
}