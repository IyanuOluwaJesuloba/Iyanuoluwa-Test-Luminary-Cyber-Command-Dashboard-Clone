"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import ConsistencyModal from "./components/consistency-modal";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { Calendar, RotateCcw } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

// Type Definitions for Dynamic Data
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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("Analytics");

  // Fetch data from backend
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch("/api/dashboard");
        
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        
        const data = await response.json();
        setDashboardData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setDashboardData(null);
        // Set fallback/mock data
        setDashboardData(getMockData());
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Mock data for development/fallback
  const getMockData = (): DashboardData => ({
    clusterName: "N/A",
    clusterId: "N/A",
    discoveryStats: [
      { label: "", value: "N/A", percentage: 0 },
    ],
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
      { label: "Completed nodes", value: "0 / 9" },
      { label: "Completed sections", value: "0 / 9" },
      { label: "Completed lessons", value: "0 / 9" },
      { label: "Completed exercises", value: "0 / 9" },
    ],
    skillProgression: [
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #01070D, #F5F5F5)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #B81A1A, #800B0B)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #F0863A, #8A4D21)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #05131E, #176A16)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #05131E, #1C60AC)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #C89961, #A3227B)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #3D6CEB, #2AE0DB)" },
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

  const tabs = [
    "Cyber Command",
    "Overview",
    "Nodes",
    "Reviews",
    "Reports",
    "Labs",
  ];

  const analyticsOptions = [
    "Analytics",
    "Completed nodes",
    "Completed clusters",
    "To do list",
    "Recently added",
  ];

  const studyAxisLabels = Array.from({ length: 25 }, (_, i) => {
    const dayNum = 9 + i;
    return dayNum > 30 ? (dayNum - 30).toString() : dayNum.toString();
  });

  if (loading) {
    return (
      <div className={`${inter.className} min-h-screen bg-[#040E16] text-white flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className={`${inter.className} min-h-screen bg-[#040E16] text-white flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-red-400 mb-4">{error || "Failed to load dashboard"}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-cyan-600 rounded-lg text-white hover:bg-cyan-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${inter.className} min-h-screen bg-[#040E16] text-white`}>
      <Sidebar />
      <div className="ml-16 sm:ml-20 lg:ml-20 w-[calc(100%-4rem)] sm:w-[calc(100%-5rem)]">
        <Header breadcrumbTitle="Cyber Command"/>
        <div className="px-4 sm:px-6 py-4">
          {/* Tab Navigation */}
          <nav className="flex flex-wrap gap-2 text-xs ml-2 sm:ml-4">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`rounded-[10px] px-3 sm:px-4 py-2 transition text-xs whitespace-nowrap ${
                  index === 0
                    ? "bg-[#040E16] text-[#E2E8FF] border border-[#E2E8FF0D] font-semibold"
                    : "text-[#E2E8FF99] hover:text-[#E2E8FF]"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Main Content Section */}
          <section className="mt-6 sm:mt-8 gap-4 sm:gap-6 px-2 sm:px-5">
            <div className="flex flex-col lg:flex-row w-full gap-3 sm:gap-4">
              {/* Card Section */}
              <div className="w-full lg:w-1/2">
                <Image
                  src="/Card.png"
                  alt="upgrade"
                  width={0}
                  height={0}
                  className="w-full h-auto rounded-xl"
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Consistency Chain Card */}
                <div className="rounded-[14px] border border-white/5 bg-[#040E16] p-4 sm:p-6 w-full sm:w-1/2">
                  <div className="flex items-start justify-between mb-5">
                    <div className="border border-[#E2E8FF0D] rounded-lg bg-[#211B1A80] w-[108px] h-[31px] flex items-center justify-center">
                      <p className="text-[10px] font-semibold text-[#E18682]">
                        Consistency chain
                      </p>
                    </div>
                    <button className="rounded-xl border border-[#E2E8FF0D] w-[35px] h-[31px] flex items-center justify-center hover:bg-white/5">
                      <Image
                        src="/elements2.png"
                        alt="sync"
                        width={0}
                        height={0}
                        className="w-[11.25px] h-[10px]"
                      />
                    </button>
                  </div>

                  <div>
                    <div className="mb-5">
                      <p className="text-[12px] text-[#E2E8FF80]">Cluster name</p>
                      <p className="text-[14px] text-[#E2E8FF]">
                        {dashboardData.clusterName}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#E2E8FF80] mb-2">Cluster ID</p>
                      <p className="border border-[#E2E8FF0D] rounded-sm bg-[#211B1A80] w-[39px] h-[12px] flex items-center justify-center text-[10px] text-[#E0E4E7]">
                        {dashboardData.clusterId}
                      </p>
                    </div>
                  </div>

                  {/* Discovery Stats */}
                  <div className="mt-6 space-y-4 mb-5">
                    {dashboardData.discoveryStats.map((stat, index) => (
                      <div key={`stat-${index}`}>
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                          <span>{stat.label}</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="mt-2 w-[153px] h-[5px] rounded-full bg-white/5">
                            <div
                              className="rounded-full bg-linear-to-r from-cyan-400 to-blue-600"
                              style={{
                                width: `${stat.percentage}%`,
                              }}
                            />
                          </div>
                          <p className="text-[#E2E8FF80] text-[8px] mt-1.5">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Consistency Chain Weeks */}
                  <div className="mt-6">
                    <div className="text-xs text-[#E2E8FF80] mb-5">
                      Consistency chain
                    </div>
                    <div>
                      {dashboardData.consistencyChain.map((wk, index) => (
                        <div key={`week-${index}`} className="flex items-center justify-between">
                          <div className="flex-col mb-4">
                            <div className="text-[10px] text-[#E2E8FF] flex items-center justify-center mb-1">
                              {wk.label}
                            </div>
                            <div className="text-[8px] text-[#D4C6C680] bg-[#C6C6C61A] w-[39px] h-[13px] rounded-xl flex items-center justify-center">
                              -{wk.value}
                            </div>
                          </div>
                          <div className="gap-2 w-1/2 -mt-2">
                            <p className="text-[#21B9E8] text-[12px] mt-1.5 border border-[#E2E8FF0D] rounded-lg w-[47px] h-[37px] flex items-center justify-center bg-linear-to-br from-[#0C5062] to-[#21B9E8CC]">
                              {wk.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Join Cyberspace Card */}
                <div className="rounded-[14px] border border-white/5 bg-[#040E16] p-4 sm:p-6 w-full sm:w-1/2">
                  <p className="text-[10px] font-medium text-[#92E182] border rounded-lg w-[99px] h-[31px] border-[#E2E8FF0D] bg-[#1B211A80] text-center pt-2">
                    Join cyberspace
                  </p>
                  <p className="mt-20 mb-10 text-md font-normal font-['Inter'] text-center text-[#E2E8FF80]">
                    &quot;Join a team, learn from top minds, and grow with the
                    cyberspace squad. Choose an existing cyberspace that aligns
                    with your goals or build your dream team.&quot;
                  </p>

                  <div className="flex items-center justify-center">
                    <button className="mt-6 rounded-[10px] border border-[#E2E8FF0D] w-[83px] h-[31px] text-[10px] text-[#E2E8FFCC] bg-[#0D171F] hover:bg-[#0D171F]/80">
                      Coming soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analytics Tabs */}
          <div className="flex flex-wrap gap-2 text-xs px-2 sm:px-5 mt-8 sm:mt-10 border-[#E2E8FF0D]">
            <div>
              {analyticsOptions.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`rounded-xl w-[143px] h-[34px] transition text-xs mb-2 mr-6 ${
                    selectedTab === tab || (index === 0 && selectedTab === "Analytics")
                      ? "bg-linear-to-br from-[#040E16] via-[#040E16] to-[#174F7C] text-[#E2E8FF] border border-[#E2E8FF0D] text-semibold"
                      : "bg-transparent text-[#E2E8FF99] hover:text-[#E2E8FF]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px flex-1 bg-[#E2E8FF0D] mx-2 sm:mx-4" />

          {/* Main Grid Section */}
          <section className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-26 ml-2 sm:ml-5 mr-2 sm:mr-5">
            {/* Left Column */}
            <div className="space-y-2 w-[716px] h-[880px]">
              {/* Cluster Skill Matrix */}
              <div className="rounded-lg border border-[#E2E8FF0A] bg-[#030b17] py-6 bg-linear-to-br from-[#040E16] via-[#040E16] to-[#174F7C] w-[716px] h-[446px]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-medium border border-[#E2E8FF0D] ml-5 bg-[#0D171F] rounded-lg w-[109px] h-[31px] flex items-center justify-center text-[#B3B3B3]">
                      Cluster skill matrix
                    </p>
                  </div>
                </div>

                <div className="relative mt-8">
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#E2E8FF1A] md:block"
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    {dashboardData.clusterColumns.map((column) => (
                      <div
                        key={column.id}
                        className="border text-xs border-[#E2E8FF26] bg-linear-to-br ml-7 text-[#21B9E8] from-[#126882] via-[#126882] to-[#21B9E8] w-[37px] h-[27px] rounded-lg flex items-center justify-center"
                      >
                        {column.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Progress */}
              <div className="rounded-lg border border-[#E2E8FF0A] p-6 text-[#fdeeb0] w-[716px] h-[294px]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-medium bg-[#21201A80] text-[#E1D082] border border-[#E2E8FF0D] rounded-lg w-[113px] h-[31px] flex items-center justify-center">
                      Education progress
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  {dashboardData.executeMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="px-4 py-5 text-white flex gap-3"
                    >
                      <div className="border rounded-full border-[#E2E8FF0D] w-[50px] h-[50px] flex items-center justify-center bg-[#101A21]">
                        <Image
                          src="/elements3.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-[15.83px] h-[16.67px]"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-[#A7A7A7]">{metric.label}</p>
                        <p className="mt-1 text-[10px] font-semibold border-2 border-[#E2E8FF0D] w-[42px] rounded-md h-[21px] flex items-center justify-center bg-[#101A21]">
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Chain */}
              <div className="rounded-lg border border-[#E2E8FF0A] bg-[#060c16] p-6 w-[716px] h-[122px]">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                  <div>
                    <Image
                      src="/frame.png"
                      alt=""
                      width={0}
                      height={0}
                      className="w-[50px] h-[50px]"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-normal text-[#E2E8FF80]">
                      Skill chain
                    </p>
                    <p className="text-md font-medium text-[#E2E8FF] mb-2 mt-1">
                      {dashboardData.skillChainData.name}
                    </p>
                    <div className="border border-[#E2E8FF0D] text-[10px] rounded-md w-[42px] h-[21px] flex items-center justify-center bg-[#101A21]">
                      {dashboardData.skillChainData.completed}/
                      {dashboardData.skillChainData.total}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skill Progression */}
            <div className="space-y-6 mr-4">
              <div className="rounded-[14px] border border-[#FFFFFF14] bg-[#040E16] p-6 w-[635px] h-[880px]">
                <div className="flex items-center justify-center w-[133px] h-[31px] text-[#8282E10D] border border-[#E2E8FF0D] rounded-lg bg-[#8282E10D]">
                  <p className="text-[10px] font-medium text-[#8282E1]">
                    Career skill progression
                  </p>
                </div>
                <div className="relative mt-6 flex min-h-[360px] items-center justify-center">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-[conic-gradient(#1CB948_0deg,#2D47C8_50deg,#C32DC8CC_100deg,#30FFFFB2_150deg,#30FFFFB2_200deg,#C82D2F_250deg,#9D9D9D_300deg,#FF7E05CC_360deg)]">
                    <div className="absolute inset-6 rounded-full bg-[#040817]" />
                    <div className="relative z-10 text-center">
                      <Image
                        src="/ellipse.png"
                        alt="Ellipse"
                        width={0}
                        height={0}
                        className="w-[20px] h-[20px]"
                      />
                    </div>
                    <div className="absolute -right-20 top-1/2 w-[192px] h-[67px] -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0D1C28] px-4 py-3 text-xs text-white shadow-lg">
                      <p className="text-sm font-semibold">
                        <span className="text-[#E2E8FF99] mr-1">N/A</span>
                        <span className="text-[#C82D2F]">0%</span>
                      </p>
                      <p className="text-[#E2E8FF99] text-sm">No available data</p>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <ul className="mt-12 space-y-4 text-xs text-[#E2E8FFB2] flex flex-col items-center justify-center">
                  {dashboardData.skillProgression.map((item, index) => (
                    <li key={`skill-${index}`} className="w-[266px]">
                      <div className="flex items-center w-full">
                        <div className="flex items-center gap-3">
                          <span>{item.label}</span>
                          <span
                            className="flex-shrink-0 inline-block h-[9px] w-[14px] rounded-full mr-1"
                            style={{ background: item.gradient }}
                          />
                        </div>
                        <span className="text-white/60 text-xs">
                          {item.percentage}%
                        </span>
                        <div className="h-[2px] flex-1 bg-[#E2E8FF0D] mx-2" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Study Time Section */}
          <section className="mt-2 space-y-6 ml-2 sm:ml-5 mr-2 sm:mr-3 mb-12">
            <div className="rounded-[14px] border w-full h-auto border-[#E2E8FF0A] bg-[#051022] p-4 sm:p-6 shadow-[0_20px_60px_rgba(3,10,22,0.45)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[10px] font-semibold bg-[#1C2112] text-[#E1D082] border border-[#2A3220] rounded-lg w-[96px] h-[31px] flex items-center justify-center tracking-wide">
                    Study time
                  </p>
                  <div className="text-[10px] text-[#E2E8FF] border border-[#182233] bg-[#0B1625] rounded-lg w-[138px] h-[31px] flex items-center justify-center gap-2 px-3">
                    <Calendar className="w-3.5 h-3.5 text-[#E2E8FF99]" />
                    <span>{new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 rounded-lg border border-[#151F30] bg-[#0A1525] px-4 py-2 text-[10px] font-semibold text-[#E2E8FF] shadow-[0_5px_25px_rgba(6,15,30,0.6)] hover:bg-[#0A1525]/80">
                  <RotateCcw className="h-3.5 w-3.5 text-[#8FB9FF]" />
                  Reset
                </button>
              </div>

              <div className="relative mt-8 overflow-hidden rounded-[2px] border border-[#081427] bg-[#031022] p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,98,195,0.2),transparent_65%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_85%,rgba(255,255,255,0.03)_85%)] opacity-70" />
                <div className="relative z-10">
                  <div className="relative h-44 w-full">
                    <div className="absolute inset-0 flex items-stretch">
                      {studyAxisLabels.map((label, index) => (
                        <span
                          key={`grid-${label}-${index}`}
                          className="flex-1 border-l border-white/5 opacity-30 first:border-l last:border-r"
                        />
                      ))}
                    </div>
                    <div className="absolute inset-x-0 bottom-14 h-px bg-linear-to-r from-transparent via-[#3BC3FF] to-transparent" />
                    <div className="absolute inset-x-8 bottom-14 h-12 bg-linear-to-b from-[#3BC3FF66] via-[#0A283F] to-transparent opacity-70 blur-[30px]" />
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[10px] text-[#8EA3C0]">
                    {studyAxisLabels.map((label) => (
                      <span
                        key={`axis-label-${label}`}
                        className="min-w-[14px] text-center"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ConsistencyModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}