"use client";

import React, { use, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { getArtworksByCategory, Artwork } from "@/lib/artworks";
import { ArrowLeft, Sparkles, Eye } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const rawCategory = resolvedParams.category;
  const mobileGridRef = useRef<HTMLDivElement>(null);
  
  const categoryKey = rawCategory === "black-and-white" ? "black-and-white" : "abstract";
  const categoryTitle = categoryKey === "black-and-white" ? "Black & White Collection" : "Abstract Collection";
  const categoryDesc = categoryKey === "black-and-white" 
    ? "High-contrast monochromatic works exploring shadow, structure, and silent emotional resonance." 
    : "Vibrant hand-painted abstracts infused with rich color harmonies, texture, and physical depth.";

  const artworks: Artwork[] = getArtworksByCategory(categoryKey);

  // Duplicate cards for infinite seamless marquee loop (desktop only)
  const marqueeList = [...artworks, ...artworks, ...artworks];

  // Intersection Observer for mobile grid scroll-reveal animations
  useEffect(() => {
    if (!mobileGridRef.current) return;
    const cards = mobileGridRef.current.querySelectorAll('.mobile-reveal-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [artworks]);

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2e2824] flex flex-col font-sans">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-16 px-6 sm:px-8 lg:px-16 relative overflow-hidden bg-[#f7f4ee] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <Link 
            href="/#categories" 
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F36C1E] uppercase mb-6 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Categories
          </Link>

          <div className="flex items-center gap-2 text-[#A9D03F] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            <Sparkles size={16} /> Gallery Exhibition
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#2e2824] uppercase font-light tracking-wide mb-4">
            {categoryTitle}
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-[#5e544e] font-normal leading-relaxed">
            {categoryDesc}
          </p>
        </div>
      </section>

      {/* ============================================================
          DESKTOP: Infinite Moving Cards Marquee (hidden on mobile)
          ============================================================ */}
      <section className="py-20 overflow-hidden relative hidden md:block">
        <style>{`
          @keyframes categoryMarqueeL2R {
            0% {
              transform: translate3d(-50%, 0, 0);
            }
            100% {
              transform: translate3d(0%, 0, 0);
            }
          }
          .category-ticker-container {
            display: flex;
            width: max-content;
            animation: categoryMarqueeL2R 25s linear infinite;
            will-change: transform;
          }
          .category-ticker-container:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 mb-8 text-center sm:text-left flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#F36C1E] tracking-[0.2em] uppercase">Interactive Gallery Showcase</span>
            <p className="text-xs text-[#5e544e] mt-1">Cards move continuously from left to right. Tap/click any painting to view full details.</p>
          </div>
        </div>

        {/* Ticker Wrapper */}
        <div className="w-full overflow-hidden py-6 relative">
          {/* Soft responsive edge blur and fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#faf8f5] to-transparent pointer-events-none z-30 backdrop-blur-[2px]" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#faf8f5] to-transparent pointer-events-none z-30 backdrop-blur-[2px]" />

          <div className="category-ticker-container flex gap-6 px-4">
            {marqueeList.map((art, index) => (
              <Link
                key={`${art.id}-${index}`}
                href={`/artwork/${categoryKey}/${art.id}`}
                className="w-[320px] lg:w-[360px] flex-shrink-0 group cursor-pointer relative transition-all duration-500 rounded-[28px] bg-white p-4 border border-stone-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden bg-stone-100 mb-4 border border-stone-200/50">
                  <Image
                    src={art.imageSrc}
                    alt={art.title}
                    fill
                    sizes="360px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Floating Action Badge */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#2e2824] px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg flex items-center gap-1.5">
                      <Eye size={14} /> View Details
                    </span>
                  </div>
                </div>

                <div className="flex flex-col px-2">
                  <span className="text-[10px] font-bold text-[#F36C1E] tracking-widest uppercase mb-1">
                    {art.category === "black-and-white" ? "Black & White" : "Abstract"}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#2e2824] leading-snug group-hover:text-[#F36C1E] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#5e544e] mt-1 font-light line-clamp-1">
                    {art.medium} &bull; {art.dimensions}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MOBILE: 2-Column Static Grid with Scroll Reveal (hidden on desktop)
          ============================================================ */}
      <section className="py-12 px-4 relative block md:hidden">
        <style>{`
          .mobile-reveal-card {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
            transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          }
          .mobile-reveal-card.revealed {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          /* Stagger effect for pairs: second card in each row delays slightly */
          .mobile-reveal-card:nth-child(even) {
            transition-delay: 0.1s;
          }
        `}</style>

        <div className="mb-6 text-center">
          <span className="text-xs font-bold text-[#F36C1E] tracking-[0.2em] uppercase">Gallery Collection</span>
          <p className="text-xs text-[#5e544e] mt-1">Tap any painting to view full details.</p>
        </div>

        <div ref={mobileGridRef} className="grid grid-cols-2 gap-3">
          {artworks.map((art) => (
            <Link
              key={art.id}
              href={`/artwork/${categoryKey}/${art.id}`}
              className="mobile-reveal-card group cursor-pointer relative rounded-[16px] bg-white p-2.5 border border-stone-200/80 shadow-sm active:shadow-md active:scale-[0.98] transition-shadow"
            >
              <div className="relative w-full aspect-[3/4] rounded-[12px] overflow-hidden bg-stone-100 mb-3 border border-stone-200/40">
                <Image
                  src={art.imageSrc}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 360px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col px-1">
                <span className="text-[8px] font-bold text-[#F36C1E] tracking-widest uppercase mb-0.5">
                  {art.category === "black-and-white" ? "B&W" : "Abstract"}
                </span>
                <h3 className="font-serif text-[13px] font-semibold text-[#2e2824] leading-snug line-clamp-1">
                  {art.title}
                </h3>
                <p className="text-[10px] text-[#5e544e] mt-0.5 font-light line-clamp-1">
                  {art.medium}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS REVIEWS SECTION BELOW MOVING CARDS */}
      <TestimonialsSection />

      <Footer />
    </main>
  );
}
