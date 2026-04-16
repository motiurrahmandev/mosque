import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

function DashbordHeader() {
    return (
        <header className="flex justify-between items-end mb-12">
            <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">
                    Executive Overview
                </span>
                <h1 className="font-headline text-4xl text-primary font-bold">
                    Sanctuary Dashboard
                </h1>
            </div>
            <div className="flex gap-4">
                <Link href="/dashboard/reports" className="px-6 py-3 rounded-xl bg-surface-container-lowest text-primary text-sm font-bold shadow-sm hover:bg-surface-container transition-all">
                    Generate Report
                </Link>
                <Link href="/dashboard/new-entry" className="px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    <Plus className="w-5 h-5" />
                    New Entry
                </Link>
            </div>
        </header>
    )
}

export default DashbordHeader