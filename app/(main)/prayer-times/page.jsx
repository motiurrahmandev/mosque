import React from 'react'
import PrayerTimes from '../components/home/PrayerTimes'
import PrayerHero from '../components/prayer-times/PrayerHero'
import SpecialPrayerSection from '../components/prayer-times/SpecialPrayerSection'
import RamadanTeaser from '../components/prayer-times/RamadanTeaser'
import AnnualCanalder from '../components/prayer-times/AnnualCanalder'
import dashboardPrayerTimes from '../../dashboard/data/prayerTimes.json'

function PrayerTime() {
  return (
    <main className="pt-32 pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
      { /* Hero Section: Daily Focus */}
      <PrayerHero />


      <PrayerTimes />
      { /* Eid & Jummah Dynamic Components */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <div className="lg:col-span-2 flex flex-col gap-8">
          {dashboardPrayerTimes
            .filter(p => p.name.toLowerCase().includes('jummah') || p.name.toLowerCase().includes('eid') || p.name.toLowerCase().includes('jumuah') || p.name.toLowerCase().includes('friday'))
            .map((prayer) => (
              <SpecialPrayerSection key={prayer.id} title={prayer.name} adhan={prayer.adhan || prayer.azan} iqamah={prayer.iqamah} />
            ))}
          {/* Fallback to static Jummah if neither is configured in dashboard yet to preserve layout */}
          {dashboardPrayerTimes.filter(p => p.name.toLowerCase().includes('jummah') || p.name.toLowerCase().includes('jumuah') || p.name.toLowerCase().includes('friday')).length === 0 && (
            <SpecialPrayerSection title="Jummah" adhan="1:15 PM" iqamah="1:45 PM" />
          )}
        </div>
        <div className="lg:col-span-1 h-full">
          <RamadanTeaser />
        </div>
      </section>
      { /* Annual Timetable Table */}
      <AnnualCanalder />
    </main>
  )
}

export default PrayerTime