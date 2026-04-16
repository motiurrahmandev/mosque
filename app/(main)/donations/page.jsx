import React from 'react'
import DonationHero from '../components/donations/DonationHero'
import DonationHub from '../components/donations/DonationHub'
import Campaigns from '../components/donations/Campaigns'
import GrowthChart from '../components/donations/GrowthChart'

function Donations() {
  return (
    <main className="flex-grow pt-32 pb-20">
      { /* Hero Section */}
      <DonationHero />
      { /* Interactive Donation Hub */}
      <DonationHub />
      { /* Active Campaigns */}
      <Campaigns />
      { /* Vertical Pillars of Growth */}
      <GrowthChart />

    </main>
  )
}

export default Donations