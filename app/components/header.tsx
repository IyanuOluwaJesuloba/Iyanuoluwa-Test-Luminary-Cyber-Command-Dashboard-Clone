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
      <header className="  px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">

          <div className="flex pl-5 items-center gap-2 text-xs text-gray-400">
            <span>Education</span>
            <span>›</span>
            <span className="text-[#E2E8FF]">{breadcrumbTitle}</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search luminary" 
              className="border border-[#E2E8FF1A] rounded-lg px-4 py-2 pl-10 w-[313px] h-[40px] text-[10px] font-medium focus:outline-none focus:border-cyan-500"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
          </div>
          <Image src="/sm1.png" alt="" width={0} height={0} className="w-5 h-5 text-gray-400 cursor-pointer hover:text-cyan-400" />
          <div className="relative">
            <Image src="/elements.png" alt="" width={0} height={0} className="w-[16.5px] h-[12px] text-gray-400 cursor-pointer hover:text-cyan-400" />
            <div className="absolute -top-2 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <Image src="/sm4.png" alt="" width={0} height={0} className="w-5 h-5 text-gray-400 cursor-pointer hover:text-cyan-400" />
          <Image src="/sm3.png" alt="" width={0} height={0} className="w-[18px] h-[18px] text-gray-400 cursor-pointer hover:text-cyan-400" />
          <button className="text-[#DF303399] text-[14px] font-semibold flex items-center gap-2 hover:text-red-400 border-[#E2E8FF0D] border-2 rounded-xl px-5 py-3">
    <Image src="/sw.png" alt="" width={0} height={0} className="w-[18px] h-[18px] text-[#DF303399] cursor-pointer hover:text-cyan-400" />            Connect to VPN
          </button>
        </div>
      </header>
      </div>
)
}