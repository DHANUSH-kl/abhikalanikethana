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
      className="founder-section py-24 lg:py-32 relative overflow-hidden bg-[#F3691E] z-[2] text-white"
    >
      {/* Tactile Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.05]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-20">
        
        {/* Left Column: Portrait Frame (5 spans of 12) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div 
            ref={imageRef}
            className="relative w-full max-w-[420px] aspect-[3/4.2] rounded-[24px] bg-white/10 p-4 border border-white/20 shadow-2xl flex items-center justify-center group"
          >
            {/* Outer wood-grain simulation frame */}
            <div className="relative w-full h-full rounded-[14px] overflow-hidden shadow-inner border border-white/20 bg-white">
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
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md border border-[#FFCF21] px-5 py-3 rounded-xl shadow-lg text-center opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <h4 className="font-serif text-sm font-bold text-[#2e2824]">Sinchana Manjunath</h4>
              <p className="font-sans text-[10px] font-semibold tracking-wider text-[#F3691E] uppercase mt-0.5">Founder & Artist</p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative (7 spans of 12) */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col items-start text-white">
          {/* Eyebrow */}
          <div className="story-eyebrow flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FFCF21]" />
            <span className="text-[#FFCF21] text-xs font-semibold tracking-[0.3em] uppercase">
              The Artist & Visionary
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-white font-semibold leading-[1.15] uppercase tracking-wide mb-2.5">
            Founder – Sinchana Manjunath
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-[13px] tracking-[0.2em] text-[#FFCF21] uppercase font-semibold mb-6">
            ABHIKALAANIKETHANA &bull; Mansion of Abstracts
          </p>

          {/* Yellow Underline Accent */}
          <div className="w-20 h-1 bg-[#FFCF21] rounded-full mb-8" />

          {/* Body Narrative */}
          <div className="flex flex-col gap-6 text-white font-normal text-base sm:text-[16px] leading-relaxed max-w-2xl">
            <p className="text-white">
              Founded by Sinchana Manjunath, <strong className="text-white font-bold underline decoration-[#FFCF21] underline-offset-4">ABHIKALAANIKETHANA &ndash; Mansion of Abstracts</strong> is built on the belief that every artwork should evoke emotion, satisfaction, and a lasting connection. Through years of dedication, she has mastered the language of colours, textures, and abstract expression to create paintings that are truly one of a kind.
            </p>
            <p className="text-white">
              Every piece is 100% hand-painted, impossible to replicate, and crafted using premium museum-grade materials with meticulous attention to detail.
            </p>
            <p className="text-white">
              The originality, artistic vision, countless hours of craftsmanship, and emotional depth make each artwork a rare collector&rsquo;s masterpiece and a timeless investment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
