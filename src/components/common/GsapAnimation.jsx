'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const initScrollingEffects = () => {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll(".scrolling-effect");

  elements.forEach((el) => {
    const delayValue = el.getAttribute("data-delay") || "0";

    const settings = {
      scrollTrigger: {
        trigger: el,
        start: "top+=30 bottom",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
      duration: 0.9,
      ease: "power3.out",
      delay: parseFloat(delayValue),
    };

    if (el.classList.contains("effectRight")) {
      settings.opacity = 0;
      settings.x = 80;
    }
    if (el.classList.contains("effectLeft")) {
      settings.opacity = 0;
      settings.x = -80;
    }
    if (el.classList.contains("effectBottom")) {
      settings.opacity = 0;
      settings.y = 100;
    }
    if (el.classList.contains("effectTop")) {
      settings.opacity = 0;
      settings.y = -80;
    }
    if (el.classList.contains("effectZoomIn")) {
      settings.opacity = 0;
      settings.scale = 0.5;
    }
    if (el.classList.contains("effectBounceUp")) {
      settings.opacity = 0;
      settings.y = 100;
      settings.ease = "bounce.out";
    }

    gsap.from(el, settings);
  });
};
