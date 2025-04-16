// hooks/useScrollAnimations.js
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

const useScrollAnimations = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        console.log("ScrollTrigger is registered");
        // Animation Text Effect
        // const animationText = () => {
        //   const splitTextElements = document.querySelectorAll(".split-text");
        //   splitTextElements.forEach((el) => {
        //     const target = el.querySelector("p, a") || el;
        //     const pxl_split = new SplitText(target, {
        //       type: "words, chars, lines",
        //       lineThreshold: 0.5,
        //       wordsClass: "word",
        //       linesClass: "split-line",
        //     });

        //     const settings = {
        //       scrollTrigger: {
        //         trigger: target,
        //         start: "top 86%",
        //       },
        //       duration: 0.9,
        //       stagger: 0.02,
        //       ease: "power3.out",
        //     };

        //     gsap.from(pxl_split.chars, settings);
        //   });
        // };

        // Scrolling Effect
        const scrollingEffect = () => {
            const elements = document.querySelectorAll(".scrolling-effect");

            elements.forEach((el) => {
                const delayValue = el.getAttribute("data-delay") || 0;

                let settings = {
                    scrollTrigger: {
                        trigger: el,
                        start: "30px bottom",
                        end: "bottom bottom",
                        once: true,
                    },
                    duration: 0.9,
                    ease: "power3.out",
                    delay: parseFloat(delayValue),
                };

                if (el.classList.contains("effectRight")) {
                    settings.opacity = 0;
                    settings.x = "80";
                }

                if (el.classList.contains("effectLeft")) {
                    settings.opacity = 0;
                    settings.x = "-80";
                }

                if (el.classList.contains("effectBottom")) {
                    settings.opacity = 0;
                    settings.y = "100";
                }

                if (el.classList.contains("effectTop")) {
                    settings.opacity = 0;
                    settings.y = "-80";
                }

                if (el.classList.contains("effectZoomIn")) {
                    settings.opacity = 0;
                    settings.scale = 0.5;
                }

                if (el.classList.contains("effectBounceUp")) {
                    settings.opacity = 0;
                    settings.y = "100";
                    settings.ease = "bounce.out";
                }

                gsap.from(el, settings);
            });
        };

        const animationFooter = () => {
            const footerContainer = document.querySelector(".footer-container");
            const mainContent = document.querySelector(".main-content");

            if (footerContainer && window.innerWidth > 991) {
                gsap.set(footerContainer, { yPercent: -50 });
                const uncover = gsap.timeline({ paused: true });
                uncover.to(footerContainer, { yPercent: 0, ease: "none" });
                ScrollTrigger.create({
                    trigger: mainContent,
                    start: "bottom bottom",
                    end: "+=50%",
                    animation: uncover,
                    scrub: true,
                });
            }
        };
        // Initialize animations
        // animationText();
        scrollingEffect();
        animationFooter();
    }, []);
};

export default useScrollAnimations;
