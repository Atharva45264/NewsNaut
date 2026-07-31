import {
  ArrowRight,
  BookOpen,
  LayoutGrid,
  Newspaper,
  Sparkles,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    icon: Newspaper,
    title: "Collect News",
    description:
      "NewsNaut monitors thousands of trusted publishers, RSS feeds, and YouTube channels in real time.",
  },
  {
    icon: Sparkles,
    title: "AI Summarizes",
    description:
      "Our AI removes noise, combines similar stories, and creates concise summaries with trusted citations.",
  },
  {
    icon: LayoutGrid,
    title: "Smart Organization",
    description:
      "News is automatically grouped into meaningful categories and ranked by relevance for you.",
  },
  {
    icon: BookOpen,
    title: "Read Anywhere",
    description:
      "Access your personalized news dashboard, bookmarks, and daily digest across every device.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
            How It Works
          </span>

          <h2 className="mt-6 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            From breaking news to
            <br />
            personalized insights
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            NewsNaut automatically collects, summarizes, organizes and delivers
            the stories that matter—so you spend less time searching and more
            time staying informed.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 120}>
                <div className="group relative h-full rounded-3xl border border-border/70 bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                  {/* Timeline Dot */}
                  <div className="absolute -top-3 left-8 hidden lg:block">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-primary" />
                  </div>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <step.icon className="h-6 w-6" />
                  </div>

                  {/* Step */}
                  <div className="mt-6">
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
                      STEP {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="mt-8 flex items-center text-primary lg:hidden">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <Reveal delay={450}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="rounded-full border border-border bg-background px-4 py-2 shadow-sm">
              40,000+ Trusted Sources
            </span>

            <span className="rounded-full border border-border bg-background px-4 py-2 shadow-sm">
              AI-Powered Summaries
            </span>

            <span className="rounded-full border border-border bg-background px-4 py-2 shadow-sm">
              Live Updates Every Few Minutes
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}