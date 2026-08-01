import { WelcomeCard } from "@/components/dashboard/welcome-card";
import { AISummaryCard } from "@/components/dashboard/ai-summary-card";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { TrendingCategories } from "@/components/dashboard/trending-categories";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeCard />
      <AISummaryCard />
        <QuickActions />
        <TrendingCategories />
    </div>
  );
}