"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section for underline updates
      const sections = ["home", "about", "collections", "footer"];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "GALLERY", id: "collections" },
    { label: "ARTISTS", id: "about" },
    { label: "BLOG", id: "footer" },
    { label: "CONTACT", id: "footer" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] px-[8%] py-6 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] bg-transparent min-[901px]:px-[8%] max-[900px]:px-[5%] max-[900px]:py-4 ${isScrolled ? "py-4 bg-[#fcfaf6]/85 backdrop-blur-[15px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-purple/10 max-[900px]:py-3" : ""}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")} className="flex items-center gap-3 text-terracotta group">
          <svg
            width="42"
            height="42"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[42px] h-[42px] text-terracotta transition-transform duration-1000 ease-out group-hover:rotate-45"
          >
            <path
              d="M50,10 A40,40 0 1,1 49.9,10 Z M50,15 A35,35 0 1,1 49.9,15 Z M50,20 A30,30 0 1,1 49.9,20 Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x2 = 50 + 40 * Math.cos(angle);
              const y2 = 50 + 40 * Math.sin(angle);
              const cp1x = 50 + 26 * Math.cos(angle - 0.3);
              const cp1y = 50 + 26 * Math.sin(angle - 0.3);
              const cp2x = 50 + 26 * Math.cos(angle + 0.3);
              const cp2y = 50 + 26 * Math.sin(angle + 0.3);
              return (
                <path
                  key={i}
                  d={`M50,50 Q${cp1x},${cp1y} ${x2},${y2} Q${cp2x},${cp2y} 50,50`}
                  stroke="currentColor"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-base tracking-[0.1em] text-terracotta leading-normal">ABHIKALAANIKETHANA</span>
            <span className="font-sans font-medium text-[0.65rem] tracking-[0.25em] text-purple leading-normal">MANSION OF ABSTRACTS</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden min-[901px]:flex items-center gap-8">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={idx}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`font-sans text-[0.75rem] font-semibold tracking-[0.15em] text-text-dark relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-terracotta after:transition-all after:duration-300 after:ease-out ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <a href="#footer" onClick={(e) => handleSmoothScroll(e, "footer")} className="btn-pill btn-terracotta text-[0.75rem] py-2.5 px-6">
          INQUIRE
        </a>
      </div>
    </header>
  );
}
