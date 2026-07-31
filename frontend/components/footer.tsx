import { Logo } from "@/components/logo";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Get Started", href: "#cta" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "News Feed", href: "#" },
      { label: "Bookmarks", href: "#" },
      { label: "AI Assistant", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">

          {/* Brand */}

          <div>

            <a
              href="#top"
              className="flex items-center gap-3"
            >
              <Logo className="h-9 w-9 text-primary" />

              <div>

                <h3 className="text-xl font-semibold tracking-tight">
                  NewsNaut
                </h3>

                <p className="text-sm text-muted-foreground">
                  AI-Powered News Platform
                </p>

              </div>

            </a>

            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              NewsNaut helps you stay informed with AI-powered summaries,
              intelligent search, organized categories, bookmarks, and a clean,
              distraction-free reading experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                AI Summaries
              </span>

              <span className="rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                Smart Search
              </span>

              <span className="rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                Real-Time News
              </span>

            </div>

          </div>

          {/* Links */}

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">

            {footerLinks.map((section) => (
              <div key={section.title}>

                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {section.title}
                </h4>

                <ul className="mt-5 space-y-3">

                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">

          <p>
            © {new Date().getFullYear()} NewsNaut. All rights reserved.
          </p>

          <p>
            Built with ❤️ to make news simpler, smarter and faster.
          </p>

        </div>

      </div>
    </footer>
  );
}