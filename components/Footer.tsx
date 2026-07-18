"use client";

import React, { useRef } from "react";
import { BrushBottomLeft } from "./BrushStrokes";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          once: true,
        }
      });

      tl.fromTo(
        [".footer-left-content", ".footer-contact-item", ".footer-copy-bar"],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 1.0, ease: "power3.out" }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} id="footer" className="section-padding bg-bg-cream relative overflow-hidden border-t border-purple/10 z-[2]">
      {/* Background large terracotta brush stroke */}
      <BrushBottomLeft />

      {/* Repeating yellow and purple strokes on bottom-right */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[300px] pointer-events-none z-[1] opacity-85">
        {/* Yellow stroke */}
        <svg viewBox="0 0 300 200" className="absolute bottom-[40px] right-0 w-[250px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 200 C 150 150, 220 120, 300 160 L 300 200 Z" fill="rgba(243, 194, 70, 0.85)"/>
        </svg>
        {/* Purple stroke */}
        <svg viewBox="0 0 450 300" className="absolute bottom-0 right-0 w-[380px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 300 C 260 220, 340 180, 450 240 L 450 300 Z" fill="rgba(168, 144, 194, 0.85)"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-20 items-center relative z-[3] md:grid-cols-1 md:gap-[60px]">
        {/* Left Column: Splash Text (Legible dark typography matching the design tokens) */}
        <div className="footer-left-content relative py-[60px] px-10 rounded-[8px] z-[5] md:py-10 md:px-6 md:min-h-auto">
          <h2 className="font-serif text-[2.2rem] font-medium leading-[1.2] mb-3 max-w-[480px] text-text-dark md:text-[1.8rem]">
            LET'S CREATE MEANINGFUL SPACES TOGETHER
          </h2>
          <p className="text-[1.1rem] text-text-muted mb-6">We'd love to hear from you.</p>
          <div className="opacity-90 rotate-[-20deg] text-terracotta">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 17 17 17 12C17 7 12 2 12 2C12 2 7 7 7 12C7 17 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 7C10 9 10 11 12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Right Column: Contact details */}
        <div className="flex flex-col gap-6">
          <div className="footer-contact-item flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-terracotta/25 flex items-center justify-center text-terracotta flex-shrink-0 bg-bg-cream">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <a href="tel:+919876543210" className="font-sans text-[0.95rem] font-medium text-text-dark transition-all duration-300 ease-out hover:text-terracotta hover:translate-x-1">+91 98765 43210</a>
          </div>

          <div className="footer-contact-item flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-terracotta/25 flex items-center justify-center text-terracotta flex-shrink-0 bg-bg-cream">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <a href="mailto:hello@abhikalaanikethana.com" className="font-sans text-[0.95rem] font-medium text-text-dark transition-all duration-300 ease-out hover:text-terracotta hover:translate-x-1">hello@abhikalaanikethana.com</a>
          </div>

          <div className="footer-contact-item flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-terracotta/25 flex items-center justify-center text-terracotta flex-shrink-0 bg-bg-cream">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <a href="https://www.abhikalaanikethana.com" target="_blank" rel="noreferrer" className="font-sans text-[0.95rem] font-medium text-text-dark transition-all duration-300 ease-out hover:text-terracotta hover:translate-x-1">www.abhikalaanikethana.com</a>
          </div>

          <div className="footer-contact-item flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-terracotta/25 flex items-center justify-center text-terracotta flex-shrink-0 bg-bg-cream">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-sans text-[0.95rem] font-medium text-text-dark">Bangalore, India</span>
          </div>
        </div>
      </div>

      {/* Copyright footer bar */}
      <div className="footer-copy-bar max-w-[1400px] mx-auto mt-20 pt-6 border-t border-purple/15 text-center text-xs text-text-muted relative z-[3]">
        <p>&copy; {new Date().getFullYear()} Abhikalaanikethana Mansion of Abstracts. All rights reserved.</p>
      </div>
    </footer>
  );
}
