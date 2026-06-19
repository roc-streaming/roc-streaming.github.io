"use client"

import {
  MessageSquare,
  Mail,
  Hash,
  GitPullRequest,
  Heart,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react"
import { SectionLabel } from "@/components/section-label"

/* ─── Shared external-link button ─── */
function LinkButton({
  href,
  children,
  primary,
}: {
  href: string
  children: React.ReactNode
  primary?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 font-mono text-sm font-semibold transition-opacity hover:opacity-90 ${
        primary
          ? "bg-primary text-primary-foreground"
          : "border border-border bg-card/50 text-foreground hover:border-primary/50"
      }`}
    >
      {children}
      <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
    </a>
  )
}

/* ─── Inline code chip ─── */
function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs text-foreground">
      {children}
    </code>
  )
}

/* ─── Tag list ─── */
function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span
          key={t}
          className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

/* ══════════════════════════════════
   01  Community channels
═══════════════════════════════════ */
function JoinDiscussion() {
  return (
    <section id="join-discussion" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <SectionLabel index="01">Community channels</SectionLabel>
        <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          Join discussion
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Mailing list */}
          <article className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-shadow hover:shadow-md">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-mono text-base font-semibold text-foreground">Mailing list</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A classic mailing list for technical discussions and announcements.
            </p>
            <div className="mt-3">
              <p className="font-mono text-xs font-semibold text-foreground">Address</p>
              <Code>roc@freelists.org</Code>
            </div>
            <div className="mt-auto pt-6 flex flex-wrap items-end gap-3">
              <LinkButton href="https://www.freelists.org/list/roc" primary>
                Subscribe
              </LinkButton>
              <LinkButton href="https://www.freelists.org/archive/roc/">
                List archive
              </LinkButton>
            </div>
          </article>

          {/* Forum */}
          <article className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-shadow hover:shadow-md">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <MessageSquare className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-mono text-base font-semibold text-foreground">Forum</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              A web forum for questions, ideas, and longer discussions. It works directly in the browser.
            </p>
            <div className="mt-6 flex flex-wrap items-end gap-3">
              <LinkButton href="https://github.com/roc-streaming/roc-toolkit/discussions" primary>
                Open forum
              </LinkButton>
            </div>
          </article>

          {/* Chat */}
          <article className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-shadow hover:shadow-md">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <Hash className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-mono text-base font-semibold text-foreground">Chat</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              For interactive discussion and quick questions. Hosted on Matrix — open in a browser or install a client.
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <div>
                <p className="font-mono text-xs font-semibold text-foreground">User chat</p>
                <Code>#roc-streaming:matrix.org</Code>
              </div>
              <div>
                <p className="font-mono text-xs font-semibold text-foreground">Developer chat</p>
                <Code>#roc-streaming-dev:matrix.org</Code>
              </div>
            </div>
            <div className="mt-auto pt-6 flex flex-wrap items-end gap-3">
              <LinkButton href="https://matrix.to/#/#roc-streaming:matrix.org" primary>
                User chat
              </LinkButton>
              <LinkButton href="https://matrix.to/#/#roc-streaming-dev:matrix.org">
                Dev chat
              </LinkButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   02  Contribute
═══════════════════════════════════ */

type RepoLink = { label: string; href: string; bold?: boolean }

const REPOS: Array<{
  id: string
  name: string
  description: string
  tags: string[]
  links: RepoLink[]
}> = [
  {
    id: "roc-toolkit",
    name: "Roc Toolkit",
    description:
      "Core real-time audio transport library and command-line tools.",
    tags: ["C++", "Rust", "Go", "Java", "Real-time", "Networking", "Audio"],
    links: [
      { label: "Repository", href: "https://github.com/roc-streaming/roc-toolkit" },
      {
        label: "Help-wanted",
        href: "https://github.com/roc-streaming/roc-toolkit/issues?q=is%3Aissue+state%3Aopen+label%3A%22help+wanted%22",
      },
      {
        label: "Contributor guide",
        href: "https://roc-streaming.org/toolkit/docs/development/contribution_guidelines.html",
        bold: true,
      },
      { label: "Documentation", href: "https://roc-streaming.org/toolkit/docs/" },
    ],
  },
  {
    id: "rocd",
    name: "RocD",
    description:
      "Streaming daemon and control API for managing audio endpoints, streams, devices, and routes.",
    tags: ["Rust", "REST API", "Distributed systems", "Orchestration"],
    links: [
      { label: "Repository", href: "https://github.com/roc-streaming/rocd" },
      {
        label: "Help-wanted",
        href: "https://github.com/roc-streaming/rocd/issues?q=is%3Aissue+state%3Aopen+label%3A%22help+wanted%22",
      },
      { label: "Documentation", href: "https://roc-streaming.org/rocd/docs/" },
    ],
  },
  {
    id: "roc-droid",
    name: "Roc Cast",
    description: "Cross-platform application for streaming audio with Roc Toolkit.",
    tags: ["Flutter", "Kotlin", "Swift", "Desktop", "Mobile"],
    links: [
      { label: "Repository", href: "https://github.com/roc-streaming/roc-droid" },
      {
        label: "Help-wanted",
        href: "https://github.com/roc-streaming/roc-droid/issues?q=is%3Aissue+state%3Aopen+label%3A%22help+wanted%22",
      },
      { label: "Documentation", href: "https://github.com/roc-streaming/roc-droid#readme" },
    ],
  },
  {
    id: "roc-vad",
    name: "Roc VAD",
    description: "Roc Toolkit Virtual Audio Device for macOS.",
    tags: ["C++", "macOS", "Virtual audio device"],
    links: [
      { label: "Repository", href: "https://github.com/roc-streaming/roc-vad" },
      {
        label: "Help-wanted",
        href: "https://github.com/roc-streaming/roc-vad/issues?q=is%3Aissue+state%3Aopen+label%3A%22help+wanted%22",
      },
      { label: "Documentation", href: "https://github.com/roc-streaming/roc-vad#readme" },
    ],
  },
]

function Contribute() {
  return (
    <section id="contribute" className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <SectionLabel index="02">Contribute</SectionLabel>
        <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          Contribute to Roc Streaming
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
          Roc Streaming welcomes contributions to core development, integrations,
          documentation, tests, examples, packaging, and infrastructure. Help-wanted
          tasks are marked in project repositories — a good place to start if you want
          to contribute but do not yet know where to begin.
        </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {REPOS.map((repo) => (
            <article
              key={repo.id}
              className="group flex flex-col rounded-xl border border-border bg-card/50 p-4 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <GitPullRequest className="size-4" aria-hidden="true" />
                </span>
                <h3 className="font-mono text-sm font-semibold text-foreground leading-snug">
                  {repo.name}
                </h3>
              </div>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                {repo.description}
              </p>
              <div className="mt-3">
                <Tags items={repo.tags} />
              </div>
              <ul className="mt-4 flex flex-col gap-1.5">
                {repo.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline${link.bold ? " font-bold" : ""}`}
                    >
                      <ArrowUpRight className="size-3 shrink-0" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   03  Donations
═══════════════════════════════════ */

const DONATION_PLATFORMS = [
  {
    name: "GitHub Sponsors",
    href: "https://github.com/sponsors/roc-streaming",
  },
  {
    name: "Open Collective",
    href: "https://opencollective.com/roc-streaming",
  },
  {
    name: "Liberapay",
    href: "https://liberapay.com/roc-streaming",
  },
]

function SupportProject() {
  return (
    <section id="support" className="border-b border-border">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <div className="absolute inset-0 bg-blueprint-fine opacity-40" aria-hidden="true" />
        <div className="relative">
          <SectionLabel index="03">Donations</SectionLabel>
          <div className="mt-6 max-w-2xl">
            <h2 className="font-mono text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Help keep Roc Streaming growing
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              A big part of Roc Streaming development is done by maintainers in their
              free time. Donations help us spend more time on the project, keep it
              growing, and buy hardware for testing.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              Donations are primarily used to sponsor development time and may be
              accumulated until there is a meaningful amount suitable for funding
              development for a few weeks or more. Companies and individuals can also
              sponsor development of a specific feature — sponsored work is documented
              publicly.
            </p>
          </div>

          <p className="mt-8 mb-8 font-mono text-base font-semibold text-amber text-pretty">
            {"Let's keep open-source audio moving forward!"}
          </p>

          <div className="flex flex-wrap gap-4">
            {DONATION_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/[0.05] px-6 py-4 font-mono text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10"
              >
                <Heart className="size-4 text-primary" aria-hidden="true" />
                {platform.name}
                <ExternalLink className="size-3.5 text-muted-foreground" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Page hero
═══════════════════════════════════ */
function CommunityHero() {
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Community
        </p>
        <h1 className="mt-3 max-w-lg font-mono text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
          Open development,<br className="hidden sm:block" /> together
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed text-pretty">
          Roc Streaming is an open-source project maintained through public development,
          community discussion, and user contributions.
        </p>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Export
═══════════���══���═���══════════════════ */
export function CommunitySections() {
  return (
    <>
      <CommunityHero />
      <JoinDiscussion />
      <Contribute />
      <SupportProject />
    </>
  )
}
