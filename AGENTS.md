AI agent instructions
=====================

Intro
-----

* Website: https://roc-streaming.org/
* GitHub organization: https://github.com/roc-streaming

Roc Streaming is an open-source network audio ecosystem for real-time Audio over IP.

The project focuses on making audio over Wi-Fi, LAN, VLAN, and the Internet behave closer to a direct cable connection: low and controlled latency, stable playback, packet-loss recovery, clock handling, and synchronization over standard IP networks.

Roc Streaming is not a single application. It is a layered ecosystem that can be used at different integration levels:

* library/toolkit level for application and product developers;
* daemon/control-plane level for managed deployments;
* application level for end-user audio workflows;
* OS integration level through virtual devices and sound-server modules;
* language binding level for integrations from different software stacks.

Projects
--------

### Roc Toolkit

Repository: https://github.com/roc-streaming/roc-toolkit
Docs: https://roc-streaming.org/toolkit/docs

Roc Toolkit is the core real-time audio transport engine. It provides libraries, command-line tools, and the low-level networking/audio pipeline used by other parts of the ecosystem.

### RocD

Repository: https://github.com/roc-streaming/rocd
Docs: https://roc-streaming.org/rocd/docs/

RocD is the daemon and control-plane layer for Roc Streaming.

It manages peers, endpoints, streams, audio devices, virtual devices, and higher-level orchestration through an API.

### Roc Cast

Repository: https://github.com/roc-streaming/roc-cast
Docs: https://roc-streaming.org/cast/docs/

Roc Cast is end-user application layer built on top of Roc Streaming components. It handles user-facing audio workflows such as multi-room playback, zoned audio, and source-to-room routing.

### roc-vad

Repository: https://github.com/roc-streaming/roc-vad

macOS virtual audio device for Roc Toolkit. Use this when discussing macOS integration, virtual audio devices, or routing system audio into Roc.

RocD uses this project to create virtual audio devices on macOS.

### roc-pulse

Repository: https://github.com/roc-streaming/roc-pulse

PulseAudio modules for Roc Toolkit. Use this when discussing PulseAudio integration or Linux desktop/server audio workflows based on PulseAudio.

RocD uses this project to create virtual audio devices on Linux/PulseAudio.

### PipeWire integration

PipeWire modules are for Roc are part of PipeWire upstream. They are similar to PulseAudio modules.

RocD uses them to create virtual audio devices on Linux/PipeWire.

Writing style
-------------

- Be concise. Use simple, direct language. Avoid verbose descriptions, unnecessary adjectives and adverbs.
- Focus on clarity. Make your message easy to understand.
- Keep the tone technical, clear, and grounded.
- Avoid exaggerated marketing claims. Don't use hype or promotional words.
- Write for developers. Mix professional jargon or work terms with casual explanations.
- Don't introduce vague terms. Instead of "Configuration management system", prefer "Load and apply configuration".

Example of good style:
> The module can:
> 1. Detect connected devices
> 2. Load configuration from environment
> 3. Collect source files and run code generators

Example of bad style:
> The module provides a comprehensive set of helper components:
> - Device Detection Component — Responsible for the identification and management of connected hardware assets.
> - Configuration Management System — Handles the orchestration of environment-based configuration processes.
> - ...

Website structure
-----------------

This is a Next.js static website using the App Router.

Main route files live under `app/`:

* `/` (`app/page.tsx`): homepage with the hero, network-audio problem statement, target audiences, ecosystem overview, feature summary, and contact call-to-action.
* `/ecosystem` (`app/ecosystem/page.tsx`): project/ecosystem page describing Roc Toolkit, RocD, Roc Cast, OS integrations, and bindings.
* `/community` (`app/community/page.tsx`): community page with forum, mailing list, Matrix chat, contribution, and support links.
* `/sponsors` (`app/sponsors/page.tsx`): sponsorship page for companies, donors, and sponsored development.
* `/services` (`app/services/page.tsx`): commercial services page covering turn-key systems, product integration, feature development, consulting, and prepaid support.

Shared website code:

* `app/layout.tsx`: global metadata, fonts, analytics, and root HTML/body layout.
* `app/globals.css`: global styles and Tailwind CSS setup.
* `components/`: reusable page sections and site chrome such as header, footer, hero, ecosystem, community, services, and sponsors sections.
* `components/ui/`: small reusable UI primitives.
* `lib/`: shared utilities.
* `public/`: static assets served from the website root.

Website building
----------------

Always use Pixi as the entry point. It provides the expected versions of all build tools including Node.js.

Common commands:

* `pixi run serve`: run the local development server via `task serve` and `pnpm dev`
* `pixi run build`: build the full static website and generated project docs via `task build`
* `pixi run clean`: remove generated build artifacts via `task clean`

`build` command includes:

- building static version on Next.js website
- building static html for documentation (roc-toolkit, rocd, roc-cast)
- merging everything together into `dist/` folder
