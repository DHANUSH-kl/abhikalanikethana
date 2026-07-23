"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PencilRuler, CalendarCheck, Trophy, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

function StatItem({ value, suffix = "", label, icon: Icon }: StatItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!numberRef.current) return;

      gsap.fromTo(
        containerRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = String(Math.floor(obj.val));
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div 
      ref={containerRef}
      className="stat-card flex flex-col items-center text-center p-8 rounded-[28px] bg-white/10 border border-white/20 shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-white/20 hover:scale-[1.03] group"
    >
      {/* Icon Frame */}
      <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/15 mb-6 text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-[#596D34] group-hover:border-transparent">
        <Icon size={26} />
      </div>

      {/* Counter */}
      <div className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3 select-none flex items-baseline">
        <span ref={numberRef} className="tabular-nums">0</span>
        <span className="text-white ml-0.5">{suffix}</span>
      </div>

      {/* Label */}
      <p className="font-sans font-medium text-xs sm:text-[13px] tracking-[0.15em] text-white/90 uppercase leading-relaxed max-w-[200px]">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 361, suffix: "+", label: "Projects Completed", icon: PencilRuler },
    { value: 10, suffix: "+", label: "Awards Won", icon: Trophy },
    { value: 15, suffix: "+", label: "Exhibitions Conducted", icon: CalendarCheck },
    { value: 500, suffix: "+", label: "Artworks Created", icon: Users },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="stats-section py-24 px-6 sm:px-8 lg:px-16 relative overflow-hidden bg-[#596D34] z-[2] text-white"
    >
      {/* Tactile Organic Canvas Grain & Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.12]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />
      
      {/* Soft Radial Ambient Lighting for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
