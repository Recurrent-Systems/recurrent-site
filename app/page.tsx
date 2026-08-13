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

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-white">
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
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <section className="flex flex-1 flex-col items-center justify-center pb-20 text-center">
            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Unifying data into a single layer of visibility
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-400">
              Recurrent Systems builds industrial software that helps manufacturers turn
              disconnected data into usable, compounding operational knowledge.
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

      <section className="border-t border-white/10 bg-ink py-20">
        <div className={container}>
          <p className={eyebrow}>The Problem</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
            Every team has data. No team has the full picture.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Design, engineering, manufacturing, and quality teams all generate valuable
            data, but it stays locked in separate tools, formats, and workflows. When an
            issue appears, context is hard to recover. When a fix works, the lesson often
            stays with the people who found it.
          </p>
        </div>
      </section>

      <section id="forge" className="border-t border-white/10 bg-[#0c1830] py-20">
        <div className={container}>
          <p className={eyebrow}>Introducing Forge</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            A manufacturing intelligence platform.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Forge connects design intent, production, engineering, and quality outcomes,
            turning the data each team produces into one source of truth everyone can use.
            It helps organizations understand what is happening, act sooner, and carry
            what they learn forward into the next program.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink py-20">
        <div className={container}>
          <p className={eyebrow}>One Source of Truth</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
            One operating picture for every team.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            When the organization works from the same operational record, the
            back-and-forth disappears. Teams spend less time reconciling versions of the
            truth and more time making decisions, resolving issues, and improving the work.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0c1830] py-20">
        <div className={container}>
          <p className={eyebrow}>Data as an Asset</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
            Finally use the data you already have.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Forge brings production, quality, engineering, and design data into one place
            to view, analyze, and explore. Answers that once required days of gathering
            information become a query away, while each program adds reusable knowledge to
            the next.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink py-20">
        <div className={container}>
          <p className={eyebrow}>The Advantage</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
            Reduce production cost. Increase efficiency.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Forge helps teams surface issues early, preserve operational context, and
            spend more of their time on engineering work that moves the business forward.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-6"
              >
                <h3 className="text-lg font-semibold text-white">{advantage.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#0c1830] py-20">
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className={eyebrow}>Contact</p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
                Ready to close the loop?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                Tell us where data is getting stuck and what your teams need to learn from it.
                We&apos;ll start there.
              </p>
            </div>

            {/* <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-panel">
              <p className="max-w-xl text-lg leading-8 text-slate-200">
                Start a conversation about Forge and the feedback loops your operation needs.
              </p>
              <a
                href="mailto:sam@recurrentsystems.com?subject=Recurrent%20Systems%20Inquiry"
                className="mt-8 inline-flex items-center rounded-full bg-signal px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#2663b6]"
              >
                Email Us
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; 2026 Recurrent Systems. All rights reserved.</p>
          <p>Industrial software focused on closing the feedback loop.</p>
        </div>
      </footer>
    </main>
  );
}
