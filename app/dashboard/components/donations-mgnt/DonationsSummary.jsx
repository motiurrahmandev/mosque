'use client';

import React, { useState, useEffect } from 'react';
import { getDonations } from '@/app/actions/donationActions';
import { getCampaigns } from '@/app/actions/campaignActions';

function DonationsSummary() {
  const [stats, setStats] = useState({
    totalDonation: 0,
    activeCampaigns: 0,
    campaignBreakdown: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
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

      // 2. Active Campaigns
      const activeCount = campaigns.filter(c => c.status === 'active').length;

      // 3. Campaign Breakdown
      const breakdown = campaigns.map(campaign => {
        // Sum donations for this campaign category
        const totalForCampaign = donations
          .filter(d => d.category === campaign.title)
          .reduce((sum, d) => sum + (d.amount || 0), 0);
        
        return {
          title: campaign.title,
          total: totalForCampaign,
          goal: campaign.goalAmount
        };
      });

      // Add general categories too (like Zakat, Sadakah) if they have donations but aren't in campaigns
      const campaignTitles = campaigns.map(c => c.title);
      const otherDonations = donations.filter(d => !campaignTitles.includes(d.category));
      
      // Group other donations by category
      const otherBreakdownMap = otherDonations.reduce((acc, d) => {
        acc[d.category] = (acc[d.category] || 0) + d.amount;
        return acc;
      }, {});

      const otherBreakdown = Object.keys(otherBreakdownMap).map(cat => ({
        title: cat,
        total: otherBreakdownMap[cat],
        isGeneral: true
      }));

      setStats({
        totalDonation: total,
        activeCampaigns: activeCount,
        campaignBreakdown: [...breakdown, ...otherBreakdown].sort((a, b) => b.total - a.total)
      });
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-surface-container-low h-32 rounded-2xl border border-outline-variant/10"></div>
        ))}
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Lifetime */}
      <div className="bg-primary text-on-primary p-6 rounded-2xl relative overflow-hidden group shadow-xl shadow-primary/20">
        <div className="relative z-10">
          <p className="text-on-primary/80 text-xs font-bold uppercase tracking-widest mb-1">
            মোট ডোনেশন
          </p>
          <h3 className="text-4xl font-bold font-headline mb-4">৳{stats.totalDonation.toLocaleString()}</h3>
          <div className="flex items-center gap-2 text-on-primary/90 text-sm font-semibold">
            <span className="material-symbols-outlined text-[20px] text-green-300">trending_up</span>
            <span>সকল উৎস থেকে সংগৃহীত</span>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[120px]">payments</span>
        </div>
      </div>

      {/* Active Campaigns Summary */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <span className="material-symbols-outlined text-[48px] text-secondary opacity-30">campaign</span>
        </div>
        <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">
          সক্রিয় ক্যাম্পেইন
        </p>
        <h3 className="text-4xl font-bold font-headline mb-4">{stats.activeCampaigns}</h3>
        <div className="space-y-2">
          <p className="text-xs font-medium text-on-surface-variant flex justify-between">
            <span>চলমান ফান্ডরেইজিং কার্যক্রম</span>
          </p>
          <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-secondary rounded-full w-full" />
          </div>
        </div>
      </div>

      {/* Campaign Breakdown */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden h-full flex flex-col">
        <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-3">
          খাত অনুযায়ী সংগৃহীত
        </p>
        <div className="space-y-4 overflow-y-auto max-h-[120px] custom-scrollbar flex-grow pr-2">
          {stats.campaignBreakdown.length > 0 ? (
            stats.campaignBreakdown.slice(0, 5).map((item, index) => (
              <div key={index} className="flex justify-between items-center group">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-on-surface truncate max-w-[150px]">{item.title}</span>
                  {item.goal && <span className="text-[10px] text-on-surface-variant">লক্ষ্য: ৳{item.goal.toLocaleString()}</span>}
                </div>
                <span className="text-sm font-bold text-primary">৳{item.total.toLocaleString()}</span>
              </div>
            ))
          ) : (
            <p className="text-xs text-on-surface-variant italic">কোনো ডাটা পাওয়া যায়নি</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default DonationsSummary;
