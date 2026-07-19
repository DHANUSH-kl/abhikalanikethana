"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FoundersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Portrait image slide in and fade from left/up
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Text elements staggered slide in
      if (textRef.current) {
        const children = textRef.current.children;
        gsap.fromTo(
          Array.from(children),
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section 
      ref={sectionRef} 
      id="founder" 
      className="founder-section py-24 lg:py-32 relative overflow-hidden bg-white z-[2] border-b border-purple/10"
    >
      {/* Tactile Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-20">
        
        {/* Left Column: Portrait Frame (5 spans of 12) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div 
            ref={imageRef}
            className="relative w-full max-w-[420px] aspect-[3/4.2] rounded-[24px] bg-[#faf8f5] p-4 border border-purple/10 shadow-[0_15px_45px_rgba(0,0,0,0.06)] flex items-center justify-center group"
          >
            {/* Outer wood-grain simulation frame */}
            <div className="relative w-full h-full rounded-[14px] overflow-hidden shadow-inner border border-stone-200/80 bg-white">
              <Image
                src="/founder image.PNG"
                alt="Sinchana Manjunath"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
            </div>
            
            {/* Museum Label Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md border border-purple/5 px-5 py-3 rounded-xl shadow-md text-center opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <h4 className="font-serif text-sm font-medium text-text-dark">Sinchana Manjunath</h4>
              <p className="font-sans text-[10px] tracking-wider text-text-muted uppercase mt-0.5">Founder & Artist</p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative (7 spans of 12) */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow */}
          <div className="story-eyebrow flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d36135]" />
            <span className="text-[#d36135] text-[10px] font-bold tracking-[0.3em] uppercase">
              The Artist & Visionary
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-text-dark font-medium leading-[1.15] uppercase tracking-wide mb-2.5">
            Founder – Sinchana Manjunath
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-[13px] tracking-[0.2em] text-[#7b6f8e] uppercase font-bold mb-8">
            ABHIKALAANIKETHANA &bull; Mansion of Abstracts
          </p>

          {/* Separator line */}
          <div className="w-16 h-[1.5px] bg-[#d36135]/40 mb-8" />

          {/* Body Narrative */}
          <div className="flex flex-col gap-6 text-text-muted text-sm sm:text-[15px] font-light leading-relaxed max-w-2xl">
            <p>
              Founded by Sinchana Manjunath, <strong>ABHIKALAANIKETHANA &ndash; Mansion of Abstracts</strong> is built on the belief that every artwork should evoke emotion, satisfaction, and a lasting connection. Through years of dedication, she has mastered the language of colours, textures, and abstract expression to create paintings that are truly one of a kind.
            </p>
            <p>
              Every piece is 100% hand-painted, impossible to replicate, and crafted using premium museum-grade materials with meticulous attention to detail.
            </p>
            <p>
              The originality, artistic vision, countless hours of craftsmanship, and emotional depth make each artwork a rare collector&rsquo;s masterpiece and a timeless investment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
