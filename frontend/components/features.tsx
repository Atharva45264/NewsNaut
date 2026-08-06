import {
  Bot,
  Bookmark,
  BrainCircuit,
  LayoutGrid,
  Newspaper,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { FeaturesBackground } from "@/components/landing/features-background";

const features = [
  {
    icon: Newspaper,
    title: "AI News Aggregation",
    stat: "100+ Sources",
    description:
      "NewsNaut continuously gathers news from trusted publishers, giving you one clean feed instead of visiting multiple websites.",
    accent: "from-emerald-500/20 via-emerald-400/10 to-transparent",
  },
  {
    icon: BrainCircuit,
    title: "AI Summaries",
    stat: "98% Faster",
    description:
      "Long articles are transformed into concise AI-generated summaries so you understand the important points in seconds.",
    accent: "from-green-500/20 via-green-400/10 to-transparent",
  },
  {
    icon: Search,
    title: "Smart Search",
    stat: "Instant Results",
    description:
      "Search across thousands of articles, headlines and topics instantly using one powerful search experience.",
    accent: "from-lime-500/20 via-lime-400/10 to-transparent",
  },
  {
    icon: LayoutGrid,
    title: "Category Browsing",
    stat: "6 Categories",
    description:
      "Browse AI, Technology, Politics, Sports and more through a beautifully organized news experience.",
    accent: "from-emerald-400/20 via-green-300/10 to-transparent",
  },
  {
    icon: Bookmark,
    title: "Bookmarks",
    stat: "Read Later",
    description:
      "Save important stories and build your personal reading collection for quick access anytime.",
    accent: "from-green-400/20 via-green-300/10 to-transparent",
  },
  {
    icon: Bot,
    title: "YouTube Tracker",
    stat: "24/7 Monitoring",
    description:
      "Follow your favourite YouTube creators and receive AI-generated summaries whenever new videos are uploaded.",
    accent: "from-emerald-600/20 via-emerald-500/10 to-transparent",
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-28">
      <FeaturesBackground />
      {/* Background Glow */}

      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            Why NewsNaut?
          </span>

          <h2 className="mt-6 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Everything you need to stay informed,
            <span className="text-primary"> without the noise.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            NewsNaut combines trusted journalism with artificial intelligence to
            deliver a modern news experience thats fast, organized and
            distraction free.
          </p>
        </div>

        {/* Feature Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
group
relative
overflow-hidden
rounded-[30px]
border
border-emerald-500/10
bg-white/80
backdrop-blur-xl
p-8
shadow-lg
shadow-emerald-500/5
transition-all
duration-500
hover:-translate-y-3
hover:border-emerald-500/30
hover:shadow-2xl
hover:shadow-emerald-500/15
"
            >
              {/* Gradient */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Content */}

              <div className="relative z-10">
                {/* Floating Stat */}

                <div
                  className="
      inline-flex
      items-center
      rounded-full
      border
      border-emerald-500/20
      bg-emerald-500/10
      px-3
      py-1
      text-xs
      font-semibold
      uppercase
      tracking-[0.18em]
      text-emerald-600
      shadow-sm
      transition-all
      duration-500
      group-hover:bg-emerald-500
      group-hover:text-white
      "
                >
                  {feature.stat}
                </div>

                <div
                  className="
mt-6
flex
h-16
w-16
items-center
justify-center
rounded-3xl
bg-white
text-primary
shadow-lg
shadow-emerald-500/10
transition-all
duration-500
group-hover:scale-110
group-hover:-translate-y-1
group-hover:rotate-6
group-hover:bg-primary
group-hover:text-white
"
                >
                  <feature.icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-bold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
                  Explore Feature
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}

        <div className="mt-24 rounded-[32px] border border-primary/10 bg-gradient-to-r from-primary/5 via-background to-primary/5 p-10 shadow-sm">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-serif text-3xl font-medium tracking-tight">
                One platform.
                <span className="text-primary"> Every important story.</span>
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                Stop switching between news websites. NewsNaut automatically
                collects, summarizes, organizes and personalizes the worlds most
                important stories so you can spend more time understanding and
                less time searching.
              </p>
            </div>

            <div className="hidden h-32 w-px bg-border lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
