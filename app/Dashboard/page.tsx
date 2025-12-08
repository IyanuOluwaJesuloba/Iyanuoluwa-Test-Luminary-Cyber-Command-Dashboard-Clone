
"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Calendar, RotateCcw, } from "lucide-react";

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

import { Search, Bell, Grid, Settings, BarChart3, Lock, Target, Clock, Zap, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedTab, setSelectedTab] = useState("Analytics");
   const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [studyData, setStudyData] = useState<Array<{day: number, hours: number}>>(Array.from({ length: 31 }, (_, i) => ({
      day: 9 + i,
      hours: i === 19 ? 6 : Math.random() * 2 + 0.5
    })));

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
      { label: "Completed nodes", value: "0 / 9", image: "/nodes.png" },
      { label: "Completed sections", value: "0 / 9", image: "/elements3.png" },
      { label: "Completed lessons", value: "0 / 9", image: "/section.png" },
      { label: "Completed exercises", value: "0 / 9", image: "/stretch.png" },
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


  const weekProgress = [
    { week: 'Week 1', status: 'Accomplished', progress: 100 },
    { week: 'Week 2', status: 'Accomplished', progress: 100 },
    { week: 'Week 3', status: 'Unaccomplished', progress: 50 },
    { week: 'Week 4', status: 'Unaccomplished', progress: 50 },
  ]
  const tabs = [
    "Cyber Command",
    "Overview",
    "Nodes",
    "Reviews",
    "Reports",
    "Labs",
  ];

  const skillMetrics = [
    { skill: 'Windows Administration', progress: 50 },
    { skill: 'Linux Administration', progress: 100 },
    { skill: 'Cryptography', progress: 25 },
    { skill: 'System Optimization', progress: 80 },
    { skill: 'Defense in Depth', progress: 60 },
    { skill: 'Client-Side Attack', progress: 20 },
    { skill: 'Active Directory', progress: 60 },
    { skill: 'Server-Side Attack', progress: 30 }
  ];

  const analyticsOptions = [
    "Analytics",
    "Completed nodes",
    "Completed clusters",
    "To do list",
    "Recently added",
  ];

  const careerSkills = [
    { name: 'Network Penetration Tester', progress: 80, color: 'bg-[#E2E8FF1A]' },
    { name: 'Red Teamer', progress: 40, color: 'bg-red-500' },
    { name: 'Exploit Developer', progress: 35, color: 'bg-pink-500' },
    { name: 'Application Security Eng...', progress: 95, color: 'bg-green-500' },
    { name: 'Cybersecurity Analyst I', progress: 95, color: 'bg-blue-500' },
    { name: 'Specialized Domain (Ghost, IOT, Mobile, SCADA/ICS)', progress: 75, color: 'bg-red-600' },
    { name: 'Vulnerability Researcher', progress: 85, color: 'bg-cyan-500' }
  ];
  //  const studyDta = Array.from({ length: 31 }, (_, i) => ({
  //   day: 9 + i,
  //   hours: i === 19 ? 6 : Math.random() * 2 + 0.5
  // }));

  // const studyAxisLabels = Array.from({ length: 25 }, (_, i) => {
  //   const dayNum = 9 + i;
  //   return dayNum > 30 ? (dayNum - 30).toString() : dayNum.toString();
  // });

  return (
    <div className={`${inter.className} min-h-screen bg-[#040E16] text-white`}>
      {/* Header */}
       <div className="hidden sm:block">
         <Sidebar />
       </div>
       <div className="ml-16 sm:ml-20 lg:ml-20 w-[calc(100%-4rem)] sm:w-[calc(100%-5rem)]">
       <Header breadcrumbTitle='Cyber Command'/>

      {/* Main Content */}
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
        {/* Hero Section */}
          <section className="mt-8 gap-6 px-5">
            <div className="flex w-full gap-3">
              {/* Card Section */}
              <div className="w-1/2">
                <Image
                  src="/Card.png"
                  alt="upgrade"
                  width={0}
                  height={0}
                  className="w-full h-full rounded-xl"
                />
              </div>       
          
          {/* Progress Cards */}
          <div className="w-1/2 flex gap-3">
            {/* Consistency Chain */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 w-1/2">
              <div className="flex items-center gap-4 mb-3">
                <div className="border border-[#E2E8FF0D] rounded-[10px] bg-[#211B1A80] w-[108px] h-[31px] flex items-center justify-center">
                      <p className="text-[10px] font-semibold text-[#E18682]">
                        Consistency chain
                      </p>
                  </div>                
                    <div className="text-[10px] rounded-[10px] bg-[#211B1A80] border border-[#E2E8FF0D] w-[41px] h-[31px] flex items-center justify-center gap-2">
                      <div className='text-[#E18682]'> 1 </div>
                  <Image src="/Fire.png" alt="" width={18} height={18}/>
                </div>
              </div>
               <div>
                    <div className="mb-5">
                      <p className="text-[12px] text-[#E2E8FF80]">Cluster name</p>
                      <p className="text-[14px] text-[#E2E8FF]">
                        Security essentials
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#E2E8FF80] mb-2">Cluster ID</p>
                      <p className="border border-[#E2E8FF0D] rounded-sm bg-[#211B1A80] w-[62px] h-[21px] flex items-center justify-center text-[10px] text-[#E0E4E7]">
                       SES-100
                      </p>
                    </div>
                  </div>
              <div className="mb-2 gap-2 flex">
                <div className="mt-2 w-[153px] h-[5px] rounded-full bg-white/5">
                  <div className="h-[40%] rounded bg-cyan-500" style={{ width: '40%' }} />
                </div>
                <div className="text-xs text-slate-500 mt-1 text-right">15wks</div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500">Consistency chain</span>
                <div className="text-lg flex flex-col item-center justify-center">
                  <Image src="/Collision.png" alt="" width={18} height={18} className='ml-1.5'/>
                  <div className='text-[8px] text-[#E2E8FFA6]'>Ongoing</div>
                </div>
              </div>
              {weekProgress.map((week, i) => (
                <div key={i} className="mb-2 flex gap-3">
                  <div className="flex flex-col mb-1 w-[40%] ">
                    <span className="text-[10px] text-[#E2E8FF]">{week.week}</span>
                    <div className={`flex px-1 py- items-center gap-2 rounded-[50px] w-[73px] h-[13px]  text-[8px] ${week.status === 'Accomplished' ? 'bg-[#0e5e0f80]' : 'bg-[#DF30331A]'}`}>
                  <Image
                    src={week.status === 'Accomplished' ? '/Arrow1.png' : '/Arrow2.png'}
                    alt={week.status}
                    width={3.33}
                    height={3.33}
                  />
                            
                    <span className={`text-[8px] ${week.status === 'Accomplished' ? 'text-[#05F60B80]' : 'text-[#DF303399]'}`}>
                      {week.status}
                    </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-[60%] h-full">
                    <div className="flex-1 h-7 bg-slate-800 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-[#12688200] to-[#21B9E8CC] rounded"
                      style={{ width: `${week.progress}%` }}>
                    <div className="text-xs text-[#21B9E8] w-10 p-1.5 ">{week.progress}%</div>

                    </div>
                  
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Join Cyberspace */}
            <div className="rounded-[14px] border border-white/5 bg-[#040E16] p-6 w-1/2">
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
          <div className="flex flex-wrap gap-2 text-xs px-5 mt-10 border-[#E2E8FF0D]">
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

          <div className="h-px flex-1 bg-[#E2E8FF0D] mx-4" />

        {/* Skills Matrix */}
        <div className="flex gap-19 mb-8 mt-5">
          <div className="space-y-2 w-[716px] h-[880px]">
          {/* Cluster Skill Matrix */}
          <div className='bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl ml-5 p-6 flex gap-6 w-[760px] h-[451px]'>
         <div className="w-1/2">
            <h3 className="text-sm text-cyan-500 mb-4">Cluster skill matrix</h3>
            <div className="space-y-3">
            {skillMetrics.map((item, i) => (
            <div key={i} className="relative mb-">
              {/* Progress Bar Container */}
              <div className="h-8 bg-slate-800/50 rounded w-full overflow-visible">
             <div
            className="h-full bg-gradient-to-r from-cyan-500/50 to-cyan-500 rounded relative flex items-center"
            style={{ width: `${item.progress}%` }} >
            <span className="text-xs text-cyan-500 font-semibold ml-2">
              {item.progress}%
            </span>
          </div>
        </div>
        
        {/* Skill Name - Fixed at the END of container, NOT moving with bar */}
        <div className="absolute top-0 right-0 flex items-center h-8 pr-2">
          <span className="text-xs text-slate-400 whitespace-nowrap">
            {item.skill}
          </span>
        </div>
        </div>
        ))}
      </div>
      </div>

      <div className="w-px bg-slate-700 h-full"></div>

          {/* Security Essentials */}
          <div className="w-1/2">
            <h3 className="text-sm text-cyan-500 mb-4">Security essentials</h3>
            <div className="space-y-3">
            {skillMetrics.map((item, i) => (
            <div key={i} className="relative mb-">
              {/* Progress Bar Container */}
              <div className="h-8 bg-slate-800/50 rounded w-full overflow-visible">
             <div
            className="h-full bg-gradient-to-r from-cyan-500/50 to-cyan-500 rounded relative flex items-center"
            style={{ width: `${item.progress}%` }} >
            <span className="text-xs text-cyan-500 font-semibold ml-2">
              {item.progress}%
            </span>
          </div>
        </div>
        
        {/* Skill Name - Fixed at the END of container, NOT moving with bar */}
        <div className="absolute top-0 right-0 flex items-center h-8 pr-2">
          <span className="text-xs text-slate-400 whitespace-nowrap">
            {item.skill}
          </span>
        </div>
        </div>
        ))}
        </div>
        </div>
          </div>

          
                        {/* Education Progress */}
                        <div className="rounded-lg border border-[#E2E8FF0A] p-6 ml-5 text-[#fdeeb0] w-[755px] h-[294px]">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <p className="text-[10px] font-medium bg-[#21201A80] text-[#E1D082] border border-[#E2E8FF0D] rounded-lg w-[113px] h-[31px] flex items-center justify-center">
                                Education progress
                              </p>
                            </div>
                          </div>
                          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                            {dashboardData?.executeMetrics?.map((metric) => (
                              <div
                                key={metric.label}
                                className="px-4 py-5 text-white flex gap-3"
                              >
                                <div className="border rounded-full border-[#E2E8FF0D] w-[50px] h-[50px] flex items-center justify-center bg-[#101A21]">
                                  <Image
                                  src={metric.image}
                                  alt={metric.label}
                                  width={20}
                                  height={20}/>
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

                        <div className="rounded-lg border border-[#E2E8FF0A] bg-[#060c16] p-6 ml-5 w-[755px] h-[122px]">
                          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                            <div>
                              <Image
                                src="/frame5.png"
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
                                {dashboardData?.skillChainData?.name || 'Loading...'}
                              </p>
                              <div className="border border-[#E2E8FF0D] text-[10px] rounded-md w-[42px] h-[21px] flex items-center justify-center bg-[#101A21]">
                                {dashboardData?.skillChainData?.completed || 0}/
                                {dashboardData?.skillChainData?.total || 0}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Career Skills Wheel */}
                      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 w-[605px] h-[878px]">
                          <div className="">
                            <div className="flex items-center justify-center w-[133px] h-[31px] text-[#8282E10D] border border-[#E2E8FF0D] rounded-lg bg-[#8282E10D]">
                              <p className="text-[10px] font-medium text-[#8282E1]">
                                Career skill progression
                              </p>
                            </div>
                            <div className="relative mt-6 flex min-h-[360px] items-center justify-center tooltip">
                              <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-[conic-gradient(#1CB948_0deg,#2D47C8_50deg,#C32DC8CC_100deg,#30FFFFB2_150deg,#30FFFFB2_200deg,#C82D2F_250deg,#9D9D9D_300deg,#FF7E05CC_360deg)]">
                                <div className="absolute inset-6 rounded-full bg-[#040817]" />
                                
                                <div className="relative z-10 text-center">
                          {/* Vector Image */}
                          <Image
                            src="/Vector1.png"
                            alt="vector"
                            width={103}
                            height={125}
                            className="mx-auto"
                          />
                              
                              {/* Ellipse positioned at the tip of vector */}
                              <div className="absolute top-0 left-[60%] -translate-x-1/2 -translate-y-1/2">
                                <Image
                                  src="/Ellipse.png"
                                  alt="Ellipse"
                                  width={5}
                                  height={5}
                                  className=""
                                />
                              </div>
                            </div>
                                <div className="absolute -right-40 top-1/2 w-[260px] h-[167px] -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0D1C28] px-4 py-3 text-xs text-white shadow-lg">
                                  <p className="text-sm font-semibold mb-2">
                                    <span className="text-[#E2E8FF99] mr-1">Vulnerability Researcher</span>
                                    <span className="text-[#30FFFF]">85%</span>
                                  </p>
                                  <p className="text-[#E2E8FF99] text-[13px]">hunt for flaws in software, hardware, or systems, often discovering zero-days and developing exploits. 
                                    Dive deep into code, binaries, and internals to uncover weaknesses others miss</p>
                                </div>
                              </div>
                            </div>
            
                            {/* Legend */}
                            <div className=" backdrop-blur-sm rounded-xl p-6 mb-8">
          <div className="space-y-4">
            {careerSkills.map((skill, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-48 text-xs text-slate-400 truncate flex justify-end">{skill.name}</div>
                <div className="flex-1 h-[9px] w-[180px] bg-slate-800/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.color} transition-all duration-500 rounded`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
                <div className="w-12 text-xs text-cyan-500 text-right">{skill.progress}%</div>
              </div>
            ))}
          </div>
        </div>
                          </div>
          </div>
        </div>

        {/* Career Progression */}

         <section className="mt-2 space-y-6 ml-5 mr-5 mb-12">
                    <div className="rounded-[14px] border w-full h-[349px] border-[#E2E8FF0A] bg-[#051022] p-6 shadow-[0_20px_60px_rgba(3,10,22,0.45)]">
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
                       <button 
                          onClick={() => setStudyData(Array.from({ length: 25 }, (_, i) => ({ 
                            day: 9 + i,
                            hours: 0 
                          })))} 
                          className="flex items-center gap-2 rounded-lg border border-[#151F30] bg-[#0A1525] px-4 py-2 text-[10px] font-semibold text-[#E2E8FF] shadow-[0_5px_25px_rgba(6,15,30,0.6)] hover:bg-[#0A1525]/80"
                        >
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
                              {studyData.map((label, index) => (
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
                            {studyData.map((label, index) => (
                              <span
                                key={`axis-label-${label.day}-${index}`}  // Added index as additional unique identifier
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