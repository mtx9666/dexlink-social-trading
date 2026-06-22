import {
  ArrowUpRight,
  BarChart3,
  Copy,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  { label: "Active traders", value: "12,480+", icon: Users },
  { label: "24h volume", value: "$48.2M", icon: BarChart3 },
  { label: "Avg. copy ROI", value: "+18.4%", icon: TrendingUp },
  { label: "Latency", value: "<120ms", icon: Zap },
];

const leaders = [
  { rank: 1, name: "AlphaVault", roi: "+142%", win: "78%", followers: "2.1k" },
  { rank: 2, name: "QuantEdge", roi: "+118%", win: "74%", followers: "1.8k" },
  { rank: 3, name: "MomentumX", roi: "+96%", win: "71%", followers: "1.4k" },
  { rank: 4, name: "DeltaFlow", roi: "+88%", win: "69%", followers: "980" },
];

const features = [
  {
    title: "Copy trading",
    desc: "Mirror top performers with configurable risk limits and allocation caps.",
    icon: Copy,
  },
  {
    title: "Live analytics",
    desc: "Sharpe, drawdown, win rate, and exposure dashboards updated in real time.",
    icon: BarChart3,
  },
  {
    title: "Risk controls",
    desc: "Stop-loss templates, max position size, and portfolio-level guardrails.",
    icon: Shield,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold">
            DL
          </div>
          <span className="text-lg font-semibold tracking-tight">DexLink</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#leaderboard" className="hover:text-white">
            Leaderboard
          </a>
          <a
            href="https://dexlink.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Portfolio
          </a>
        </nav>
        <a
          href="https://dexlink-social-trading.vercel.app"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          Launch app
        </a>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <section className="py-16 text-center md:py-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
            Social trading platform
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Trade smarter with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              data-driven copy trading
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)]">
            DexLink connects retail traders to verified strategies, performance
            analytics, and transparent leaderboards — built with Next.js,
            TypeScript, and real-time market data pipelines.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://dexlink-social-trading.vercel.app"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500"
            >
              View live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/mtx9666/dexlink-social-trading"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium hover:border-blue-500/40"
            >
              Source on GitHub
            </a>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="glass rounded-2xl p-5">
              <Icon className="mb-3 h-5 w-5 text-blue-400" />
              <p className="text-2xl font-bold">{value}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </section>

        <section id="leaderboard" className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Top traders this month</h2>
          <div className="glass overflow-hidden rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[var(--border)] text-[var(--muted)]">
                <tr>
                  <th className="px-5 py-4 font-medium">Rank</th>
                  <th className="px-5 py-4 font-medium">Trader</th>
                  <th className="px-5 py-4 font-medium">ROI</th>
                  <th className="px-5 py-4 font-medium">Win rate</th>
                  <th className="px-5 py-4 font-medium">Followers</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((row) => (
                  <tr
                    key={row.rank}
                    className="border-b border-[var(--border)] last:border-0"
                  >
                    <td className="px-5 py-4 font-mono text-[var(--muted)]">
                      #{row.rank}
                    </td>
                    <td className="px-5 py-4 font-medium">{row.name}</td>
                    <td className="px-5 py-4 font-medium text-[var(--success)]">
                      {row.roi}
                    </td>
                    <td className="px-5 py-4">{row.win}</td>
                    <td className="px-5 py-4">{row.followers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="features" className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="glass rounded-2xl p-6">
              <Icon className="mb-4 h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {desc}
              </p>
            </div>
          ))}
        </section>

        <section className="glass mt-16 rounded-2xl p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Built for performance & transparency
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Radix UI.
            Part of the DexLink portfolio at{" "}
            <a
              href="https://dexlink.dev"
              className="text-blue-400 hover:underline"
            >
              dexlink.dev
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} DexLink · Ali (@mtx9666)
      </footer>
    </div>
  );
}
