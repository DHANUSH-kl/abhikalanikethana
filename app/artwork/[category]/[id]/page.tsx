"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArtworkById, Artwork } from "@/lib/artworks";
import { ArrowLeft, MessageCircle, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  const { category, id } = resolvedParams;

  const artwork: Artwork | undefined = getArtworkById(id);

  if (!artwork) {
    return (
      <main className="min-h-screen bg-[#faf8f5] text-[#2e2824] flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Artwork Not Found</h1>
          <p className="text-sm text-[#5e544e] mb-8">The requested painting could not be located in our gallery archives.</p>
          <Link href="/#categories" className="btn-pill bg-[#F36C1E] text-white text-xs py-3 px-8">
            Return to Collections
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleWhatsAppEnquiry = () => {
    const phoneNumber = "919900447762"; // Requested WhatsApp number: 9900447762 with India country code 91
    
    // Construct absolute image URL if domain is present or fallback to origin
    const origin = typeof window !== "undefined" ? window.location.origin : "https://www.abhikalaanikethana.com";
    const fullImageUrl = `${origin}${artwork.imageSrc}`;

    const messageText = `Hello Abhikalaanikethana,

I would like to enquire about purchasing the following original artwork:

🎨 *Title*: "${artwork.title}"
🏷️ *Category*: ${artwork.category === "black-and-white" ? "Black & White Collection" : "Abstract Collection"}
📐 *Dimensions*: ${artwork.dimensions}
🖌️ *Medium*: ${artwork.medium}
🗓️ *Year*: ${artwork.year}
🖼️ *Artwork Image*: ${fullImageUrl}

Please share pricing, Certificate of Authenticity details, and delivery information. Thank you!`;

    const encodedText = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2e2824] flex flex-col font-sans">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-20 px-6 sm:px-8 lg:px-16 flex-grow">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Breadcrumb Nav */}
          <div className="mb-10 flex items-center justify-between">
            <Link 
              href={`/collections/${category}`}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F36C1E] uppercase hover:underline"
            >
              <ArrowLeft size={16} /> Back to {category === "black-and-white" ? "Black & White" : "Abstract"} Collection
            </Link>

            <span className="text-xs font-bold text-[#A9D03F] tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles size={14} /> Authentic 100% Hand-Painted
            </span>
          </div>

          {/* Product Detail Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: High Resolution Image Frame (7 Spans) */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-white border border-stone-200/80 shadow-2xl p-4 sm:p-6 group">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-stone-100 shadow-inner">
                  <Image
                    src={artwork.imageSrc}
                    alt={artwork.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Artwork Narrative & WhatsApp CTA (5 Spans) */}
            <div className="lg:col-span-5 flex flex-col items-start bg-white p-8 sm:p-10 rounded-[32px] border border-stone-200/80 shadow-lg">
              
              <span className="inline-block bg-[#F36C1E]/10 text-[#F36C1E] font-bold text-[11px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-4">
                {artwork.category === "black-and-white" ? "Black & White Original" : "Vibrant Abstract Original"}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2e2824] leading-tight mb-3">
                {artwork.title}
              </h1>

              <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#D75CEE] uppercase mb-6">
                Sinchana Manjunath &bull; {artwork.year}
              </p>

              <div className="w-16 h-1 bg-[#FFCF21] rounded-full mb-8" />

              {/* Artwork Specifications Table */}
              <div className="w-full flex flex-col gap-3 py-4 border-y border-stone-200/60 text-xs sm:text-sm mb-8">
                <div className="flex justify-between py-1">
                  <span className="text-[#5e544e] font-medium">Medium</span>
                  <span className="font-semibold text-[#2e2824] text-right">{artwork.medium}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#5e544e] font-medium">Dimensions</span>
                  <span className="font-semibold text-[#2e2824] text-right">{artwork.dimensions}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#5e544e] font-medium">Availability</span>
                  <span className="font-semibold text-[#F36C1E] text-right">Original Available</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-xs font-bold tracking-widest text-[#2e2824] uppercase mb-2">Artwork Narrative</h4>
                <p className="text-sm text-[#5e544e] font-normal leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              {/* Authenticity Guarantee */}
              <div className="w-full bg-[#faf8f5] p-4 rounded-2xl border border-stone-200/60 flex items-start gap-3 mb-8">
                <ShieldCheck size={24} className="text-[#A9D03F] flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#2e2824] block">Certificate of Authenticity Included</span>
                  <span className="text-[#5e544e] font-light">Signed by founder &amp; artist Sinchana Manjunath.</span>
                </div>
              </div>

              {/* ENQUIRE NOW WhatsApp CTA */}
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase py-4 px-8 rounded-full shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle size={20} className="fill-white stroke-none" />
                ENQUIRE NOW VIA WHATSAPP
              </button>

              <span className="w-full text-center text-[10px] text-[#5e544e] mt-3 font-medium">
                Direct Inquiry Line: +91 9900447762
              </span>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
