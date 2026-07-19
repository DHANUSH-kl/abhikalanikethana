"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronDown, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordionItem({ question, answer, isOpen, onToggle, index }: FAQItem & { isOpen: boolean; onToggle: () => void; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Staggered fade and slide up animation when scrolling into view
      gsap.fromTo(
        itemRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    },
    { scope: itemRef }
  );

  return (
    <div 
      ref={itemRef}
      className={`border-b border-purple/10 py-5 transition-all duration-300 ${isOpen ? "bg-white/10 px-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] border-transparent" : "px-0"}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-semibold text-[15px] sm:text-base text-text-dark tracking-wide group-hover:text-terracotta transition-colors duration-300">
          {question}
        </span>
        <span 
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-purple/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "bg-[#d36135] border-transparent text-white rotate-180" : "bg-white text-text-dark hover:bg-bg-cream hover:border-purple/20"
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      {/* Smooth height expander using CSS Grid transition */}
      <div 
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-text-muted text-sm sm:text-[14px] leading-relaxed pr-8 font-light">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first question

  const faqs: FAQItem[] = [
    {
      question: "What types of artworks do you offer?",
      answer: "We create 100% hand-painted, original, and exclusive Abstract & Black and White paintings that are unlike anything found elsewhere. Every artwork is one of a kind, inspired by imagination, emotion, and artistic excellence. Our rare creations are impossible to replicate, making each piece an extraordinary masterpiece for collectors who appreciate originality, timeless beauty, and exceptional craftsmanship.",
    },
    {
      question: "Can I order a custom painting?",
      answer: "Yes! We create personalized artworks tailored to your vision, colours, and space.",
    },
    {
      question: "Do you ship across India?",
      answer: "Reach us directly via WhatsApp or phone at +91 99 1616 3965 for inquiries, orders, or commissions.",
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us via WhatsApp, phone, email, or through our website. We’re always happy to assist with artwork inquiries, custom commissions, and collector consultations.",
    },
    {
      question: "Are your artworks original?",
      answer: "Yes. Every painting is 100% hand-painted, original, and one of a kind, created with exceptional craftsmanship and attention to detail.",
    },
    {
      question: "How long does a custom painting take?",
      answer: "Depending on the size and complexity, custom artworks typically take 2–6 weeks. We provide regular updates throughout the creative process.",
    },
    {
      question: "Can I see the artwork before shipping?",
      answer: "Yes. We share high-resolution photographs and videos of the completed artwork for your approval before dispatch.",
    },
    {
      question: "Can your artworks be gifted?",
      answer: "Absolutely. We offer elegant gift packaging and personalized messages, making our artworks perfect for special occasions.",
    },
    {
      question: "What materials do you use?",
      answer: "We use premium-quality canvases, professional-grade paints, archival inks, and museum-quality materials to ensure lasting beauty and durability.",
    },
    {
      question: "Do you offer framing for the paintings?",
      answer: "Yes. We provide premium framing options for selected artworks upon request, ensuring they are ready to display beautifully.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef} 
      id="faqs" 
      className="faq-section py-24 px-6 sm:px-8 lg:px-16 relative overflow-hidden bg-bg-cream border-t border-purple/10 z-[2]"
    >
      {/* Tactile Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3e%3c/svg%3e")` }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 relative z-20">
        
        {/* Left Side: Museum Header & Contact Card */}
        <div className="flex flex-col items-start lg:sticky lg:top-28 h-fit">
          {/* Eyebrow */}
          <div className="header-eyebrow flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple/40" />
            <span className="text-purple/50 text-[10px] font-bold tracking-[0.3em] uppercase">
              Common Inquiries
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-text-dark font-medium leading-[1.15] uppercase tracking-wide mb-6">
            Frequently Asked Questions
          </h2>

          {/* Tagline */}
          <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-md font-light">
            Have questions about our original paintings, shipping, custom commissions, or looking for an art consultation? Find quick answers here.
          </p>

          {/* Contact Card */}
          <div className="w-full max-w-sm rounded-2xl bg-white border border-purple/10 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta mb-4">
              <MessageSquare size={20} />
            </div>
            <h3 className="font-sans font-bold text-sm tracking-wide text-text-dark uppercase mb-2">
              Still have questions?
            </h3>
            <p className="text-text-muted text-xs leading-relaxed mb-6 font-light">
              Reach out to us directly for personalized support, custom size consultations, or special requests.
            </p>
            <a 
              href="https://wa.me/919916163965" 
              target="_blank" 
              rel="noreferrer"
              className="btn-pill btn-terracotta text-[11px] font-semibold py-2.5 px-6 inline-block w-full text-center transition-all duration-300 hover:scale-[1.02]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right Side: Accordion Grid */}
        <div className="flex flex-col gap-1.5">
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
