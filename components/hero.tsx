import { ArrowRight } from "lucide-react"
import { GithubIcon } from "@/components/github-icon"
import { IpAudioDiagram } from "@/components/ip-audio-diagram"



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
            Open-source ecosystem for real-time{" "}
            <span className="text-primary text-glow">Audio over IP</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Roc Streaming is an open audio backbone for real-time streaming over IP networks, built for controlled latency and resilience across wired, wireless, and wide-area networks.
          </p>



          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
