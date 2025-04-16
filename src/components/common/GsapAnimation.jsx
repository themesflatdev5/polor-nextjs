"use client";
import React, { forwardRef, useRef } from "react";
import {
    useAnimationText,
    useScrollAnimation,
    useParallax,
    useFooterAnimation,
} from "../../hooks/useGsapAnimations";

export const AnimatedText = forwardRef(
    ({ children, effect = "fade", className = "", ...props }, ref) => {
        const textRef = ref || useRef(null);
        useAnimationText(textRef, { effect });

        return (
            <div
                ref={textRef}
                className={`animated-text ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);
AnimatedText.displayName = "AnimatedText";

export const AnimatedElement = forwardRef(
    (
        { children, effect = "fade", delay = 0, className = "", ...props },
        ref
    ) => {
        const elementRef = ref || useRef(null);
        useScrollAnimation(elementRef, { effect, delay });

        return (
            <div
                ref={elementRef}
                className={`animated-element ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);
AnimatedElement.displayName = "AnimatedElement";

export const ParallaxElement = forwardRef(
    (
        {
            children,
            direction = "up",
            distance = "20%",
            rotate,
            className = "",
            ...props
        },
        ref
    ) => {
        const elementRef = ref || useRef(null);
        useParallax(elementRef, { direction, distance, rotate });

        return (
            <div
                ref={elementRef}
                className={`parallax-element ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);
ParallaxElement.displayName = "ParallaxElement";

export const AnimatedFooter = ({ children, footerContent, className = "" }) => {
    const contentRef = useRef(null);
    const footerRef = useRef(null);

    useFooterAnimation(footerRef, contentRef);

    return (
        <>
            <div ref={contentRef} className="main-content">
                {children}
            </div>
            <footer ref={footerRef} className={`animated-footer ${className}`}>
                {footerContent}
            </footer>
        </>
    );
};
