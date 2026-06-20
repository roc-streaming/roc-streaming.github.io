import {
  ArrowUpRight,
  Blocks,
  GitBranch,
  Puzzle,
  Clock,
  MessageSquare,
  Mail,
} from "lucide-react"
import { SectionLabel } from "@/components/section-label"

/* ══════════════════════════════════
   Hero
═══════════════════════════════════ */
function ServicesHero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-blueprint-fine opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[min(900px,90%)] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Services
        </p>
        <h1 className="mt-3 max-w-2xl font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
          Commercial audio software built on Roc Streaming
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed text-pretty">
          We design and build commercial network-audio solutions using Roc Toolkit,
          RocD, Roc Cast, and custom engineering. From product integration to full
          turn-key systems, we help teams build Audio over IP capabilities that are
          difficult to achieve from scratch.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:contact@roc-streaming.org"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Discuss a project
            <Mail className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card/50 px-5 py-3 font-mono text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   01  Positioning
═══════════════════════════════════ */
function Positioning() {
  return (
    <section id="approach" className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <SectionLabel index="01">Approach</SectionLabel>
        <h2 className="mt-4 max-w-xl font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          Open-source foundation. Professional software delivery.
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground leading-relaxed text-pretty">
          <p>
            Roc Streaming provides the open-source building blocks for real-time Audio
            over IP. Commercial projects often need more than a library integration:
            product-specific behavior, platform support, custom control flows,
            integration, and long-term maintenance.
          </p>
          <p>
            We help companies build those systems using the Roc Streaming ecosystem as
            a foundation.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   02  Services
═══════════════════════════════════ */

const SERVICES = [
  {
    icon: Blocks,
    title: "Turn-key and custom Roc-based solutions",
    text: "Complete Audio over IP systems built around Roc Toolkit, RocD, Roc Cast, or custom components.",
    accent: "primary" as const,
  },
  {
    icon: GitBranch,
    title: "Feature development",
    text: "Fund new Roc Streaming features or improvements needed by your product.",
    accent: "signal" as const,
  },
  {
    icon: Puzzle,
    title: "Product integration",
    text: "Add Roc Streaming to an existing application, embedded product, audio device, desktop app, or service architecture.",
    accent: "signal" as const,
  },
  {
    icon: Clock,
    title: "Prepaid support hours",
    text: "Reserve engineering time for debugging, integration support, architecture review, performance tuning, maintenance, or release assistance.",
    accent: "signal" as const,
  },
  {
    icon: MessageSquare,
    title: "Technical consulting",
    text: "Get expert guidance on Audio over IP architecture and Roc Streaming ecosystem.",
    accent: "signal" as const,
  },
]

function ServicesGrid() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <SectionLabel index="02">Services</SectionLabel>
        <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          Our services
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed text-pretty">
          Choose a ready engagement model, or bring a custom Audio over IP problem.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map(({ icon: Icon, accent, title, text }) => (
            <article
              key={title}
              className={`group flex flex-col rounded-xl border p-6 transition-colors ${
                accent === "primary"
                  ? "border-primary/30 bg-primary/[0.05] hover:border-primary/50"
                  : "border-border bg-card/50 hover:border-primary/40"
              }`}
            >
              <span
                className={`grid size-10 place-items-center rounded-lg border transition-transform group-hover:scale-110 ${
                  accent === "primary"
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-primary/30 bg-primary/10 text-primary"
                }`}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-mono text-base font-semibold text-balance text-foreground">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   03  Example projects
═══════════════════════════════════ */

const EXAMPLE_PROJECTS = [
  {
    title: "Zoned commercial audio",
    text: "Centralized audio distribution for offices, retail, hospitality, gyms, venues, or public spaces using standard IP infrastructure and commodity endpoints.",
  },
  {
    title: "Online jamming platform",
    text: "A low-latency real-time collaboration platform for musicians, using Roc-based transport as part of a custom commercial system.",
  },
  {
    title: "Distributed playback synchronization",
    text: "A custom solution for synchronized playback across multiple independent network receivers, tuned for precise timing and resilience to network jitter.",
  },
]

function ExampleProjects() {
  return (
    <section id="example-projects" className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <SectionLabel index="03">Example projects</SectionLabel>
        <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          Example projects
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed text-pretty">
          Roc Streaming has been used as a foundation for custom commercial systems,
          not only as a library dependency.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {EXAMPLE_PROJECTS.map(({ title, text }) => (
            <article
              key={title}
              className="flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-mono text-base font-semibold text-balance text-foreground">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   04  Final CTA
═══════════════════════════════════ */
function FinalCTA() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="absolute inset-0 bg-blueprint-fine opacity-40" aria-hidden="true" />
        <div className="relative">
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="mt-4 max-w-xl font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Have a network-audio project in mind?
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-muted-foreground leading-relaxed text-pretty">
            <p>
              You do not need a complete specification to start. Bring a product idea,
              integration problem, deployment scenario, or missing Roc Streaming feature.
            </p>
            <p>
              Tell us what you are building. We can help shape the architecture, choose
              the right Roc components, and suggest a practical path forward.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="mailto:contact@roc-streaming.org"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact us
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Export
═══════════════════════════════════ */
export function ServicesSections() {
  return (
    <>
      <ServicesHero />
      <Positioning />
      <ServicesGrid />
      <ExampleProjects />
      <FinalCTA />
    </>
  )
}
