"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Calendar, RotateCcw } from "lucide-react";

interface DiscoveryStat {
  label: string;
  value: string;
  percentage: number;
}

interface ClusterColumn {
  id: number;
  value: string;
}

interface ExecuteMetric {
  label: string;
  value: string;
  image: string;
}

interface ConsistencyChainWeek {
  label: string;
  value: string;
}

interface SkillProgression {
  label: string;
  percentage: number;
  gradient: string;
}

interface DashboardData {
  clusterName: string;
  clusterId: string;
  discoveryStats: DiscoveryStat[];
  consistencyChain: ConsistencyChainWeek[];
  clusterColumns: ClusterColumn[];
  executeMetrics: ExecuteMetric[];
  skillProgression: SkillProgression[];
  studyTimeData: {
    date: string;
    hours: number;
  }[];
  skillChainData: {
    name: string;
    completed: number;
    total: number;
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("Analytics");
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [studyData, setStudyData] = useState<
    Array<{ day: number; hours: number }>
  >(
    Array.from({ length: 25 }, (_, i) => ({
      day: 9 + i,
      hours: i === 19 ? 6 : Math.random() * 2 + 0.5,
    }))
  );

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // setLoading(true);
        const response = await fetch("/api/dashboard");

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        const data = await response.json();
        setDashboardData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setDashboardData(getMockData());
      }
      // } finally {
      //   setLoading(false);
      // }
    };

    fetchDashboardData();
  }, []);

  const getMockData = (): DashboardData => ({
    clusterName: "N/A",
    clusterId: "N/A",
    discoveryStats: [{ label: "", value: "N/A", percentage: 0 }],
    consistencyChain: [
      { label: "Week 1", value: "0%" },
      { label: "Week 2", value: "0%" },
      { label: "Week 3", value: "0%" },
      { label: "Week 4", value: "0%" },
    ],
    clusterColumns: Array.from({ length: 16 }, (_, i) => ({
      id: i + 1,
      value: "0%",
    })),
    executeMetrics: [
      { label: "Completed nodes", value: "0 / 9", image: "/nodes.png" },
      { label: "Completed sections", value: "0 / 9", image: "/elements3.png" },
      { label: "Completed lessons", value: "0 / 9", image: "/section.png" },
      { label: "Completed exercises", value: "0 / 9", image: "/stretch.png" },
    ],
    skillProgression: [
      {
        label: "N/A",
        percentage: 0,
        gradient: "linear-gradient(to bottom right, #01070D, #F5F5F5)",
      },
      {
        label: "N/A",
        percentage: 0,
        gradient: "linear-gradient(to bottom right, #B81A1A, #800B0B)",
      },
      {
        label: "N/A",
        percentage: 0,
        gradient: "linear-gradient(to bottom right, #F0863A, #8A4D21)",
      },
      {
        label: "N/A",
        percentage: 0,
        gradient: "linear-gradient(to bottom right, #05131E, #176A16)",
      },
      {
        label: "N/A",
        percentage: 0,
        gradient: "linear-gradient(to bottom right, #05131E, #1C60AC)",
      },
      {
        label: "N/A",
        percentage: 0,
        gradient: "linear-gradient(to bottom right, #C89961, #A3227B)",
      },
      {
        label: "N/A",
        percentage: 0,
        gradient: "linear-gradient(to bottom right, #3D6CEB, #2AE0DB)",
      },
    ],
    studyTimeData: Array.from({ length: 25 }, (_, i) => ({
      date: `${9 + i}`,
      hours: Math.floor(Math.random() * 5),
    })),
    skillChainData: {
      name: "Offensive operations",
      completed: 0,
      total: 1,
    },
  });

  const weekProgress = [
    { week: "Week 1", status: "Accomplished", progress: 100 },
    { week: "Week 2", status: "Accomplished", progress: 100 },
    { week: "Week 3", status: "Unaccomplished", progress: 50 },
    { week: "Week 4", status: "Unaccomplished", progress: 50 },
  ];
  const tabs = [
    "Cyber Command",
    "Overview",
    "Nodes",
    "Reviews",
    "Reports",
    "Labs",
  ];

  const skillMetrics = [
    { skill: "Windows Administration", progress: 50 },
    { skill: "Linux Administration", progress: 100 },
    { skill: "Cryptography", progress: 25 },
    { skill: "System Optimization", progress: 80 },
    { skill: "Defense in Depth", progress: 60 },
    { skill: "Client-Side Attack", progress: 20 },
    { skill: "Active Directory", progress: 60 },
    { skill: "Server-Side Attack", progress: 30 },
  ];

  const analyticsOptions = [
    "Analytics",
    "Completed nodes",
    "Completed clusters",
    "To do list",
    "Recently added",
  ];

  const careerSkills = [
    {
      name: "Network Penetration Tester",
      progress: 80,
      color: "bg-linear-to-br from-[#01070D] to-[#F5F5F5]",
    },
    {
      name: "Red Teamer",
      progress: 40,
      color: "bg-linear-to-br from-[#B81A1A] to-[#800B0B]",
    },
    {
      name: "Exploit Developer",
      progress: 35,
      color: "bg-linear-to-br from-[#F0863A] to-[#8A4D21]",
    },
    {
      name: "Application Security Eng...",
      progress: 95,
      color: "bg-linear-to-br from-[#05131E] to-[#176A16]",
    },
    {
      name: "Cybersecurity Analyst I",
      progress: 95,
      color: "bg-linear-to-br from-[#05131E] to-[#1C60AC]",
    },
    {
      name: "Specialized Domain (Ghost, IOT, Mobile, SCADA/ICS)",
      progress: 75,
      color: "bg-linear-to-br from-[#C89961] to-[#A3227B]",
    },
    {
      name: "Vulnerability Researcher",
      progress: 85,
      color: "bg-linear-to-br from-[#3D6CEB] to-[#2AE0DB]",
    },
  ];

  return (
    <div
      className={`${inter.className} min-h-screen bg-[#040E16] text-white overflow-x-hidden`}
    >
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full md:ml-20 md:w-[calc(100%-5rem)]">
        <Header breadcrumbTitle="Cyber Command" />
        <div className="px-2 sm:px-6 py-3 sm:py-4">
          {/* {(loading || error) && (
            <div className="mb-4 px-2 sm:px-5">
              {loading && (
                <p className="text-xs sm:text-sm text-[#E2E8FFB2]">
                  Loading dashboard insights…
                </p>
              )}
              {error && (
                <p className="mt-1 text-[11px] sm:text-xs text-[#F5B5B5]">{}</p>
              )}
            </div>
          )} */}
          {/* {error && (
            <div className="mb-4 px-2 sm:px-5">
              <p className="mt-1 text-[11px] sm:text-xs text-[#F5B5B5]">
                {error}
              </p>
            </div>
          )} */}

          {/* Tab Navigation */}
          <nav className="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-2 text-[10px] sm:text-xs ml-0 sm:ml-4 overflow-x-auto pb-2 pr-2 sm:pr-4">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`rounded-[10px] px-3 sm:px-4 py-2 cursor-pointer transition whitespace-nowrap ${
                  index === 0
                    ? "bg-[#040E16] text-[#E2E8FF] border border-[#E2E8FF0D] font-semibold"
                    : "text-[#E2E8FF99] hover:text-[#E2E8FF]"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Hero Section */}
          <section className="mt-6 sm:mt-8 px-2 sm:px-5">
            <div className="flex flex-col lg:flex-row w-full gap-3 sm:gap-4">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/Card.png"
                  alt="upgrade"
                  width={632}
                  height={451}
                  className="w-full h-auto rounded-xl"
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Consistency Chain */}
                <div className="rounded-[14px] border border-white/5 bg-[#040E16] p-4 sm:p-6 w-full sm:w-1/2">
                  <div className="flex items-start justify-between mb-5">
                    <div className="border border-[#E2E8FF0D] rounded-[10px] bg-[#211B1A80] w-[108px] h-[31px] flex items-center justify-center">
                      <p className="text-[10px] font-semibold text-[#E18682]">
                        Consistency chain
                      </p>
                    </div>
                    <div className="text-[10px] rounded-[10px] bg-[#211B1A80] border border-[#E2E8FF0D] w-[41px] h-[31px] flex items-center justify-center gap-2">
                      <span className="text-[#E18682]">1</span>
                      <Image src="/Fire.png" alt="" width={18} height={18} />
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <p className="text-[12px] text-[#E2E8FF80]">
                        Cluster name
                      </p>
                      <p className="text-[14px] text-[#E2E8FF]">
                        Security essentials
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#E2E8FF80] mb-2">
                        Cluster ID
                      </p>
                      <p className="border border-[#E2E8FF0D] rounded-sm bg-[#211B1A80] w-[62px] h-[21px] flex items-center justify-center text-[10px] text-[#E0E4E7]">
                        SES-100
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <div className="flex-1 min-w-[140px] h-[5px] rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-cyan-500"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="text-xs text-slate-500">15wks</div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Consistency chain
                    </span>
                    <div className="flex flex-col items-center text-[#E2E8FFA6] text-[8px]">
                      <Image
                        src="/Collision.png"
                        alt=""
                        width={18}
                        height={18}
                        className="mb-1"
                      />
                      Ongoing
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    {weekProgress.map((week, i) => (
                      <div key={week.week} className="flex items-center gap-3">
                        <div className="flex flex-col min-w-[90px]">
                          <span className="text-[10px] text-[#E2E8FF]">
                            {week.week}
                          </span>
                          <div
                            className={`flex items-center gap-2 rounded-full px-2 h-[18px] text-[8px] ${
                              week.status === "Accomplished"
                                ? "bg-[#0e5e0f80] text-[#05F60B80]"
                                : "bg-[#DF30331A] text-[#DF303399]"
                            }`}
                          >
                            <Image
                              src={
                                week.status === "Accomplished"
                                  ? "/Arrow1.png"
                                  : "/Arrow2.png"
                              }
                              alt={week.status}
                              width={8}
                              height={8}
                            />
                            {week.status}
                          </div>
                        </div>
                        <div className="flex-1 h-6 bg-slate-800 rounded-sm overflow-hidden">
                          <div
                            className="h-full bg-linear-to-r from-[#12688200] to-[#21B9E8CC] rounded text-[10px] text-[#21B9E8] flex items-center px-2"
                            style={{ width: `${week.progress}%` }}
                          >
                            {week.progress}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join Cyberspace */}
                <div className="rounded-[14px] border border-white/5 bg-[#040E16] p-4 sm:p-6 w-full sm:w-1/2 flex flex-col justify-between">
                  <p className="text-[10px] font-medium text-[#92E182] border rounded-lg w-[110px] h-[31px] border-[#E2E8FF0D] bg-[#1B211A80] text-center pt-2 mx-auto sm:mx-0">
                    Join cyberspace
                  </p>
                  <p className="mt-8 mb-8 text-sm sm:text-base font-['Inter'] text-center text-[#E2E8FF80] leading-relaxed">
                    &quot;Join a team, learn from top minds, and grow with the
                    cyberspace squad. Choose an existing cyberspace that aligns
                    with your goals or build your dream team.&quot;
                  </p>

                  <div className="flex items-center justify-center">
                    <button className="mt-2 rounded-[10px] border border-[#E2E8FF0D] w-[110px] h-[34px] text-[11px] text-[#E2E8FFCC] bg-[#0D171F] hover:bg-[#0D171F]/80">
                      Coming soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analytics Tabs */}
          <div className="flex flex-wrap gap-2 text-xs px-2 sm:px-5 mt-8 sm:mt-10 border-[#E2E8FF0D]">
            {analyticsOptions.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`rounded-xl w-auto px-2 sm:px-3 h-[32px] sm:h-[34px] transition text-[10px] sm:text-xs mb-2 mr-2 sm:mr-4 ${
                  selectedTab === tab ||
                  (index === 0 && selectedTab === "Analytics")
                    ? "bg-linear-to-br from-[#040E16] via-[#040E16] to-[#174F7C] text-[#E2E8FF] border border-[#E2E8FF0D] font-semibold"
                    : "bg-transparent text-[#E2E8FF99] hover:text-[#E2E8FF]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="h-px flex-1 bg-[#E2E8FF0D] mx-2 sm:mx-4" />

          {/* Main Content Grid */}
          <section className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-8 px-1 sm:px-4 lg:px-5">
            <div className="space-y-3 sm:space-y-6 w-full">
              {/* Cluster Skill Matrix */}
              <div className="rounded-lg border border-[#E2E8FF0A] bg-[#030b17] py-4 sm:py-6 px-3 sm:px-6 bg-linear-to-br from-[#040E16] via-[#040E16] to-[#174F7C] w-full">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[9px] sm:text-[10px] font-medium border border-[#E2E8FF0D] bg-[#0D171F] rounded-lg w-auto px-3 h-[28px] sm:h-[31px] flex items-center justify-center text-[#B3B3B3]">
                    Cluster skill matrix
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#E2E8FF80]">
                    Security essentials
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-6 md:flex-row">
                  {[
                    { title: "Cluster skill matrix", metrics: skillMetrics },
                    { title: "Security essentials", metrics: skillMetrics },
                  ].map(({ title, metrics }) => (
                    <div key={title} className="flex-1 space-y-3">
                      <h3 className="text-xs sm:text-sm text-cyan-400">
                        {title}
                      </h3>
                      {metrics.map((item, index) => (
                        <div key={`${title}-${index}`} className="relative">
                          <div className="h-7 sm:h-8 bg-slate-900/60 rounded w-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500/40 to-cyan-500 rounded flex items-center px-2 text-[10px] sm:text-xs font-semibold text-cyan-100"
                              style={{ width: `${item.progress}%` }}
                            >
                              {item.progress}%
                            </div>
                          </div>
                          <div className="absolute inset-y-0 right-2 flex items-center text-[10px] sm:text-xs text-slate-300">
                            {item.skill}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Progress */}
              <div className="rounded-lg border border-[#E2E8FF0A] p-3 sm:p-6 text-[#fdeeb0] w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
                  <p className="text-[8px] sm:text-[10px] font-medium bg-[#21201A80] text-[#E1D082] border border-[#E2E8FF0D] rounded-lg w-auto px-3 py-1.5 flex items-center justify-center">
                    Education progress
                  </p>
                </div>
                <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-2">
                  {dashboardData?.executeMetrics?.map((metric) => (
                    <div
                      key={metric.label}
                      className="px-2 sm:px-4 py-3 sm:py-5 text-white flex gap-3"
                    >
                      <div className="border rounded-full border-[#E2E8FF0D] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex items-center justify-center bg-[#101A21] shrink-0">
                        <Image
                          src={metric.image}
                          alt={metric.label}
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[8px] sm:text-xs text-[#A7A7A7] truncate">
                          {metric.label}
                        </p>
                        <p className="mt-1 text-[8px] sm:text-[10px] font-semibold border-2 border-[#E2E8FF0D] w-[42px] rounded-md h-[18px] sm:h-[21px] flex items-center justify-center bg-[#101A21]">
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Chain */}
              <div className="rounded-lg border border-[#E2E8FF0A] bg-[#060c16] p-3 sm:p-6 w-full">
                <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center">
                  <Image
                    src="/Frame5.png"
                    alt="skill chain"
                    width={50}
                    height={50}
                    className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]"
                  />
                  <div className="min-w-0">
                    <p className="text-[8px] sm:text-xs font-normal text-[#E2E8FF80]">
                      Skill chain
                    </p>
                    <p className="text-sm sm:text-base font-medium text-[#E2E8FF] mb-1 sm:mb-2 mt-0.5 sm:mt-1 truncate">
                      {dashboardData?.skillChainData?.name || "Loading..."}
                    </p>
                    <div className="border border-[#E2E8FF0D] text-[8px] sm:text-[10px] rounded-md w-[41px] sm:w-[42px] h-[18px] sm:h-[21px] flex items-center justify-center bg-[#101A21]">
                      {dashboardData?.skillChainData?.completed || 0}/
                      {dashboardData?.skillChainData?.total || 0}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6 w-full">
              <div className="rounded-[14px] border border-[#FFFFFF14] bg-[#040E16] p-3 sm:p-6 w-full min-h-[500px] sm:min-h-[700px] lg:min-h-[820px]">
                <div className="flex items-center justify-center w-[133px] px-2 h-[28px] sm:h-[31px] text-[#8282E10D] border border-[#E2E8FF0D] rounded-lg bg-[#8282E10D] mx-auto lg:mx-0">
                  <p className="text-[8px] sm:text-[10px] font-medium text-[#8282E1] whitespace-nowrap">
                    Career skill progression
                  </p>
                </div>
                <div className="relative mt-4 sm:mt-6 flex min-h-[280px] sm:min-h-[360px] items-center justify-center">
                  <div className="relative flex h-48 sm:h-64 w-48 sm:w-64 items-center justify-center rounded-full bg-[conic-gradient(#1CB948_0deg,#2D47C8_50deg,#C32DC8CC_100deg,#30FFFFB2_150deg,#30FFFFB2_200deg,#C82D2F_250deg,#9D9D9D_300deg,#FF7E05CC_360deg)]">
                    <div className="absolute inset-6 rounded-full bg-[#040817]" />
                    <div className="relative z-10 text-center hidden md:block">
                      <Image
                        src="/Vector1.png"
                        alt="vector"
                        width={103}
                        height={125}
                        className="mx-auto"
                      />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src="/Ellipse.png"
                          alt="Ellipse"
                          width={6}
                          height={6}
                        />
                      </div>
                    </div>
                    <div className="absolute -right-0 lg:-right-24 top-1/2 w-[200px] lg:w-[240px] min-h-[90px] -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0D1C28] px-3 sm:px-4 py-3 text-[10px] sm:text-xs text-white shadow-lg">
                      <p className="text-xs sm:text-sm font-semibold">
                        <span className="text-[#E2E8FF99] mr-1">
                          Vulnerability Researcher
                        </span>
                        <span className="text-[#30FFFF]">85%</span>
                      </p>
                      <p className="text-[#E2E8FF99] text-[10px] sm:text-[12px] mt-1">
                        Hunt for flaws in software, hardware, or systems, often
                        discovering zero-days and developing exploits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <ul className="mt-6 sm:mt-10 space-y-2 sm:space-y-3 text-[8px] sm:text-xs text-[#E2E8FFB2] flex flex-col">
                  {careerSkills.map((skill, i) => (
                    <li key={`career-skill-${i}`} className="w-full">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="flex-1 min-w-[120px] truncate text-end">
                          {skill.name}
                        </span>
                        <div className="flex-1 h-[7px] sm:h-[9px] bg-slate-800/50 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${skill.color} rounded`}
                            style={{ width: `${skill.progress}%` }}
                          />
                        </div>
                        <span className="text-white/70 text-right w-10 sm:w-12">
                          {skill.progress}%
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Study Time */}
          <section className="mt-4 sm:mt-6 space-y-4 sm:space-y-6 ml-1 sm:ml-5 mr-1 sm:mr-3 mb-12 px-1 sm:px-0">
            <div className="rounded-[14px] border w-full h-auto border-[#E2E8FF0A] bg-[#051022] p-3 sm:p-6 shadow-[0_20px_60px_rgba(3,10,22,0.45)]">
              <div className="flex flex-col gap-2 sm:gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                  <p className="text-[8px] sm:text-[10px] font-semibold bg-[#1C2112] text-[#E1D082] border border-[#2A3220] rounded-lg w-auto px-2 py-1.5 sm:px-3 sm:py-2 flex items-center justify-center tracking-wide">
                    Study time
                  </p>
                  <div className="text-[8px] sm:text-[10px] text-[#E2E8FF] border border-[#182233] bg-[#0B1625] rounded-lg w-auto px-2 py-1.5 sm:px-4 sm:py-2 flex items-center justify-center gap-1 sm:gap-2">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E2E8FF99]" />
                    <span>
                      {new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    setStudyData(
                      Array.from({ length: 25 }, (_, i) => ({
                        day: 9 + i,
                        hours: 0,
                      }))
                    )
                  }
                  className="flex items-center gap-1 sm:gap-2 rounded-lg border border-[#151F30] bg-[#0A1525] px-2 sm:px-4 py-1.5 sm:py-2 text-[8px] sm:text-[10px] font-semibold text-[#E2E8FF] cursor-pointer shadow-[0_5px_25px_rgba(6,15,30,0.6)] hover:bg-[#0A1525]/80 whitespace-nowrap"
                >
                  <RotateCcw className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#8FB9FF]" />
                  Reset
                </button>
              </div>

              <div className="relative mt-6 sm:mt-8 overflow-hidden rounded-[2px] border border-[#081427] bg-[#031022] p-4 sm:p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,98,195,0.2),transparent_65%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_85%,rgba(255,255,255,0.03)_85%)] opacity-70" />
                <div className="relative z-10">
                  <div className="relative h-40 sm:h-44 w-full">
                    <div className="absolute inset-0 flex items-stretch min-w-[600px] sm:min-w-0">
                      {studyData.map((label, index) => (
                        <span
                          key={`grid-${label.day}-${index}`}
                          className="flex-1 border-l border-white/5 opacity-30 first:border-l last:border-r"
                        />
                      ))}
                    </div>
                    <div className="absolute inset-x-0 bottom-14 h-px bg-linear-to-r from-transparent via-[#3BC3FF] to-transparent" />
                    <div className="absolute inset-x-8 bottom-14 h-12 bg-linear-to-b from-[#3BC3FF66] via-[#0A283F] to-transparent opacity-70 blur-[30px]" />
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[10px] text-[#8EA3C0]">
                    {studyData.map((label, index) => (
                      <span
                        key={`axis-label-${label.day}-${index}`}
                        className="min-w-[14px] text-center"
                      >
                        {label.day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
