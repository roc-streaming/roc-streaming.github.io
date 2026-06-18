import { Layers, Server, MonitorSmartphone, ArrowDown, ExternalLink } from "lucide-react"

function StatusDot({ tone, label }: { tone: "live" | "wip" | "planned"; label: string }) {
  const color =
    tone === "live" ? "bg-primary" : tone === "wip" ? "bg-amber" : "bg-signal"
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
      <span className={`size-1.5 rounded-full ${color} node-pulse`} aria-hidden="true" />
      {label}
    </span>
  )
}

function Highlights({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
      {items.map((h) => (
        <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span
            className="mt-1.5 size-1 shrink-0 rounded-full"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />
          {h}
        </li>
      ))}
    </ul>
  )
}

function ProjectButton({
  href,
  children,
  primary,
}: {
  href: string
  children: React.ReactNode
  primary?: boolean
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 font-mono text-sm font-semibold transition-opacity hover:opacity-90 ${
        primary
          ? "bg-primary text-primary-foreground"
          : "border border-border bg-card/50 text-foreground hover:border-primary/50"
      }`}
    >
      {children}
      <ExternalLink className="size-3.5" aria-hidden="true" />
    </a>
  )
}

/* ---- Roc Toolkit ---- */
function RocToolkit() {
  const highlights = [
    "Real-time audio over IP",
    "RTP/RTCP over UDP",
    "FEC-based packet-loss recovery",
    "Adaptive clocking / ASRC",
    "Adaptive or fixed latency",
    "C library / libroc",
    "Stable C ABI",
    "Go and Java bindings",
    "Audio format conversion",
    "CLI tools",
    "MPL-2.0 license",
    "Embeddable in proprietary products",
  ]
  const stack = ["Your application", "libroc / Roc Toolkit", "Audio I/O layer", "OS network stack / UDP"]

  return (
    <article id="roc-toolkit" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:py-20 lg:px-8">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
              <Layers className="size-6" aria-hidden="true" />
            </span>
            <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Roc Toolkit
            </h2>
            <StatusDot tone="live" label="stable / production" />
          </div>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed text-pretty">
            The core real-time audio transport library. It handles packetization, loss
            repair, clock synchronization, and latency management so applications and
            products do not have to.
          </p>
          <div className="mt-7">
            <Highlights items={highlights} accent="var(--primary)" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ProjectButton href="#" primary>
              Toolkit docs
            </ProjectButton>
            <ProjectButton href="https://github.com/roc-streaming/roc-toolkit">GitHub</ProjectButton>
          </div>
        </div>

        {/* mini visual */}
        <div className="rounded-xl border border-border bg-card/50 bg-blueprint p-6">
          <p className="mb-4 font-mono text-xs text-muted-foreground">// transport path</p>
          <div className="space-y-0">
            {stack.map((s, i) => (
              <div key={s}>
                <div
                  className={`rounded-lg border px-4 py-3 font-mono text-sm ${
                    i === 1
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border bg-background/60 text-foreground/80"
                  }`}
                >
                  {s}
                </div>
                {i < stack.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="size-4 text-muted-foreground" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

/* ---- RocD ---- */
function Rocd() {
  const highlights = [
    "REST API",
    "Peer management",
    "Endpoint management",
    "Stream management",
    "Device management",
    "Route control",
    "Virtual audio devices",
    "Metrics and events",
    "Headless operation",
    "Built around Roc Toolkit",
  ]

  return (
    <article id="rocd" className="border-b border-border bg-card/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:py-20 lg:px-8">
        {/* mini visual first on desktop */}
        <div className="order-2 rounded-xl border border-border bg-background/60 p-6 lg:order-1">
          <div className="mb-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>POST /api/rocd/v1/streams</span>
            <span className="text-amber">200 OK</span>
          </div>
          <pre className="overflow-x-auto rounded-lg border border-border bg-background p-4 font-mono text-xs leading-relaxed text-foreground/80">
{`{
  "peer": "studio-01",
  "endpoint": "rtp+rs8m://0.0.0.0:10001",
  "device": "virtual-out-3",
  "latency_ms": 60,
  "fec": "rs8m",
  "metrics": { "loss": 0.4, "jitter_ms": 2.1 }
}`}
          </pre>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
            {["peers", "streams", "devices"].map((m) => (
              <div key={m} className="rounded-md border border-border bg-secondary px-2 py-2 text-muted-foreground">
                {m}
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg border border-amber/40 bg-amber/10 text-amber">
              <Server className="size-6" aria-hidden="true" />
            </span>
            <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">RocD</h2>
            <StatusDot tone="wip" label="in progress" />
          </div>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed text-pretty">
            The daemon and control API for managing Roc Streaming systems. RocD is
            intended to expose peers, endpoints, streams, devices, routes, metrics, and
            events through a higher-level interface, while Roc Toolkit handles the
            real-time transport underneath.
          </p>
          <p className="mt-3 inline-flex rounded-md border border-amber/30 bg-amber/[0.07] px-3 py-1.5 font-mono text-xs text-amber">
            Status: RocD is in progress and not production-ready yet.
          </p>
          <div className="mt-7">
            <Highlights items={highlights} accent="var(--amber)" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ProjectButton href="#" primary>
              RocD docs
            </ProjectButton>
            <ProjectButton href="https://github.com/roc-streaming/rocd/">GitHub</ProjectButton>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ---- Roc Cast ---- */
function RocCast() {
  const highlights = [
    "User-facing network audio app",
    "Device and speaker management",
    "Stream and route control",
    "Room-oriented audio control",
    "Desktop / mobile UI direction",
    "Web UI for headless devices",
    "Built on RocD",
    "Uses Roc Toolkit underneath",
  ]

  return (
    <article id="roc-cast" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:py-20 lg:px-8">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg border border-signal/40 bg-signal/10 text-signal">
              <MonitorSmartphone className="size-6" aria-hidden="true" />
            </span>
            <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Roc Cast
            </h2>
            <StatusDot tone="planned" label="application layer" />
          </div>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed text-pretty">
            The user-facing application layer for controlling Roc Streaming devices and
            routes. It should expose speakers, devices, streams, rooms, and routes
            instead of low-level transport concepts.
          </p>
          <p className="mt-3 inline-flex rounded-md border border-signal/30 bg-signal/[0.07] px-3 py-1.5 font-mono text-xs text-signal">
            Status: the intended application layer built on top of RocD.
          </p>
          <div className="mt-7">
            <Highlights items={highlights} accent="var(--signal)" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ProjectButton href="#" primary>
              Roc Cast page
            </ProjectButton>
            <ProjectButton href="#">Follow development</ProjectButton>
          </div>
        </div>

        {/* mini visual: room/device UI mock */}
        <div className="rounded-xl border border-border bg-card/50 p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs text-muted-foreground">rooms</span>
            <span className="font-mono text-[11px] text-signal">3 active</span>
          </div>
          <div className="space-y-2.5">
            {[
              { room: "Living Room", dev: "Soundbar · multi-room", on: true },
              { room: "Studio", dev: "Audio I/O · IFB", on: true },
              { room: "Kitchen", dev: "Speaker", on: true },
              { room: "Office", dev: "Streamer", on: false },
            ].map((r) => (
              <div
                key={r.room}
                className="flex items-center justify-between rounded-lg border border-border bg-background/60 px-4 py-3"
              >
                <div>
                  <p className="font-mono text-sm text-foreground">{r.room}</p>
                  <p className="font-mono text-[11px] text-muted-foreground">{r.dev}</p>
                </div>
                <span
                  className={`relative h-5 w-9 rounded-full transition-colors ${
                    r.on ? "bg-signal/70" : "bg-secondary"
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className={`absolute top-0.5 size-4 rounded-full bg-background transition-all ${
                      r.on ? "left-4" : "left-0.5"
                    }`}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export function ProjectSections() {
  return (
    <>
      <RocToolkit />
      <Rocd />
      <RocCast />
    </>
  )
}
