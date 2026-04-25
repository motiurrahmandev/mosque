import React from 'react';

function SpecialPrayerSection({ title, adhan, iqamah, subtitle }) {
    const isEid = title && title.toLowerCase().includes('eid');
    const badgeText = isEid ? 'ঈদের বিশেষ' : 'জুমার বিশেষ';

    return (
        <div className="bg-surface-container-lowest p-10 rounded-[2.5rem] ambient-shadow relative overflow-hidden">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                        {badgeText}
                    </span>
                </div>
                <h2 className="font-headline text-4xl font-bold text-primary mb-8">{title} নামাজ</h2>
                <div className="space-y-8">
                    <div className="flex justify-between items-center pb-8 border-b border-surface-variant/30">
                        <div>
                            <h4 className="font-bold text-xl text-on-surface">{isEid ? " আগমন" : "আজান ও খুতবা"}</h4>
                            <p className="text-on-surface-variant">{subtitle || "মূল মসজিদ"}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-headline font-bold text-secondary">{adhan || "N/A"}</div>
                            <div className="text-sm font-medium text-on-surface-variant">প্রবেশের সময়</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-xl text-on-surface">{isEid ? "ঈদের সালাত" : "ইকামত"}</h4>
                            <p className="text-on-surface-variant">জামাতে নামাজ</p>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-headline font-bold text-secondary">{iqamah || "N/A"}</div>
                            <div className="text-sm font-medium text-on-surface-variant">সপরিবারে আমন্ত্রিত</div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 p-6 bg-surface-container-low rounded-2xl flex items-center gap-4">
                    <span className="material-symbols-outlined !text-[32px] text-secondary">info</span>
                    <p className="text-sm text-on-surface-variant">দয়া করে ১৫ মিনিট আগে পৌঁছান, কারণ বিশেষ নামাজের সময় পার্কিং দ্রুত পূর্ণ হয়ে যায়।</p>
                </div>
            </div>
            <div className="islamic-pattern absolute top-0 right-0 w-64 h-64 opacity-5 translate-x-12 -translate-y-12" />
        </div>
    );
}

export default SpecialPrayerSection;
