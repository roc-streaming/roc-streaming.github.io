import { ArrowRight, Activity, ShieldCheck, Clock } from "lucide-react"
import { GithubIcon } from "@/components/github-icon"
import { IpAudioDiagram } from "@/components/ip-audio-diagram"

const PROOF = [
  { icon: Clock, label: "Latency down to 10 ms" },
  { icon: ShieldCheck, label: "Packet-loss recovery" },
  { icon: Activity, label: "Sub-ms synchronization" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-blueprint-fine opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[min(900px,90%)] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:py-24 lg:px-8">
        {/* Left: message + actions */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary node-pulse" />
            open-source ecosystem
          </div>

          <h1 className="font-mono text-4xl font-bold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.4rem]">
            Open IP audio backbone for{" "}
            <span className="text-primary text-glow">real-time streaming</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Roc Streaming is an open-source ecosystem for real-time audio over IP
            networks — engineered for controlled latency, packet-loss recovery, and
            clock drift handling on the networks you already have.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {PROOF.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-1.5 font-mono text-xs text-foreground"
              >
                <Icon className="size-3.5 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              id="get-started"
              href="#integration-levels"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/roc-streaming"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/50 px-5 py-3 font-mono text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              <GithubIcon className="size-4" />
              View GitHub
            </a>
          </div>
        </div>

        {/* Right: diagram */}
        <div className="lg:pl-4">
          <IpAudioDiagram />
        </div>
      </div>
    </section>
  )
}
