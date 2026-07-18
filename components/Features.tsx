"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function FeatureItem({ icon, title, desc }: FeatureItemProps) {
  return (
    <div className="feature-card flex items-start gap-4 group cursor-pointer">
      <div className="w-[50px] h-[50px] rounded-full border border-purple/35 flex items-center justify-center text-purple flex-shrink-0 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-300 ease-out group-hover:bg-purple group-hover:text-white group-hover:scale-105">
        {icon}
      </div>
      <div className="flex flex-col gap-1.5">
        <h4 className="font-sans font-bold text-[0.8rem] tracking-[0.1em] text-text-dark">{title}</h4>
        <p className="text-[0.8rem] leading-normal text-text-muted">{desc}</p>
      </div>
    </div>
  );
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".feature-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  const featuresData = [
    {
      title: "CURATED WITH PASSION",
      desc: "Carefully selected artworks that inspire.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.0331 19.1745 5.28182 19.243 5.51818 19.1745C5.75455 19.1061 5.93883 18.9126 6 18.6667C6.08272 18.3333 6.3753 18 7 18C7.82843 18 8.5 17.3284 8.5 16.5C8.5 16.0333 8.2831 15.6171 7.94042 15.3439C7.62584 15.0931 7.5 14.7431 7.5 14.3333C7.5 13.3208 8.32081 12.5 9.33333 12.5H14.6667C15.7716 12.5 16.6667 11.6046 16.6667 10.5C16.6667 10.2239 16.8909 10 17.1667 10C18.1792 10 19 9.17919 19 8.16667C19 5.86548 16.7614 4 14 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
          <circle cx="11.5" cy="6.5" r="1" fill="currentColor" />
          <circle cx="15.5" cy="7.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "UNIQUE & TIMELESS",
      desc: "One-of-a-kind pieces for meaningful spaces.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C12 22 18 16.5 18 11C18 5.5 12 2 12 2C12 2 6 5.5 6 11C6 16.5 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 7C14.5 9.5 14.5 12.5 12 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 11H6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "MADE TO CONNECT",
      desc: "Art that creates emotion and conversation.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "SUPPORTING ARTISTS",
      desc: "Empowering emerging and established talents.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="bg-bg-cream border-t border-b border-purple/15 py-[60px] px-[8%] relative z-[2]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[28px] sm:gap-8 lg:gap-10">
        {featuresData.map((item, index) => (
          <FeatureItem
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
}
