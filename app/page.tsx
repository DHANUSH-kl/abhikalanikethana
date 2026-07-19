"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Collections from "@/components/Collections";
import AboutSection from "@/components/AboutSection";
import FoundersSection from "@/components/FoundersSection";
import StatsSection from "@/components/StatsSection";
import ArtworksCatalog from "@/components/ArtworksCatalog";
import RecentlyAcquired from "@/components/RecentlyAcquired";
import Features from "@/components/Features";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Collections />
        <AboutSection />
        <FoundersSection />
        <StatsSection />
        <ArtworksCatalog />
        <RecentlyAcquired />
        <Features />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
