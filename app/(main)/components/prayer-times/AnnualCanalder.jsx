"use client";
import React, { useState, useEffect } from 'react';

// Helper to convert English digits to Bengali digits
const toBnNum = (numStr) => {
    if (!numStr) return "";
    const bnDigits = {'0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯'};
    return numStr.toString().replace(/[0-9]/g, w => bnDigits[w]);
};

const monthNamesBn = [
    "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
    "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
];

const hijriMonthNamesBn = [
    "মহাররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জমাদিউল আউয়াল", "জমাদিউস সানি", 
    "রজব", "শাবান", "রমজান", "শাওয়াল", "জিলকদ", "জিলহজ"
];

const dayNamesInBengali = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'];

function AnnualCanalder() {
    const [currentDate, setCurrentDate] = useState(null);
    const [calendarDays, setCalendarDays] = useState([]);

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    useEffect(() => {
        if (!currentDate) return;
        const calculateCalendar = () => {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const firstDayOfMonth = new Date(year, month, 1);
            const lastDayOfMonth = new Date(year, month + 1, 0);
            
            const days = [];
            const startDayOfWeek = firstDayOfMonth.getDay(); // 0 is Sunday
            
            // Padding for previous month days
            for (let i = 0; i < startDayOfWeek; i++) {
                days.push({ empty: true });
            }

            const today = new Date();
            const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            });
            
            for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
                const dateObj = new Date(year, month, i);
                
                // Format Gregorian
                const gregorianDay = toBnNum(i);
                
                // Format Hijri by extracting parts
                const parts = formatter.formatToParts(dateObj);
                const hijriDayPart = parts.find(p => p.type === 'day');
                const hijriDayStr = hijriDayPart ? toBnNum(hijriDayPart.value) : "";
                
                const isToday = (today.getDate() === i && today.getMonth() === month && today.getFullYear() === year);

                days.push({
                    empty: false,
                    date: dateObj,
                    gregorianDay,
                    hijriDayStr,
                    isToday
                });
            }
            setCalendarDays(days);
        };
        
        calculateCalendar();
    }, [currentDate]);

    if (!currentDate) return <div className="animate-pulse bg-surface-container-low h-[40rem] rounded-[2.5rem] w-full max-w-5xl mx-auto mb-20"></div>;

    const changeMonth = (offset) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const getHijriMonthYear = () => {
        try {
            const midMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 15);
            const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic', {
                month: 'numeric',
                year: 'numeric'
            });
            const parts = formatter.formatToParts(midMonth);
            const m = parts.find(p => p.type === 'month');
            const y = parts.find(p => p.type === 'year');
            
            if (m && y) {
                // 'en-US-u-ca-islamic' numeric month usually returns 1-12
                const monthIndex = parseInt(m.value) - 1;
                const hijriName = hijriMonthNamesBn[monthIndex] || "";
                return `${hijriName} ${toBnNum(y.value)}`;
            }
            return "";
        } catch {
            return "";
        }
    };

    return (
        <section className="bg-surface-container-lowest/50 rounded-[2.5rem] p-4 lg:p-10 mb-20 max-w-7xl mx-auto">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 bg-white p-6 lg:px-10 rounded-[2rem] shadow-sm border border-surface-variant/20">
                <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-primary mb-2">মাসিক ক্যালেন্ডার</h2>
                    <p className="text-stone-500 font-body">ইংরেজি ও আরবি তারিখ সমন্বিত</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => changeMonth(-1)} className="p-3 rounded-xl hover:bg-surface-container-lowest transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined !text-[20px] text-on-surface-variant">chevron_left</span>
                    </button>
                    <div className="text-center min-w-[200px] px-2">
                        <div className="font-bold text-xl lg:text-2xl text-primary font-serif">
                            {monthNamesBn[currentDate.getMonth()]} {toBnNum(currentDate.getFullYear())}
                        </div>
                        <div className="text-sm text-secondary font-medium tracking-wide mt-1">
                            {getHijriMonthYear()}
                        </div>
                    </div>
                    <button onClick={() => changeMonth(1)} className="p-3 rounded-xl hover:bg-surface-container-lowest transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined !text-[20px] text-on-surface-variant">chevron_right</span>
                    </button>
                </div>
            </div>

            {/* Calendar Grid - Responsive Card Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {/* Days Cells arranged by weeks on desktop, list on mobile */}
                {calendarDays.map((day, idx) => {
                    const dayName = dayNamesInBengali[idx % 7];
                    
                    if (day.empty) {
                        return <div key={`empty-${idx}`} className="hidden lg:block"></div>;
                    }

                    if (day.isToday) {
                        return (
                            <div key={idx} className="bg-primary-container p-6 lg:p-8 rounded-3xl text-center border border-primary/20 ring-4 ring-secondary-container/30 transition-transform hover:scale-[1.02] flex flex-col items-center justify-center">
                                <span className="text-on-primary-container/70 font-bold tracking-tighter uppercase text-xs lg:text-sm mb-4 block">{dayName}</span>
                                <div className="text-3xl lg:text-4xl font-serif text-white mb-2">{day.gregorianDay}</div>
                                <span className="text-sm text-white/70 italic font-medium">{day.hijriDayStr}</span>
                            </div>
                        )
                    }

                    return (
                        <div key={idx} className="bg-surface-container-lowest p-6 lg:p-8 rounded-3xl text-center border border-outline-variant/10 hover:border-secondary transition-colors group flex flex-col items-center justify-center">
                             <span className="text-stone-400 font-bold tracking-tighter uppercase text-xs lg:text-sm mb-4 block">{dayName}</span>
                            <div className="text-3xl lg:text-4xl font-serif text-primary mb-2 transition-transform group-hover:scale-110">{day.gregorianDay}</div>
                            <span className="text-sm text-stone-500 italic font-medium">{day.hijriDayStr}</span>
                        </div>
                    );
                })}
            </div>
            
        </section>
    );
}

export default AnnualCanalder;