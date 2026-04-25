import React, { useState, useEffect } from 'react'
import { getNextPrayer, formatTimeDiff } from '../../../dashboard/utils/prayerUtils'

function PrayerHero({ prayerTimes = [], isLoading = true }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const eligibleForNext = prayerTimes.filter(p => p.type !== 'eid');
    const nextPrayerObj = getNextPrayer(eligibleForNext) || { name: 'None', iqamah: 'N/A', diffMinutes: 0 };
    
    // Convert generic format "Iqamah in x mins" to Hero's "Begins in x mins" (translated)
    const diffText = formatTimeDiff(nextPrayerObj.diffMinutes).replace('Iqamah in', 'শুরু হবে আগামী').replace('mins', 'মিনিটে');

    return (
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="label-md uppercase tracking-[0.1em] text-secondary font-bold mb-4">বর্তমান নামাজের চক্র</span>
                <h1 className="font-headline text-5xl lg:text-7xl text-primary font-bold mb-6 leading-tight">
                    প্রতিটি মুহূর্তে <br /> শান্তি খুঁজুন।
                </h1>
                <p className="text-on-surface-variant max-w-lg text-lg mb-8">
                    ঐশ্বরিক ছন্দে পরিচালিত, আমরা আপনার প্রতিদিনের আধ্যাত্মিক অনুশীলনের জন্য একটি আশ্রয় প্রদান করি। জামাতে নামাজের জন্য আমাদের সম্প্রদায়ে যোগ দিন।
                </p>
                <div className="flex gap-4">
                    <button className="prayer-gradient text-primary px-8 py-4 border-1 border-primary rounded-xl font-bold ambient-shadow transition-transform hover:scale-[1.02]">
                        সম্পূর্ণ সময়সূচী দেখুন
                    </button>
                    <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold transition-transform hover:scale-[1.02]">
                        যাকাত ক্যালকুলেটর
                    </button>
                </div>
            </div>
            <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden ambient-shadow rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img className="w-full h-full object-cover" data-alt="Intricate Islamic architecture featuring a sunlit courtyard with marble floors and arched colonnades in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvZL4cw7KnSS7j5hGqiLa7OEjVH1QAXnPctjlW9sO64BcMwzCBohxa5Az88jP-zGPm_E5u5edBPNJka5RngBD8U66VsiqLwgBOJNkZ5J_X3kbQ4NFXbHZTIn3Up2dgVeMGeKirYNkrZrcKUa7379hK1Ih0-vnb4s8-DnnHcZYYdK01qnFTwxU8PIpI0D6EtvVmbdgPGMakb0d9GyZ9kKj-kh77L7ewkit2M_HUr55wAHOxHjhVlMoK5SvaSSM4SUJZvQDgUd6JdSg" />
                </div>
                { /* Prayer Time Floating Widget */}
                <div className="backdrop-blur-xl absolute -bottom-6 -left-6 lg:-left-12 p-8 rounded-2xl border border-white/20 ambient-shadow max-w-xs transition-opacity duration-300">
                    {isLoading ? (
                        <div className="animate-pulse w-48 h-24 bg-surface-variant/30 rounded-xl" />
                    ) : (
                        <>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-secondary font-bold text-sm tracking-widest uppercase">পরবর্তী সালাত</span>
                                <span className="material-symbols-outlined !text-[20px] text-secondary cursor-pointer hover:animate-ping">notifications_active</span>
                            </div>
                            <div className="mb-2">
                                <h3 className="text-primary font-headline text-4xl font-bold">{nextPrayerObj.name}</h3>
                                <p className="text-on-surface-variant font-medium">{diffText}</p>
                            </div>
                            <div className="text-2xl font-bold text-primary">{nextPrayerObj.iqamah || nextPrayerObj.adhan}</div>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default PrayerHero