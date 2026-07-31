import { Rss, Sparkles, LayoutGrid, BookOpenCheck } from "lucide-react";
import type {
  StatItem,
  ArticleItem,
  CategoryItem,
  ProcessStep,
} from "@/types/landing";

export const HERO_STATS: StatItem[] = [
  { value: "500+", label: "Trusted Sources" },
  { value: "30 sec", label: "Average Summary" },
  { value: "24/7", label: "Live Updates" },
];

export const BREAKING_HEADLINE =
  "Global markets rally as central banks signal coordinated rate pause";

export const AI_SUMMARY = {
  title: "Today's Brief",
  body: "Markets steadied overnight after three major central banks hinted at holding rates through the next quarter. Separately, a breakthrough battery chemistry promises 40% longer EV range, and negotiators reached a preliminary framework in ongoing trade talks.",
  readTime: "30 sec read",
};

export const RECENT_ARTICLES: ArticleItem[] = [
  {
    id: "1",
    category: "Technology",
    title: "New battery chemistry could extend EV range by 40%",
    source: "The Verge",
    readTime: "4 min",
  },
  {
    id: "2",
    category: "Business",
    title: "Trade negotiators reach preliminary framework agreement",
    source: "Reuters",
    readTime: "6 min",
  },
  {
    id: "3",
    category: "Science",
    title: "Researchers map deep ocean current shifts tied to warming",
    source: "Nature News",
    readTime: "5 min",
  },
];

export const TRENDING_CATEGORIES: CategoryItem[] = [
  { name: "AI", count: 128 },
  { name: "Technology", count: 96 },
  { name: "Business", count: 74 },
  { name: "Politics", count: 61 },
  { name: "Sports", count: 45 },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "collect",
    index: 1,
    title: "Collect News",
    description:
      "NewsNaut continuously pulls fresh stories from sources you trust.",
    tags: ["RSS", "Trusted Publishers", "YouTube"],
    icon: Rss,
  },
  {
    id: "summarize",
    index: 2,
    title: "AI Processing",
    description:
      "Every story is distilled into the parts that actually matter.",
    tags: ["Summaries", "Key Insights", "Noise Removal"],
    icon: Sparkles,
  },
  {
    id: "organize",
    index: 3,
    title: "Smart Categories",
    description: "Stories are sorted the moment they arrive, no effort needed.",
    tags: ["AI", "Technology", "Business", "Politics", "Sports"],
    icon: LayoutGrid,
  },
  {
    id: "read",
    index: 4,
    title: "Read Anywhere",
    description: "Pick it up on your schedule, in whatever form suits you.",
    tags: ["Dashboard", "Bookmarks", "Daily Digest"],
    icon: BookOpenCheck,
  },
];
