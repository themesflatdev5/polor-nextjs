"use client";
import React, { useState } from "react";
import LeftBar from "@/components/demos/demo2/LeftBar";
import Hero from "@/components/demos/demo2/Hero";
import LastestBlogs from "@/components/demos/demo2/LastestBlogs";
import Categories from "@/components/demos/demo2/Categories";
import MostPopular from "@/components/demos/demo2/MostPopular";
import FeatureBlog from "@/components/demos/demo2/FeatureBlog";
import CTA from "@/components/demos/demo2/CTA";
import Newsletter2 from "@/components/common/Newsletter2";
import Footer2 from "@/components/footer/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import BackToTop from "@/components/common/BackToTop";


export default function page() {
    const [showMb, setShowMb] = useState(false);
    const handleCloseMb = () => setShowMb(false);
    const handleShowMb = () => setShowMb(true);
    return (
        <>
            <div className="wrap-main-blog section-onepage position-relative">
                <LeftBar />
                <div className="rightsite">
                    <Hero handleShowMb={handleShowMb} />
                    <LastestBlogs />
                    <Categories />
                    <div className="section" id="popular">
                        <MostPopular />
                        <FeatureBlog />
                    </div>
                    <div className="section" id="portfolio">
                        <CTA />
                        <Newsletter2 />
                    </div>
                    <Footer2 />
                </div>
            </div>
            <MobileMenu showMb={showMb} handleCloseMb={handleCloseMb} />
            <BackToTop />
        </>
    );
}
