'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Clock, Users, HeartHandshake, CreditCard } from 'lucide-react';
import sidebarData from './sidebarData.json';

const iconMap = {
  LayoutDashboard,
  Clock,
  Users,
  HeartHandshake,
  CreditCard
};

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-stone-50 dark:bg-stone-950 flex flex-col h-full py-6 px-4 fixed left-0 top-0 z-40">
        <div className="mb-10 px-4">
          <span className="font-serif text-xl text-green-900 dark:text-green-500">
            The Sacred Sanctuary
          </span>
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mt-1 font-bold">
            Management Portal
          </p>
        </div>
        <nav className="flex-1 space-y-2">
          {sidebarData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            const isActive = pathname === item.href || (pathname?.startsWith(item.href) && item.href !== '/dashboard');

            return (
              <Link
                key={index}
                className={`flex items-center gap-3 pl-4 py-3 transition-colors duration-200 border-l-4 ${
                  isActive
                    ? 'text-green-900 dark:text-green-400 font-bold border-amber-600'
                    : 'text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 border-transparent'
                }`}
                href={item.href}
              >
                {IconComponent && <IconComponent className="w-5 h-5" />}
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
              data-alt="professional headshot of a middle-aged man with a friendly expression and neat grooming in an office setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKd_MOD1kNdjRbn16FbpZQxeY7R0ISBdRjcmcaaOVMp8otHFGObq2COCK9JpZ2nwlco2f6t8gQAorxVT0UoS71XB20fUwBbV56ASi88m8J43zRGrCHupluDOC3rxWqIRfOe_VQZxtCTbtG98xwQTTzu1chpfjpsYluWVisVz2A4klgJKlRkkzVlYPTm7oiDTtXqldXw9vEFKovZ94y40KJHfa0YKTMJT-DMRHf1yzd_3RcSYwT8ielDqhwzHgb7Y4Ksr9RAxa00dA"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Sanctuary Admin</p>
              <p className="text-xs text-on-surface-variant truncate">
                Admin Portal
              </p>
            </div>
          </div>
        </div>
      </aside>
  )
}

export default Sidebar