'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#product' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Sources', href: '#sources' },
  { label: 'Reviews', href: '#reviews' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/70 bg-background/80 shadow-sm backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Logo className="size-6 text-primary" />
          <span className="text-lg font-semibold tracking-tight">
            NewsNaut
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden rounded-full px-5 text-sm font-medium lg:inline-flex"
            nativeButton={false}
            render={<a href="#cta" />}
          >
            Sign in
          </Button>

          <Button
            size="sm"
            className="rounded-full px-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            nativeButton={false}
            render={<a href="#cta" />}
          >
            Get Started
          </Button>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}