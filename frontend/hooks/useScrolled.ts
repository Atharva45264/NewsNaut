"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the page has scrolled past `threshold` pixels.
 * Used by the Navbar to blur/elevate itself on scroll.
 */
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
