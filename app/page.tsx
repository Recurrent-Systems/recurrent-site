import Image from "next/image";

const loopSteps = [
  {
    title: "Connect the evidence",
    description:
      "Unify geometric, inspection, production, and quality data so teams can see how the work is actually performing."
  },
  {
    title: "Reveal the signal",
    description:
      "Connect quality outcomes back to design intent, production variation, process behavior, and revision history."
  },
  {
    title: "Retain the knowledge",
    description:
      "Turn lessons learned into reusable manufacturing intelligence across programs, facilities, and production cycles."
  }
];

const forgeProblems = [
  "Manufacturing data fragmented across inspection systems, spreadsheets, and siloed processes",
  "Critical geometric insights trapped inside individual programs and workflows",
  "Traceability gaps that slow root cause analysis and corrective action",
  "Engineering and manufacturing teams repeatedly solving the same problems"
];

const forgeCapabilities = [
  {
    title: "Embedded AI",
    description:
      "Use natural language querying, multi-modal support automation, report generation, and document intelligence to make complex data easier to use."
  },
  {
    title: "3D Visualization",
    description:
      "View and query data with integrated CAD, compare datasets, and connect CAD directly to measurement plans in a single view."
  },
  {
    title: "Model Training Datasets",
    description:
      "Generate KPI datasets optimized for AI and data science queries while capturing trends, shifts, and process behavior over time."
  },
  {
    title: "Tolerance Management",
    description:
      "Create, update, and manage measurement plans, preserve revision history, and visualize tolerances directly on CAD."
  },
  {
    title: "Event-Driven Architecture",
    description:
      "Define rules for traceability, reports, alerts, triggers, and automated scheduling across production workflows."
  },
  {
    title: "Reusable Knowledge",
    description:
      "Consolidate isolated manufacturing information into organizational intelligence that improves future programs."
  }
];

const forgeData = [
  "Design intent",
  "Production variation",
  "Quality outcomes",
  "Geometric data",
  "Measurement plans",
  "Process behavior"
];

const advantages = [
  "Reduce engineering hours spent finding data, building studies, and generating reports",
  "Shorten rework cycles and reduce fit issues, scrap, and tedious manual tasks",
  "Use objective quality evidence with suppliers, customers, and internal teams",
  "Build a compounding empirical database that improves future programs"
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
                src="/logo-contrast.webp"
                alt="Recurrent Systems logo"
                width={330}
                height={100}
                className="h-auto w-48 sm:w-64"
                priority
              />
            </div>
            <div className="hidden text-right text-xs uppercase tracking-[0.4em] text-mist/70 sm:block">
              Industrial Software
            </div>
          </header>

          <div className="grid flex-1 items-center gap-16 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-glow">
                Closing the feedback loop
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
                Recurrent Systems builds industrial software that turns manufacturing data into intelligence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Our flagship platform, Forge, interconnects design intent,
                production variation, and quality outcomes into a unified
                feedback loop for industrial manufacturers.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:sam@recurrentsystems.com"
                  className="rounded-full bg-signal px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#2663b6]"
                >
                  Start a conversation
                </a>
                <a
                  href="#forge"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-mist transition hover:border-mist/50 hover:bg-white/5"
                >
                  Explore Forge
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-[0.35em] text-mist/70">
                      Company Loop
                    </span>
                    <span className="text-xs text-mist/60">01 / 03</span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {loopSteps.map((item, index) => (
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
        id="forge"
        className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(11,23,48,0.96),_rgba(8,17,31,1))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-glow">
                Introducing Forge
              </p>
              <h2 className="mt-5 text-5xl font-semibold tracking-normal text-white sm:text-6xl">
                Industrial manufacturing intelligence for the full production loop.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  Forge is Recurrent Systems&apos; industrial manufacturing
                  intelligence platform. It connects design intent, production
                  variation, and quality outcomes so manufacturers can identify
                  process-driven defects earlier, isolate root causes faster,
                  and improve manufacturability at scale.
                </p>
                <p>
                  The platform unifies geometric and quality data across design,
                  manufacturing, and quality teams by streamlining disconnected
                  systems and workflows into one reusable intelligence layer.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {forgeProblems.map((problem) => (
                <div
                  key={problem}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-mist/60">
                    Friction
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] border border-sky-100/10 bg-[linear-gradient(135deg,rgba(137,174,232,0.12),rgba(17,36,63,0.18))] p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-glow">
              Data as a Strategic Asset
            </p>
            <p className="mt-4 max-w-4xl text-xl leading-9 text-slate-200">
              Forge helps manufacturing organizations unlock knowledge that is
              often difficult to retain, analyze, and apply across programs,
              facilities, and production cycles. Data becomes a source of truth
              for current decisions and a compounding advantage for future work.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-glow">
              Core Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Built for AI-assisted manufacturing intelligence.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {forgeCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {capability.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(8,17,31,1),_rgba(11,23,48,0.98))]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-glow">
                Forge Data
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
                The reusable asset behind better production decisions.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Forge consolidates isolated manufacturing information into a
                centralized platform. Every run can strengthen traceability,
                improve model training data, reveal trends and shifts, and
                preserve knowledge that would otherwise remain siloed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {forgeData.map((asset) => (
                <div
                  key={asset}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-mist"
                >
                  {asset}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <p
                key={advantage}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 text-base leading-7 text-slate-200"
              >
                {advantage}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(8,17,31,1),_rgba(11,23,48,0.98))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-glow">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
                Ready to close the loop?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                If your team is repeatedly solving the same inspection, quality,
                or manufacturability problems, let&apos;s talk about what Forge
                can connect.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-panel">
              <p className="max-w-xl text-lg leading-8 text-slate-200">
                Tell us where your quality data is getting stuck and what your
                teams need to learn from it. We&apos;ll start there.
              </p>

              <a
                href="mailto:sam@recurrentsystems.com?subject=Recurrent%20Systems%20Inquiry"
                className="mt-8 inline-flex items-center rounded-full bg-signal px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#2663b6]"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>&copy; 2026 Recurrent Systems. All rights reserved.</p>
          <p>Industrial software focused on closing the feedback loop.</p>
        </div>
      </footer>
    </main>
  );
}
