import React from 'react';
import Link from 'next/link';


function KPIGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Donations */}
            <Link href="/dashboard/donations" className="block relative overflow-hidden bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 group transition-all hover:translate-y-[-4px]">
                <div className="pattern-overlay absolute top-0 right-0 w-24 h-24 opacity-[0.03] -mr-8 -mt-8 rotate-12" />
                <div className="flex items-center justify-between mb-4">
                    <span className="material-symbols-outlined text-secondary text-[32px] icon-filled">volunteer_activism</span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        +12.5%
                    </span>
                </div>
                <h3 className="text-on-surface-variant text-sm font-medium mb-1">
                    মোট অনুদান
                </h3>
                <p className="text-3xl font-headline font-bold text-primary">
                    $428,950
                </p>
            </Link>
            {/* Monthly Income/Expense */}
            <Link href="/dashboard/finance" className="block relative overflow-hidden bg-primary-container p-8 rounded-xl text-on-primary-container group transition-all hover:translate-y-[-4px]">
                <div className="pattern-overlay absolute bottom-0 right-0 w-32 h-32 opacity-[0.05] -mb-10 -mr-10" />
                <div className="flex items-center justify-between mb-4">
                    <span className="material-symbols-outlined text-on-primary-container text-[32px] icon-filled">account_balance_wallet</span>
                    <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">
                        লাভজনক
                    </span>
                </div>
                <h3 className="opacity-80 text-sm font-medium mb-1">
                    মাসিক নগদ প্রবাহ
                </h3>
                <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-headline font-bold">$24,180</p>
                    <span className="text-xs opacity-60">/ $18,400 ব্যয়</span>
                </div>
            </Link>
            {/* Upcoming Events */}
            <Link href="/dashboard/events" className="block relative overflow-hidden bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 group transition-all hover:translate-y-[-4px]">
                <div className="flex items-center justify-between mb-4">
                    <span className="material-symbols-outlined text-secondary text-[32px] icon-filled">calendar_month</span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">
                        ৩টি নির্ধারিত
                    </span>
                </div>
                <h3 className="text-on-surface-variant text-sm font-medium mb-1">
                    আসন্ন ইভেন্ট
                </h3>
                <p className="text-3xl font-headline font-bold text-primary">
                    রমজানের প্রস্তুতি
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                    ৪ দিন পর শুরু
                </p>
            </Link>
        </div>
    )
}

export default KPIGrid