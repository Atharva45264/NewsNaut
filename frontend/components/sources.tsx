import {
  Globe,
  Newspaper,
  Radio,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: "40,000+", label: "Trusted Sources" },
  { value: "95+", label: "Countries Covered" },
  { value: "30 sec", label: "Average AI Brief" },
  { value: "24/7", label: "Live Monitoring" },
]

const pillars = [
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Monitor breaking news from trusted publishers, local journalism, international media, and official organizations worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Transparent",
    description:
      "Every AI summary links back to the original reporting so you always know where information comes from.",
  },
  {
    icon: Radio,
    title: "Always Live",
    description:
      "NewsNaut continuously scans new articles and updates your personalized briefing within minutes.",
  },
]

const categories = [
  "Wire Services",
  "National Press",
  "Financial News",
  "Science Journals",
  "Technology",
  "Government",
  "Public Records",
  "Official Statements",
]

export function Sources() {
  return (
    <section
      id="sources"
      className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-28"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
            <Newspaper className="h-4 w-4" />
            Trusted Sources
          </span>

          <h2 className="mt-6 font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Built on journalism,
            <br />
            powered by AI.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            NewsNaut reads thousands of trusted publications, filters duplicate
            reporting, and delivers concise summaries with links back to every
            original source.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={100}>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border/70 bg-card p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl font-semibold tracking-tight text-primary">
                  {stat.value}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Trust Cards */}
        <Reveal delay={180}>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 120}>
                <div className="group rounded-3xl border border-border/70 bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <pillar.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Categories */}
        <Reveal delay={320}>
          <div className="mt-20">
            <div className="mb-8 flex items-center justify-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              <span className="font-medium">
                Coverage across trusted categories
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Reveal key={category} delay={index * 40}>
                  <span className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-primary hover:text-white hover:shadow-md">
                    {category}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom Trust Statement */}
        <Reveal delay={450}>
          <div className="mt-20 rounded-3xl border border-primary/10 bg-primary/5 p-8 text-center">
            <h3 className="text-2xl font-semibold tracking-tight">
              Every summary is backed by real reporting.
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-7">
              We dont replace journalism—we amplify it. Every AI-generated
              brief includes citations to the original articles, helping you
              verify facts, explore deeper coverage, and stay informed with
              confidence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}