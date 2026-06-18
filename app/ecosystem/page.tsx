import { SiteHeader } from "@/components/site-header"
import { ProjectSections } from "@/components/project-sections"
import { SiteFooter } from "@/components/site-footer"

export default function EcosystemPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <ProjectSections />
      </main>
      <SiteFooter />
    </div>
  )
}
