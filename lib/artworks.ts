export interface Artwork {
  id: string;
  category: "abstract" | "black-and-white";
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  price: string;
  description: string;
  imageSrc: string;
}

export const artworkCatalog: Artwork[] = [
  // ABSTRACT COLLECTION
  {
    id: "abs-1",
    category: "abstract",
    title: "Solitude's Echo",
    medium: "Mixed Media & Gesso on Linen Canvas",
    dimensions: "120 x 150 cm",
    year: "2026",
    price: "Price on Request",
    description: "An evocative study in texture and earth tones, Solitude's Echo explores quiet contemplation and spatial balance through layered impasto strokes.",
    imageSrc: "/painting_expressions.png",
  },
  {
    id: "abs-2",
    category: "abstract",
    title: "Tectonic Balance",
    medium: "Acrylic & Marble Dust on Canvas",
    dimensions: "100 x 100 cm",
    year: "2025",
    price: "Price on Request",
    description: "Architectural shapes meet organic fluid movements. Tectonic Balance brings a grounding presence with sage green undertones and geometric harmony.",
    imageSrc: "/painting_balance.png",
  },
  {
    id: "abs-3",
    category: "abstract",
    title: "Subconscious Dreamscape",
    medium: "Oil & Charcoal on Fine Canvas",
    dimensions: "140 x 180 cm",
    year: "2026",
    price: "Price on Request",
    description: "Rich violet and amethyst hues interweave with gestural brushstrokes, depicting the mysterious landscape of human dreams.",
    imageSrc: "/painting_journeys.png",
  },
  {
    id: "abs-4",
    category: "abstract",
    title: "Minimal Horizon",
    medium: "Oil Pastels & Graphite on Heavy Canvas",
    dimensions: "90 x 120 cm",
    year: "2026",
    price: "Price on Request",
    description: "A serene yellow ochre composition capturing the stillness of golden light across simplified horizontal planes.",
    imageSrc: "/painting_stories.png",
  },
  {
    id: "abs-5",
    category: "abstract",
    title: "Vessel of Whispers",
    medium: "Oil, Sand & Charcoal on Canvas",
    dimensions: "110 x 140 cm",
    year: "2026",
    price: "Price on Request",
    description: "Tactile relief surfaces mixed with warm terracotta pigment, embodying memory and ancient structural forms.",
    imageSrc: "/gallery_interior.png",
  },
  {
    id: "abs-6",
    category: "abstract",
    title: "Golden Reverie",
    medium: "Gold Leaf & Acrylic on Canvas",
    dimensions: "130 x 160 cm",
    year: "2026",
    price: "Price on Request",
    description: "Luminous gold foil accents juxtaposed with raw linen canvas, creating dynamic light interplay as ambient illumination shifts.",
    imageSrc: "/hero_painting.png",
  },
  {
    id: "abs-7",
    category: "abstract",
    title: "Ethereal Flow",
    medium: "Acrylic & Natural Pigment",
    dimensions: "100 x 130 cm",
    year: "2025",
    price: "Price on Request",
    description: "Soft layered wash of warm neutral tones creating atmosphere and subtle depth for contemporary interiors.",
    imageSrc: "/sold out images/IMG_4294.PNG",
  },
  {
    id: "abs-8",
    category: "abstract",
    title: "Crimson Monolith",
    medium: "Oil & Impasto Paste on Heavy Canvas",
    dimensions: "120 x 160 cm",
    year: "2026",
    price: "Price on Request",
    description: "Bold terracotta gestures anchoring the visual plane with commanding energy and raw emotional texture.",
    imageSrc: "/sold out images/IMG_4296.PNG",
  },

  // BLACK & WHITE COLLECTION
  {
    id: "bw-1",
    category: "black-and-white",
    title: "Monolithic Void",
    medium: "Charcoal & High-Texture Paste on Canvas",
    dimensions: "120 x 160 cm",
    year: "2026",
    price: "Price on Request",
    description: "A striking monochromatic masterpiece exploring contrast, shadow, and deep structural geometry.",
    imageSrc: "/black and white collection/IMG_4056.PNG",
  },
  {
    id: "bw-2",
    category: "black-and-white",
    title: "Symphony of Lines",
    medium: "Indian Ink & Graphite on Museum Board",
    dimensions: "100 x 140 cm",
    year: "2026",
    price: "Price on Request",
    description: "Rhythmic black ink strokes creating dynamic motion against crisp white spatial background.",
    imageSrc: "/black and white collection/IMG_4059.PNG",
  },
  {
    id: "bw-3",
    category: "black-and-white",
    title: "Silent Horizon No. 4",
    medium: "Charcoal & Gesso on Raw Canvas",
    dimensions: "110 x 150 cm",
    year: "2025",
    price: "Price on Request",
    description: "Minimalist stark study focusing on spatial breathing room and subtle grey gradations.",
    imageSrc: "/black and white collection/IMG_4064.PNG",
  },
  {
    id: "bw-4",
    category: "black-and-white",
    title: "Shadow & Form",
    medium: "Acrylic & Marble Paste on Linen",
    dimensions: "130 x 130 cm",
    year: "2026",
    price: "Price on Request",
    description: "Deep dimensional relief painted in pure black carbon and titanium white, casting actual physical shadows under ambient light.",
    imageSrc: "/black and white collection/IMG_4067.PNG",
  },
  {
    id: "bw-5",
    category: "black-and-white",
    title: "Midnight Passage",
    medium: "Oil & Black Sand on Heavy Canvas",
    dimensions: "120 x 170 cm",
    year: "2026",
    price: "Price on Request",
    description: "Granular black texture combined with fluid glossy strokes for tactile sensory contrast.",
    imageSrc: "/black and white collection/IMG_4068.PNG",
  },
  {
    id: "bw-6",
    category: "black-and-white",
    title: "Zenith Mono",
    medium: "Charcoal Dust & Acrylic Spray",
    dimensions: "90 x 120 cm",
    year: "2025",
    price: "Price on Request",
    description: "Fine charcoal mist merged with decisive white geometric lines.",
    imageSrc: "/black and white collection/IMG_4212.JPG.jpeg",
  },
  {
    id: "bw-7",
    category: "black-and-white",
    title: "Fractured Silence",
    medium: "Ink & Cold Wax on Canvas",
    dimensions: "110 x 140 cm",
    year: "2026",
    price: "Price on Request",
    description: "Subtle cracks and expressive gestural strokes defining a bold monochrome statement.",
    imageSrc: "/black and white collection/IMG_4213.JPG.jpeg",
  },
  {
    id: "bw-8",
    category: "black-and-white",
    title: "Continuum in Noir",
    medium: "Mixed Media Monotype",
    dimensions: "100 x 150 cm",
    year: "2026",
    price: "Price on Request",
    description: "Fluid sweeping motion caught in static dark pigments, radiating quiet sophistication.",
    imageSrc: "/black and white collection/IMG_4214.JPG.jpeg",
  }
];

export function getArtworksByCategory(category: "abstract" | "black-and-white"): Artwork[] {
  return artworkCatalog.filter((item) => item.category === category);
}

export function getArtworkById(id: string): Artwork | undefined {
  return artworkCatalog.find((item) => item.id === id);
}
