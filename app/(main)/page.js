import DonationHub from "./components/donations/DonationHub";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import DonationsSection from "./components/home/DonationsSection";
import FinancialSection from "./components/home/FinancialSection";
import HeroSection from "./components/home/HeroSection";
import PrayerTimes from "./components/home/PrayerTimes";
import ServicesSection from "./components/home/ServicesSection";
import TeamSection from "./components/home/TeamSection";
import EidAndJummahTime from "./components/prayer-times/EidAndJummahTime";

export default function Home() {
  return (
    <>

      <main className="">
        { /* Hero Section */}
        <HeroSection />
        { /* Prayer Times Section */}
        <PrayerTimes />
        { /* Eid & Jummah Dynamic Components */}
        <EidAndJummahTime />
        { /* About Section */}
        <AboutSection />
        { /* Services Section (Bento Grid) */}
        <ServicesSection />
        { /* Team Section */}
        <TeamSection />
        { /* Financial Transparency Section (Vertical Pillars) */}
        <FinancialSection />
        { /* Donation Section */}
        {/* <DonationsSection /> */}
        <DonationHub />
        { /* Contact Section */}
        <ContactSection />
      </main>


    </>
  );
}
