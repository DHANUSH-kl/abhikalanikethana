"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Collections from "@/components/Collections";
import AboutSection from "@/components/AboutSection";
import ArtworksCatalog from "@/components/ArtworksCatalog";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Collections />
        <AboutSection />
        <ArtworksCatalog />
        <Features />
      </main>
      <Footer />
    </>
  );
}
