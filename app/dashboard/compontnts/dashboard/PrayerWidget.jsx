import React from 'react';
import Link from 'next/link';

function PrayerWidget() {
    return (
        <div className="bg-gradient-to-br from-primary to-primary-container text-on-primary p-8 rounded-xl relative overflow-hidden">
            <div className="pattern-overlay absolute inset-0 opacity-[0.05]" />
            <div className="relative z-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80">
                    Next Prayer
                </h3>
                <div className="flex items-center justify-between mb-8">
                    <span className="font-headline text-4xl font-bold">Asr</span>
                    <span className="text-3xl font-headline font-bold opacity-60">
                        15:42
                    </span>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="opacity-70">Maghrib</span>
                        <span className="font-bold">18:12</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="opacity-70">Isha</span>
                        <span className="font-bold">19:45</span>
                    </div>
                </div>
                <Link href="/dashboard/prayer-timings" className="block text-center w-full mt-8 py-3 rounded-xl bg-secondary-container text-on-secondary-container font-bold text-sm shadow-xl hover:bg-secondary-container/90 transition-colors">
                    Update Timings
                </Link>
            </div>
        </div>
    )
}

export default PrayerWidget