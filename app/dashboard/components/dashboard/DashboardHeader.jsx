"use client";
import React from 'react';
import Link from 'next/link';
import { useDashboard } from '../DashboardContext';

function DashboardHeader() {
    const { toggleSidebar } = useDashboard();

    return (
        <header className="flex justify-between items-end mb-12">
            <div className="flex items-center gap-4">
                <button 
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 -ml-2 text-stone-500 hover:bg-stone-100 rounded-full"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">
                        নির্বাহী সারসংক্ষেপ
                    </span>
                    <h1 className="font-headline text-2xl md:text-4xl text-primary font-bold">
                        মসজিদ ড্যাশবোর্ড
                    </h1>
                </div>
            </div>
            <div className="flex gap-2 md:gap-4 scale-90 md:scale-100 origin-right">
                <Link href="/dashboard/reports" className="hidden sm:block px-6 py-3 rounded-xl bg-surface-container-lowest text-primary text-sm font-bold shadow-sm hover:bg-surface-container transition-all">
                    রিপোর্ট তৈরি করুন
                </Link>
                <Link href="/dashboard/new-entry" className="px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    <span className="hidden xs:inline">নতুন এন্ট্রি</span>
                </Link>
            </div>
        </header>
    )
}

export default DashboardHeader