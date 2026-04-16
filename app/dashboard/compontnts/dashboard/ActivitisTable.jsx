import React from 'react';
import Link from 'next/link';
import { ChevronRight, Heart, HardHat, UserPlus, Megaphone } from 'lucide-react';
import activitiesData from './activitiesData.json';

const iconMap = {
    Heart,
    HardHat,
    UserPlus,
    Megaphone
};

function ActivitisTable() {
    return (
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/5">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="font-headline text-2xl text-primary font-bold">
                        Recent Activities
                    </h2>
                    <Link
                        className="text-sm font-bold text-secondary flex items-center gap-1 hover:underline"
                        href="/dashboard/activities"
                    >
                        View All{" "}
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="space-y-6">
                    {activitiesData.map((activity, index) => {
                        const IconComponent = iconMap[activity.icon];
                        return (
                            <div key={index} className="flex items-center justify-between group hover:bg-surface-container/50 -mx-3 p-3 rounded-xl transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-white transition-colors shadow-sm">
                                        {IconComponent && <IconComponent className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <p className="font-bold text-on-surface">
                                            {activity.title}
                                        </p>
                                        <p className="text-xs text-on-surface-variant">
                                            {activity.description}
                                        </p>
                                    </div>
                                </div>
                                {activity.type === 'amount' ? (
                                    <span className={`font-bold ${activity.colorClass}`}>{activity.value}</span>
                                ) : (
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${activity.colorClass}`}>
                                        {activity.value}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Financial Progress Pillar Concept */}
            <div className="block bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/5 hover:border-transparent transition-colors group">
                <h2 className="font-headline text-2xl text-primary font-bold mb-8 group-hover:text-secondary transition-colors">
                    Masjid Expansion Fund
                </h2>
                <div className="flex gap-12 items-end">
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-64 w-16 bg-surface-container rounded-full relative overflow-hidden">
                            <div className="absolute bottom-0 w-full bg-secondary group-hover:bg-primary h-4/5 rounded-t-full transition-all duration-1000" />
                        </div>
                        <span className="text-xs font-bold">Phase 1</span>
                    </div>
                    <div className="flex-1 pb-4">
                        <p className="text-4xl font-headline font-bold text-primary mb-2">
                            $1.2M{" "}
                            <span className="text-lg font-sans text-on-surface-variant font-normal">
                                of $1.5M goal
                            </span>
                        </p>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                            Our expansion project is nearing its first milestone. We
                            need approximately $300k more to break ground by late
                            autumn.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-secondary-container/30 text-on-secondary-container rounded-lg text-xs font-bold">
                                80% Funded
                            </div>
                            <div className="px-4 py-2 bg-primary-container/10 text-primary rounded-lg text-xs font-bold">
                                142 Donors
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivitisTable