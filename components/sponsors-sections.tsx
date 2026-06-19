import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

/* ══════════════════════════════════
   Page hero
═══════════════════════════════════ */
function SponsorsHero() {
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Sponsors
        </p>
        <h1 className="mt-3 font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
          Sponsor Roc Streaming development
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed text-pretty">
          Companies and individuals fund the Roc Streaming work that matters most to
          them, helping prioritize features, platform support, maintenance, and testing.
        </p>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   01  Companies
═══════════════════════════════════ */

const CORPORATE_SPONSORS = [
  {
    name: "Boring Tech",
    href: "https://www.boring.tech/",
    logo: "/images/sponsors/boring_tech.png",
    logoWidth: 170,
    logoHeight: 125,
  },
]

function CorporateSponsors() {
  return (
    <section id="corporate-sponsors" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <SectionLabel index="01">Companies</SectionLabel>
        <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          Corporate sponsors
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
          We thank these organizations for sponsoring Roc Streaming development and
          choosing to be listed publicly.
        </p>

        <div className="mt-10 flex flex-wrap gap-6">
          {CORPORATE_SPONSORS.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-xl border border-border bg-card/50 px-8 py-6 transition-shadow hover:border-primary/40 hover:shadow-md"
              aria-label={sponsor.name}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={sponsor.logoWidth}
                height={sponsor.logoHeight}
                className="max-h-20 w-auto object-contain transition-opacity group-hover:opacity-80"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   02  Sponsored features
═══════════════════════════════════ */

const SPONSORED_FEATURES: {
  date: string
  release: string
  source: string
  sourceHref?: string
  feature: string
}[] = [
  {
    date: "Aug 2024",
    release: "0.5.0",
    source: "Undisclosed company",
    feature: "Adaptive latency support.",
  },
  {
    date: "Jun 2024",
    release: "0.5.0",
    source: "Undisclosed company",
    feature: "Simple PLC & support for registering custom PLC in C API.",
  },
  {
    date: "May 2024",
    release: "",
    source: "Donation by Sean McNamara",
    sourceHref: "https://github.com/allquixotic",
    feature: "Complete first release of macOS virtual audio device (roc-vad).",
  },
  {
    date: "May 2024",
    release: "0.4.0",
    source: "Undisclosed company",
    feature: "Support partial reads in pipeline elements.",
  },
  {
    date: "Apr 2024",
    release: "0.4.0",
    source: "Undisclosed company",
    feature: "Support reporting status codes in pipeline elements.",
  },
  {
    date: "Feb 2024",
    release: "0.4.0",
    source: "Undisclosed company",
    feature: "Sender-side latency tuning / clock-drift compensation.",
  },
  {
    date: "Dec 2023 – Jan 2024",
    release: "0.4.0",
    source: "Undisclosed company",
    feature: "Two-way RTCP reports. Sending feedback packets from receiver to sender.",
  },
  {
    date: "Oct 2023",
    release: "0.3.0",
    source: "Undisclosed company",
    feature: "SpeexDEC resampler for cheap clock drift compensation.",
  },
  {
    date: "Sep 2023",
    release: "0.3.0",
    source: "Undisclosed company",
    feature: "Implement end-to-end latency metrics.",
  },
  {
    date: "Aug 2023",
    release: "0.3.0",
    source: "Undisclosed company",
    feature: "Encoder / decoder API in the C API.",
  },
  {
    date: "Jul 2023",
    release: "0.3.0",
    source: "Undisclosed company",
    feature: "Support operating on lower latencies.",
  },
  {
    date: "Jul 2023",
    release: "0.3.0",
    source: "Undisclosed company",
    feature: "Support custom encodings in the C API.",
  },
  {
    date: "Jul 2022",
    release: "0.2.0",
    source: "Boring Tech",
    feature: "Various improvements in the C API.",
  },
  {
    date: "Jun 2022",
    release: "0.2.0",
    source: "Boring Tech",
    feature: "Implement partial RTCP support.",
  },
]

function SponsoredFeatures() {
  return (
    <section id="sponsored-features" className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <SectionLabel index="02">Sponsored features</SectionLabel>
        <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          Documented sponsored work
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
          Some Roc Streaming features were developed through direct sponsorship or
          donations. Sponsored work is documented publicly.
        </p>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/40">
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Date
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Release
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Source
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
              </tr>
            </thead>
            <tbody>
              {SPONSORED_FEATURES.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border last:border-0 ${
                    i % 2 === 0 ? "bg-background" : "bg-card/30"
                  }`}
                >
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-muted-foreground">
                    {row.date}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {row.release ? (
                      <span className="rounded border border-primary/30 bg-primary/[0.07] px-1.5 py-0.5 font-mono text-xs text-primary">
                        {row.release}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    {row.sourceHref ? (
                      <a
                        href={row.sourceHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {row.source}
                      </a>
                    ) : (
                      row.source
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                    {row.feature}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   03  Fund development
═══════════════════════════════════ */

const SPONSOR_CARDS = [
  {
    title: "Community support",
    description:
      "Individual donors and community members can support ongoing development through the Community page.",
    cta: "Community",
    href: "/community",
    accent: "signal" as const,
  },
  {
    title: "Corporate sponsorship",
    description:
      "Companies can sponsor Roc Streaming development, custom work, or specific features through Professional Services.",
    cta: "Services",
    href: "/services",
    accent: "primary" as const,
  },
]

function FundDevelopment() {
  return (
    <section id="fund-development" className="border-b border-border">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <div className="absolute inset-0 bg-blueprint-fine opacity-40" aria-hidden="true" />
        <div className="relative">
          <SectionLabel index="03">Become a sponsor</SectionLabel>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Fund Roc Streaming development
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SPONSOR_CARDS.map(({ title, description, cta, href, accent }) => (
              <article
                key={title}
                className={`group flex flex-col rounded-xl border p-6 transition-colors ${
                  accent === "primary"
                    ? "border-primary/30 bg-primary/[0.05] hover:border-primary/50"
                    : "border-border bg-card/50 hover:border-primary/40"
                }`}
              >
                <h3 className="font-mono text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <div className="mt-6">
                  <a
                    href={href}
                    className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 font-mono text-sm font-semibold transition-opacity hover:opacity-90 ${
                      accent === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-card/50 text-foreground hover:border-primary/50"
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
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Export
═══════════════════════════════════ */
export function SponsorsSections() {
  return (
    <>
      <SponsorsHero />
      <CorporateSponsors />
      <SponsoredFeatures />
      <FundDevelopment />
    </>
  )
}
