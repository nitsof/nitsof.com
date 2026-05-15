"use client";

import { useEffect } from "react";

export default function PageAnimations() {
  useEffect(() => {
    // Scroll progress bar
    const bar = document.getElementById("scroll-progress");
    const updateProgress = () => {
      if (!bar) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? (window.scrollY / total) * 100 + "%" : "0%";
    };
    window.addEventListener("scroll", updateProgress, { passive: true });

    // Reveal on scroll
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObserver.unobserve(e.target);
          }
        }
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0.05 }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    // Hero → body transition via the .bridge element
    const bridge = document.querySelector(".bridge");
    const heroObserver = new IntersectionObserver(
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
    if (bridge) heroObserver.observe(bridge);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      revealObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return null;
}
