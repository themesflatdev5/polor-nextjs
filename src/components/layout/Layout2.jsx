"use client";
import MobileMenu from "../headers/MobileMenu";
import { useState } from "react";
import Header2 from "../headers/Header2";

export default function Layout({ children }) {
    const [showMb, setShowMb] = useState(false);
    const handleCloseMb = () => setShowMb(false);
    const handleShowMb = () => setShowMb(true);

    return (
        <>
            <div id="wrapper" className="clearfix">
                <Header2 handleShowMb={handleShowMb} />
                {children}
            </div>
            <MobileMenu showMb={showMb} handleCloseMb={handleCloseMb} />
        </>
    );
}
