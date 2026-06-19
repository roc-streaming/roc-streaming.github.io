import { Layers, Users, Briefcase, ArrowUpRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const CARDS = [
  {
    icon: Layers,
    accent: "signal" as const,
    title: "Explore the ecosystem",
    text: "Learn how Roc Toolkit, RocD, Roc Cast, bindings, and OS integrations fit together, and choose the right entry point for your use case.",
    cta: "Ecosystem",
    href: "/ecosystem",
  },
  {
    icon: Users,
    accent: "signal" as const,
    title: "Join the community",
    text: "Read the docs, explore the code, ask questions, report issues, and contribute to the open-source projects.",
    cta: "Community",
    href: "/community",
  },
  {
    icon: Briefcase,
    accent: "primary" as const,
    title: "Professional services",
    text: "Work with the Roc Streaming team on custom solutions, product integration, consulting, and feature development on request.",
    cta: "Services",
    href: "/professional-services",
  },
]

export function GetInTouch() {
  return (
    <section id="get-in-touch" className="relative border-b border-border bg-card/20">
      <div className="absolute inset-0 bg-blueprint-fine opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="05">Start here</SectionLabel>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Start with Roc Streaming
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Learn how the ecosystem fits together, join the open-source community, or
            work with the Roc Streaming team on professional services.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {CARDS.map(({ icon: Icon, accent, title, text, cta, href }) => (
            <article
              key={title}
              className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <span
                className={`grid size-10 place-items-center rounded-lg border transition-transform group-hover:scale-110 ${accent === "signal"
                    ? "border-signal/40 bg-signal/10 text-signal"
                    : "border-primary/40 bg-primary/10 text-primary"
                  }`}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-mono text-base font-semibold text-foreground text-balance">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <div className="mt-6">
                <a
                  href={href}
                  className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 font-mono text-sm font-semibold transition-opacity hover:opacity-90 ${accent === "signal"
                      ? "bg-signal text-signal-foreground"
                      : "bg-primary text-primary-foreground"
                    }`}
                >
                  {cta}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
