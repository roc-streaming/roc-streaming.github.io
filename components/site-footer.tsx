import { Radio } from "lucide-react"
import { GithubIcon } from "@/components/github-icon"

const COLUMNS = [
  {
    title: "Projects",
    links: ["Roc Toolkit", "rocd", "Roc Cast", "libroc"],
  },
  {
    title: "Bindings",
    links: ["roc-go", "roc-java", "roc-pulse", "roc-vad"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "GitHub", "Community"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                <Radio className="size-4.5" aria-hidden="true" />
              </span>
              <span className="font-mono text-sm font-semibold text-foreground">
                roc<span className="text-primary">/</span>streaming
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Open-source ecosystem for real-time audio over IP networks. Wi-Fi · LAN ·
              Internet · VLAN.
            </p>
            <a
              href="https://github.com/roc-streaming"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              github.com/roc-streaming
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
