import { SiteHeader } from "@/components/site-header"
<<<<<<< HEAD
import { SiteFooter } from "@/components/site-footer"
import { ProjectSections } from "@/components/project-sections"
import { SectionLabel } from "@/components/section-label"
=======
import { ProjectSections } from "@/components/project-sections"
import { SiteFooter } from "@/components/site-footer"
>>>>>>> 729375c (Rework pages per spec)

export default function EcosystemPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
<<<<<<< HEAD
        <section id="ecosystem" className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
            <SectionLabel index="01">Ecosystem</SectionLabel>
            <div className="mt-6 max-w-2xl">
              <h1 className="font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Choose the layer you need
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                Roc Streaming is organized as a layered ecosystem. Choose the components that fit your use case.
              </p>
            </div>
          </div>
        </section>
=======
>>>>>>> 729375c (Rework pages per spec)
        <ProjectSections />
      </main>
      <SiteFooter />
    </div>
  )
}
