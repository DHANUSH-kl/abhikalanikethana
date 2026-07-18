"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Leaf } from 'lucide-react';
import { gsap } from "gsap-trial";
import { useGSAP } from "@gsap/react";
import { BrushTopRight, BrushBottomLeft } from './BrushStrokes';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const brushRightRef = useRef<HTMLDivElement>(null);
  const brushLeftRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Setup absolute initial states to avoid Flash of Unstyled Content (FOUC)
    gsap.set(containerRef.current, { opacity: 1 });
    
    // Split text masking targets
    const headlineLines = headlineRef.current ? Array.from(headlineRef.current.querySelectorAll('.mask-line-inner')) : [];
    const subheadlineLines = subheadlineRef.current ? Array.from(subheadlineRef.current.querySelectorAll('.mask-line-inner')) : [];

    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1.4 }
    });

    // 2. Main Orchestrated UX Timeline
    tl.fromTo(
      [brushRightRef.current, brushLeftRef.current],
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 2, stagger: 0.15 },
      "0.1"
    )
    // --- STEP 1: Eyebrow Reveal ---
    .fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 1 },
      "0.3"
    )
    // --- STEP 2: Main Headline Animation ---
    .fromTo(
      headlineLines,
      { y: "105%" },
      { y: "0%", stagger: 0.12, duration: 1.2 },
      "0.4"
    )
    // --- STEP 3: Subheadline Animation (Explicit 0.4s delay after headline starts settling) ---
    .fromTo(
      subheadlineLines,
      { y: "105%" },
      { y: "0%", stagger: 0.08, duration: 1.1 },
      "1.0" // Precise hook point for 0.4s rhythmic delay
    )
    // --- STEP 4: CTAs Fade & Slide ---
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "1.3"
    )
    // --- STEP 5: Image reveal synchronization ---
    .fromTo(
      imageWrapperRef.current,
      { opacity: 0, y: 50, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      { opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5 },
      "0.4"
    )
    .fromTo(
      imageWrapperRef.current?.querySelector('.hero-main-img') ?? [],
      { scale: 1.15 },
      { scale: 1, duration: 1.8 },
      "0.4"
    )
    .fromTo(
      imageFrameRef.current,
      { opacity: 0, x: 0, y: 0 },
      { opacity: 1, x: 14, y: 14, duration: 1.2 },
      "1.0"
    )
    .fromTo(
      badgeRef.current,
      { opacity: 0, scale: 0.8, rotation: -15 },
      { opacity: 1, scale: 1, rotation: 0, ease: "back.out(1.5)", duration: 1.2 },
      "1.2"
    );

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="hero-wrapper bg-bg-cream relative overflow-hidden min-h-screen font-sans opacity-0 select-none"
    >
      {/* Decorative Background Brush Strokes */}
      <div ref={brushRightRef} className="absolute top-0 right-0 w-[320px] h-auto pointer-events-none z-1 will-change-transform">
        <BrushTopRight />
      </div>
      
      <div ref={brushLeftRef} className="absolute bottom-0 left-0 w-[450px] h-auto pointer-events-none z-1 will-change-transform">
        <BrushBottomLeft />
      </div>

      {/* Hero Content Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 lg:pt-36 lg:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start pt-4 lg:pt-10">
          
          {/* Eyebrow Label */}
          <div ref={eyebrowRef} className="mb-4">
            <span className="text-purple text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase block">
              A COLLECTION WORTH LIVING WITH
            </span>
          </div>

          {/* Premium Masked Headline */}
          <h1 ref={headlineRef} className="text-terracotta text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-serif font-bold tracking-wide leading-[1.1] mb-6 whitespace-normal">
            <span className="mask-line-outer relative block overflow-hidden pb-1">
              <span className="mask-line-inner block will-change-transform">Collect Art That</span>
            </span>
            <span className="mask-line-outer relative block overflow-hidden pb-1">
              <span className="mask-line-inner block will-change-transform">Outlives Trends.</span>
            </span>
          </h1>

          {/* Premium Masked Subheadline */}
          <p ref={subheadlineRef} className="text-text-muted text-sm md:text-base max-w-md leading-relaxed font-light mb-8">
            <span className="mask-line-outer relative block overflow-hidden">
              <span className="mask-line-inner block will-change-transform">Discover original abstract artworks thoughtfully curated to</span>
            </span>
            <span className="mask-line-outer relative block overflow-hidden">
              <span className="mask-line-inner block will-change-transform">transform spaces, inspire conversation, and become a seamless</span>
            </span>
            <span className="mask-line-outer relative block overflow-hidden">
              <span className="mask-line-inner block will-change-transform">part of your everyday architectural life.</span>
            </span>
          </p>

          {/* Action Links/Buttons group */}
          <div ref={ctaRef} className="hero-cta-group flex items-center gap-x-8 flex-wrap gap-y-4">
            <a href="#collections" className="btn-pill btn-green group inline-flex items-center gap-2 relative overflow-hidden">
              EXPLORE GALLERY
              <ArrowRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1.5" />
            </a>

            <a href="#exhibition" className="group inline-flex items-center gap-1.5 text-text-dark text-xs font-semibold tracking-[0.15em] uppercase relative py-1">
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:scale-x-[0.25] after:origin-left after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:after:scale-x-100">
                Current Exhibition
              </span>
              <ArrowUpRight size={14} className="transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Image & Floating Badge */}
        <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[500px] mt-10 lg:mt-0 flex items-center justify-center">
          <div className="relative w-full max-w-[420px] h-full">
            
            {/* Offset Art Frame Backing */}
            <div ref={imageFrameRef} className="absolute inset-0 border border-purple/30 rounded-tl-[80px] rounded-br-[80px] pointer-events-none will-change-transform" />

            {/* Main Image Container */}
            <div ref={imageWrapperRef} className="relative w-full h-full rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl z-10 border-[6px] border-white map-clip will-change-transform">
              <Image
                src="/hero_painting.png"
                alt="Abstract Art Setup"
                fill
                priority
                className="hero-main-img object-cover will-change-transform"
              />
            </div>

            {/* Floating Circular Badge Component */}
            <div ref={badgeRef} className="absolute bottom-[10%] -left-6 sm:-left-8 lg:-left-10 z-20 will-change-transform">
              <div className="bg-bg-cream rounded-full w-28 h-28 sm:w-34 sm:h-34 border-[1px] border-terracotta flex flex-col items-center justify-center p-3 shadow-xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105 hover:shadow-[0_20px_40px_rgba(192,92,60,0.18)] group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 border border-green rounded-full flex items-center justify-center mb-1.5 transition-transform duration-700 group-hover:rotate-[360deg]">
                  <Leaf className="text-green" size={14} strokeWidth={1.5} />
                </div>
                <p className="text-terracotta text-[7.5px] sm:text-[8.5px] font-bold text-center tracking-widest leading-relaxed uppercase selection:bg-transparent">
                  ART IS ALIVE. <br />
                  CREATIVITY <br />
                  HAS NO LIMITS.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}