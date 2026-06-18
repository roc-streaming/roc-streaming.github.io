import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AudienceSection } from "@/components/audience-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { FeaturesSection } from "@/components/features-section"
import { GetInTouch } from "@/components/get-in-touch"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <AudienceSection />
        <EcosystemSection />
        <FeaturesSection />
        <GetInTouch />
      </main>
      <SiteFooter />
    </div>
  )
}
