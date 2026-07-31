import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <Reveal>

          <div className="overflow-hidden rounded-[40px] border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-primary/10 px-8 py-16 shadow-xl md:px-16 md:py-20">

            <div className="mx-auto max-w-3xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">

                <Sparkles className="h-4 w-4" />

                Get Started with NewsNaut

              </div>

              <h2 className="mt-8 font-serif text-4xl font-medium tracking-tight md:text-6xl">

                Stay informed.

                <br />

                <span className="text-primary">
                  Without the information overload.
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">

                Discover a smarter way to read the news with AI-powered
                summaries, intelligent search, bookmarks, and a distraction-free
                reading experience.

              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                <Button
                  size="lg"
                  className="h-12 rounded-full px-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  nativeButton={false}
                  render={<a href="/sign-up" />}
                >
                  Get Started

                  <ArrowRight className="ml-2 h-4 w-4" />

                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full px-8 transition-all duration-300 hover:-translate-y-1"
                  nativeButton={false}
                  render={<a href="/sign-in" />}
                >
                  Sign In
                </Button>

              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">

                <span>✓ Free to Start</span>

                <span>✓ AI Summaries</span>

                <span>✓ Smart Search</span>

                <span>✓ Bookmarks</span>

              </div>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}