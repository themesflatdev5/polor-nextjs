"use client";

import useScrollEffects from "./useScrollEffect";   
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollAnimations() {
    const pathname = usePathname();
 
    useEffect(() => {
        const cleanupScroll = useScrollEffects();
        return () => {
            cleanupScroll();
        };
    }, [pathname]);

    return null;
}
