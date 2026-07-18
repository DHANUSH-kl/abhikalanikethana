"use client";

import React, { useRef } from "react";
import Image from "next/image";
import SplitText from "./SplitText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Palette, Layers, Compass, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CollectionCardProps {
  imageSrc: string;
  title: string;
  desc: string;
  index: number;
  accentColor: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

function CollectionCard({ imageSrc, title, desc, index, accentColor, icon: IconComponent }: CollectionCardProps) {
  const paddedIndex = String(index + 1).padStart(2, "0");

  return (
    <div className="accordion-card group relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#141211] border border-white/5 cursor-pointer aspect-[3/4.2] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-100 scale-100 group-hover/container:opacity-50 group-hover/container:scale-[0.96] hover:!opacity-100 hover:!scale-[1.03] hover:-translate-y-3 hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.75)] hover:border-white/10">
      {/* Background Image with Cinematic Zoom */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 1023px) 100vw, 25vw"
          className="card-image object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-[1.03] group-hover:scale-[1.06]"
        />
        {/* Dynamic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0b] via-[#0e0c0b]/25 to-transparent opacity-90 z-10" />
      </div>

      {/* Floating Card Badge (Always full width and constant border-radius to prevent border morph stutter) */}
      <div className="absolute bottom-5 left-5 right-5 z-20 bg-[#faf8f5]/95 backdrop-blur-md border border-white/60 p-4 sm:p-5 rounded-[24px] sm:rounded-[28px] shadow-lg flex flex-col justify-start transition-colors duration-500 ease-out group-hover:bg-[#faf8f5]/98">
        
        {/* Top Header Row (Always visible and stable) */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3 min-w-0">
            {/* Circle Icon Wrapper */}
            <div className="w-8 h-8 rounded-full border border-[#0e0c0b]/10 flex items-center justify-center bg-white flex-shrink-0">
              <IconComponent size={14} className="text-[#0e0c0b]/80" />
            </div>
            {/* Title */}
            <h3 className="font-sans font-bold text-xs sm:text-[13px] text-[#0e0c0b] tracking-wider uppercase">
              {title}
            </h3>
          </div>
          
          {/* Verified Check */}
          <svg className="w-4.5 h-4.5 flex-shrink-0" style={{ color: accentColor }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Bottom Drawer (Expands vertically using hardware-accelerated max-height transitions) */}
        <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] mt-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3">
          <p className="text-[#0e0c0b]/70 text-[11px] sm:text-xs font-light leading-relaxed pr-1">
            {desc}
          </p>
        </div>

      </div>
    </div>
  );
}

export default function Collections() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Premium entry stagger: when section enters viewport, cards animate one-by-one with a smooth delay
      gsap.fromTo(
        ".accordion-card",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.22,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".accordion-container",
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const collectionsData = [
    {
      imageSrc: "/painting_expressions.png",
      title: "HUMAN EXPRESSIONS",
      desc: "An intimate exploration of raw, unfiltered human moods, silent stories, and complex emotions preserved on canvas.",
      accentColor: "#D66853", // Raw Terracotta
      icon: Palette
    },
    {
      imageSrc: "/painting_balance.png",
      title: "FORM & BALANCE",
      desc: "A structural playground balancing architectural gravity, geometric precision, and fluid natural curves.",
      accentColor: "#5D7A68", // Deep Sage
      icon: Layers
    },
    {
      imageSrc: "/painting_journeys.png",
      title: "INNER JOURNEYS",
      desc: "A surreal mapping of internal dreamscapes and abstract memories, guided purely by subconscious textures.",
      accentColor: "#7B6F8E", // Muted Amethyst
      icon: Compass
    },
    {
      imageSrc: "/painting_stories.png",
      title: "SILENT STORIES",
      desc: "Fleeting atmospheric moments frozen in stillness. An exercise in heavy silence, minimalism, and spacious composition.",
      accentColor: "#E2B13C", // Ochre Yellow
      icon: BookOpen
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="collections" 
      className="collections-section flex flex-col justify-between py-20 px-6 sm:px-8 lg:px-16 relative overflow-hidden bg-[#0e0c0b] min-h-screen h-auto lg:h-screen lg:max-h-screen lg:pt-[8vh] lg:pb-[14vh] transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-[2] lg:has-[.accordion-card:nth-child(1):hover]:bg-[#160f0d] lg:has-[.accordion-card:nth-child(2):hover]:bg-[#0d120f] lg:has-[.accordion-card:nth-child(3):hover]:bg-[#100f13] lg:has-[.accordion-card:nth-child(4):hover]:bg-[#13120d]"
    >
      {/* Tactile Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />
      
      {/* Elegant Museum Header */}
      <div className="collections-header-wrapper flex flex-col items-center mb-16 z-20">
        <div className="header-eyebrow flex items-center gap-3 mb-4">
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="text-white/40 text-[9px] font-semibold tracking-[0.4em] uppercase">
            Curated Exhibitions
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
        </div>
        
        <h2 className="collections-title text-4xl sm:text-5xl lg:text-[2.8rem] font-serif text-white font-extralight tracking-[0.2em] uppercase text-center">
          <SplitText
            text="OUR COLLECTIONS"
            tag="span"
            delay={35}
            duration={1.2}
            ease="power3.out"
            splitType="words, chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            startDelay={100}
            textAlign="center"
          />
        </h2>
      </div>

      {/* Grid Container */}
      <div className="accordion-container w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch z-20 min-h-[460px] md:min-h-auto md:mb-[50px] group/container transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
        {collectionsData.map((item, index) => (
          <CollectionCard
            key={index}
            index={index}
            imageSrc={item.imageSrc}
            title={item.title}
            desc={item.desc}
            accentColor={item.accentColor}
            icon={item.icon}
          />
        ))}
      </div>


    </section>
  );
}