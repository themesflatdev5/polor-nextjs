
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useFooterReveal() {
    let timeline;
    let trigger;

    const timeout = setTimeout(() => {
        const footer = document.querySelector(".footer-container");
        const width = window.innerWidth;

        if (footer && width > 991) {
            gsap.set(footer, { yPercent: -50 });

            timeline = gsap.timeline({ paused: true });
            timeline.to(footer, { yPercent: 0, ease: "none" });

            trigger = ScrollTrigger.create({
                trigger: ".main-content",
                start: "bottom bottom",
                end: "+=50%",
                animation: timeline,
                scrub: true,
            });

            ScrollTrigger.refresh();
        }
    }, 100);

    return () => {
        clearTimeout(timeout);
        if (trigger) trigger.kill();
        if (timeline) timeline.kill();
    };
}
