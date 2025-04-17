"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollEffects() {
    const animations = [];

    const timeout = setTimeout(() => {
        const elements = document.querySelectorAll(".scrolling-effect");

        elements.forEach((el) => {
            const delay = parseFloat(el.getAttribute("data-delay")) || 0;

            const settings = {
                scrollTrigger: {
                    trigger: el,
                    start: "30px bottom",
                    end: "bottom bottom",
                    toggleActions: "play none none none",
                },
                duration: 0.9,
                ease: "power3.out",
                delay,
            };

            switch (true) {
                case el.classList.contains("effectRight"):
                    settings.opacity = 0;
                    settings.x = 80;
                    break;
                case el.classList.contains("effectLeft"):
                    settings.opacity = 0;
                    settings.x = -80;
                    break;
                case el.classList.contains("effectBottom"):
                    settings.opacity = 0;
                    settings.y = 100;
                    break;
                case el.classList.contains("effectTop"):
                    settings.opacity = 0;
                    settings.y = -80;
                    break;
                case el.classList.contains("effectZoomIn"):
                    settings.opacity = 0;
                    settings.scale = 0.5;
                    break;
                case el.classList.contains("effectBounceUp"):
                    settings.opacity = 0;
                    settings.y = 100;
                    settings.ease = "bounce.out";
                    break;
            }

            const anim = gsap.from(el, settings);
            animations.push(anim);
        });

        ScrollTrigger.refresh();
    }, 100);

    return () => {
        clearTimeout(timeout);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        animations.forEach((anim) => anim.kill());
    };
}
