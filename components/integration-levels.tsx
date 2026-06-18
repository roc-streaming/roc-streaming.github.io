"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const ROWS = [
  { want: "Build custom network audio into an app", use: "Roc Toolkit" },
  { want: "Embed audio transport into a product", use: "Roc Toolkit / libroc" },
  { want: "Use Roc Streaming from Go", use: "roc-go" },
  { want: "Use Roc Streaming from Java / Kotlin", use: "roc-java" },
  { want: "Integrate with Linux desktop audio", use: "PipeWire integration / roc-pulse" },
  { want: "Integrate with macOS audio", use: "roc-vad" },
  { want: "Control streams and devices through an API", use: "RocD" },
  { want: "Build a headless audio node", use: "RocD + Roc Toolkit" },
  { want: "Use a product-like audio app", use: "Roc Cast" },
  { want: "Build a complete network audio product", use: "Roc Cast + RocD + Roc Toolkit" },
]

const COMPARE = [
  {
    name: "Plain TCP",
    note: "Reliable, but can add delay that is bad for real-time audio.",
    tone: "muted",
  },
  {
    name: "Plain UDP",
    note: "Low latency, but does not solve recovery, timing, jitter, or drift by itself.",
    tone: "muted",
  },
  {
    name: "Proprietary pro-audio",
    note: "Powerful on controlled infrastructure, but often closed or expensive.",
    tone: "muted",
  },
  {
    name: "Roc Streaming",
    note: "Open, embeddable, audio-focused transport for real-time audio over normal IP networks.",
    tone: "primary",
  },
]

export function IntegrationLevels() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="integration-levels" className="relative border-b border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="05">Integration levels</SectionLabel>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Choose the right component
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Pick a goal on the left to see which part of the ecosystem fits.             Reduce
            confusion between Roc Toolkit, RocD, Roc Cast, and integrations.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-background/60">
          <div className="grid grid-cols-[1fr] border-b border-border bg-secondary/60 px-5 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:grid-cols-[1.4fr_1fr]">
            <span>I want to…</span>
            <span className="hidden sm:block">Use</span>
          </div>
          <ul>
            {ROWS.map((row, i) => (
              <li key={row.want}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`grid w-full grid-cols-[1fr] items-center gap-1 px-5 py-3.5 text-left transition-colors sm:grid-cols-[1.4fr_1fr] ${
                    active === i ? "bg-primary/[0.07]" : "hover:bg-secondary/40"
                  } ${i !== ROWS.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    <ChevronRight
                      className={`size-4 shrink-0 transition-colors ${
                        active === i ? "text-primary" : "text-muted-foreground/40"
                      }`}
                      aria-hidden="true"
                    />
                    {row.want}
                  </span>
                  <span
                    className={`pl-6 font-mono text-sm sm:pl-0 ${
                      active === i ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {row.use}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Optional transport comparison */}
        <div className="mt-12">
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            How it compares
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {COMPARE.map((c) => (
              <div
                key={c.name}
                className={`rounded-lg border p-5 ${
                  c.tone === "primary"
                    ? "border-primary/40 bg-primary/[0.07]"
                    : "border-border bg-card/50"
                }`}
              >
                <p
                  className={`font-mono text-sm font-semibold ${
                    c.tone === "primary" ? "text-primary" : "text-foreground"
                  }`}
                >
                  {c.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
