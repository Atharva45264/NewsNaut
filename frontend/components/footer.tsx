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

<div className="space-y-4">

  <a
    href="#top"
    className="inline-flex transition-all duration-300 hover:opacity-90"
  >
    <Logo
      className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
    />
  </a>

  <p className="max-w-sm text-sm leading-7 text-muted-foreground">
    Stay informed with AI-powered news aggregation, intelligent summaries,
    trusted journalism, and a distraction-free reading experience.
  </p>

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