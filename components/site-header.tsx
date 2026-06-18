"use client"

import { useState } from "react"
import { Menu, X, Radio } from "lucide-react"
import { GithubIcon } from "@/components/github-icon"

const NAV = [
  { label: "Intro", href: "#top" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Community", href: "#community" },
  { label: "Commercial Services", href: "#commercial-services" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
            <Radio className="size-4.5" aria-hidden="true" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            Roc Streaming
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/roc-streaming"
            className="flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-md border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <a
                href="https://github.com/roc-streaming"
                className="flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2.5 font-mono text-sm text-foreground"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
