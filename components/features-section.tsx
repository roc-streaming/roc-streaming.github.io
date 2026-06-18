import React from "react"
import {
  Music,
  Timer,
  ShieldCheck,
  SlidersHorizontal,
  Cpu,
  Globe,
} from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const FEATURES: { icon: React.ElementType; title: string; body: React.ReactNode }[] = [
  {
    icon: Music,
    title: "High-quality audio",
    body: (
      <>
        Streaming of CD- and HD-quality audio, from uncompressed PCM to <b>lossless</b> or <b>lossy</b> codecs.
      </>
    ),
  },
  {
    icon: Timer,
    title: "Controlled latency",
    body: (
      <>
        End-to-end latency down to <b>10 milliseconds</b>, with strict latency bounds and adaptive tuning for changing networks.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Loss recovery",
    body: (
      <>
        Recovering of lost packets without quality drop using <b>Forward Erasure Correction</b> codes or masking losses with <b>Packet Loss Concealment</b> algorithms.
      </>
    ),
  },
  {
    icon: SlidersHorizontal,
    title: "Adaptive by default",
    body: (
      <>
        Uses <b>sensible defaults and adaptive algorithms</b> for typical networks, with low-level controls available when your use case needs precise tuning.
      </>
    ),
  },
  {
    icon: Cpu,
    title: "Portable and fast",
    body: (
      <>
        Efficient lightweight core designed for real-time. Portable across OSes and CPUs, including <b>embedded, desktop, and mobile</b> platforms.
      </>
    ),
  },
  {
    icon: Globe,
    title: "Open standards",
    body: (
      <>
        Built on the foundation of open <b>Internet standards</b>, proven over time and validated by numerous applications.
      </>
    ),
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="05">Audio core</SectionLabel>
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
