import {
  ArrowRight,
  Bookmark,
  BrainCircuit,
  CheckCircle2,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/landing/hero-background"

const features = [
  "AI Summaries",
  "Smart Search",
  "Bookmarks",
  "AI Assistant",
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36"
    >
      <HeroBackground />
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 -z-10 flex justify-center">
        <div className="h-125 w-125 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="relative z-30 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          AI-powered News Platform
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-up mt-8 max-w-5xl font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Understand the world news
          <br />
          <span className="text-primary">in minutes, not hours.</span>
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          NewsNaut combines trusted journalism with AI to summarize articles,
          search across thousands of news sources, organize stories into
          categories, save bookmarks, and let you chat with an AI assistant—
          all in one distraction-free experience.
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <Button
            size="lg"
            className="h-12 rounded-full px-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            nativeButton={false}
            render={<a href="#cta" />}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-8 transition-all duration-300 hover:-translate-y-1"
            nativeButton={false}
            render={<a href="#product" />}
          >
            Explore Dashboard
          </Button>
        </div>

        {/* Features */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "320ms" }}
        >
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-full border border-border bg-card px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
            >
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-4 w-4 text-primary" />
            AI Generated Summaries
          </div>

          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-primary" />
            Search Across News
          </div>

          <div className="flex items-center gap-2">
            <Bookmark className="h-4 w-4 text-primary" />
            Save Articles
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Trusted Sources
          </div>
        </div>
      </div>
    </section>
  )
}