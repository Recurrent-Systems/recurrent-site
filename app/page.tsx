import Image from "next/image";

const principles = [
  {
    title: "Observe in real time",
    description:
      "Capture the operating state of equipment, workflows, and production systems without waiting on stale reporting cycles."
  },
  {
    title: "Decide with context",
    description:
      "Turn raw signals into usable operational insight so teams can respond with confidence, not guesswork."
  },
  {
    title: "Act and learn",
    description:
      "Push improvements back into the process, measure the result, and keep the loop moving until output stabilizes."
  }
];

const capabilities = [
  "Industrial dashboards and operator visibility",
  "Data pipelines from plant floor to decision layer",
  "Workflow automation for recurring process control",
  "Closed-loop reporting that turns feedback into action"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <section className="relative isolate">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(137,174,232,0.32),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(29,79,145,0.3),_transparent_24%),linear-gradient(180deg,_#08111f_0%,_#0b1730_55%,_#08111f_100%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:54px_54px] opacity-30" />
        <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full border border-white/10 bg-[conic-gradient(from_180deg,_rgba(137,174,232,0.28),_rgba(29,79,145,0.04),_rgba(137,174,232,0.28))] blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-20 pt-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.webp"
                alt="Recurrent Systems logo"
                width={220}
                height={62}
                className="h-auto w-44 rounded-sm bg-white/95 p-2 shadow-panel sm:w-56"
                priority
              />
            </div>
            <div className="hidden text-right text-xs uppercase tracking-[0.4em] text-mist/70 sm:block">
              Industrial Software
            </div>
          </header>

          <div className="grid flex-1 items-center gap-16 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-mist/80">
                Closing the feedback loop
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
                Software for industrial systems that need to respond, refine, and repeat.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Recurrent Systems builds industrial software that transforms
                operational feedback into continuous control. We help teams
                connect signals, decisions, and action so every cycle improves
                the next one.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:sam@recurrentsystems.com"
                  className="rounded-full bg-signal px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#2663b6]"
                >
                  Start a conversation
                </a>
                <a
                  href="#capabilities"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-mist transition hover:border-mist/50 hover:bg-white/5"
                >
                  Explore capabilities
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-[0.35em] text-mist/70">
                      Loop Sequence
                    </span>
                    <span className="text-xs text-mist/60">01 / 03</span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {principles.map((item, index) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-ink/40 p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sky-200/30 bg-signal/20 text-sm font-semibold text-mist">
                            0{index + 1}
                          </div>
                          <div>
                            <h2 className="text-lg font-semibold text-white">
                              {item.title}
                            </h2>
                            <p className="mt-2 text-sm leading-7 text-slate-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(11,23,48,0.96),_rgba(8,17,31,1))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-glow">
                What we build
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[0.06em] text-white sm:text-4xl">
                Purpose-built systems for industrial teams that need tighter feedback.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-mist/60">
                    Capability
                  </div>
                  <p className="mt-4 text-lg leading-8 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] border border-sky-100/10 bg-[linear-gradient(135deg,rgba(137,174,232,0.12),rgba(17,36,63,0.18))] p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-glow">
                  Operating idea
                </p>
                <p className="mt-4 max-w-3xl text-xl leading-9 text-slate-200">
                  The best industrial software does more than monitor. It
                  senses, informs, and improves the system it supports.
                  Recurrent Systems is built around that loop.
                </p>
              </div>
              <a
                href="mailto:sam@recurrentsystems.com"
                className="inline-flex items-center rounded-full border border-glow/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/5"
              >
                Contact Recurrent
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
