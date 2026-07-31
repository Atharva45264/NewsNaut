import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 md:pt-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 -z-10 flex justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary shadow-sm">
          <span className="size-2 rounded-full bg-primary" />
          Reading 40,000+ trusted sources in real time
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-up mt-8 max-w-4xl text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Your Daily News.
          <br />
          Smarter.
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground"
          style={{ animationDelay: "160ms" }}
        >
          NewsNaut continuously reads thousands of trusted publishers,
          summarizes the stories that matter, tracks YouTube news, and delivers
          personalized briefings in one elegant experience.
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <Button
            size="lg"
            className="h-12 rounded-full px-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            nativeButton={false}
            render={<a href="#cta" />}
          >
            Start Reading Free
            <ArrowRight className="ml-1 size-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-7 transition-all duration-300 hover:-translate-y-0.5"
            nativeButton={false}
            render={<a href="#how-it-works" />}
          >
            See How It Works
          </Button>
        </div>

        {/* Trust Indicators */}
        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          style={{ animationDelay: "320ms" }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            AI-powered summaries
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            Trusted publishers
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            Updated every few minutes
          </div>
        </div>
      </div>
    </section>
  )
}