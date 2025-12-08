'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

type Course = {
  id: number;
  title: string;
  subtitle: string;
  progress: string;
  status: string;
  image: string;
  color?: string;
  icon?: string;
};

export default function CyberSecurityDashboard() {
  const router = useRouter();
  const handleBack = () => router.back();
  const courses: Course[] = [
    {
      id: 1,
      title: 'UNDERSTANDING KALI LINUX',
      subtitle: 'KOAN',
      progress: '25/25',
      status: 'COMPLETED',
      image: '/Badge1.png',
    },
    {
      id: 2,
      title: 'EXPLORING DIFFERENT SER...',
      subtitle: 'ARGONAUT',
      progress: '25/25',
      status: 'COMPLETED',
      image: '/Badge2.png',
    },
    {
      id: 3,
      title: 'MACOS SECURITY FUNDAM...',
      subtitle: 'THE ORCHARD',
      progress: '28/28',
      status: 'COMPLETED',
      image: '/Badge3.png',
    },
    {
      id: 4,
      title: 'WEB ATTACK FUNDAMENT...',
      subtitle: 'FANUS',
      progress: '0/9',
      status: 'START',
      image: '/Badge4.png',
    },
    {
      id: 5,
      title: 'INTRODUCTION TO WIRELE...',
      subtitle: 'MAGIC CARPET',
      progress: '7/13',
      status: 'CONTINUE',
      image: '/Badge5.png',
    },
    {
      id: 6,
      title: 'LINUX NETWORKING & SER...',
      subtitle: '',
      progress: '9/33',
      status: 'CONTINUE',
      image: '/Badge6.png',
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#040E16] text-white font-sans flex flex-col lg:flex-row">
      {/* Header */}
      <Sidebar/>
      <div className='ml-16 sm:ml-20 lg:ml-20 w-[calc(100%-4rem)] sm:w-[calc(100%-5rem)] flex flex-col'>
      <Header breadcrumbTitle='Offensive Operations...'/>

      {/* Main Content */}
      <main className="p-4 sm:p-8 overflow-y-auto flex-1">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={handleBack} className="hover:opacity-80 transition">
            <Image src="/elements1.png" alt="Back" width={16} height={10} className="w-[16px] h-[10px] text-gray-400 hover:text-white" />
          </button>
          <h1 className="text-sm font-semibold">Cyber command</h1>
        </div>

        <div className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap- pt-10 bg-linear-to-br from-[#5CC8F1] via-[#] to-[#]">

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[-96px] bottom-[-120px] z-30 h-[360px]"
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#02060C] via-[#041124]/80 to-transparent" />
            <div className="absolute inset-x-24 bottom-0 h-64 rounded-[999px] bg-[#4CD3FF]/20 blur-[140px]" />
          </div>

          {/* Hero Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden">
            
            <div className="relative">
              {/* Background cyber face image */}
              <div className="relative w-200 h-[692px]">
                <Image
                  src="/cyber-face.png"
                  alt="Cyber Face"
                  fill
                  className="object-cover object-top opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                 <div className="absolute inset-0 top-60">
                  <Image
                    src="/half.png"
                    alt="Neon Circuit Overlay"
                    width={200}
                    height={200}
                    className="object-cover object-top -top-30 opacity-80 mix-blend-screen"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-40 px-8 pb-8 -mt-22 flex flex-col items-center">
              <h2
                className="text-[71.24px] font-bold space-x- bg-linear-to-br from-[#A4E1F8] via-[#5CB4C8] to-[#0C5062] text-transparent bg-clip-text"
                style={{ fontFamily: 'nasdaqer', letterSpacing: '-1.94px' }}
              >
                SECURITY
              </h2>
              <div className='flex -mt-7 gap-7 justify-start'>
                <div
                  className='text-[37.74px] font-nasdaqer font-bold bg-linear-to-br from-[#A4E1F8] via-[#5CB4C8] to-[#0C5062] text-transparent bg-clip-text'
                  style={{ letterSpacing: '-1.03px' }}
                >
                  ESSENTIALS
                </div>
              <div className="flex items-center gap-1 pr-24font-bold text-[18.87px]">
              <span className='text-[#FFAC33]'>SES</span> <span className='text-[#C18D40]'>100</span>
              </div>
              </div>
            </div>
          </div>
          {/* Padlock Image - Top Right Corner */}
                <div className="absolute bottom-51 right-5 w-[235.39px] h-[235.39px] opacity-70 pointer-events-none">
                  <Image
                    src="/full.png"
                    alt="Security Padlock"
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>

          {/* Course List */}
          <div className="relative z-10">
            <div className="flex justify-end gap-2 text-xs tracking-widest">
              <div className="font-neofolia text-17px">AJAEQ</div>
              <Image
                src="/logo.png"
                alt="Luminary"
                width={0}
                height={0}
                className='-mt-2 w-[35px] h-[36px]'
              />            
              <div className="font-neofolia text-17px">LUMINARY</div>
            </div>
          
          <div className="space-y-4 w-[550px] h-[104px] ml- pt-14">
            {courses.map((course) => (
              <div
                key={course.id}
                className=" bg-linear-to-br from-cyan-500/60 via-cyan-500/15 to-transparent p-px transition-all"
              >
                <div className="bg-linear-to-br from-[#060E1B] to-[#061222] border border-white/5 p-4 flex items-center gap-4">
                  <div className={`w-16 h-16 -mt-1.5 bg-linear-to-br ${course.color ?? ''} rounded-lg flex items-center justify-center text-2xl shrink-0`}>
                    {course.image ? (
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    ) : (
                      course.icon ?? ''
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[14.67px] text-[#62D2F9] mb-1">{course.title}</h3>
                    <p className="text-[8.25px] text-gray-500 uppercase tracking-wider">{course.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-[10.98px] text-[#62D2F9]">{course.progress}</span>
                    <button 
                      className={`w-[138.05px] h-[31.38px] rounded-lg text-[10.98px] font-bold uppercase tracking-wider ${
                        course.status === 'COMPLETED' 
                          ? 'bg-linear-to-br from-[#62D2F9] via-[#174F7C] to-[#000000] text-[#62D2F9]' 
                          : course.status === 'START'
                          ? 'bg-linear-to-br from-[#174F7C] via-[#174F7C] to-[#000000] text-[#63FDFD] hover:bg-cyan-600'
                          : 'bg-linear-to-br from-[#174F7C] via-[#174F7C] to-[#000000] text-[#63FDFD] hover:bg-gray-600'
                      }`}
                    >
                      {course.status}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Footer */}
        <div className="p-10 flex items-center justify-between bg-[#040E1633] border-b-2 rounded-b-md border-gray-900 border-x-2">
          <div className="flex items-center gap-6">
            <button className="h-[28.39px] w-[94.63px] bg-[#9900824D] text-[#990082] rounded-md font-bold font-neofolia uppercase text-sm border-2 border-[#990082]">
              Scout
            </button>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="text-[#21B9E8] font-neofolia">21 DAYS</span>
              <span className='text-[#21B9E8]'>|</span>
              <span className="text-[#21B9E8] font-neofolia">34 NODES</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Image src="/Vector.png" alt="" width={0} height={0} className='w-[21px] h-[21.39px] mt-2.5'/>

            <div className='flex gap-1 border rounded-[5.3px] border-[#FFFFFF0D] w-[184.37px] h-[44.5px] items-center justify-center'>
              <Image src="/Star1.png" alt="" width={0} height={0} className="w-[21.19px] h-[21.19px] text-orange-400" />
              <Image src="/Star1.png" alt="" width={0} height={0} className="w-[21.19px] h-[21.19px] text-orange-400" />
              <Image src="/Star1.png" alt="" width={0} height={0} className="w-[21.19px] h-[21.19px] text-orange-400" />
              <Image src="/Star1.png" alt="" width={0} height={0} className="w-[21.19px] h-[21.19px] text-orange-400" />
              <Image src="/Star2.png" alt="" width={0} height={0} className="w-[21.19px] h-[21.19px] text-orange-400" />
            </div>
            <div className='border rounded-[10.6px] p-3 w-[31.79px] h-[32.85px] my-2 border-[#E2E8FF0D]'>
            <div className="w-2 h-2 bg-red-500 rounded-full "></div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => router.push('/cyber/clusters')}
              className="relative overflow-hidden w-[174px] h-[40px] bg-[#D1D1D1] text-[#6A2936] text-xs rounded-md font-semibold tracking-[0.2em] uppercase shadow-[13px_3px_24px_rgba(255,100,100,0.55)] hover:bg-[#E1E1E1] transition-colors"
            >
              Enroll
            </button>
          </div>
        </div>
      </main>
      </div>

      {/* Help Button
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform">
        <span className="text-2xl">?</span>
      </button> */}
    </div>
  );
}