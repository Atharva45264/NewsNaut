import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { DashboardPreview } from '@/components/dashboard-preview'
import { HowItWorks } from '@/components/how-it-works'
import { Sources } from '@/components/sources'
import { Pricing } from '@/components/pricing'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
        <HowItWorks />
        <Sources />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
