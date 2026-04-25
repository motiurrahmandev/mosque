"use client";
import React, { useState, useEffect } from 'react';
import homeData from '../../data/homeData.json';
import { getNextPrayer, formatTimeDiff } from '../../../dashboard/utils/prayerUtils';


function PrayerTimes({ prayerTimes: propPrayerTimes, isLoading: propIsLoading }) {
    const { prayerTimes: staticMeta } = homeData;
    const [currentTime, setCurrentTime] = useState(new Date());
    const [fetchedTimes, setFetchedTimes] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const isControlled = propPrayerTimes !== undefined;
    const prayerTimes = isControlled ? propPrayerTimes : fetchedTimes;
    const isLoading = isControlled ? propIsLoading : isFetching;

    useEffect(() => {
        if (isControlled) return;

        const fetchPrayers = async () => {
            try {
                const res = await fetch('/api/prayer-times');
                if (res.ok) {
                    const data = await res.json();
                    setFetchedTimes(data);
                }
            } catch (error) {
                console.error("Failed to fetch prayer times:", error);
            } finally {
                setIsFetching(false);
            }
        };

        fetchPrayers();
    }, [isControlled]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const eligibleForNext = prayerTimes.filter(p => p.type !== 'eid');
    const nextPrayerObj = getNextPrayer(eligibleForNext) || { name: 'None', iqamah: 'N/A', diffMinutes: 0 };

    const dailyPrayers = prayerTimes.filter(p => !p.type || p.type === 'daily');

    return (
        <section className="py-24 bg-surface relative overflow-hidden" id="prayer-times">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">{staticMeta.title}</h2>
                        <p className="text-stone-500 font-body max-w-md">{staticMeta.description}</p>
                    </div>
                    {!isLoading && (
                        <div className="bg-primary-container text-on-primary-container p-6 rounded-2xl flex items-center gap-6 shadow-xl">
                            <span className="material-symbols-outlined text-[40px]">schedule</span>
                            <div>
                                <span className="text-xs uppercase tracking-widest opacity-80">{staticMeta.nextPrayer.label}</span>
                                <div className="text-lg font-bold flex items-center gap-2">
                                    <span>{nextPrayerObj.name}</span>
                                    {nextPrayerObj.name !== 'None' && (
                                        <>
                                            <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container/50"></span>
                                            <span>{formatTimeDiff(nextPrayerObj.diffMinutes)}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {isLoading ? (
                    <div className="text-center py-12 text-on-surface-variant animate-pulse">
                        আধ্যাত্মিক সময়সূচী লোড করা হচ্ছে...
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                            {dailyPrayers.map((time, index) => {
                                const isCurrent = nextPrayerObj && nextPrayerObj.name === time.name;

                                if (isCurrent) {
                                    return (
                                        <div key={time.id || index} className="bg-primary-container p-8 rounded-3xl text-center border border-primary/20 ring-4 ring-secondary-container/30">
                                            <span className="text-on-primary-container/70 font-bold tracking-tighter uppercase text-xs mb-4 block">{time.name}</span>
                                            <div className="text-3xl font-serif text-white mb-2">{time.adhan || "-"}</div>
                                            <span className="text-xs text-white/70 italic">{time.iqamah}</span>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={time.id || index} className="bg-surface-container-lowest p-8 rounded-3xl text-center border border-outline-variant/10 hover:border-secondary transition-colors group">
                                            <span className="text-stone-400 font-bold tracking-tighter uppercase text-xs mb-4 block">{time.name}</span>
                                            <div className="text-3xl font-serif text-primary mb-2">{time.adhan || "-"}</div>
                                            <span className="text-xs text-stone-500 italic">{time.iqamah}</span>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default PrayerTimes