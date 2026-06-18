import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionLabel } from "@/components/section-label"

export default function CommunityPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <section id="community" className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
            <SectionLabel index="02">Community</SectionLabel>
            <div className="mt-6 max-w-2xl">
              <h1 className="font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Community
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                Coming soon.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
