"use client";
// import BackToTop from "../elements/BackToTop";
import Footer from "@/components/footer/Footer";
import Header from "@/components/headers/Header";
import MobileMenu from "../headers/MobileMenu";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
    const [showMb, setShowMb] = useState(false);
    const handleCloseMb = () => setShowMb(false);
    const handleShowMb = () => setShowMb(true);

    //   useEffect(() => {
    // 		const WOW = require('wowjs')
    // 		window.wow = new WOW.WOW({
    // 			live: false
    // 		})
    // 		window.wow.init()

    // 	}, [])

    return (
        <>
            <div id="wrapper" className="clearfix">
                <Header handleShowMb={handleShowMb} />
                {children}
            </div>
            {/* <BackToTop /> */}
            <MobileMenu showMb={showMb} handleCloseMb={handleCloseMb} />
        </>
    );
}
