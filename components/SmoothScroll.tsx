"use client";

import React from "react";
import { ReactLenis } from "lenis/react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08,            // Scroll smoothing/interia rate (lower is smoother)
        duration: 1.2,          // Inertial slide duration in seconds
        smoothWheel: true,      // Enable mousewheel smoothing
        wheelMultiplier: 1.0,   // Adjust scroll speed multiplier if needed
      }}
    >
      {children}
    </ReactLenis>
  );
}
