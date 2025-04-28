"use client";

import { Instrument_Sans, Inter, Poppins } from "next/font/google";
import "../../public/assets/font/icomoon/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/app.scss";
import "../../public/assets/css/animate.min.css";
import BackToTop from "@/components/common/BackToTop";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--instrumentSans",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--inter",
    display: "swap",
});
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--poppins",
    display: "swap",
});

export default function RootLayout({ children }) {
    const pathname = usePathname();
    useEffect(() => {
        const WOW = require("@/utlis/wow");
        const wow = new WOW.default({
            animateClass: "animated",
            offset: 100,
            mobile: true,
            live: false,
        });
        wow.init();
    }, [pathname]);
    return (
        <html lang="en" className="mdl-js">
            <body
                className={`${inter.variable} ${instrumentSans.variable} ${poppins.variable}`}
            >
                {children}
                <BackToTop />
            </body>
        </html>
    );
}
