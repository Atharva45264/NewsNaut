import { Quote, Star, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    quote:
      "NewsNaut replaced my morning routine of checking six different websites. I now get everything that matters in under ten minutes.",
    name: "Sarah Johnson",
    role: "Product Manager",
  },
  {
    quote:
      "The AI summaries are surprisingly balanced, and I love that every brief links back to the original reporting.",
    name: "Michael Chen",
    role: "Technology Consultant",
  },
  {
    quote:
      "Finally, a news app that focuses on clarity instead of endless scrolling. It's become part of my daily workflow.",
    name: "Emily Carter",
    role: "Research Analyst",
  },
]

const stats = [
  {
    value: "12K+",
    label: "Early Readers",
  },
  {
    value: "4.9/5",
    label: "Average Rating",
  },
  {
    value: "40K+",
    label: "Trusted Sources",
  },
]

export function Pricing() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
            <Users className="h-4 w-4" />
            Loved by Readers
          </span>

          <h2 className="mt-6 font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Trusted by people who
            <br />
            value quality journalism.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Thousands of readers use NewsNaut every day to stay informed without
            the noise, distractions, or endless scrolling.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={120}>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border/70 bg-card p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl font-semibold text-primary">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 120}>
              <div className="group h-full rounded-3xl border border-border/70 bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                <Quote className="h-8 w-8 text-primary/30 transition-transform duration-300 group-hover:scale-110" />

                <p className="mt-6 leading-8 text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <h4 className="font-semibold">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Quote */}
        <Reveal delay={500}>
          <div className="mt-20 rounded-3xl border border-primary/10 bg-primary/5 p-10 text-center">
            <h3 className="font-serif text-3xl font-medium tracking-tight">
              The fastest way to understand whats happening in the world 
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              NewsNaut combines trusted journalism with AI to help you spend
              less time searching and more time understanding.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}