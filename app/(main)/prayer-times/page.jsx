"use client";

import React, { useState, useEffect } from 'react'
import PrayerTimesComponent from '../components/home/PrayerTimes' // renamed import for clarity just in case
import PrayerHero from '../components/prayer-times/PrayerHero'
import SpecialPrayerSection from '../components/prayer-times/SpecialPrayerSection'
import RamadanTeaser from '../components/prayer-times/RamadanTeaser'
import AnnualCanalder from '../components/prayer-times/AnnualCanalder'
import EidAndJummahTime from '../components/prayer-times/EidAndJummahTime';

function PrayerTime() {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        const res = await fetch('/api/prayer-times');
        if (res.ok) {
          const data = await res.json();
          setPrayerTimes(data);
        }
      } catch (error) {
        console.error("Failed to fetch prayer times:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrayers();
  }, []);

  const specialPrayers = prayerTimes.filter(p => p.type === 'jummah' || p.type === 'eid' || p.name.toLowerCase().includes('jummah') || p.name.toLowerCase().includes('eid'));

  return (
    <main className="pt-32 pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
      { /* Hero Section: Daily Focus */}
      <PrayerHero prayerTimes={prayerTimes} isLoading={isLoading} />

      {/* Embedded Prayer Times Grid */}
      <PrayerTimesComponent prayerTimes={prayerTimes} isLoading={isLoading} />

      { /* Eid & Jummah Dynamic Components */}
      <EidAndJummahTime prayerTimes={prayerTimes} isLoading={isLoading} />

      { /* Annual Timetable Table */}
      <AnnualCanalder />
    </main>
  )
}

export default PrayerTime