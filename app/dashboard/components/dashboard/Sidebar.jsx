'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import sidebarData from './sidebarData.json';
import { useDashboard } from '../DashboardContext';

function Sidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, closeSidebar } = useDashboard();

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={closeSidebar}
        />
      )}

      <aside className={`h-screen w-64 bg-stone-50 dark:bg-stone-950 flex flex-col h-full py-6 px-4 fixed left-0 top-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex items-center justify-between lg:block mb-10 px-4">
          <Link href="/" className="block">
            <span className="font-serif text-xl text-green-900 dark:text-green-500">
              পবিত্র আশ্রয়স্থল
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mt-1 font-bold">
              ম্যানেজমেন্ট পোর্টাল
            </p>
          </Link>
          <button 
            onClick={closeSidebar}
            className="lg:hidden p-2 text-stone-500 hover:bg-stone-100 rounded-full"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <nav className="flex-1 space-y-2 overflow-y-auto">
          {sidebarData.map((item, index) => {
            const isActive = pathname === item.href || (pathname?.startsWith(item.href) && item.href !== '/dashboard');

            return (
              <Link
                key={index}
                onClick={closeSidebar}
                className={`flex items-center gap-3 pl-4 py-3 transition-colors duration-200 border-l-4 ${isActive
                  ? 'text-green-900 dark:text-green-400 font-bold border-amber-600'
                  : 'text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 border-transparent'
                  }`}
                href={item.href}
              >
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'icon-filled icon-bold' : ''}`}>{item.icon}</span>
                <span className="font-sans tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-outline-variant/20 pt-6 px-4">
          <div className="flex items-center gap-3">
            <img
              alt="Admin Profile"
              className="w-10 h-10 rounded-full border-2 border-secondary/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKd_MOD1kNdjRbn16FbpZQxeY7R0ISBdRjcmcaaOVMp8otHFGObq2COCK9JpZ2nwlco2f6t8gQAorxVT0UoS71XB20fUwBbV56ASi88m8J43zRGrCHupluDOC3rxWqIRfOe_VQZxtCTbtG98xwQTTzu1chpfjpsYluWVisVz2A4klgJKlRkkzVlYPTm7oiDTtXqldXw9vEFKovZ94y40KJHfa0YKTMJT-DMRHf1yzd_3RcSYwT8ielDqhwzHgb7Y4Ksr9RAxa00dA"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">মসজিদ অ্যাডমিন</p>
              <p className="text-xs text-on-surface-variant truncate">
                অ্যাডমিন পোর্টাল
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar