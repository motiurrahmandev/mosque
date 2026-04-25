"use client";
import React, { useState, useEffect } from 'react'
import SpecialPrayerSection from './SpecialPrayerSection'
import RamadanTeaser from './RamadanTeaser'

function EidAndJummahTime({ prayerTimes: propPrayerTimes, isLoading: propIsLoading }) {
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


    const specialPrayers = prayerTimes.filter(p => 
        p.type === 'jummah' || 
        p.type === 'eid' || 
        p.name?.toLowerCase().includes('jummah') || 
        p.name?.toLowerCase().includes('eid')
    );

    return (
        <section className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="lg:col-span-2 flex flex-col lg:flex-row gap-8">
                {isLoading ? (
                    <div className="animate-pulse bg-surface-variant/20 h-48 rounded-3xl" />
                ) : (
                    <>
                        {specialPrayers.map((prayer) => (
                            <SpecialPrayerSection key={prayer.id} title={prayer.name} adhan={prayer?.adhan || ""} iqamah={prayer?.iqamah || ""} />
                        ))}

                        {/* Fallback to static Jummah if none is configured in dashboard yet to preserve layout */}
                        {specialPrayers.length === 0 && (
                            <SpecialPrayerSection title="জুম্মা" adhan="01:15 PM" iqamah="01:45 PM" />
                        )}
                    </>
                )}
            </div>
            {/* <div className="lg:col-span-1 h-full">
                <RamadanTeaser />
            </div> */}
        </section>
    )
}

export default EidAndJummahTime