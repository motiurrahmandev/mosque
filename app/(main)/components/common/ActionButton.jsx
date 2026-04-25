"use client";
import React, { useState, useEffect } from 'react';
import { getNextPrayer } from '@/app/dashboard/utils/prayerUtils';

function ActionButton() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [nextPrayer, setNextPrayer] = useState(null);

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
      }
    };
    fetchPrayers();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      if (prayerTimes.length > 0) {
        const next = getNextPrayer(prayerTimes.filter(p => p.type !== 'eid'));
        setNextPrayer(next);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [prayerTimes]);

  const toBengaliNumber = (num) => {
    if (!num) return '';
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, (d) => bengaliDigits[d]);
  };

  const translateTime = (timeStr) => {
    if (!timeStr) return '';
    return toBengaliNumber(timeStr)
      .replace(/AM/gi, 'এএম')
      .replace(/PM/gi, 'পিএম');
  };

  const translatePrayerName = (name) => {
    const map = {
      'Fajr': 'ফজর',
      'Fajir': 'ফজর',
      'Dhuhr': 'যোহর',
      'Asr': 'আসর',
      'Maghrib': 'মাগরিব',
      'Isha': 'এশা',
      'Jummah': 'জুম্মা',
    };
    return map[name] || name;
  };

  const formatTimeBengali = (date) => {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const ampm = h >= 12 ? 'পিএম' : 'এএম';
    const h12 = h % 12 || 12;
    return `${toBengaliNumber(h12.toString().padStart(2, '0'))}:${toBengaliNumber(m.toString().padStart(2, '0'))}:${toBengaliNumber(s.toString().padStart(2, '0'))} ${ampm}`;
  };

  const formatDiffBengali = (diffMinutes) => {
    const hours = Math.floor(diffMinutes / 60);
    const mins = diffMinutes % 60;
    let text = '';
    if (hours > 0) text += `${toBengaliNumber(hours)} ঘণ্টা `;
    text += `${toBengaliNumber(mins)} মিনিট`;
    return text;
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 group flex flex-col items-end">
      {/* Next Prayer Info Card (Shows on Hover) */}
      <div className="mb-4 bg-surface/90 backdrop-blur-xl border border-outline-variant/30 p-5 rounded-3xl shadow-2xl transition-all duration-500 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none min-w-[220px] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8" />

        <div className="relative z-10">
          {nextPrayer ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-secondary font-bold uppercase tracking-widest">পরবর্তী নামাজ</span>
                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[9px] font-bold">ইকামত</span>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-on-surface font-serif mb-1">{translatePrayerName(nextPrayer.name)}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-primary">{translateTime(nextPrayer.iqamah)}</span>
                  <span className="text-[11px] text-on-surface-variant font-medium">• {formatDiffBengali(nextPrayer.diffMinutes)} পর</span>
                </div>
              </div>

              <div className="pt-3 border-t border-outline-variant/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">notifications_active</span>
                <span className="text-[10px] text-on-surface-variant font-medium">সময়মতো জামাতে যোগ দিন</span>
              </div>
            </div>
          ) : (
            <div className="animate-pulse space-y-3">
              <div className="h-3 bg-surface-variant/30 rounded w-1/3"></div>
              <div className="h-8 bg-surface-variant/30 rounded w-2/3"></div>
              <div className="h-4 bg-surface-variant/30 rounded w-full"></div>
            </div>
          )}
        </div>
      </div>

      {/* Main Time Widget (Floating) */}
      <div className="bg-primary text-on-primary px-6 py-4 rounded-[2rem] shadow-[0px_20px_40px_rgba(21,66,18,0.24)] border border-white/10 flex items-center gap-3 cursor-default hover:scale-105 transition-all duration-300 group/widget">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/widget:bg-white/20 transition-colors">
          <span className="material-symbols-outlined !text-[24px] icon-filled">schedule</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-bold opacity-70 uppercase tracking-widest">বর্তমান সময়</span>
          <span className="text-xl font-bold font-serif tabular-nums tracking-tighter">
            {formatTimeBengali(currentTime).split(' ')[0]}
            <span className="text-xs ml-1 font-sans opacity-90">{formatTimeBengali(currentTime).split(' ')[1]}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ActionButton;