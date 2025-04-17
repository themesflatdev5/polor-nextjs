"use client";

import useScrollEffects from "./useScrollEffect";
import useFooterReveal from "./useFooterReveal";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollAnimations() {
    const pathname = usePathname();
 
    useEffect(() => {
        const cleanupScroll = useScrollEffects();
        const cleanupFooter = useFooterReveal();
        return () => {
            cleanupScroll();
            cleanupFooter();
        };
    }, [pathname]);

    return null;
}
