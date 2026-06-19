import { Layers, Server, MonitorSmartphone, ExternalLink, Construction } from "lucide-react"

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
    "RTP/RTCP/XR/FECFRAME over UDP",
    "FEC-based packet-loss recovery",
    "Adaptive clocking / ASRC",
    "Adaptive latency with strict bounds",
    "Audio codecs",
    "C library",
    "Bindings (Rust, Go, Java)",
  ]
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
            <StatusDot tone="live" label="used in production" />
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
            <ProjectButton href="/toolkit/docs" primary>
              Toolkit docs
            </ProjectButton>
            <ProjectButton href="https://github.com/roc-streaming/roc-toolkit">GitHub</ProjectButton>
          </div>
        </div>

        {/* diagram */}
        <div className="flex items-center justify-start lg:justify-center">
          <img
            src="/roc-toolkit.svg"
            alt="Roc Toolkit architecture diagram"
            className="w-full max-w-[520px]"
          />
        </div>
      </div>
    </article>
  )
}

/* ---- RocD ---- */
function Rocd() {
  const highlights = [
    "REST API",
    "Ready to deploy",
    "Auto-discovery",
    "Distributed orchestration",
    "Virtual audio devices",
    "Metrics and events",
  ]

  return (
    <article id="rocd" className="border-b border-border bg-card/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:py-20 lg:px-8">
        {/* diagram */}
        <div className="order-2 flex items-center justify-start overflow-hidden lg:order-1 lg:justify-center">
          <img
            src="/rocd.svg"
            alt="RocD distributed network diagram"
            className="w-full max-w-[520px]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg border border-amber/40 bg-amber/10 text-amber">
              <Server className="size-6" aria-hidden="true" />
            </span>
            <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">RocD</h2>
            <StatusDot tone="wip" label="work in progress" />
          </div>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed text-pretty">
            Streaming daemon with REST API. RocD instances form a distributed network of
            audio devices across different computers, connected with network streams. API
            user orchestrates devices and streams uniformely no matter where in the
            network they&apos;re located.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-amber/30 bg-amber/[0.07] px-3 py-1.5 font-mono text-xs text-amber">
            <Construction className="size-3.5 shrink-0" aria-hidden="true" />
            Under development.
          </p>
          <div className="mt-7">
            <Highlights items={highlights} accent="var(--amber)" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ProjectButton href="/rocd/docs" primary>
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
    "Cross-platform (desktop and mobile)",
    "Remote control",
    "Manage devices, speakers, and routes",
    "Zone-oriented UI",
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
            <StatusDot tone="wip" label="work in progress" />
          </div>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed text-pretty">
            The user-facing Audio over IP solution. Roc Cast provides source selection,
            room and zone control, and multi-device playback for multi-room, zoned audio,
            and remote audio workflows.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-signal/30 bg-signal/[0.07] px-3 py-1.5 font-mono text-xs text-signal">
            <Construction className="size-3.5 shrink-0" aria-hidden="true" />
            Under development.
          </p>
          <div className="mt-7">
            <Highlights items={highlights} accent="var(--signal)" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ProjectButton href="https://github.com/roc-streaming/roc-droid">GitHub</ProjectButton>
          </div>
        </div>

        {/* diagram */}
        <div className="flex items-center justify-start lg:justify-center">
          <img
            src="/roc-cast.svg"
            alt="Roc Cast multi-room audio diagram"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </article>
  )
}

function EcosystemHero() {
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Ecosystem
        </p>
        <h1 className="mt-3 font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
          Projects &amp; components
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed text-pretty">
          Roc Streaming is an open ecosystem of libraries, services, and applications.
          Each layer is independently usable — pick the one that fits your use case.
        </p>
      </div>
    </section>
  )
}

export function ProjectSections() {
  return (
    <>
      <EcosystemHero />
      <RocToolkit />
      <Rocd />
      <RocCast />
    </>
  )
}
