import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SponsorsSections } from "@/components/sponsors-sections"

export const metadata = {
  title: "Sponsors — Roc Streaming",
  description:
    "Companies, individual donors, and sponsored feature work supporting Roc Streaming development.",
}

export default function SponsorsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <SponsorsSections />
      </main>
      <SiteFooter />
    </div>
  )
}
