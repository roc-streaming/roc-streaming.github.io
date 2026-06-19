import Image from "next/image"
import { GithubIcon } from "@/components/github-icon"

const PAGES = [
  { label: "Intro", href: "/" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Community", href: "/community" },
  { label: "Sponsorship", href: "/sponsors" },
  { label: "Professional Services", href: "/professional-services" },
]

const PROJECTS = [
  { label: "Roc Toolkit", href: "https://github.com/roc-streaming/roc-toolkit/" },
  { label: "RocD", href: "https://github.com/roc-streaming/rocd/" },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
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
                    className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
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
                  <a
                    href={p.href}
                    className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Roc Streaming · MPL-2.0</p>
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary node-pulse" aria-hidden="true" />
            real-time audio over IP
          </p>
        </div>
      </div>
    </footer>
  )
}
