import React from "react";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import ImamMessage from "../components/about/ImamMessage";
import Facilities from "../components/about/Facilities";
import CTASection from "../components/about/CTASection";

function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <AboutHero />
      {/* Mission & Vision Bento Grid */}
      <MissionVision />
      {/* Imam's Message */}
      <ImamMessage />
      {/* Facilities Showcase */}
      <Facilities />
      {/* CTA Section */}
      <CTASection />
    </main>
  );
}

export default AboutPage;
