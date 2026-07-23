"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  artworkTitle: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "rev-1",
    name: "Dr. Ananya Rao",
    role: "Art Collector & Architect",
    location: "Bangalore",
    content: "The emotional depth and physical texture of Sinchana's work transformed our main living foyer into a tranquil gallery space. Every guest stops to take in the subtle layers.",
    rating: 5,
    artworkTitle: "Solitude's Echo"
  },
  {
    id: "rev-2",
    name: "Vikram Malhotra",
    role: "Interior Designer",
    location: "Mumbai",
    content: "We commissioned two black and white abstract pieces for a penthouse project. The museum quality canvas and craftsmanship are truly exceptional. Delivered seamlessly!",
    rating: 5,
    artworkTitle: "Monolithic Void"
  },
  {
    id: "rev-3",
    name: "Kavita & Rajesh Sharma",
    role: "Private Collectors",
    location: "New Delhi",
    content: "Acquiring an original painting from Abhikalaanikethana was a delightful experience. The Certificate of Authenticity and direct conversation with the artist made it special.",
    rating: 5,
    artworkTitle: "Tectonic Balance"
  },
  {
    id: "rev-4",
    name: "Priya Nair",
    role: "Creative Director",
    location: "Hyderabad",
    content: "The colors are even more vibrant and rich in real life than pictured on screen. The texture has a tactile quality that speaks volumes. Highly recommended!",
    rating: 5,
    artworkTitle: "Subconscious Dreamscape"
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={sectionRef} 
      id="testimonials" 
      className="testimonials-section py-24 px-6 sm:px-8 lg:px-16 relative overflow-hidden bg-[#faf8f5] z-[2]"
    >
      {/* Tactile Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F36C1E]" />
            <span className="text-[#F36C1E] text-xs font-semibold tracking-[0.3em] uppercase">
              Collector Words
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F36C1E]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2e2824] font-light uppercase tracking-wide mb-4">
            Patron Testimonials
          </h2>
          
          <p className="font-sans text-sm text-[#5e544e] font-normal leading-relaxed">
            Reflections from art patrons, interior architects, and private collectors who have brought our original abstracts into their sanctuaries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200/60 p-6 sm:p-8 rounded-[24px] shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg relative group"
            >
              <div>
                <Quote size={28} className="text-[#FFCF21] mb-4 opacity-80" />
                
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#FFCF21] text-[#FFCF21]" />
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-[#5e544e] leading-relaxed mb-6 italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex flex-col">
                <span className="font-serif text-base font-semibold text-[#2e2824]">
                  {item.name}
                </span>
                <span className="font-sans text-[11px] text-[#F36C1E] font-medium uppercase tracking-wider mt-0.5">
                  {item.role} &bull; {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
