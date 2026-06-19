import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CommunitySections } from "@/components/community-sections"

export const metadata = {
  title: "Community — Roc Streaming",
  description:
    "Join the Roc Streaming community: forum, mailing list, Matrix chat, open-source contributions, and ways to support the project.",
}

export default function CommunityPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <CommunitySections />
      </main>
      <SiteFooter />
    </div>
  )
}
