"use client";

import { useState } from "react";

const fieldClass =
  "w-full border-0 border-b border-white/15 bg-transparent pb-2 pt-1 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-glow";

const labelClass =
  "block text-[0.65rem] uppercase tracking-[0.3em] text-mist/50";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [build, setBuild] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = `Recurrent Systems inquiry — ${company || name || "new lead"}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Work email: ${email}`,
      "",
      "What we build / where the data goes to die:",
      build
    ].join("\n");
    window.location.href = `mailto:sam@recurrentsystems.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={fieldClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Okafor"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            className={fieldClass}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Northpoint Assembly"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Work email
        </label>
        <input
          id="email"
          type="email"
          className={fieldClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@northpoint.com"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="build">
          What do you build?
        </label>
        <input
          id="build"
          className={fieldClass}
          value={build}
          onChange={(e) => setBuild(e.target.value)}
          placeholder="PCB assembly, ~40k units / month across three SMT lines"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-signal px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2663b6]"
      >
        Send message
        <span aria-hidden>&rarr;</span>
      </button>
    </form>
  );
}
