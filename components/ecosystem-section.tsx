import { MonitorSmartphone, Server, Layers, ArrowDown } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const LAYERS = [
  {
    id: "cast",
    name: "Roc Cast",
    role: "User-facing application",
    detail: "Speakers, devices, routes",
    icon: MonitorSmartphone,
    accent: "var(--signal)",
  },
  {
    id: "rocd",
    name: "rocd",
    role: "Daemon & control API",
    detail: "Peers, streams, devices",
    icon: Server,
    accent: "var(--amber)",
  },
  {
    id: "toolkit",
    name: "Roc Toolkit",
    role: "Real-time transport library",
    detail: "RTP, FEC, latency, clocks",
    icon: Layers,
    accent: "var(--primary)",
  },
]

const INTEGRATIONS = [
  "roc-go",
  "roc-java",
  "Rust bindings",
  "PipeWire",
  "roc-pulse",
  "roc-vad (macOS)",
  "Android / Roc Cast",
  "libroc (C ABI)",
]

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative border-b border-border bg-card/20">
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="03">Open ecosystem</SectionLabel>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            A layered ecosystem, not a single project
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Roc Cast sits on rocd, which builds on Roc Toolkit. Around the stack, a
            growing set of bindings and OS integrations keep everything interoperable
            and free of a closed vendor-only stack.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Layered stack diagram */}
          <div className="rounded-xl border border-border bg-background/60 bg-blueprint p-5 sm:p-8">
            <div className="mb-5 flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>// stack.layers</span>
              <span>top → down</span>
            </div>
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
                      <p className="font-mono text-[11px] text-muted-foreground/70">{layer.detail}</p>
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

          {/* Integrations */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl border border-border bg-background/60 p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                Side integrations
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Bindings and OS integrations branch off the stack so existing systems
                can plug in directly.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {INTEGRATIONS.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1.5 font-mono text-xs text-foreground/80"
                  >
                    <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/[0.06] p-6">
              <h3 className="font-mono text-sm font-semibold text-primary">
                Interoperable by design
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                  Open-source community and reusable integrations
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                  Interoperability between Roc-compatible apps, devices, and products
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                  No closed vendor-only stack
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
