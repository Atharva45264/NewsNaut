import type { LucideIcon } from "lucide-react";

export interface StatItem {
  value: string;
  label: string;
}

export interface ArticleItem {
  id: string;
  category: string;
  title: string;
  source: string;
  readTime: string;
}

export interface CategoryItem {
  name: string;
  count: number;
}

export interface ProcessStep {
  id: string;
  index: number;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}
