"use client";

import React, { useState, useEffect } from 'react';
import { getNextPrayer, formatTimeDiff, getCurrentDateFormatted } from '../../utils/prayerUtils';


function PrayerActionCard({ prayerTimes = [] }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const eligibleForNext = prayerTimes?.filter(p => p.type !== 'eid') || [];
    const nextPrayer = getNextPrayer(eligibleForNext) || { name: 'None', iqamah: 'N/A', diffMinutes: 0 };
    
    return (
        <div className="grid grid-cols-12 gap-6 mb-12">
            {/* Next Prayer Card */}
            <div className="col-span-12 lg:col-span-4 bg-primary-container rounded-xl p-6 text-on-primary-container relative overflow-hidden">
                <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4">
                        বর্তমান সক্রিয় অবস্থা
                    </p>
                    <h3 className="text-3xl font-serif mb-1">{nextPrayer.name} নামাজ</h3>
                    <p className="text-5xl font-bold tracking-tighter mb-4">{nextPrayer.iqamah || nextPrayer.adhan}</p>
                    <div className="flex items-center gap-2 text-sm opacity-90 bg-white/10 w-fit px-3 py-1 rounded-full">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        <span>{formatTimeDiff(nextPrayer.diffMinutes)}</span>
                    </div>
                </div>
                {/* Abstract Geometric Mask */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
                    <svg fill="currentColor" viewBox="0 0 100 100">
                        <path d="M50 0L61.2 38.8H100L68.8 61.2L80 100L50 77.6L20 100L31.2 61.2L0 38.8H38.8L50 0Z" />
                    </svg>
                </div>
            </div>
            {/* Jummah Summary */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex items-center justify-between shadow-sm">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-secondary uppercase tracking-widest">
                        জুম্মার নামাজ
                    </p>
                    <p className="text-on-surface-variant font-medium mt-1">
                        প্রথম আজান: <span className="text-primary font-bold">12:45 PM</span>
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-green-700 font-medium">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        <span>খুতবা শুরু: 01:15 PM | ইকামাত: 01:45 PM</span>
                    </div>
                </div>
                <div className="h-16 w-[1px] bg-outline-variant/30" />
                <div className="text-center">
                    <p className="text-3xl font-serif text-on-surface">{getCurrentDateFormatted()}</p>
                    <p className="text-sm text-on-surface-variant mt-1">
                        জুম্মা মুবারক
                    </p>
                </div>
                <button className="p-4 rounded-full bg-secondary-container text-on-secondary-container hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">settings</span>
                </button>
            </div>
        </div>
    )
}

export default PrayerActionCard