import { Layers, Users, Briefcase, ArrowUpRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const CARDS = [
  {
    icon: Layers,
    accent: "primary" as const,
    title: "Explore the ecosystem",
    text: "Understand the layers of Roc Streaming — Roc Toolkit, RocD, Roc Cast, bindings, and OS integrations — and choose the right starting point for your use case.",
    cta: "View ecosystem",
    href: "/ecosystem",
  },
  {
    icon: Users,
    accent: "primary" as const,
    title: "Join the community",
    text: "Use the open-source projects, read the docs, explore the code, ask questions, report issues, and contribute improvements.",
    cta: "Community",
    href: "/community",
  },
  {
    icon: Briefcase,
    accent: "signal" as const,
    title: "Commercial services",
    text: "Work with the Roc Streaming team on custom development, open-source improvements, product integration, technical support, or consulting.",
    cta: "Explore services",
    href: "/commercial-services",
  },
]

export function GetInTouch() {
  return (
    <section id="get-in-touch" className="relative border-b border-border bg-card/20">
      <div className="absolute inset-0 bg-blueprint-fine opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="05">Start here</SectionLabel>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Start with Roc Streaming
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Learn how the ecosystem fits together, join the open-source community, or
            work with the Roc Streaming team on commercial services.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {CARDS.map(({ icon: Icon, accent, title, text, cta, href }) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-xl border p-8 ${
                accent === "signal"
                  ? "border-border bg-card/60"
                  : "border-primary/30 bg-primary/[0.05]"
              }`}
            >
              <span
                className={`grid size-12 place-items-center rounded-lg border ${
                  accent === "signal"
                    ? "border-signal/40 bg-signal/10 text-signal"
                    : "border-primary/40 bg-primary/10 text-primary"
                }`}
              >
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-mono text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
              <div className="mt-7">
                <a
                  href={href}
                  className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 font-mono text-sm font-semibold transition-opacity hover:opacity-90 ${
                    accent === "signal"
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
