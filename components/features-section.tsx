import {
  Waves,
  Gauge,
  ShieldCheck,
  Timer,
  SlidersHorizontal,
  Network,
  Package,
  Boxes,
  Server,
  MonitorSmartphone,
} from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const FEATURES = [
  {
    icon: Waves,
    title: "Real-time audio over IP",
    body: "Audio between apps, computers, embedded devices, speakers, rooms, or locations.",
  },
  {
    icon: Gauge,
    title: "Low latency",
    body: "Designed for real-time and near-real-time audio where delay matters.",
  },
  {
    icon: ShieldCheck,
    title: "Packet-loss recovery",
    body: "Forward Error Correction helps survive Wi-Fi packet loss and imperfect networks.",
  },
  {
    icon: Timer,
    title: "Clock drift handling",
    body: "Adaptive sample-rate conversion keeps independent devices aligned over time.",
  },
  {
    icon: SlidersHorizontal,
    title: "Adaptive or fixed latency",
    body: "Tune latency depending on network conditions and use-case requirements.",
  },
  {
    icon: Network,
    title: "Multiple network types",
    body: "Use Wi-Fi, LAN, Internet, or managed VLAN deployments.",
  },
  {
    icon: Package,
    title: "Embeddable library",
    body: "Use libroc inside applications, devices, and products.",
  },
  {
    icon: Boxes,
    title: "Open ecosystem",
    body: "Avoid vendor lock-in and interoperate with Roc-compatible components.",
  },
  {
    icon: Server,
    title: "Control layer",
    body: "Use RocD to manage peers, endpoints, streams, devices, routes, metrics, and events.",
  },
  {
    icon: MonitorSmartphone,
    title: "User-facing layer",
    body: "Use Roc Cast to expose speakers, devices, streams, and routes through a UI.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="05">Features</SectionLabel>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Built on a specialized audio core
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            At the core of Roc Streaming is Roc Toolkit, the specialized transport
            foundation behind its real-time audio capabilities.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 bg-card">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="group relative bg-card p-6 transition-colors hover:bg-secondary"
            >
              <span
                className="absolute right-4 top-4 font-mono text-[10px] text-muted-foreground/40"
                aria-hidden="true"
              >
                {"//"}
              </span>
              <span className="grid size-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-mono text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
