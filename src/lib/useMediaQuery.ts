"use client";

import { useEffect, useState } from "react";

/** Returns true once the viewport matches `query`. SSR-safe (false on first paint). */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** True on desktop widths with motion allowed — use to gate parallax. */
export function useAllowParallax(): boolean {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const noReduce = useMediaQuery("(prefers-reduced-motion: no-preference)");
  return isDesktop && noReduce;
}
