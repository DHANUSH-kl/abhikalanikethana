"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SplitText from "./SplitText";
import { Palette, Layers, Compass, BookOpen } from "lucide-react";

interface CollectionCardProps {
  imageSrc: string;
  title: string;
  desc: string;
  accentColor: string;
  categoryLink: string;
}

function CollectionCard({ imageSrc, title, desc, accentColor, categoryLink }: CollectionCardProps) {
  return (
    <Link 
      href={categoryLink}
      style={{ backgroundColor: accentColor }}
      className="w-[280px] sm:w-[320px] lg:w-[340px] flex-shrink-0 group relative overflow-hidden rounded-[24px] cursor-pointer flex flex-col p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Framed Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden mb-5 flex items-center justify-center bg-white/10 border border-white/20">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="340px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow text-white">
        <h3 className="font-serif text-[1.2rem] sm:text-[1.3rem] font-semibold tracking-[0.05em] uppercase mb-2 leading-tight">
          {title}
        </h3>
        
        <p className="text-white/90 text-xs font-sans font-normal leading-relaxed mb-4 flex-grow">
          {desc}
        </p>

        {/* View Details Link */}
        <div className="flex items-center gap-2 text-white font-sans text-[11px] font-semibold tracking-[0.15em] uppercase mt-auto">
          <span>EXPLORE SIGNATURE</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function Collections() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const collectionsData = [
    {
      imageSrc: "/painting_expressions.png",
      title: "HUMAN EXPRESSIONS",
      desc: "Exploring the many moods, emotions and stories within.",
      accentColor: "#F36C1E", // Vibrant Orange Terracotta
      icon: Palette,
      categoryLink: "/collections/abstract"
    },
    {
      imageSrc: "/painting_balance.png",
      title: "FORM & BALANCE",
      desc: "A play of shapes, structure and visual harmony.",
      accentColor: "#A9D03F", // Vibrant Lime Sage Green
      icon: Layers,
      categoryLink: "/collections/abstract"
    },
    {
      imageSrc: "/painting_journeys.png",
      title: "INNER JOURNEYS",
      desc: "Abstract narratives inspired by dreams and thoughts.",
      accentColor: "#D75CEE", // Vibrant Orchid Purple
      icon: Compass,
      categoryLink: "/collections/abstract"
    },
    {
      imageSrc: "/painting_stories.png",
      title: "SILENT STORIES",
      desc: "Moments frozen in time, expressed in simplicity.",
      accentColor: "#FFCF21", // Warm Sun Yellow
      icon: BookOpen,
      categoryLink: "/collections/abstract"
    },
  ];

  // Repeat the 4 signature cards 4 times for a seamless infinite left-to-right scrolling marquee
  const marqueeItems = [...collectionsData, ...collectionsData, ...collectionsData, ...collectionsData];

  return (
    <section 
      ref={sectionRef} 
      id="collections" 
      className="collections-section py-24 px-4 sm:px-6 relative overflow-hidden bg-[#faf8f5] z-[2]"
    >
      <style>{`
        @keyframes marqueeL2R {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
        .signatures-ticker-container {
          display: flex;
          width: max-content;
          animation: marqueeL2R 22s linear infinite;
          will-change: transform;
        }
        .signatures-ticker-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Tactile Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />
      
      {/* Museum Header */}
      <div className="collections-header-wrapper flex flex-col items-center mb-14 z-20">
        <div className="header-eyebrow flex items-center gap-3 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D75CEE]" />
          <span className="text-[#D75CEE] text-[10px] font-semibold tracking-[0.35em] uppercase">
            Curated Exhibitions
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D75CEE]" />
        </div>
        
        <h2 className="collections-title text-3xl sm:text-5xl font-serif text-[#0e0c0b] font-light tracking-[0.15em] uppercase text-center">
          <SplitText
            text="OUR SIGNATURES"
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

      {/* Infinite Left-to-Right Moving Cards Container */}
      <div className="relative w-full overflow-hidden z-20 py-4">
        {/* Soft responsive edge blur and fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-24 md:w-32 bg-gradient-to-r from-[#faf8f5] to-transparent pointer-events-none z-30 backdrop-blur-[0.5px] sm:backdrop-blur-[2px]" />
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-24 md:w-32 bg-gradient-to-l from-[#faf8f5] to-transparent pointer-events-none z-30 backdrop-blur-[0.5px] sm:backdrop-blur-[2px]" />

        <div className="signatures-ticker-container flex gap-6">
          {marqueeItems.map((item, index) => (
            <CollectionCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              desc={item.desc}
              accentColor={item.accentColor}
              categoryLink={item.categoryLink}
            />
          ))}
        </div>
      </div>

    </section>
  );
}