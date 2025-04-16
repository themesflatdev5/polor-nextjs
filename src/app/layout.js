"use client";

import { Instrument_Sans, Inter, Poppins } from "next/font/google";
import "../../public/font/icomoon/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/app.scss";
import Script from "next/script";
import BackToTop from "@/components/common/BackToTop";

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
            
            <body className={`${inter.variable} ${instrumentSans.variable} ${poppins.variable}`}          >
                {children}
                <Script src="/js/ScrollSmooth.js" strategy="afterInteractive" />
                <BackToTop />
            </body>
        </html>
    );
}
