'use client';

import React, { useState } from 'react'
import DonationHero from '../components/donations/DonationHero'
import DonationHub from '../components/donations/DonationHub'
import Campaigns from '../components/donations/Campaigns'
import GrowthChart from '../components/donations/GrowthChart'

function Donations() {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleCampaignSelect = (campaignTitle) => {
    setSelectedCampaign(campaignTitle);
    // Scroll to donation hub
    const hubElement = document.getElementById('donate');
    if (hubElement) {
      hubElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-grow pt-32 pb-20">
      { /* Hero Section */}
      <DonationHero />
      { /* Interactive Donation Hub */}
      <DonationHub selectedCampaign={selectedCampaign} />
      { /* Active Campaigns */}
      <Campaigns onDonate={handleCampaignSelect} />
      { /* Vertical Pillars of Growth */}
      <GrowthChart />
    </main>
  )
}

export default Donations