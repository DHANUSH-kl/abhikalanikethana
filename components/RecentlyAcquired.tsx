"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecentlyAcquired() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "/sold out images/IMG_4294.PNG",
    "/sold out images/IMG_4296.PNG",
    "/sold out images/IMG_4297.PNG",
    "/sold out images/IMG_4298.PNG",
    "/sold out images/IMG_4299.PNG",
    "/sold out images/IMG_4303.PNG",
    "/sold out images/IMG_4304.PNG",
    "/sold out images/IMG_4323.PNG",
    "/sold out images/IMG_4324.PNG",
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll =
        direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="recently-acquired-section py-24 px-6 sm:px-8 lg:px-16 relative overflow-hidden bg-[#faf8f5] z-[2]">
      {/* Tactile Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />

      <div className="max-w-[1400px] mx-auto relative z-20">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-purple/10 pb-8">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="header-eyebrow flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b6f8e]/40" />
              <span className="text-[#7b6f8e] text-[10px] font-bold tracking-[0.3em] uppercase">
                Collector Demand
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#7a2c2c] font-medium leading-[1.15] uppercase tracking-wide mb-4">
              Recently Acquired by Collectors
            </h2>

            {/* Subtitle */}
            <p className="font-serif italic text-sm sm:text-base text-text-muted leading-relaxed max-w-xl">
              A glimpse of originals that have already found their homes — a testament to the rarity of what remains available.
            </p>
          </div>

          {/* Right Side: Logo Watermark (Desktop) & Nav Buttons */}
          <div className="flex flex-col items-end gap-6 flex-shrink-0">
            <div className="hidden md:block opacity-65">
              <Image 
                src="/Abhikalaanikethana Logo Transperent.png" 
                alt="Abhikalaanikethana Logo" 
                width={180} 
                height={36} 
                className="h-10 w-auto object-contain"
              />
            </div>
            
            {/* Custom slider navigation arrows */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-purple/15 flex items-center justify-center text-text-dark/70 bg-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-[#7a2c2c] hover:text-white hover:border-transparent hover:scale-105 cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-purple/15 flex items-center justify-center text-text-dark/70 bg-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-[#7a2c2c] hover:text-white hover:border-transparent hover:scale-105 cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-2 -mx-2 select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src, index) => (
            <div 
              key={index} 
              className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Painting Card */}
              <div className="relative overflow-hidden rounded-[16px] bg-white border border-purple/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col h-full">
                
                {/* Image Container (Cropped aspect ratio like reference image) */}
                <div className="relative w-full aspect-[3/4.2] overflow-hidden bg-[#fbf9f6] p-3 border-b border-purple/5">
                  <div className="relative w-full h-full rounded-[10px] overflow-hidden shadow-inner border border-stone-200/80">
                    <Image
                      src={src}
                      alt={`Sold Out Artwork ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 280px, 320px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                      priority={index < 4}
                    />
                  </div>
                </div>

                {/* SOLD OUT Banner */}
                <div className="bg-[#a81a1a] text-white text-center py-3 font-sans font-bold text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 group-hover:bg-[#8f1616]">
                  SOLD OUT
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
