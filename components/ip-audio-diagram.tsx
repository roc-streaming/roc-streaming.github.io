import { Laptop, Smartphone, AudioLines, Speaker, Network } from "lucide-react"

/**
 * Hero illustration: audio sources -> IP network -> audio destinations.
 * Hand-drawn / blueprint feel with animated signal paths.
 */
export function IpAudioDiagram() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 bg-blueprint p-5 sm:p-7">
      {/* terminal chrome */}
      <div className="mb-5 flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-amber/70" />
        <span className="size-2.5 rounded-full bg-primary/70" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">signal_flow.svg</span>
      </div>

      <svg
        viewBox="0 0 520 340"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram showing phone, laptop, and audio interface sending audio over an IP network to speakers, soundbars, and multi-room setups"
      >
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="oklch(0.52 0.15 248)" />
          </marker>
        </defs>

        {/* Source group */}
        <g>
          <rect x="8" y="22" width="150" height="296" rx="10" fill="oklch(0.985 0.003 235)" stroke="oklch(0.55 0.03 240 / 0.3)" />
          <text x="83" y="44" textAnchor="middle" className="fill-[oklch(0.5_0.02_240)] font-mono" fontSize="10" letterSpacing="2">
            SOURCES
          </text>
        </g>

        {/* Destination group */}
        <g>
          <rect x="362" y="22" width="150" height="296" rx="10" fill="oklch(0.985 0.003 235)" stroke="oklch(0.55 0.03 240 / 0.3)" />
          <text x="437" y="44" textAnchor="middle" className="fill-[oklch(0.5_0.02_240)] font-mono" fontSize="10" letterSpacing="2">
            DESTINATIONS
          </text>
        </g>

        {/* Central IP network node */}
        <g>
          <circle cx="260" cy="170" r="52" fill="oklch(0.97 0.02 152)" stroke="oklch(0.52 0.14 152 / 0.7)" strokeWidth="1.5" />
          <circle cx="260" cy="170" r="52" className="node-pulse" fill="none" stroke="oklch(0.52 0.14 152 / 0.3)" strokeWidth="8" />
          <text x="260" y="166" textAnchor="middle" className="fill-[oklch(0.46_0.14_152)] font-mono" fontSize="12" fontWeight="700">
            IP NET
          </text>
          <text x="260" y="184" textAnchor="middle" className="fill-[oklch(0.5_0.02_240)] font-mono" fontSize="8">
            RTP / UDP
          </text>
        </g>

        {/* connecting signal paths source -> net */}
        {[78, 170, 262].map((y, i) => (
          <path
            key={`l-${i}`}
            d={`M158 ${y} C 200 ${y}, 210 170, 213 170`}
            fill="none"
            stroke="oklch(0.52 0.15 248 / 0.75)"
            strokeWidth="1.5"
            className="signal-dash"
          />
        ))}
        {/* net -> destination */}
        {[78, 170, 262].map((y, i) => (
          <path
            key={`r-${i}`}
            d={`M307 170 C 312 170, 320 ${y}, 362 ${y}`}
            fill="none"
            stroke="oklch(0.52 0.14 152 / 0.75)"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
            className="signal-dash-slow"
          />
        ))}

        {/* network label chips */}
        <text x="260" y="248" textAnchor="middle" className="fill-[oklch(0.5_0.02_240)] font-mono" fontSize="8">
          Wi-Fi · LAN · Internet · VLAN
        </text>
      </svg>

      {/* node icons overlaid for crispness */}
      <div className="pointer-events-none absolute inset-0">
        <DiagramIcon className="left-[6%] top-[24%]" label="Phone">
          <Smartphone className="size-4 text-signal" />
        </DiagramIcon>
        <DiagramIcon className="left-[6%] top-[50%]" label="Laptop">
          <Laptop className="size-4 text-signal" />
        </DiagramIcon>
        <DiagramIcon className="left-[6%] top-[76%]" label="Audio I/O">
          <AudioLines className="size-4 text-signal" />
        </DiagramIcon>
        <DiagramIcon className="right-[6%] top-[24%]" label="Speaker">
          <Speaker className="size-4 text-primary" />
        </DiagramIcon>
        <DiagramIcon className="right-[6%] top-[50%]" label="Soundbar">
          <Network className="size-4 text-primary" />
        </DiagramIcon>
        <DiagramIcon className="right-[6%] top-[76%]" label="Multi-room">
          <Speaker className="size-4 text-primary" />
        </DiagramIcon>
      </div>
    </div>
  )
}

function DiagramIcon({
  children,
  className,
  label,
}: {
  children: React.ReactNode
  className?: string
  label: string
}) {
  return (
    <div
      className={`absolute flex -translate-y-1/2 items-center gap-2 ${className ?? ""}`}
      title={label}
    >
      <span className="grid size-8 place-items-center rounded-md border border-border bg-background/90">
        {children}
      </span>
    </div>
  )
}
