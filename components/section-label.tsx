import { cn } from "@/lib/utils"

export function SectionLabel({
  index,
  children,
  className,
}: {
  index: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-3 font-mono text-xs", className)}>
      <span className="rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-primary">
        {index}
      </span>
      <span className="uppercase tracking-[0.2em] text-muted-foreground">{children}</span>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
