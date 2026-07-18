"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delayClass?: string; // e.g. animate-delay-1, etc.
}

export default function ScrollAnimate({
  children,
  className = "animate-on-scroll",
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
  delayClass = "",
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve so the animation only fires once
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? "is-visible" : ""} ${delayClass}`}
    >
      {children}
    </div>
  );
}
