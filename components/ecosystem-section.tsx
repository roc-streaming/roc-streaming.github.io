import { ChevronsUpDown, Plug, Speaker, Unlock } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const OPEN_CARDS = [
  {
    icon: Unlock,
    title: "Open and embeddable",
    body: "Fully open source, vendor-neutral, and licensed under commercial-friendly MPL-2.0 license.",
  },
  {
    icon: ChevronsUpDown,
    title: "Choose your layer",
    body: "Choose the layer that matches your needs: application, service, or library.",
  },
  {
    icon: Plug,
    title: "Works with your stack",
    body: "Use Roc from C, C++, Rust, Go, Java, or through RocD\u2019s HTTP API.",
  },
  {
    icon: Speaker,
    title: "OS audio integration",
    body: "Connect Roc to existing audio systems through OS audio stacks or virtual devices.",
  },
]

export function EcosystemSection() {
  return (
    <section id="open-ecosystem" className="relative border-b border-border bg-card/20">
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <SectionLabel index="03">Open ecosystem</SectionLabel>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Layered, fully open ecosystem
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Roc Streaming lets you choose the right level of control: use Roc Cast
            as a ready-to-use application, RocD as a deployable audio service, or
            Roc Toolkit as the foundation for fully custom real-time audio systems.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12">
          {/* Four open-ecosystem cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {OPEN_CARDS.map((card) => (
              <article
                key={card.title}
                className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-mono text-base font-semibold text-foreground text-balance">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>

          {/* Layered stack diagram */}
          <div className="flex items-center justify-center rounded-xl border border-border bg-background/60 bg-blueprint p-3">
            <img
              src="/images/ecosystem_layers.svg"
              alt="Ecosystem layers diagram showing Roc Cast, RocD, and Roc Toolkit stacked from top to bottom"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
