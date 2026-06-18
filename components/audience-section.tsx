import { Code2, Cpu, Building2, RadioTower, Boxes } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const AUDIENCES = [
  {
    icon: Code2,
    title: "Application developers",
    body: "Add real-time audio transport to apps without building the network audio layer yourself.",
  },
  {
    icon: Cpu,
    title: "Embedded & product teams",
    body: "Build speakers, receivers, streamers, soundbars, and audio appliances on top of an open transport core.",
  },
  {
    icon: Building2,
    title: "System integrators",
    body: "Deploy zoned audio across offices, retail, hospitality, schools, gyms, venues, and other shared spaces.",
  },
  {
    icon: RadioTower,
    title: "Remote audio workflows",
    body: "Send audio between rooms, sites, or locations for monitoring, IFB, rehearsal, collaboration, and inter-site workflows.",
  },
  {
    icon: Boxes,
    title: "Open-source & DIY users",
    body: "Build custom multi-room setups or connect Roc to Linux, macOS, Android, and community-built audio systems.",
  },
]

export function AudienceSection() {
  return (
    <section id="who" className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="03">Who it is for</SectionLabel>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            For apps, devices, and audio systems
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Roc Streaming is for people who need to move audio between software,
            devices, rooms, or locations over ordinary IP networks, without
            relying on a proprietary transport stack.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <article
              key={a.title}
              className="flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <span className="grid size-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <a.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-mono text-base font-semibold text-foreground text-balance">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                {a.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
