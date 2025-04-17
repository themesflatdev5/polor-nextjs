"use client";

import { Instrument_Sans, Inter, Poppins } from "next/font/google";
import "../../public/font/icomoon/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/app.scss";
import BackToTop from "@/components/common/BackToTop";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import useFooterReveal from "@/components/animation/useFooterReveal";

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
  

    return (
        <html lang="en" className="mdl-js">
            <body
                className={`${inter.variable} ${instrumentSans.variable} ${poppins.variable}`}
            >
                <ReactLenis root options={{ duration: 1.4 }}>
                    {children}
                </ReactLenis>
                <BackToTop />
            </body>
        </html>
    );
}
