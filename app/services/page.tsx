import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesSections } from "@/components/services-sections"

export const metadata = {
  title: "Services — Roc Streaming",
  description:
    "Commercial Audio over IP software built on Roc Toolkit, rocd, and Roc Cast. Turn-key systems, product integration, feature development, consulting, and prepaid support.",
}

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <ServicesSections />
      </main>
      <SiteFooter />
    </div>
  )
}
