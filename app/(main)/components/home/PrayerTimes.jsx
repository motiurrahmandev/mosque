"use client";
import React, { useState, useEffect } from 'react';
import homeData from '../../data/homeData.json';
import dashboardPrayerTimes from '../../../dashboard/data/prayerTimes.json';
import { getNextPrayer, formatTimeDiff } from '../../../dashboard/utils/prayerUtils';
import { Clock } from 'lucide-react';

function PrayerTimes() {
    const { prayerTimes: staticMeta } = homeData;
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const nextPrayerObj = getNextPrayer(dashboardPrayerTimes) || { name: 'None', iqamah: 'N/A', diffMinutes: 0 };

    // Filter out Jummah and Eid from regular grid if needed? 
    // The design on homepage shows 6 items. If they are regular namaz, we keep them.
    // The user will add "Jummah" in the dashboard. Let's just show everything or filter for normal ones?
    // Let's filter out Eid for the regular grid and just show the first 6 items or daily prayers.
    const displayPrayers = dashboardPrayerTimes.filter(p => !p.name.toLowerCase().includes('eid'));
    
    return (
        <section className="py-24 bg-surface relative overflow-hidden" id="prayer-times">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">{staticMeta.title}</h2>
                        <p className="text-stone-500 font-body max-w-md">{staticMeta.description}</p>
                    </div>
                    <div className="bg-primary-container text-on-primary-container p-6 rounded-2xl flex items-center gap-6 shadow-xl">
                        <Clock className="w-10 h-10" />
                        <div>
                            <span className="text-xs uppercase tracking-widest opacity-80">{staticMeta.nextPrayer.label}</span>
                            <div className="text-lg font-bold">
                                {nextPrayerObj.name} in {formatTimeDiff(nextPrayerObj.diffMinutes).replace('Iqamah in ', '')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {displayPrayers.map((time, index) => {
                        const isJummah = time.name.toLowerCase().includes('jummah') || time.name.toLowerCase().includes('jumuah') || time.name.toLowerCase().includes('friday');
                        const isCurrent = nextPrayerObj && nextPrayerObj.name === time.name;

                        if (isJummah) {
                            return (
                                <div key={index} className="bg-secondary-container p-8 rounded-3xl text-center">
                                    <span className="text-on-secondary-container/70 font-bold tracking-tighter uppercase text-xs mb-4 block">{time.name}</span>
                                    <div className="text-3xl font-serif text-on-secondary-container mb-2">{time.adhan || time.azan}</div>
                                    <span className="text-xs text-on-secondary-container/70 italic">{time.iqamah || 'Friday Prayer'}</span>
                                </div>
                            )
                        } else if (isCurrent) {
                            return (
                                <div key={index} className="bg-primary-container p-8 rounded-3xl text-center border border-primary/20 ring-4 ring-secondary-container/30">
                                    <span className="text-on-primary-container/70 font-bold tracking-tighter uppercase text-xs mb-4 block">{time.name}</span>
                                    <div className="text-3xl font-serif text-white mb-2">{time.adhan || time.azan}</div>
                                    <span className="text-xs text-white/70 italic">{time.iqamah}</span>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className="bg-surface-container-lowest p-8 rounded-3xl text-center border border-outline-variant/10 hover:border-secondary transition-colors group">
                                    <span className="text-stone-400 font-bold tracking-tighter uppercase text-xs mb-4 block">{time.name}</span>
                                    <div className="text-3xl font-serif text-primary mb-2">{time.adhan || time.azan}</div>
                                    <span className="text-xs text-stone-500 italic">{time.iqamah}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default PrayerTimes