"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "collections", "founder", "categories", "testimonials", "footer"];
      const scrollPos = window.scrollY + 120;
      
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
    // If not on homepage (e.g., category or product detail page), normal link navigation handles it
    if (window.location.pathname !== "/") {
      return;
    }
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "HOME", id: "home", href: "/#home" },
    { label: "ABOUT", id: "about", href: "/#about" },
    { label: "SIGNATURES", id: "collections", href: "/#collections" },
    { label: "ARTIST", id: "founder", href: "/#founder" },
    { label: "CATEGORIES", id: "categories", href: "/#categories" },
    { label: "REVIEWS", id: "testimonials", href: "/#testimonials" },
    { label: "CONTACT", id: "footer", href: "/#footer" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] px-[6%] lg:px-[8%] py-5 transition-all duration-500 ease-out ${isScrolled ? "py-3 bg-[#fcfaf6]/90 backdrop-blur-md shadow-sm border-b border-[#D75CEE]/10" : "bg-transparent"}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/Abhikalaanikethana Logo Transperent.png"
            alt="Abhikalaanikethana Logo"
            width={240}
            height={50}
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-text-dark/85 hover:text-terracotta relative py-1.5 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#F36C1E] after:transition-all after:duration-300 ${
                  isActive ? "after:w-full text-[#F36C1E]" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-dark hover:text-[#F36C1E] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[70px] bg-[#fcfaf6] z-[999] flex flex-col px-8 py-8 transition-all duration-300 ease-in-out lg:hidden border-t border-[#D75CEE]/10 shadow-xl ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 my-auto">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className="font-sans text-base font-medium tracking-[0.2em] uppercase text-text-dark hover:text-[#F36C1E] pb-2 border-b border-stone-200/60"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-4">
          <a
            href="/#footer"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleSmoothScroll(e, "footer");
            }}
            className="btn-pill bg-[#F36C1E] text-white text-center justify-center text-xs py-3 w-full"
          >
            INQUIRE NOW
          </a>
        </div>
      </div>
    </header>
  );
}
