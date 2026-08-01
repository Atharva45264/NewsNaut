'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/70 bg-background/80 shadow-md backdrop-blur-xl'
          : 'bg-background/40 backdrop-blur-lg'
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#top"
          className="group flex shrink-0 items-center transition-all duration-300 hover:opacity-95"
        >
          <Logo
            priority
            className="
              h-16
              w-auto
              object-contain
              transition-all
              duration-500
              group-hover:scale-[1.03]
            "
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-[15px] font-medium text-muted-foreground transition-all duration-300 hover:text-primary"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-4">

          <Button
            variant="ghost"
            size="sm"
            className="hidden rounded-full px-5 text-sm lg:flex"
            nativeButton={false}
            render={<a href="/sign-in" />}
          >
            Sign In
          </Button>

          <Button
            size="sm"
            className="rounded-full px-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            nativeButton={false}
            render={<a href="/sign-up" />}
          >
            Get Started
          </Button>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

        </div>
      </div>
    </header>
  )
}