"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ArtworksCatalog() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="categories" className="py-24 px-6 sm:px-8 lg:px-16 bg-[#faf8f5] relative overflow-hidden z-[2] border-t border-purple/10">
      {/* Tactile Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 text-[#A9D03F] font-sans font-bold text-xs tracking-[0.3em] uppercase mb-3">
            <Sparkles size={16} className="text-[#A9D03F]" />
            Acquisitions Catalogue
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F36C1E] uppercase font-light tracking-wide mb-4">
            Acquire Original Abstract Art
          </h2>
          <p className="text-[#5e544e] text-sm sm:text-base font-normal leading-relaxed">
            Select a dedicated category below to explore our museum-grade collections. Experience smooth continuous moving artwork showcases and inquire directly via WhatsApp.
          </p>
        </div>

        {/* 2 Category Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* ABSTRACT CATEGORY CARD */}
          <Link 
            href="/collections/abstract"
            className="group relative overflow-hidden rounded-[32px] bg-white border border-stone-200/80 shadow-md transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f0eae1]">
              <Image
                src="/painting_expressions.png"
                alt="Abstract Art Collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-[#F36C1E] tracking-wider uppercase shadow-sm">
                Vibrant Abstract
              </div>
            </div>

            <div className="p-8 flex items-center justify-between bg-white flex-grow">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2e2824] uppercase tracking-wide mb-2 group-hover:text-[#F36C1E] transition-colors">
                  Abstract Collection
                </h3>
                <p className="text-xs text-[#5e544e] font-medium uppercase tracking-widest">
                  Explore Hand-Painted Vibrant Originals &rarr;
                </p>
              </div>

              <div className="w-12 h-12 rounded-full bg-[#F36C1E] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>

          {/* BLACK & WHITE CATEGORY CARD */}
          <Link 
            href="/collections/black-and-white"
            className="group relative overflow-hidden rounded-[32px] bg-white border border-stone-200/80 shadow-md transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
              <Image
                src="/black and white collection/IMG_4056.PNG"
                alt="Black and White Art Collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-[#2e2824] tracking-wider uppercase shadow-sm">
                Monochrome Noir
              </div>
            </div>

            <div className="p-8 flex items-center justify-between bg-white flex-grow">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2e2824] uppercase tracking-wide mb-2 group-hover:text-[#F36C1E] transition-colors">
                  Black &amp; White Collection
                </h3>
                <p className="text-xs text-[#5e544e] font-medium uppercase tracking-widest">
                  Explore High-Contrast Monochromatic Art &rarr;
                </p>
              </div>

              <div className="w-12 h-12 rounded-full bg-[#2e2824] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}
