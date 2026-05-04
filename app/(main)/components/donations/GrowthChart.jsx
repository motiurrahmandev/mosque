'use client';

import React, { useState, useEffect } from 'react';
import { getDonations } from '@/app/actions/donationActions';
import { getCampaigns } from '@/app/actions/campaignActions';

function GrowthChart() {
    const [stats, setStats] = useState({
        totalDonation: 0,
        chartData: []
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        const [donationsRes, campaignsRes] = await Promise.all([
            getDonations(),
            getCampaigns()
        ]);

        if (donationsRes.success && campaignsRes.success) {
            const donations = donationsRes.data;
            const campaigns = campaignsRes.data;

            // 1. Total Donation
            const total = donations.reduce((sum, d) => sum + (d.amount || 0), 0);

            // 2. Chart Data (Total per campaign/category)
            const categories = [...new Set(donations.map(d => d.category))];
            const data = categories.map(cat => {
                const totalForCat = donations
                    .filter(d => d.category === cat)
                    .reduce((sum, d) => sum + (d.amount || 0), 0);
                return {
                    label: cat,
                    amount: totalForCat
                };
            }).sort((a, b) => b.amount - a.amount).slice(0, 5); // Top 5

            setStats({
                totalDonation: total,
                chartData: data
            });
        }
        setIsLoading(false);
    };

    const maxAmount = Math.max(...stats.chartData.map(d => d.amount), 1);

    return (
        <section className="tonal-shift-surface-container-low py-24 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <div className="mb-10 p-8 bg-primary rounded-3xl text-on-primary shadow-xl shadow-primary/20 relative overflow-hidden group">
                        <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">মোট সংগৃহীত অনুদান</p>
                        <h2 className="text-5xl font-black font-headline">৳{stats.totalDonation.toLocaleString()}</h2>
                        <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[100px]">volunteer_activism</span>
                        </div>
                    </div>

                    <h2 className="font-headline text-3xl text-primary mb-4">আমাদের অগ্রগতির চালিকাশক্তি</h2>
                    <p className="text-on-surface-variant mb-12">আপনাদের অনুদান আমাদের বিভিন্ন সেবামূলক কার্যক্রমে কীভাবে ভূমিকা রাখছে তা নিচের চার্টে তুলে ধরা হলো।</p>
                    
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 h-[300px] items-end">
                        {isLoading ? (
                            <div className="col-span-full h-full flex items-center justify-center">
                                <p className="text-on-surface-variant animate-pulse">লোড হচ্ছে...</p>
                            </div>
                        ) : stats.chartData.length > 0 ? (
                            stats.chartData.map((item, index) => {
                                const height = (item.amount / maxAmount) * 100;
                                return (
                                    <div key={index} className="flex flex-col items-center justify-end h-full group">
                                        <div 
                                            className="w-full max-w-[50px] bg-secondary rounded-t-xl relative transition-all duration-1000 ease-out group-hover:bg-primary"
                                            style={{ height: `${height}%` }}
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-primary text-[10px] md:text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                                ৳{(item.amount / 1000).toFixed(1)}k
                                            </div>
                                        </div>
                                        <p className="text-[10px] md:text-xs mt-3 text-center font-bold text-on-surface-variant line-clamp-2 h-8">
                                            {item.label}
                                        </p>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center text-on-surface-variant italic py-10">কোনো ডাটা পাওয়া যায়নি</div>
                        )}
                    </div>
                </div>
                
                <div className="md:w-1/2 relative">
                    <div className="relative z-10">
                        <img 
                            className="rounded-3xl shadow-2xl w-full" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoaxed3p7ha_mAY_TbXihzOWYs0zpVvLDbHEqLweO1KPZo5K2DSntSl7APe_teyAolVBA5abnCJcULeUn7mvXYxnKpgTcDtDcf5jLj3GKrmaswN77nWJ6avVElbXSQxCHTpmG5-QG9lGMMfJOc_0Lk5ySIGDodW6CXR1sYmFrgkap1EARca1M3T_zi2Nf_9rMrmK42LqCb7CEhGMK5WRIIlBiT6xgJMr2V9KvxSsblrLrK8ue8BOAneha9FgOEfaHA08wY-neIcpA" 
                            alt="Mosque growth visualization"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
}

export default GrowthChart;