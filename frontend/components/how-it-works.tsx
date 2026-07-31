import {
  ArrowRight,
  BookOpen,
  LayoutGrid,
  Newspaper,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    icon: Newspaper,
    title: "Collect News",
    description:
      "NewsNaut continuously gathers articles from trusted publishers, RSS feeds, and YouTube channels in real time.",
  },
  {
    icon: Sparkles,
    title: "AI Processing",
    description:
      "Artificial Intelligence filters duplicate stories, extracts key insights, and generates concise summaries.",
  },
  {
    icon: LayoutGrid,
    title: "Smart Organization",
    description:
      "Every story is automatically categorized, ranked, and organized so your feed stays relevant and clutter-free.",
  },
  {
    icon: BookOpen,
    title: "Personalized Reading",
    description:
      "Explore your dashboard, save bookmarks, search topics, and ask the AI Assistant to understand events faster.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            How NewsNaut Works
          </span>

          <h2 className="mt-6 font-serif text-4xl font-medium tracking-tight md:text-5xl">
            From breaking news to
            <span className="text-primary"> meaningful insights.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Every story passes through an intelligent workflow that filters
            noise, summarizes information and delivers a clean reading
            experience tailored for you.
          </p>
        </Reveal>

        {/* Workflow */}

        <div className="relative mt-24">

          {/* Desktop Workflow Line */}

          <div className="absolute left-[11%] right-[11%] top-8 hidden lg:block">

            <div className="relative h-px bg-primary/20">

              {/* Moving Dot */}

              <div className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(34,197,94,0.7)] animate-flow" />

            </div>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 120}>
                <div className="group relative h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">

                  {/* Step Number */}

                  <div className="absolute right-6 top-6 text-5xl font-bold text-primary/5 transition-all duration-500 group-hover:text-primary/10">
                    0{index + 1}
                  </div>

                  {/* Icon */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-white">

                    <step.icon className="h-8 w-8" />

                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Workflow Connector */}

                  {index !== steps.length - 1 && (
                    <>
                      {/* Mobile */}

                      <div className="mt-8 flex justify-center lg:hidden">

                        <ArrowRight className="h-5 w-5 animate-pulse text-primary" />

                      </div>

                      {/* Desktop */}

                      <div className="absolute -right-10 top-16 z-20 hidden lg:flex items-center">

                        <ArrowRight className="h-5 w-5 text-primary transition-transform duration-500 group-hover:translate-x-1" />

                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}

        <Reveal delay={450}>
          <div className="mt-24 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <h3 className="text-3xl font-bold text-primary">
                40,000+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Trusted Sources
              </p>

            </div>

            <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <h3 className="text-3xl font-bold text-primary">
                AI
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Summaries & Insights
              </p>

            </div>

            <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <h3 className="text-3xl font-bold text-primary">
                24/7
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Live News Monitoring
              </p>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}