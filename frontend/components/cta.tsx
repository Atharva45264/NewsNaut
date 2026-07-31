import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-border bg-surface-tint px-6 py-16 text-center md:py-20">
        <h2 className="text-balance font-serif text-4xl font-medium tracking-tight md:text-5xl">
          Stay informed, not overwhelmed.
        </h2>
        <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          Join thousands of readers who start their day with a clearer picture
          of the world. Your first brief is ready in minutes.
        </p>

        <form
          className="mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          action="#"
        >
          <label htmlFor="cta-email" className="sr-only">
            Email address
          </label>
          <input
            id="cta-email"
            type="email"
            required
            placeholder="you@company.com"
            className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
          />
          <Button
            type="submit"
            size="lg"
            className="h-11 shrink-0 px-5 text-sm transition-transform hover:-translate-y-0.5"
          >
            Get started
            <ArrowRight className="size-4" />
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          Free forever plan. Upgrade anytime.
        </p>
      </Reveal>
    </section>
  )
}
