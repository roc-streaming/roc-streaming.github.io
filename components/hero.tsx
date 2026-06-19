import Image from "next/image"


export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-blueprint-fine opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[min(900px,90%)] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:py-24 lg:px-8">
        {/* Left: message + actions */}
        <div className="order-2 lg:order-1">
          <h1 className="font-mono font-bold tracking-tight text-balance text-foreground">
            <span className="block text-5xl leading-[1.05] sm:text-6xl lg:text-[4rem] text-primary text-glow">
              Roc Streaming
            </span>
            <span className="mt-3 block text-2xl font-semibold leading-snug text-foreground/80 sm:text-3xl lg:text-[1.75rem]">
              Open-source ecosystem for real-time Audio over IP
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Roc Streaming is an open audio backbone for real-time streaming over IP networks, built for controlled latency and resilience across wired, wireless, and wide-area networks.
          </p>



          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#get-in-touch"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Right: logo */}
        <div className="order-1 flex justify-center lg:order-2 lg:pl-4">
          <Image
            src="/images/big_logo.png"
            alt="Roc Streaming logo"
            width={728}
            height={540}
            priority
            className="h-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}
