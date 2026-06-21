import Image from "next/image";
import ContactForm from "./ContactForm";

const navLinks = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Platform", href: "#platform" },
  { label: "Contact", href: "#contact" }
];

const stack = ["MES", "AOI", "ICT / FCT", "SPC", "ERP"];

const outcomes = [
  {
    title: "Yield you can bank",
    description:
      "Trace every defect to its root cause and recover the margin that scrap and rework quietly carry off the floor."
  },
  {
    title: "Downtime that doesn't repeat",
    description:
      "Turn each line stoppage into a permanent, documented fix instead of a recurring fire drill on the next shift."
  },
  {
    title: "Knowledge that stays",
    description:
      "Capture how your best process engineers actually solve problems, so it outlives any single person or shift."
  },
  {
    title: "Capacity without capital",
    description:
      "Find the throughput already hiding in the lines you run today — before you sign off on new equipment."
  }
];

const platformSteps = [
  {
    title: "Connect",
    description:
      "Meets your data where it already lives. Recurrent reads from MES, test, SPC, and ERP — no rip-and-replace, no new hardware on the line."
  },
  {
    title: "Unify",
    description:
      "Every unit, every step, every measurement reconciled into one genealogy you can trust — a single record instead of a dozen disconnected exports."
  },
  {
    title: "Leverage",
    description:
      "Traceability, yield analytics, and alerts that put the record to work — for the operator at the station and the executive in the review."
  }
];

function CornerFrame({
  tag,
  caption
}: {
  tag: string;
  caption: string;
}) {
  return (
    <div className="relative aspect-[4/5] w-full">
      <div className="absolute left-0 top-0 h-5 w-5 border-l border-t border-white/25" />
      <div className="absolute right-0 top-0 h-5 w-5 border-r border-t border-white/25" />
      <div className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white/25" />
      <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-white/25" />
      <div className="flex h-full w-full flex-col justify-between border border-white/5 bg-white/[0.02] p-5">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-mist/40">
          {tag}
        </span>
        <p className="self-center text-center font-mono text-[0.7rem] leading-6 text-mist/40">
          {caption}
        </p>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-mist/40">
          &nbsp;
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
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

        {/* Hero */}
        <section className="grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-glow">
              Industrial software &middot; Assembly &amp; PCB
            </p>
            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turn your production data into a leverageable asset.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-slate-400">
              Recurrent unifies the data your lines already produce into one
              trustworthy record — and puts it to work on the floor and in the
              boardroom.
            </p>
            <div className="mt-9 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded border border-white/10 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-mist/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <CornerFrame
              tag="Factory photography"
              caption="Assembly line — portrait, operator at a pick-and-place station"
            />
          </div>
        </section>

        {/* Outcomes */}
        <section id="outcomes" className="border-t border-white/10 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-glow">
            Outcomes
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Margin that was hiding in plain sight.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
            The data your lines already generate is the most underused asset in
            the building. Put it to work and the returns are operational, not
            theoretical.
          </p>

          <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome.title}
                className="grid gap-4 py-8 md:grid-cols-[auto_1fr_1.2fr] md:items-baseline md:gap-10"
              >
                <span className="font-mono text-xs tracking-[0.25em] text-glow">
                  0{index + 1} <span className="text-mist/30">/ 04</span>
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {outcome.title}
                </h3>
                <p className="max-w-md text-base leading-7 text-slate-400">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="border-t border-white/10 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-glow">
            Platform
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            One record, from the line to the boardroom.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
            Recurrent connects to the systems you already run and turns their
            output into a single source of truth — then makes it something
            people across the plant can act on.
          </p>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="grid gap-10">
              {platformSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-3 md:grid-cols-[auto_1fr] md:gap-6"
                >
                  <span className="font-mono text-xs tracking-[0.25em] text-glow">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-base leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:pl-6">
              <CornerFrame
                tag="Product 01"
                caption="Unit genealogy — single-record view of one board through every station"
              />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {[...stack, "Traceability"].map((item) => (
              <span
                key={item}
                className="rounded border border-white/10 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-mist/60"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-white/10 py-20"
        >
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-glow">
                Contact
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Let&apos;s talk about your lines.
              </h2>
              <p className="mt-5 max-w-sm text-lg leading-8 text-slate-400">
                Already in conversation with us, or want to be? Tell us what you
                build and where the data goes to die — we&apos;ll take it from
                there.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-mist/50">
                    Direct
                  </p>
                  <a
                    href="mailto:sam@recurrentsystems.com"
                    className="mt-2 block text-base text-slate-300 transition hover:text-white"
                  >
                    sam@recurrentsystems.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-mist/50">
                    Based in
                  </p>
                  <p className="mt-2 text-base text-slate-300">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono uppercase tracking-[0.3em]">
            Recurrent Systems
          </span>
          <span>Industrial software for manufacturers &middot; &copy; 2026 Recurrent Systems</span>
        </footer>
      </div>
    </main>
  );
}
