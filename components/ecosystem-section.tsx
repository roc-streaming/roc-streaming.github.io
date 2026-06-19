import { MonitorSmartphone, Server, Layers, ArrowDown, ChevronsUpDown, Plug, Speaker, Unlock } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const LAYERS = [
  {
    id: "cast",
    name: "Roc Cast",
    role: "Ready-to-use application",
    icon: MonitorSmartphone,
    accent: "var(--signal)",
  },
  {
    id: "rocd",
    name: "RocD",
    role: "Deployable service integrated via REST API",
    icon: Server,
    accent: "var(--amber)",
  },
  {
    id: "toolkit",
    name: "Roc Toolkit",
    role: "Foundation libraries for custom audio solutions",
    icon: Layers,
    accent: "var(--primary)",
  },
]

const OPEN_CARDS = [
  {
    icon: Unlock,
    title: "Open and embeddable",
    body: "Fully open source, vendor-neutral, and licensed under commercial-friendly MPL-2.0 license.",
  },
  {
    icon: ChevronsUpDown,
    title: "Choose your layer",
    body: "Choose the layer that matches your needs: application, service, or library.",
  },
  {
    icon: Plug,
    title: "Works with your stack",
    body: "Use Roc from C, C++, Rust, Go, Java, or through RocD\u2019s HTTP API.",
  },
  {
    icon: Speaker,
    title: "OS audio integration",
    body: "Connect Roc to existing audio systems through OS audio stacks or virtual devices.",
  },
]

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative border-b border-border bg-card/20">
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="04">Open ecosystem</SectionLabel>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Layered, open ecosystem
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Roc Streaming lets you choose the right level of control: use Roc Cast
            as a ready-to-use application, RocD as a deployable audio service, or
            Roc Toolkit as the foundation for fully custom real-time audio systems.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Layered stack diagram */}
          <div className="rounded-xl border border-border bg-background/60 bg-blueprint p-5 sm:p-8">
            <ol className="space-y-0">
              {LAYERS.map((layer, i) => (
                <li key={layer.id}>
                  <div
                    className="flex items-center gap-4 rounded-lg border bg-card/70 p-4 transition-transform hover:translate-x-1"
                    style={{ borderColor: `color-mix(in oklch, ${layer.accent} 40%, transparent)` }}
                  >
                    <span
                      className="grid size-11 shrink-0 place-items-center rounded-lg border"
                      style={{
                        borderColor: `color-mix(in oklch, ${layer.accent} 45%, transparent)`,
                        backgroundColor: `color-mix(in oklch, ${layer.accent} 12%, transparent)`,
                        color: layer.accent,
                      }}
                    >
                      <layer.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-base font-semibold text-foreground">{layer.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{layer.role}</p>
                    </div>
                  </div>
                  {i < LAYERS.length - 1 && (
                    <div className="flex items-center gap-2 py-1.5 pl-9">
                      <ArrowDown className="size-4 text-primary" aria-hidden="true" />
                      <span className="h-4 w-px bg-gradient-to-b from-primary/60 to-transparent" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Four open-ecosystem cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {OPEN_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-background/60 p-5"
              >
                <span className="grid size-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <card.icon className="size-4.5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-mono text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
