import { Users, Briefcase, ArrowUpRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

export function GetInTouch() {
  return (
    <section id="get-in-touch" className="relative border-b border-border bg-card/20">
      <div className="absolute inset-0 bg-blueprint-fine opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="08">Get in touch</SectionLabel>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Two ways to work with Roc Streaming
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Community adoption for open-source builders, and commercial services for
            teams that need implementation support.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Community */}
          <article className="group relative overflow-hidden rounded-xl border border-primary/30 bg-primary/[0.05] p-8">
            <span className="grid size-12 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
              <Users className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-mono text-xl font-bold text-foreground">Community</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Use the open-source projects, read the documentation, explore the code,
              ask questions, report issues, and contribute improvements.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              <span className="text-primary">good for:</span> developers evaluating Roc
              Streaming, open-source users, DIY audio projects, contributors,
              self-guided integrations.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Documentation", "GitHub", "Community"].map((b, i) => (
                <a
                  key={b}
                  href="#"
                  className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 font-mono text-sm font-semibold transition-opacity hover:opacity-90 ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background/50 text-foreground hover:border-primary/50"
                  }`}
                >
                  {b}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>

          {/* Commercial */}
          <article className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-8">
            <span className="grid size-12 place-items-center rounded-lg border border-signal/40 bg-signal/10 text-signal">
              <Briefcase className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-mono text-xl font-bold text-foreground">
              Commercial services
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Get help with architecture, integration, product design, embedded
              deployment, custom development, debugging, or production adoption.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              <span className="text-signal">good for:</span> companies building audio
              products, OEMs, system integrators, commercial installations, teams that
              need implementation support.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Contact", "Commercial services"].map((b, i) => (
                <a
                  key={b}
                  href="#"
                  className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 font-mono text-sm font-semibold transition-opacity hover:opacity-90 ${
                    i === 0
                      ? "bg-signal text-signal-foreground"
                      : "border border-border bg-background/50 text-foreground hover:border-signal/50"
                  }`}
                >
                  {b}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
