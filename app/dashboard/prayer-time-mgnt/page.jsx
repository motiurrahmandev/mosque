"use client";

import { useState } from "react";
import PrayerActionCard from "../compontnts/prayer-time-mgnt/PrayerActionCard";
import PrayerList from "../compontnts/prayer-time-mgnt/PrayerList";
import AddPrayerTimeModal from "../compontnts/prayer-time-mgnt/AddPrayerTimeModal";
import initialPrayerTimes from "../data/prayerTimes.json";

function PrayerTimeMgnt() {
  const [prayerTimes, setPrayerTimes] = useState(initialPrayerTimes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPrayer = (newPrayer) => {
    setPrayerTimes([...prayerTimes, { ...newPrayer, id: Date.now() }]);
    setIsModalOpen(false);
  };

  return (
    <main className="flex-1 ml-64 p-10 min-h-screen">
      {/* Header Section */}
      <header className="mb-12 flex justify-between items-end">
        <div>
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
            Spiritual Schedule
          </span>
          <h2 className="text-4xl font-serif text-on-surface">
            Prayer Times Management
          </h2>
          <p className="text-on-surface-variant mt-2 max-w-xl">
            Configure daily congregational times for the Sanctuary. Updates
            reflect across the public display and mobile app instantly.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl border border-outline-variant font-semibold text-primary hover:bg-surface-container transition-all flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[20px]"
              data-icon="history"
            >
              history
            </span>
            View Logs
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold shadow-[0px_20px_40px_rgba(21,66,18,0.06)] hover:opacity-90 transition-all flex items-center gap-2"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              data-icon="add"
            >
              add
            </span>
            Add Schedule
          </button>
        </div>
      </header>
      {/* Bento Grid Stats & Action Cards */}
      <PrayerActionCard prayerTimes={prayerTimes} />
      {/* Editable Table Section */}
      <PrayerList prayerTimes={prayerTimes} />
      {/* System Alerts / Activity Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/40 backdrop-blur-xl p-6 rounded-xl border border-outline-variant/10">
          <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-4 flex items-center gap-2">
            <span
              className="material-symbols-outlined text-amber-600 text-[18px]"
              data-icon="notifications"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              notifications
            </span>
            Recent Activity
          </h4>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1 bg-secondary rounded-full" />
              <div>
                <p className="text-sm font-medium">
                  Maghrib Iqamah adjusted by +2 mins
                </p>
                <p className="text-xs text-on-surface-variant">
                  Admin • 2 hours ago
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-outline-variant rounded-full" />
              <div>
                <p className="text-sm font-medium">
                  Automatic sync completed successfully
                </p>
                <p className="text-xs text-on-surface-variant">
                  System • 5 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/5">
          <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-4">
            Quick Insights
          </h4>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs text-on-surface-variant">
                  App Traffic (Prayer Times)
                </span>
                <span className="text-sm font-bold text-primary">+12%</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[65%] rounded-full" />
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <span
                className="material-symbols-outlined"
                data-icon="trending_up"
              >
                trending_up
              </span>
            </div>
          </div>
        </div>
      </div>
      <AddPrayerTimeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={handleAddPrayer} 
      />
    </main>
  );
}

export default PrayerTimeMgnt;
