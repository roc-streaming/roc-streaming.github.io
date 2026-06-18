import { Code2, Cpu, Building2, RadioTower, Boxes } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const AUDIENCES = [
  {
    icon: Code2,
    title: "Application developers",
    useCase: "Add real-time audio transport to an application.",
    why: [
      "Handles packetization, buffering, loss recovery, clock sync, and latency management",
      "Provides libroc and language bindings",
      "Uses RTP/RTCP over UDP",
    ],
    components: ["Roc Toolkit", "RocD"],
  },
  {
    icon: Cpu,
    title: "Embedded & product developers",
    useCase: "Build speakers, soundbars, receivers, streamers, or audio appliances.",
    why: [
      "Embeddable C library",
      "MPL-2.0 licensing",
      "No per-device transport licensing",
      "Avoids building a proprietary AoIP stack",
    ],
    components: ["Roc Toolkit", "RocD"],
  },
  {
    icon: Building2,
    title: "System integrators",
    useCase: "Deploy zoned audio in offices, retail, hospitality, schools, gyms, and venues.",
    why: [
      "Works on standard IP infrastructure",
      "Supports LAN/VLAN deployments",
      "Can use commodity endpoints",
      "Suitable for central distribution and zone playback",
    ],
    components: ["Roc Toolkit", "RocD", "Roc Cast"],
  },
  {
    icon: RadioTower,
    title: "Broadcast & remote production",
    useCase: "Send audio between locations for monitoring, IFB, rehearsal, or inter-site workflows.",
    why: [
      "Works over LAN or Internet",
      "Higher target latency for unstable links",
      "Uses standard UDP, optionally over VPN",
      "No proprietary relay infrastructure required",
    ],
    components: ["Roc Toolkit", "RocD", "Roc Cast"],
  },
  {
    icon: Boxes,
    title: "Open-source & DIY users",
    useCase: "Build custom multi-room setups or integrate Linux/macOS/Android audio systems.",
    why: [
      "Open-source ecosystem",
      "Existing OS integrations",
      "Works with community-built devices",
      "Avoids vendor lock-in",
    ],
    components: ["Roc Toolkit", "RocD", "Roc Cast"],
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
            Concrete scenarios — who it is for, what they want to build, why Roc
            Streaming fits, and which components are relevant.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <a.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-mono text-base font-semibold text-foreground text-balance">
                  {a.title}
                </h3>
              </div>

              <p className="mt-4 text-sm font-medium text-foreground/90">{a.useCase}</p>

              <ul className="mt-4 flex-1 space-y-2">
                {a.why.map((w) => (
                  <li key={w} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {a.components.map((c) => (
                  <span
                    key={c}
                    className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-foreground/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
