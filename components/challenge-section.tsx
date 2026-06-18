import { SectionLabel } from "@/components/section-label"

const CABLE_PROPS = [
  { label: "Predictable latency" },
  { label: "Stable signal" },
  { label: "Direct connection" },
]

const NETWORK_PROPS = [
  { label: "Jitter" },
  { label: "Packet loss" },
  { label: "Clock drift" },
]

const ROC_PROPS = [
  { label: "Cable-like latency" },
  { label: "Stable audio quality" },
  { label: "Resilient transport" },
  { label: "Wi-Fi · LAN · Internet" },
]

export function ChallengeSection() {
  return (
    <section id="the-challenge" className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="01">The challenge</SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: text */}
          <div>
            <h2 className="font-mono text-4xl font-bold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl">
              Make network audio feel like a cable
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-pretty">
              <p>
                Sending audio over Wi-Fi, LAN, or the Internet is easy.
                Making it feel like a direct cable between audio devices is not.
              </p>
              <p>
                A cable gives you predictable latency, stable quality, and no
                audible dropouts. A network gives you jitter, packet loss, clock
                drift, changing routes, and devices that all run on slightly
                different clocks.
              </p>
              <p>
                Roc Streaming is an implementation of real-time audio transport
                designed to close that gap: controlled latency, loss recovery,
                clock handling, and synchronization over standard IP networks.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Key properties">
              {ROC_PROPS.map(({ label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-1.5 font-mono text-xs text-foreground"
                >
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: cable vs network contrast diagram */}
          <div className="flex flex-col gap-4">
            {/* Cable */}
            <div className="rounded-xl border border-border bg-card/50 p-5">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                Cable
              </div>
              <ul className="space-y-2">
                {CABLE_PROPS.map(({ label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10 font-mono text-[10px] text-primary">
                      ✓
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Network */}
            <div className="rounded-xl border border-border bg-card/50 p-5">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                Network (without Roc)
              </div>
              <ul className="space-y-2">
                {NETWORK_PROPS.map(({ label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded border border-destructive/30 bg-destructive/10 font-mono text-[10px] text-destructive">
                      ✗
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Roc layer */}
            <div className="rounded-xl border border-primary/30 bg-primary/[0.05] p-5">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-primary/70">
                Roc Streaming
              </div>
              <ul className="space-y-2">
                {ROC_PROPS.map(({ label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10 font-mono text-[10px] text-primary">
                      ✓
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
