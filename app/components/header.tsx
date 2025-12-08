"use client";
import { Search } from 'lucide-react';
import { usePathname } from "next/navigation";

import Image from 'next/image';

interface HeaderProps {
  breadcrumbTitle?: string;
}

export default function Header({ breadcrumbTitle }: HeaderProps){
  const pathname = usePathname();

return(
<div className=''>
      <header className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div className="flex items-center gap-4 w-full sm:w-auto">

          <div className="flex pl-5 items-center gap-2 text-xs text-gray-400 truncate">
            <span className="hidden sm:inline">Education</span>
            <span className="hidden sm:inline">›</span>
            <span className="text-[#E2E8FF] truncate">{breadcrumbTitle}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-6 w-full sm:w-auto justify-end">
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Search luminary" 
              className="border border-[#E2E8FF1A] rounded-lg px-4 py-2 pl-10 w-[313px] h-[40px] text-[10px] font-medium focus:outline-none focus:border-cyan-500"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
          </div>
          <button className="sm:hidden p-2 rounded-lg hover:bg-white/10">
            <Search className="w-4 h-4 text-gray-500" />
          </button>
          <Image src="/sm1.png" alt="" width={0} height={0} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 cursor-pointer hover:text-cyan-400" />
          <div className="relative">
            <Image src="/elements.png" alt="" width={0} height={0} className="w-3 h-2.5 sm:w-[16.5px] sm:h-[12px] text-gray-400 cursor-pointer hover:text-cyan-400" />
            <div className="absolute -top-2 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <Image src="/sm4.png" alt="" width={0} height={0} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 cursor-pointer hover:text-cyan-400" />
          <Image src="/sm3.png" alt="" width={0} height={0} className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-400 cursor-pointer hover:text-cyan-400" />
          <button className="text-[#DF303399] text-xs sm:text-[14px] font-semibold flex items-center gap-1 sm:gap-2 hover:text-red-400 border-[#E2E8FF0D] border-2 rounded-xl px-2 sm:px-5 py-2 sm:py-3 whitespace-nowrap">
    <Image src="/sw.png" alt="" width={0} height={0} className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#DF303399] cursor-pointer hover:text-cyan-400" />
            <span className="hidden sm:inline">Connect to VPN</span>
          </button>
        </div>
      </header>
      </div>
)
}