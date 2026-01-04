import Link from "next/link";

function TrustBlock() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">What Home Battery Guide is</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          <li><strong>Independent, research-based guidance</strong> for homeowners</li>
          <li>Focused on incentives, economics, and real-world use cases</li>
          <li>Written to help you decide — not to push a sale</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">What it is not</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          <li><strong>Not an installer marketplace</strong></li>
          <li>Not sponsored by battery manufacturers</li>
          <li>Not a lead-gen funnel disguised as &quot;reviews&quot;</li>
        </ul>
      </div>
    </div>
  );
}

function StateFocusBlock() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
      <h2 className="text-xl font-semibold">Where we start (and why)</h2>
      <p className="mt-2 text-sm text-zinc-700">
        The post-2025 market is increasingly state-driven. We&apos;re starting where
        incentives, grid conditions, and adoption are strongest —{" "}
        <span className="font-medium">California and Texas</span> — then expanding.
        These states represent two very different grid and policy realities, which makes them useful starting points.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="text-sm font-semibold">California</div>
          <div className="mt-1 text-sm text-zinc-700">
            California&apos;s economics increasingly reward self-consumption and
            resilience. Net metering changes and wildfire-driven shutoff risk keep
            demand high.
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="text-sm font-semibold">Texas</div>
          <div className="mt-1 text-sm text-zinc-700">
            Texas remains a reliability-driven market where homeowners care about
            outage protection and plan economics. The decision is often local and
            load-dependent.
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        We&apos;ll add other high-signal states next (NY, MA, AZ/FL) once the basics are locked.
      </p>
    </div>
  );
}

function RoadmapPreview() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">What we&apos;ll cover (coming soon)</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm font-semibold">What actually changes between battery systems</div>
          <p className="mt-1 text-sm text-zinc-700">
            Tesla vs Enphase, Franklin vs Tesla, and &quot;best for&quot; breakdowns with clear tradeoffs.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm font-semibold">When incentives matter — and when they don&apos;t</div>
          <p className="mt-1 text-sm text-zinc-700">
            Focused, maintained pages for high-signal states — no stale, copy-pasted lists.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm font-semibold">How to think about sizing and backup time</div>
          <p className="mt-1 text-sm text-zinc-700">
            Simple calculators for backup runtime and &quot;is this worth it?&quot; logic — later.
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        This site is intentionally minimal at launch. We&apos;ll expand only as accuracy and scope can be maintained.
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <header className="flex items-center justify-between">
        <div className="text-sm font-semibold tracking-tight">Home Battery Guide</div>
        <nav className="flex gap-4 text-sm">
          <Link className="text-zinc-700 hover:text-zinc-900" href="/what-changed-2026">
            What changed in 2026
          </Link>
        </nav>
      </header>

      <section className="mt-10 md:mt-14">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          A clear, independent guide to residential battery storage.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700 md:text-lg">
          Batteries didn&apos;t get simpler after the federal residential tax credit ended.
          Decisions became more local: incentives, utility rules, and grid realities now matter
          more than ever. This guide exists to help homeowners make the call with neutral,
          practical analysis.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/what-changed-2026"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
          >
            Read: What changed in 2026
          </Link>
          <a
            href="#roadmap"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
          >
            What we&apos;ll cover
          </a>
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <TrustBlock />
      </section>

      <section className="mt-12 md:mt-16">
        <StateFocusBlock />
      </section>

      <section id="roadmap" className="mt-12 md:mt-16">
        <RoadmapPreview />
      </section>

      <footer className="mt-12 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Home Battery Guide</div>
          <div className="flex gap-4">
            <Link className="hover:text-zinc-700" href="/what-changed-2026">
              What changed in 2026
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
