import {
  Bot,
  Bookmark,
  BrainCircuit,
  LayoutGrid,
  Newspaper,
  Search,
  ArrowUpRight,
} from "lucide-react"

const features = [
  {
    icon: Newspaper,
    title: "AI News Aggregation",
    description:
      "NewsNaut gathers news from trusted publishers and multiple sources in real time, giving you one place to stay informed without visiting dozens of websites.",
    accent: "from-green-500/15 to-green-500/5",
  },
  {
    icon: BrainCircuit,
    title: "AI Summaries",
    description:
      "Long articles are transformed into concise, easy-to-read summaries so you understand the key points within seconds.",
    accent: "from-emerald-500/15 to-emerald-500/5",
  },
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Search across articles, topics and headlines instantly to find exactly what you're looking for without endless scrolling.",
    accent: "from-lime-500/15 to-lime-500/5",
  },
  {
    icon: LayoutGrid,
    title: "Category Browsing",
    description:
      "Explore organized news across Technology, Business, Politics, Sports, Science, AI and more with an intuitive browsing experience.",
    accent: "from-green-400/15 to-green-400/5",
  },
  {
    icon: Bookmark,
    title: "Bookmarks",
    description:
      "Save important stories to your personal reading list and revisit them whenever you want.",
    accent: "from-emerald-400/15 to-emerald-400/5",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Ask questions about today's news, understand complex events, and receive contextual answers powered by AI.",
    accent: "from-green-600/15 to-green-600/5",
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

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
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
            >
              {/* Gradient */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Content */}

              <div className="relative z-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">

                  <feature.icon className="h-7 w-7" />

                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">

                  Learn more

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
                collects, summarizes, organizes and personalizes the worlds
                most important stories so you can spend more time understanding
                and less time searching.

              </p>

            </div>

            <div className="hidden h-32 w-px bg-border lg:block" />

          </div>

        </div>

      </div>
    </section>
  )
}