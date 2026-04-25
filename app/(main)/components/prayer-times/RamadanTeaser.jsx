import React from 'react'

function RamadanTeaser() {
    return (
        <div className="prayer-gradient p-10 rounded-[2.5rem] text-on-primary flex flex-col justify-between relative overflow-hidden group h-full">
            <div className="islamic-pattern absolute inset-0 opacity-10" />
            <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[24px] text-secondary-container">bedtime</span>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4">Ramadan 2025</h3>
                <p className="text-on-primary-container text-lg mb-8 leading-relaxed">
                    Pre-register for Iftar gatherings and Taraweeh prayers. Download the full annual fasting timetable.
                </p>
            </div>
            <button className="relative z-10 w-full bg-white text-primary px-6 py-4 rounded-xl font-bold transition-all group-hover:bg-secondary-container group-hover:text-on-secondary-container">
                Coming Soon
            </button>
        </div>
    )
}

export default RamadanTeaser