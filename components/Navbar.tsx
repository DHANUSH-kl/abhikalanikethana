"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
        <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")} className="flex items-center group">
          <Image
            src="/Abhikalaanikethana Logo Transperent.png"
            alt="Abhikalaanikethana Logo"
            width={240}
            height={48}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            priority
          />
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
