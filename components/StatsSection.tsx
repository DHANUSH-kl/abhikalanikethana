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

      // 1. Entrance animation for the card
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

      // 2. Count animation for the number
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
      className="stat-card flex flex-col items-center text-center p-8 rounded-[28px] bg-white/[0.02] border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 hover:scale-[1.03] group"
    >
      {/* Icon Frame */}
      <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-6 text-white/80 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#d36135] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_8px_20px_rgba(211,97,53,0.3)]">
        <Icon size={26} />
      </div>

      {/* Counter */}
      <div className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3 select-none flex items-baseline">
        <span ref={numberRef} className="tabular-nums">0</span>
        <span className="text-[#d36135] ml-0.5">{suffix}</span>
      </div>

      {/* Label */}
      <p className="font-sans font-medium text-xs sm:text-[13px] tracking-[0.15em] text-white/60 uppercase leading-relaxed max-w-[200px]">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 361, suffix: "+", label: "satisfied customers", icon: PencilRuler },
    { value: 3, suffix: "+", label: "Projects completed", icon: CalendarCheck },
    { value: 10, suffix: "+", label: "Awards Won", icon: Trophy },
    { value: 10, suffix: "", label: "Exhibition and Workshops", icon: Users },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="stats-section py-24 px-6 sm:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-[#1d0e06] via-[#140a04] to-[#0c0502] border-t border-b border-white/5 z-[2]"
    >
      {/* Dynamic radial gradient spotlight for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,97,53,0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Tactile Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />

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
