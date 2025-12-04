"use client";

import { useState } from "react";
import ConsistencyModal from "./components/consistency-modal";
import Sidebar from "./components/sidebar";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const discoveryStats = [
    { label: "Weak", value: "12%" },
    { label: "Mild", value: "24%" },
    { label: "Strong", value: "30%" },
    { label: "Ultra", value: "34%" },
  ];

  const analytics = [
    { label: "Cluster shift matrix", value: "09" },
    { label: "Completed nodes", value: "40" },
    { label: "Companion clusters", value: "28" },
    { label: "Loss to learn", value: "06" },
  ];

  const clusterColumns = [
    {
      title: "Cluster skill name",
      values: ["0%", "0%", "0%", "0%", "0%"],
    },
    {
      title: "Cluster nodes",
      values: ["0%", "0%", "0%", "0%", "0%"],
    },
    {
      title: "Cluster mastery",
      values: ["0%", "0%", "0%", "0%", "0%"],
    },
  ];

  const executeMetrics = [
    { label: "Completed nodes", value: "0 / 9" },
    { label: "Completed sections", value: "0 / 9" },
    { label: "Completed lessons", value: "0 / 9" },
    { label: "Completed exercises", value: "0 / 9" },
  ];

  const legend = [
    "N/A",
    "On hold",
    "In queue",
    "Review",
    "Active",
    "Complete",
  ];

  const studyTimeline = [
    { day: "04", value: 18 },
    { day: "07", value: 24 },
    { day: "10", value: 12 },
    { day: "13", value: 30 },
    { day: "16", value: 15 },
    { day: "19", value: 28 },
    { day: "22", value: 8 },
    { day: "25", value: 20 },
    { day: "28", value: 26 },
    { day: "31", value: 10 },
  ];

  return (
    <div className="flex min-h-screen justify-center bg-[#010611] px-3 py-6 font-sans text-white sm:px-6 lg:px-12">
      <div className="flex w/full max-w-[1400px] gap-4 lg:gap-8">
        <Sidebar />

        <main className="flex-1 rounded-[40px] border border-white/10 bg-[#050f22] p-5 shadow-[0_25px_120px_rgba(1,6,20,0.9)] lg:p-10">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Education</p>
              <div className="flex items-center gap-2 text-2xl font-semibold">
                <span className="text-white">Cyber command</span>
                <span className="text-slate-500">/ Cyber command</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <span className="text-white/50">Search luminary</span>
              </div>
              <div className="flex items-center gap-3 text-lg text-slate-300">
                <span className="rounded-2xl bg-white/5 px-3 py-2">☾</span>
                <span className="rounded-2xl bg-white/5 px-3 py-2">🛎</span>
                <span className="rounded-2xl bg-white/5 px-3 py-2">👤</span>
              </div>
              <button
                className="rounded-2xl bg-[#fb3f5c] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#fb3f5c]/30"
                onClick={() => setIsModalOpen(true)}
              >
                Connect to VPN
              </button>
            </div>
          </header>

          <nav className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            {[
              "Cyber Command",
              "Overview",
              "Nodes",
              "Reviews",
              "Reports",
              "Labs",
            ].map((tab, index) => (
              <button
                key={tab}
                className={`rounded-2xl px-4 py-2 transition ${
                  index === 0
                    ? "bg-[#1f6fff] text-white"
                    : "bg-[#0c1a2b] text-slate-300 hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <section className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/5 bg-linear-to-br from-[#07122e] via-[#050f22] to-[#020812] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-300">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Collection</p>
                    <p className="text-base font-semibold text-white">Canyon relay</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-2xl bg-white/10 px-3 py-1">Live</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">4K</span>
                  </div>
                </div>

                <div className="relative mt-6 h-72 overflow-hidden rounded-[28px] bg-[#030b1b]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,189,255,0.4),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(9,214,255,0.35),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(251,63,92,0.35),transparent_60%)]" />
                  <div className="absolute inset-0 scale-105 bg-[radial-gradient(circle_at_50%_90%,rgba(0,0,0,0.4),transparent_55%)]" />
                  <div className="absolute inset-x-6 bottom-6 flex flex-col items-start gap-3">
                    <button className="rounded-2xl bg-white/15 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                      Upgrade now
                    </button>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3].map((dot) => (
                        <span
                          key={dot}
                          className={`h-1.5 w-8 rounded-full ${
                            dot === 1 ? "bg-white" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/5 bg-[#040c1c] p-6">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold">Analytics</p>
                  <button className="text-sm text-slate-400">See all progression</button>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {analytics.map((item, index) => (
                    <div
                      key={item.label}
                      className={`rounded-2xl border border-white/5 px-4 py-5 ${
                        index === 0
                          ? "bg-linear-to-br from-[#0a1c30] to-[#031327]"
                          : "bg-[#071529]"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-4 text-3xl font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/5 bg-[#081530] p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Discovery chain</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                      Mk II
                    </p>
                  </div>
                  <button className="rounded-2xl border border-white/10 px-4 py-1 text-xs text-slate-200">
                    Sync
                  </button>
                </div>
                <div className="mt-6 space-y-4">
                  {discoveryStats.map((stat, index) => (
                    <div key={stat.label}>
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                        <span>{stat.label}</span>
                        <span>{stat.value}</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#42e8ff] via-[#13b6f5] to-[#0b82ff]"
                          style={{ width: `${30 + index * 15}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/5 bg-linear-to-br from-[#081828] via-[#061223] to-[#040c19] p-6">
                <p className="text-sm font-semibold text-[#6cffd4]">Join cyberspace</p>
                <p className="mt-4 text-lg font-medium text-white">
                  “Join a team, learn from top minds, and grow with the cyberspace
                  squad. Choose an existing cyberspace that aligns with your goals
                  or build your dream team.”
                </p>
                <button className="mt-6 rounded-2xl border border-white/20 px-4 py-2 text-sm text-white/70">
                  Coming soon
                </button>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/5 bg-[#030b17] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">Cluster skill matrix</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Analytics
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {[
                      "Analytics",
                      "Completed nodes",
                      "Completed clusters",
                      "To do list",
                      "Recently added",
                    ].map((tab, index) => (
                      <button
                        key={tab}
                        className={`rounded-2xl border border-white/10 px-3 py-1 transition ${
                          index === 0
                            ? "bg-[#071c39] text-white"
                            : "bg-transparent text-slate-400 hover:bg-white/5"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {clusterColumns.map((column, columnIndex) => (
                    <div key={column.title} className="rounded-3xl border border-white/5 bg-[#040b18] p-4">
                      <p className="text-sm font-medium text-white/80">{column.title}</p>
                      <div className="mt-4 space-y-3">
                        {column.values.map((value, index) => (
                          <div
                            key={`${column.title}-${index}`}
                            className="flex items-center justify-between rounded-2xl bg-[#07152b] px-3 py-2 text-sm text-slate-300"
                          >
                            <span>0{index + 1}</span>
                            <span className="text-[#49d3ff]">{value}</span>
                          </div>
                        ))}
                      </div>
                      {columnIndex === 0 && (
                        <p className="mt-4 text-xs text-slate-500">Last synced 3 mins ago</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[#fdf3c0]/20 bg-[#120d02] p-6 text-[#fdeeb0]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
                      Execute progress
                    </p>
                    <p className="text-lg font-semibold text-white">0%</p>
                  </div>
                  <button className="rounded-2xl bg-[#fbc852]/20 px-4 py-2 text-sm font-medium text-white">
                    Clear skill progression
                  </button>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {executeMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-white">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                        {metric.label}
                      </p>
                      <p className="mt-3 text-xl font-semibold">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/5 bg-[#060c16] p-6">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Skill chain</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Offensive operations</p>
                  </div>
                  <button className="self-start rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/70">
                    Add to deck
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-1">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#1dd6ff]" />
                    Offensive
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-1">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#ff7bfa]" />
                    Defensive
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-1">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#ffe666]" />
                    Recon
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/5 bg-[#040817] p-6">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold">Clear skill progression</p>
                  <button className="rounded-2xl border border-white/10 p-2">⚙️</button>
                </div>
                <div className="relative mt-6 flex min-h-[360px] items-center justify-center">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-[conic-gradient(#00c6fb_0deg,#8e2de2_120deg,#ffe066_240deg,#00c6fb_360deg)]">
                    <div className="absolute inset-6 rounded-full bg-[#040817]" />
                    <div className="relative z-10 text-center">
                      <p className="text-4xl font-semibold text-white">0%</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">N/A</p>
                    </div>
                    <div className="absolute -right-4 top-1/2 w-32 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#040817]/90 px-4 py-3 text-xs text-white shadow-lg">
                      <p className="text-sm font-semibold">N/A 0%</p>
                      <p className="text-white/70">No available data</p>
                    </div>
                  </div>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  {legend.map((item, index) => (
                    <li key={item} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex h-2.5 w-2.5 rounded-full"
                          style={{
                            background: [
                              "#4d73ff",
                              "#fbbf24",
                              "#fb3f5c",
                              "#14b8a6",
                              "#7c3aed",
                              "#1dd6ff",
                            ][index],
                          }}
                        />
                        {item}
                      </div>
                      <span className="text-white/60">0%</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[32px] border border-white/5 bg-[#02050d] p-6">
                <p className="text-sm font-semibold text-white">Offensive operations</p>
                <p className="mt-4 text-sm text-slate-400">
                  Track offensive readiness across nodes and trigger countermeasures
                  before incidents impact your cyberspace squad.
                </p>
                <button className="mt-6 w-full rounded-2xl bg-[#1f6fff] py-3 text-sm font-semibold text-white">
                  Launch offensive ops
                </button>
              </div>
            </div>
          </section>

          <section className="mt-10 space-y-6">
            <div className="rounded-[32px] border border-white/5 bg-[#030915] p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Study time</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Jan 16, 2076</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl border border-white/15 px-3 py-1 text-xs text-white/70">In sync</span>
                  <button className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80">
                    Reset
                  </button>
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-white/5 bg-[#050c18]/80 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                  <span>Cluster activity</span>
                  <span>Powered by AJAEO</span>
                </div>
                <div className="mt-6 h-56 rounded-2xl border border-white/5 bg-[linear-gradient(transparent_92%,rgba(255,255,255,0.05)_92%),linear-gradient(90deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_50%,transparent_50%)] bg-[length:100%_25%,12%_100%] p-4">
                  <div className="flex h-full items-end gap-3">
                    {studyTimeline.map((entry) => (
                      <div key={entry.day} className="flex flex-1 flex-col items-center justify-end gap-2">
                        <div className="flex w-full items-end justify-center">
                          <span
                            className="inline-block w-3 rounded-full bg-linear-to-t from-[#072445] via-[#0a66ff] to-[#36fdfa] shadow-[0_10px_25px_rgba(8,102,255,0.4)]"
                            style={{ height: `${entry.value * 2}%` }}
                          />
                        </div>
                        <p className="text-xs text-slate-500">{entry.day}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <ConsistencyModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
