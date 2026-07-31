import { Logo } from '@/components/logo'

const columns = [
  {
    heading: 'Product',
    links: ['Features', 'Sources', 'Pricing', 'Changelog'],
  },
  {
    heading: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'API', 'Help center', 'Status'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies', 'Editorial policy'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2" aria-label="NewsNaut home">
              <Logo className="size-6 text-primary" />
              <span className="text-base font-semibold tracking-tight">
                NewsNaut
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Intelligent news, distilled. The signal, without the noise.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-medium tracking-tight">
                {column.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NewsNaut, Inc. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made for readers who value their time.
          </p>
        </div>
      </div>
    </footer>
  )
}
