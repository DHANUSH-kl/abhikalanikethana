"use client";

import React, { useRef } from "react";
import SplitText from "./SplitText";
import OrbitImages from "./OrbitImages";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        }
      });

      // 1. Watermark animation
      tl.fromTo(
        ".watermark-text",
        { opacity: 0, x: 80 },
        { opacity: 0.025, x: 0, duration: 1.6, ease: "power4.out" }
      );

      // 2. Left visual orbit reveal
      tl.fromTo(
        ".orbit-visual-wrapper",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1.2" // overlap with watermark
      );

      // 3. Right column narrative reveal
      tl.fromTo(
        [".story-eyebrow", ".story-quote", ".story-desc", ".story-metrics"],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1.0, ease: "power3.out" },
        "-=0.9" // overlap with visual block
      );
    },
    { scope: sectionRef }
  );

  const orbitImagesList = [
    "/painting_expressions.png",
    "/painting_balance.png",
    "/painting_journeys.png",
    "/painting_stories.png",
    "/gallery_interior.png",
    "/hero_painting.png",
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-24 lg:py-32 bg-bg-cream overflow-hidden z-[2]">
      {/* Background Typography Watermark */}
      <div className="watermark-text absolute right-[-5%] top-[10%] select-none pointer-events-none opacity-[0.025] font-serif text-[12vw] font-bold text-text-dark tracking-[0.15em] whitespace-nowrap uppercase">
        ABHIKALA
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Orbiting Images Canvas Collage (6 spans of 12) */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start min-h-[500px] w-full">
          
          {/* Wide Ellipse Orbit (Clean, no centerpiece, showing paths) */}
          <div className="orbit-visual-wrapper w-full lg:w-[115%] lg:-ml-[8%] aspect-square relative z-10">
            <OrbitImages
              images={orbitImagesList}
              shape="ellipse"
              radiusX={680}
              radiusY={300}
              itemSize={260}
              duration={35}
              responsive={true}
              rotation={-8}
              showPath={true}
              pathColor="rgba(214, 104, 83, 0.28)"
              pathWidth={3.5}
              className="w-full h-full"
            />
          </div>

        </div>

        {/* Right Column: Editorial Narrative (6 spans of 12) */}
        <div className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">
          
          <div className="story-eyebrow flex items-center gap-2 font-sans font-bold text-[10px] tracking-[0.3em] text-green mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            THE MANIFESTO
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-terracotta mb-6 leading-[1.15] uppercase font-light w-full">
            <SplitText
              text="A HOME FOR ABSTRACT ART"
              tag="span"
              delay={40}
              duration={1.0}
              ease="power3.out"
              splitType="words, chars"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              startDelay={200}
              textAlign="left"
            />
          </h2>

          <blockquote className="story-quote font-serif italic text-lg sm:text-xl text-text-dark/90 border-l-2 border-terracotta/40 pl-6 mb-6 leading-relaxed max-w-lg">
            "We believe art should not merely occupy a wall—it should transform the space and capture the silent dialogues of the subconscious."
          </blockquote>

          <p className="story-desc text-text-muted text-sm leading-relaxed mb-10 max-w-lg font-light">
            Abhikalaanikethana is more than a gallery—it is a mansion of imagination, a space where abstract art is curated, collected, and connected with soulful connoisseurs. We provide custom art consultations to merge modern interiors with museum-grade visual balances.
          </p>

          {/* Metric Values Grid */}
          <div className="story-metrics grid grid-cols-3 gap-4 w-full border-t border-text-dark/5 pt-8 mt-4">
            <div className="flex flex-col items-center justify-center text-center bg-white border border-text-dark/10 py-3.5 px-4 rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-terracotta hover:scale-[1.02] cursor-default">
              <span className="font-serif text-base sm:text-lg font-bold text-terracotta leading-none">100%</span>
              <span className="font-sans text-[8px] sm:text-[9px] font-bold tracking-wider text-text-dark/70 uppercase mt-2">Originals</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center bg-white border border-text-dark/10 py-3.5 px-4 rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-terracotta hover:scale-[1.02] cursor-default">
              <span className="font-serif text-base sm:text-lg font-bold text-terracotta leading-none">120+</span>
              <span className="font-sans text-[8px] sm:text-[9px] font-bold tracking-wider text-text-dark/70 uppercase mt-2">Acquisitions</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center bg-white border border-text-dark/10 py-3.5 px-4 rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-terracotta hover:scale-[1.02] cursor-default">
              <span className="font-serif text-base sm:text-lg font-bold text-terracotta leading-none">Global</span>
              <span className="font-sans text-[8px] sm:text-[9px] font-bold tracking-wider text-text-dark/70 uppercase mt-2">Deliveries</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
