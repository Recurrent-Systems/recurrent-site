import Image from "next/image";

const navLinks = [
  { label: "Platform", href: "#forge" },
  { label: "Contact", href: "#contact" }
];

const advantages = [
  {
    title: "Free up engineering hours",
    description: "Stop hunting for data and building reports by hand."
  },
  {
    title: "Cut scrap and rework",
    description: "Catch problems earlier, before they cost material and time."
  },
  {
    title: "Defensible quality",
    description: "Back every claim to customers, suppliers, and auditors with hard evidence."
  },
  {
    title: "A compounding advantage",
    description: "Every program builds on the data from the last."
  }
];

const container = "mx-auto max-w-7xl px-6 sm:px-10";
const eyebrow = "font-mono text-xs uppercase tracking-[0.3em] text-glow";

const inputs = [
  { x: 18, y: 21, label: "Design intent" },
  { x: 54, y: 54, label: "3D scans" },
  { x: 14, y: 87, label: "Inspection reports" },
  { x: 60, y: 120, label: "Repeatability" },
  { x: 20, y: 153, label: "CAD / tolerances" },
  { x: 24, y: 186, label: "Spreadsheets" }
];

const outcomeRows = [
  { y: 53, label: "Detect defects earlier" },
  { y: 87, label: "Determine root cause" },
  { y: 121, label: "Institutional knowledge" },
  { y: 155, label: "Enhanced traceability" }
];

function ConceptDiagram() {
  return (
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-panel sm:p-10">
      <svg
        viewBox="0 0 780 256"
        fill="none"
        role="img"
        aria-label="Scattered, siloed manufacturing data converging through Forge into measurable outcomes"
        className="h-auto w-full"
      >
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="7"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#89aee8" />
          </marker>
        </defs>

        {/* Left — scattered, siloed sources */}
        {inputs.map((s) => (
          <g key={s.label}>
            <line
              x1={s.x + 120}
              y1={s.y + 15}
              x2={330}
              y2={120}
              stroke="#89aee8"
              strokeOpacity={0.2}
              strokeWidth={1}
            />
            <rect
              x={s.x}
              y={s.y}
              width={120}
              height={30}
              rx={7}
              fill="#ffffff"
              fillOpacity={0.02}
              stroke="#ffffff"
              strokeOpacity={0.18}
              strokeDasharray="4 3"
            />
            <text x={s.x + 12} y={s.y + 19} fill="#d9e7fb" fillOpacity={0.55} fontSize={11}>
              {s.label}
            </text>
          </g>
        ))}
        <text x="88" y="236" textAnchor="middle" fill="#d9e7fb" fillOpacity={0.4} fontSize={12}>
          Scattered, siloed data
        </text>

        {/* Center — Forge */}
        <rect x="326" y="76" width="128" height="88" rx="18" fill="#022440" stroke="#89aee8" strokeWidth="1.5" strokeOpacity={0.55} />
        <text x="390" y="116" textAnchor="middle" fill="#ffffff" fontSize={21} fontWeight={700}>
          Forge
        </text>
        <text x="390" y="137" textAnchor="middle" fill="#d9e7fb" fillOpacity={0.75} fontSize={10}>
          connects &amp; unifies
        </text>

        {/* Forge → outcomes */}
        <line x1="460" y1="120" x2="528" y2="120" stroke="#89aee8" strokeWidth="2.5" markerEnd="url(#arrow)" />

        {/* Right — measurable outcomes */}
        <rect x="540" y="40" width="222" height="154" rx="16" fill="#ffffff" fillOpacity={0.02} stroke="#89aee8" strokeOpacity={0.35} />
        {outcomeRows.map((r) => (
          <g key={r.label}>
            <rect x={556} y={r.y} width={190} height={26} rx={8} fill="#ffffff" fillOpacity={0.04} stroke="#ffffff" strokeOpacity={0.08} />
            <circle cx={572} cy={r.y + 13} r={4} fill="#89aee8" />
            <text x={588} y={r.y + 17} fill="#d9e7fb" fontSize={12}>
              {r.label}
            </text>
          </g>
        ))}
        <text x="651" y="236" textAnchor="middle" fill="#d9e7fb" fillOpacity={0.4} fontSize={12}>
          Outputs
        </text>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-white">
      {/* Header + Hero */}
      <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,_#0a1424_0%,_#08111f_100%)]">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 sm:px-10">
          <header className="flex items-center justify-between py-7">
            <Image
              src="/logo-contrast.webp"
              alt="Recurrent Systems"
              width={330}
              height={100}
              className="h-auto w-40 sm:w-44"
              priority
            />
            <nav className="hidden gap-8 text-sm text-slate-400 sm:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center gap-14 py-12">
            <section className="flex flex-col items-center text-center">
            <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Connecting Design, Engineering, and Manufacturing
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-400">
              We build industrial software that helps manufacturers close the
              loop to turn their data into leverageable assets.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-signal px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2663b6]"
              >
                Start a conversation
              </a>
              <a
                href="#forge"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-mist transition hover:border-mist/50 hover:bg-white/5"
              >
                Explore Forge
              </a>
            </div>
            </section>
          </div>
        </div>
      </div>

      {/* Platform / Forge */}
      <section
        id="forge"
        className="border-t border-white/10 bg-[#0c1830] py-20"
      >
        <div className={container}>
          <p className={eyebrow}>Introducing Forge</p>
          <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            A manufacturing intelligence platform.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Our flagship product connects design intent, manufacturing, and
            quality outcomes — turning the data each team produces into one
            source of truth everyone can act on.
          </p>

          <div className="mt-14">
            <ConceptDiagram />
          </div>
        </div>
      </section>
      
      <section className="border-t border-white/10 bg-ink py-20">
        <div className={container}>
          <p className={eyebrow}>Outcomes</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
            From Data to Design Impact with Forge
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Forge translates dimensional inspection data into measurable outcomes, connecting production quality back to the design features that drive it. By quantifying capability, conformance, and quality, teams can identify risk, validate engineering decisions, and track improvement over time.

          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-[#0c1830] py-20">
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className={eyebrow}>Contact</p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
                Ready to close the loop?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                If your teams are repeatedly solving the same design, quality, or
                manufacturability problems, let&apos;s talk about what Recurrent
                can connect.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 shadow-panel">
              <p className="max-w-xl text-lg leading-8 text-slate-200">
                Tell us where your data is getting stuck and what your teams need
                to learn from it. We&apos;ll start there.
              </p>

              <a
                href="mailto:sam@recurrentsystems.com?subject=Recurrent%20Systems%20Inquiry"
                className="mt-8 inline-flex items-center rounded-full bg-signal px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2663b6]"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink">
        <div
          className={`${container} flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between`}
        >
          <span className="font-mono uppercase tracking-[0.3em]">
            Recurrent Systems
          </span>
          <span>
            Industrial software focused on closing the feedback loop &middot;
            &copy; 2026 Recurrent Systems
          </span>
        </div>
      </footer>
    </main>
  );
}
