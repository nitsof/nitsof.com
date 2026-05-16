"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HybridAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Non-home pages: always show cream nav immediately
    if (pathname !== "/") {
      document.body.classList.add("past-hero");
      return () => {
        document.body.classList.remove("past-hero");
      };
    }

    // Home page: toggle past-hero when bridge scrolls past viewport top
    const bridge = document.getElementById("hero-bridge");
    let bridgeObs: IntersectionObserver | null = null;

    if (bridge) {
      bridgeObs = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            document.body.classList.toggle(
              "past-hero",
              !e.isIntersecting || e.boundingClientRect.top < 0
            );
          }
        },
        { threshold: 0 }
      );
      bridgeObs.observe(bridge);
    }

    // Scroll progress bar
    const progressBar = document.getElementById("scroll-progress");
    const handleScrollProgress = () => {
      if (!progressBar) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = total > 0 ? (scrolled / total) * 100 + "%" : "0%";
    };
    window.addEventListener("scroll", handleScrollProgress, { passive: true });

    // Reveal animations via IntersectionObserver
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0.05 }
    );
    revealEls.forEach((el) => io.observe(el));

    return () => {
      bridgeObs?.disconnect();
      window.removeEventListener("scroll", handleScrollProgress);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
