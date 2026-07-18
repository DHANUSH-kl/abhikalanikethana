"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Search, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Artwork {
  id: string;
  title: string;
  theme: string;
  medium: string;
  size: string;
  year: string;
  price: string;
  imageSrc: string;
  accentColor: string;
}

const artworksData: Artwork[] = [
  {
    id: "art-1",
    title: "Solitude's Echo",
    theme: "HUMAN EXPRESSIONS",
    medium: "Mixed Media & Gesso on Canvas",
    size: "120 x 150 cm",
    year: "2026",
    price: "Price on Request",
    imageSrc: "/painting_expressions.png",
    accentColor: "#D66853", // Terracotta
  },
  {
    id: "art-2",
    title: "Tectonic Balance",
    theme: "FORM & BALANCE",
    medium: "Acrylic & Marble Dust on Canvas",
    size: "100 x 100 cm",
    year: "2025",
    price: "Price on Request",
    imageSrc: "/painting_balance.png",
    accentColor: "#5D7A68", // Sage Green
  },
  {
    id: "art-3",
    title: "Subconscious Dreamscape",
    theme: "INNER JOURNEYS",
    medium: "Oil & Charcoal on Canvas",
    size: "140 x 180 cm",
    year: "2026",
    price: "Price on Request",
    imageSrc: "/painting_journeys.png",
    accentColor: "#7B6F8E", // Amethyst Purple
  },
  {
    id: "art-4",
    title: "Minimal Horizon",
    theme: "SILENT STORIES",
    medium: "Oil Pastels & Graphite on Heavy Canvas",
    size: "90 x 120 cm",
    year: "2026",
    price: "Price on Request",
    imageSrc: "/painting_stories.png",
    accentColor: "#E2B13C", // Ochre Yellow
  },
  {
    id: "art-5",
    title: "Vessel of Whispers",
    theme: "HUMAN EXPRESSIONS",
    medium: "Oil, Sand & Charcoal on Canvas",
    size: "110 x 140 cm",
    year: "2026",
    price: "Price on Request",
    imageSrc: "/gallery_interior.png",
    accentColor: "#D66853",
  },
  {
    id: "art-6",
    title: "Monolithic Void",
    theme: "SILENT STORIES",
    medium: "Charcoal & High-Texture Paste",
    size: "150 x 200 cm",
    year: "2026",
    price: "Price on Request",
    imageSrc: "/hero_painting.png",
    accentColor: "#2e2824",
  }
];

const categoryData = [
  { label: "All Works", id: "All" },
  { label: "Human Expressions", id: "HUMAN EXPRESSIONS" },
  { label: "Form & Balance", id: "FORM & BALANCE" },
  { label: "Inner Journeys", id: "INNER JOURNEYS" },
  { label: "Silent Stories", id: "SILENT STORIES" }
];

export default function ArtworksCatalog() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState<Artwork[]>(artworksData);
  const [searchQuery, setSearchQuery] = useState("");

  // Coordinated ScrollTrigger timeline entrance
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        }
      });

      // 1. Header elements stagger
      tl.fromTo(
        ".catalog-header-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" }
      );

      // 2. Filter buttons stagger
      tl.fromTo(
        ".catalog-filter-btn",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, duration: 0.6, ease: "power3.out" },
        "-=0.5" // overlap with header reveal
      );

      // 3. Stagger cards
      tl.fromTo(
        ".catalog-card-scroll",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 1.0, ease: "power3.out" },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  // Trigger smooth switch animation on filter change
  const handleFilterSelect = (filterId: string) => {
    if (filterId === activeFilter && searchQuery === "") return;

    gsap.to(".catalog-card", {
      opacity: 0,
      y: 20,
      scale: 0.97,
      duration: 0.25,
      stagger: 0.04,
      ease: "power2.in",
      onComplete: () => {
        setActiveFilter(filterId);
        
        // Filter elements
        let items = artworksData;
        if (filterId !== "All") {
          items = items.filter(item => item.theme === filterId);
        }
        if (searchQuery.trim() !== "") {
          items = items.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.medium.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        
        setFilteredItems(items);

        // Animate new elements in
        gsap.fromTo(
          ".catalog-card",
          {
            opacity: 0,
            y: 35,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.06,
            duration: 0.55,
            ease: "power3.out",
          }
        );
      }
    });
  };

  // Perform search
  useEffect(() => {
    let items = artworksData;
    if (activeFilter !== "All") {
      items = items.filter(item => item.theme === activeFilter);
    }
    if (searchQuery.trim() !== "") {
      items = items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.medium.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleWhatsAppEnquiry = (artwork: Artwork) => {
    const ownerNumber = "919876543210"; // Gallery WhatsApp account
    const baseText = `Hello Abhikalaanikethana, I am interested in inquiring about the original artwork:
  
• Title: "${artwork.title}"
• Category: ${artwork.theme}
• Medium: ${artwork.medium}
• Size: ${artwork.size}
• Year: ${artwork.year}

Please share pricing and acquisition details.`;

    const encodedText = encodeURIComponent(baseText);
    const waUrl = `https://wa.me/${ownerNumber}?text=${encodedText}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section ref={containerRef} id="exhibition" className="py-24 px-6 sm:px-8 lg:px-16 bg-[#faf8f5] relative overflow-hidden z-[2] border-t border-purple/10">
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <div className="catalog-header-item flex items-center gap-2 text-green font-sans font-bold text-[10px] tracking-[0.3em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Acquisitions Catalogue
          </div>
          <h2 className="catalog-header-item font-serif text-4xl sm:text-5xl text-terracotta leading-tight mb-4">
            Acquire Original Abstract Art
          </h2>
          <p className="catalog-header-item text-text-muted text-sm leading-relaxed">
            Browse our current gallery pieces available for direct placement. Each piece is an authentic original complete with a Certificate of Authenticity. Click enquire to connect directly with the gallery manager via WhatsApp.
          </p>
        </div>

        {/* Search Field */}
        <div className="catalog-header-item relative w-full max-w-xs flex-shrink-0">
          <input
            type="text"
            placeholder="Search by title, medium..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-text-dark/10 pl-10 pr-4 py-2.5 rounded-full text-xs font-sans focus:outline-none focus:border-terracotta transition-colors duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
          />
          <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/60" />
        </div>
      </div>

      {/* Filter Row */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-wrap gap-2.5 items-center overflow-x-auto pb-2 scrollbar-none">
        {categoryData.map((category) => {
          const isActive = activeFilter === category.id;
          return (
            <button
              key={category.id}
              onClick={() => handleFilterSelect(category.id)}
              className={`catalog-filter-btn px-5 py-2.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                isActive 
                  ? "bg-text-dark text-[#faf8f5] shadow-md shadow-text-dark/15 scale-95" 
                  : "bg-white text-text-muted border border-text-dark/5 hover:border-text-dark/20 hover:text-text-dark"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Artworks Grid */}
      <div className="catalog-cards-wrapper max-w-7xl mx-auto">
        {filteredItems.length > 0 ? (
          <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((art) => (
              <div
                key={art.id}
                className="catalog-card catalog-card-scroll bg-white border border-text-dark/5 p-4 rounded-[28px] shadow-[0_15px_30px_rgba(46,40,36,0.02)] transition-all duration-500 hover:shadow-[0_25px_50px_rgba(46,40,36,0.06)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Artwork Framed Cover */}
                <div>
                  <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-bg-cream mb-5 group/img border border-text-dark/5">
                    <Image
                      src={art.imageSrc}
                      alt={art.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0e0c0b]/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                    
                    {/* Size tag floating inside image */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-text-dark/5 px-3 py-1.5 rounded-full text-[9px] font-mono font-semibold text-text-dark uppercase tracking-wider shadow-sm">
                      {art.size}
                    </div>
                  </div>

                  {/* Title & Collection tag */}
                  <div className="px-1.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: art.accentColor }} />
                      <span className="text-[9px] font-mono font-bold tracking-wider text-text-muted uppercase">
                        {art.theme}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-text-dark leading-tight uppercase font-medium">
                      {art.title}
                    </h3>
                    <p className="text-text-muted/80 text-xs font-light mt-2 line-clamp-2 leading-relaxed">
                      {art.medium} • {art.year}
                    </p>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="mt-6 pt-4 border-t border-text-dark/5 flex items-center justify-between px-1.5">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase mb-0.5">Availability</span>
                    <span className="text-xs font-bold text-terracotta font-mono uppercase tracking-wide">{art.price}</span>
                  </div>
                  
                  <button
                    onClick={() => handleWhatsAppEnquiry(art)}
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba59] transition-all duration-300 font-sans font-bold text-[10px] tracking-widest uppercase py-3 px-5 rounded-full shadow-lg shadow-[#25D366]/15 hover:shadow-[#25D366]/25 hover:scale-[1.03] cursor-pointer"
                  >
                    <MessageCircle size={14} className="fill-white stroke-none" />
                    Enquire
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-text-dark/10 rounded-[28px]">
            <p className="text-text-muted text-sm font-light">No works match your current filters.</p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold text-terracotta underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
