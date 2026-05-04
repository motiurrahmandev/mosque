'use client';

import React, { useState, useEffect } from 'react'
import { getCampaigns } from '@/app/actions/campaignActions';

function Campaigns({ onDonate }) {
    const [campaigns, setCampaigns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCampaigns();
    }, []);

    const fetchCampaigns = async () => {
        const result = await getCampaigns();
        if (result.success) {
            // Filter only active campaigns for the frontend
            setCampaigns(result.data.filter(c => c.status === 'active'));
        }
        setIsLoading(false);
    };

    if (isLoading) {
        return (
            <section className="max-w-7xl mx-auto px-8 py-24 text-center">
                <p className="text-on-surface-variant animate-pulse">ক্যাম্পেইন লোড হচ্ছে...</p>
            </section>
        );
    }

    if (campaigns.length === 0) {
        return null; // Or show a "No active campaigns" message
    }

    return (
        <section className="max-w-7xl mx-auto px-8 py-24">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="font-headline text-4xl text-primary mb-2">চলমান ফান্ডরেইজিং</h2>
                    <p className="text-on-surface-variant">আমাদের সম্প্রদায়ের উন্নয়নের কৌশলগত ভিত্তিপ্রস্তর।</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {campaigns.map((campaign) => {
                    const progress = Math.min(100, Math.round((campaign.raisedAmount / campaign.goalAmount) * 100));
                    
                    return (
                        <div key={campaign._id} className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10 flex flex-col">
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    src={campaign.image} 
                                    alt={campaign.title}
                                />
                                {campaign.isUrgent && (
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-full animate-pulse">জরুরী</div>
                                )}
                                <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md text-white text-xs font-bold rounded-full">
                                    {campaign.category}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-headline text-xl text-primary mb-3">{campaign.title}</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                                    {campaign.description}
                                </p>
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-semibold text-on-surface">৳{campaign.raisedAmount.toLocaleString()} / ৳{campaign.goalAmount.toLocaleString()}</span>
                                        <span className="text-secondary font-bold">{progress}%</span>
                                    </div>
                                    <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-secondary transition-all duration-1000" 
                                            style={{ width: `${progress}%` }} 
                                        />
                                    </div>
                                </div>
                                <button 
                                    onClick={() => onDonate(campaign.title)}
                                    className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-95"
                                >
                                    অনুদান দিন
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Campaigns