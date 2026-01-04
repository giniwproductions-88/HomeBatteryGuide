import Link from "next/link";

export const metadata = {
  title: "What Changed in 2026",
  description:
    "A straightforward explainer on the post–federal tax credit reality for home batteries: what changed, what still matters, and where incentives are strongest.",
};

export default function WhatChanged2026Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <header className="flex items-center justify-between">
        <Link className="text-sm font-semibold tracking-tight hover:text-zinc-700" href="/">
          Home Battery Guide
        </Link>
        <Link className="text-sm text-zinc-700 hover:text-zinc-900" href="/">
          Back to home
        </Link>
      </header>

      <article className="mt-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          What changed in 2026
        </h1>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-800">
          <p>
            The federal credit ending didn&apos;t end the home battery market. It changed{" "}
            <em>how</em> people decide. The &quot;one big federal incentive makes this simple&quot;
            era is over. In 2026, batteries are a more local decision — driven by state
            incentives, utility rules, and the reliability realities of where you live.
          </p>

          <h2 className="pt-4 text-xl font-semibold">Federal → state shift</h2>
          <p>
            In 2025, many homeowners started with a single question: &quot;How much does the
            federal credit reduce the price?&quot; In 2026, the first question is usually:
            &quot;What does my state and utility make possible?&quot; That&apos;s a harder question — and
            the answer varies dramatically by location and load profile.
          </p>

          <h2 className="pt-4 text-xl font-semibold">What still makes batteries worth it</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Grid reliability:</strong> If outages are common (or you&apos;re in a
              wildfire/heat-stress region), backup value can outweigh pure payback math.
            </li>
            <li>
              <strong>Rate structures:</strong> Time-of-use pricing, demand charges, and export
              compensation can turn storage into a bill-management tool.
            </li>
            <li>
              <strong>State programs:</strong> Rebates, performance payments, and utility programs
              can materially change the economics — when available.
            </li>
            <li>
              <strong>Electrification:</strong> EV charging and heat pumps increase the value of
              resilience and load management.
            </li>
          </ul>

          <h2 className="pt-4 text-xl font-semibold">Where we&apos;re starting</h2>
          <p>
            The post-2025 market isn&apos;t evenly distributed. To stay accurate and useful, this
            guide starts with two consistently battery-relevant states.
          </p>

          <h3 className="pt-2 text-lg font-semibold">California</h3>
          <p>
            California&apos;s economics increasingly reward self-consumption and resilience.
            Net metering changes and wildfire-driven shutoff risk keep demand high. Utility territory
            and household goals heavily influence what &quot;worth it&quot; means here.
          </p>

          <h3 className="pt-2 text-lg font-semibold">Texas</h3>
          <p>
            Texas remains a reliability-driven market where homeowners care about outage protection,
            but also where retail plan structure and usage patterns can change the math. The decision
            often hinges on how often you need backup and what your loads look like.
          </p>

          <h2 className="pt-4 text-xl font-semibold">What we won&apos;t do</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>No installer lead-gen funnels disguised as reviews</li>
            <li>No stale, copy-pasted incentive lists we can&apos;t maintain</li>
            <li>No calculator promises without explicit assumptions and testable inputs</li>
          </ul>

          <h2 className="pt-4 text-xl font-semibold">What&apos;s next</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>A neutral head-to-head comparison page homeowners actually search for.</li>
            <li>A focused California guide that stays maintained (not a giant list).</li>
            <li>A sizing explainer that helps estimate backup runtime from essential loads.</li>
          </ol>

          <p>
            If you&apos;re here because you&apos;re trying to decide whether batteries still make sense in 2026,
            you&apos;re not late. You&apos;re just operating in a more local, more complex market — and that&apos;s
            exactly what this guide is built for.
          </p>
        </div>
      </article>

      <footer className="mt-12 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
        <p>
          Home Battery Guide is an independent educational resource. Content may change as utility rules
          and state programs evolve.
        </p>
      </footer>
    </main>
  );
}
