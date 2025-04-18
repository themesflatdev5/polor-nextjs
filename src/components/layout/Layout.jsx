"use client";
import BackToTop from "@/components/common/BackToTop";
import Header from "@/components/headers/Header";
import MobileMenu from "../headers/MobileMenu";
import { useState } from "react";


export default function Layout({ children }) {
    const [showMb, setShowMb] = useState(false);
    const handleCloseMb = () => setShowMb(false);
    const handleShowMb = () => setShowMb(true);


    return (
        <>
            <div id="wrapper" className="clearfix">
                <Header handleShowMb={handleShowMb} />
                {children}
            </div>
            <BackToTop />
            <MobileMenu showMb={showMb} handleCloseMb={handleCloseMb} />
        </>
    );
}
