import Image from "next/image"
import { Mail, MessageCircle, MessageSquare } from "lucide-react"
import { GithubIcon } from "@/components/github-icon"

const PAGES = [
  { label: "Intro", href: "/" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Community", href: "/community" },
  { label: "Sponsorship", href: "/sponsors" },
  { label: "Services", href: "/services" },
]

const PROJECTS = [
  {
    label: "Roc Toolkit",
    github: "https://github.com/roc-streaming/roc-toolkit/",
    docs: "/toolkit/docs",
  },
  {
    label: "RocD",
    github: "https://github.com/roc-streaming/rocd/",
    docs: "/rocd/docs",
  },
  {
    label: "Roc Cast",
    github: "https://github.com/roc-streaming/roc-droid/",
    docs: "/cast/docs",
  },
]

const CONTACTS = [
  {
    label: "contact@roc-streaming.org",
    href: "mailto:contact@roc-streaming.org",
    icon: Mail,
  },
  {
    label: "#roc-streaming:matrix.org",
    href: "https://matrix.to/#/#roc-streaming:matrix.org",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Web forum",
    href: "https://github.com/roc-streaming/roc-toolkit/discussions",
    icon: MessageSquare,
    external: true,
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/square_icon.png"
                alt="Roc Streaming logo"
                width={32}
                height={32}
                className="size-8"
              />
              <span className="font-mono text-sm font-semibold text-foreground">
                Roc Streaming
              </span>
            </div>
            <a
              href="https://github.com/roc-streaming"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              github.com/roc-streaming
            </a>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Pages
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PAGES.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Projects
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PROJECTS.map((p) => (
                <li key={p.label}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.label}
                    </span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] text-muted-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                    >
                      GitHub
                    </a>
                    <a
                      href={p.docs}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] text-muted-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                    >
                      Docs
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Contacts
            </h3>
            <ul className="mt-4 space-y-2.5">
              {CONTACTS.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <p.icon className="size-3.5 shrink-0" aria-hidden="true" />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 font-mono text-xs text-muted-foreground text-center">
          <p>© Roc Streaming · CC BY-SA 4.0</p>
        </div>
      </div>
    </footer>
  )
}
