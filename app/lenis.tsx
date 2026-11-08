"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        smoothWheel: true,
        lerp: 0.09,
        wheelMultiplier: 0.9,
        anchors: true,
      });
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      return () => {
        gsap.ticker.remove(tick);
        lenis.off("scroll", ScrollTrigger.update);
        lenis.destroy();
      };
    });
    return () => media.revert();
  }, []);
  return <>{children}</>;
}
