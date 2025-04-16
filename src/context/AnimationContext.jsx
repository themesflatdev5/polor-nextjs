// context/AnimationContext.js
import { createContext, useContext, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';

// Khởi tạo context
export const AnimationContext = createContext({});

// Custom hook để sử dụng animation context
export const useAnimation = () => useContext(AnimationContext);

// Register GSAP plugins khi ở client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Provider component
export const AnimationProvider = ({ children }) => {
  // Tạo các animation functions trong context
  const animationFunctions = useMemo(() => {
    // Animation text function
    const animateText = (element, options = {}) => {
      if (!element || typeof window === 'undefined') return;
      
      const effect = options.effect || 'fade';
      const splitText = new SplitText(element, {
        type: "words, chars",
        wordsClass: "word",
      });
      
      const settings = {
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        }
      };
      
      switch (effect) {
        case "right":
          settings.opacity = 0;
          settings.x = 50;
          break;
        case "left":
          settings.opacity = 0;
          settings.x = -50;
          break;
        case "up":
          settings.opacity = 0;
          settings.y = 80;
          break;
        case "down":
          settings.opacity = 0;
          settings.y = -80;
          break;
        case "scale":
          settings.opacity = 0;
          settings.scale = 0.5;
          break;
        case "rotate":
          settings.opacity = 0;
          settings.rotateX = 50;
          break;
        default: // fade
          settings.opacity = 0;
      }
      
      gsap.from(splitText.chars, {
        ...settings,
        stagger: 0.02,
      });
      
      return () => {
        splitText.revert();
        ScrollTrigger.getAll().forEach(st => {
          if (st.vars.trigger === element) st.kill();
        });
      };
    };
    
    // Scroll animation function
    const animateElement = (element, options = {}) => {
      if (!element || typeof window === 'undefined') return;
      
      const effect = options.effect || 'fade';
      const delay = options.delay || 0;
      
      const settings = {
        duration: 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true,
          markers: true,
        }
      };
      
      switch (effect) {
        case "right":
          settings.opacity = 0;
          settings.x = 80;
          break;
        case "left":
          settings.opacity = 0;
          settings.x = -80;
          break;
        case "bottom":
          settings.opacity = 0;
          settings.y = 100;
          break;
        case "top":
          settings.opacity = 0;
          settings.y = -80;
          break;
        case "zoom":
          settings.opacity = 0;
          settings.scale = 0.5;
          break;
        case "bounce":
          settings.opacity = 0;
          settings.y = 100;
          settings.ease = "bounce.out";
          break;
        default: // fade
          settings.opacity = 0;
      }
      
      gsap.from(element, settings);
      
      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.vars.trigger === element) st.kill();
        });
      };
    };
    
    // Parallax function
    const parallaxElement = (element, options = {}) => {
      if (!element || typeof window === 'undefined') return;
      
      const direction = options.direction || "up";
      const distance = options.distance || "20%";
      let animationProps = {};
      
      switch (direction) {
        case "left":
          animationProps.x = `-${distance}`;
          break;
        case "right":
          animationProps.x = `${distance}`;
          break;
        case "up":
          animationProps.y = `-${distance}`;
          break;
        case "down":
          animationProps.y = `${distance}`;
          break;
        case "rotate":
          animationProps.rotate = options.rotate || 15;
          break;
      }
      
      gsap.to(element, {
        ...animationProps,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
      
      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.vars.trigger === element) st.kill();
        });
      };
    };
    
    // Footer animation
    const animateFooter = (footerElement, contentElement) => {
      if (!footerElement || !contentElement || typeof window === 'undefined') return;
      
      const handleResize = () => {
        if (window.innerWidth > 991) {
          gsap.set(footerElement, { yPercent: -50 });
          
          const timeline = gsap.timeline({ paused: true });
          timeline.to(footerElement, { yPercent: 0, ease: "none" });
          
          ScrollTrigger.create({
            trigger: contentElement,
            start: "bottom bottom",
            end: "+=50%",
            animation: timeline,
            scrub: true,
          });
        } else {
          gsap.set(footerElement, { yPercent: 0 });
        }
      };
      
      handleResize();
      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach(st => {
          if (st.vars.trigger === contentElement) st.kill();
        });
      };
    };
    
    return {
      animateText,
      animateElement,
      parallaxElement,
      animateFooter,
      gsap,
      ScrollTrigger
    };
  }, []);
  
  return (
    <AnimationContext.Provider value={animationFunctions}>
      {children}
    </AnimationContext.Provider>
  );
};