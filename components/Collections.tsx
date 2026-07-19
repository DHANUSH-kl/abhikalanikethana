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

function CollectionCard({ imageSrc, title, desc, index, accentColor }: CollectionCardProps) {
  return (
    <div 
      style={{ backgroundColor: accentColor }}
      className="collection-card group relative overflow-hidden rounded-[24px] cursor-pointer flex flex-col p-5 sm:p-6 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
    >
      {/* Framed Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden mb-6 flex items-center justify-center bg-white/5 border border-white/10 shadow-[inset_0_4px_12px_rgba(255,255,255,0.05)]">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out scale-[1.01] group-hover:scale-[1.05]"
            priority={index < 2}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow text-white">
        <h3 className="font-serif text-[1.25rem] sm:text-[1.35rem] font-medium tracking-[0.05em] uppercase mb-2.5 leading-tight">
          {title}
        </h3>
        
        <p className="text-white/85 text-[12px] sm:text-[13px] font-sans font-light leading-relaxed mb-6 flex-grow pr-1">
          {desc}
        </p>

        {/* View Details Link */}
        <div className="flex items-center gap-1.5 text-white/90 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase mt-auto group-hover:text-white">
          <span>VIEW DETAILS</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
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
        ".collection-card",
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
            trigger: ".collections-grid-container",
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
      desc: "Exploring the many moods, emotions and stories within.",
      accentColor: "#D36135", // Burnt Terracotta
      icon: Palette
    },
    {
      imageSrc: "/painting_balance.png",
      title: "FORM & BALANCE",
      desc: "A play of shapes, structure and visual harmony.",
      accentColor: "#A4C345", // Olive Lime Green
      icon: Layers
    },
    {
      imageSrc: "/painting_journeys.png",
      title: "INNER JOURNEYS",
      desc: "Abstract narratives inspired by dreams and thoughts.",
      accentColor: "#A892CC", // Lavender Purple
      icon: Compass
    },
    {
      imageSrc: "/painting_stories.png",
      title: "SILENT STORIES",
      desc: "Moments frozen in time, expressed in simplicity.",
      accentColor: "#EBB637", // Warm Yellow Ochre
      icon: BookOpen
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="collections" 
      className="collections-section flex flex-col justify-between py-20 px-6 sm:px-8 lg:px-16 relative overflow-hidden bg-[#faf8f5] min-h-screen h-auto lg:h-screen lg:max-h-screen lg:pt-[8vh] lg:pb-[14vh] transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-[2]"
    >
      {/* Tactile Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />
      
      {/* Elegant Museum Header */}
      <div className="collections-header-wrapper flex flex-col items-center mb-16 z-20">
        <div className="header-eyebrow flex items-center gap-3 mb-4">
          <span className="w-1 h-1 rounded-full bg-purple/30" />
          <span className="text-purple/50 text-[9px] font-bold tracking-[0.4em] uppercase">
            Curated Exhibitions
          </span>
          <span className="w-1 h-1 rounded-full bg-purple/30" />
        </div>
        
        <h2 className="collections-title text-4xl sm:text-5xl lg:text-[2.8rem] font-serif text-[#0e0c0b] font-extralight tracking-[0.2em] uppercase text-center">
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
      <div className="collections-grid-container w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch z-20 min-h-[460px] md:min-h-auto md:mb-[50px] group/container transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
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