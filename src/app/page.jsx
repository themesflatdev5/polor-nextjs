import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "../components/demos/demo1/Hero";
import Portfolio from "@/components/demos/demo1/Portfolio";
import LatestBlogs from "@/components/demos/demo1/LatestBlogs";
import CTA from "@/components/demos/demo1/CTA";
import Featured from "@/components/demos/demo1/Featured";
import MostPopular from "@/components/demos/demo1/MostPopular";
import Newsletter from "@/components/common/Newsletter";
import Footer from "@/components/footer/Footer";
import ScrollAnimations from "@/components/animation";

export const metadata = {
    title: "Polor - Next.js Template",
    description: "Generated by create next app",
};

export default function Home() {
    return (
        <Layout>
            <Hero />
            <div className="main-content">
                <Portfolio />
                <LatestBlogs />
                <CTA />
                <Featured />
                <MostPopular />
                <div className="tf-spacing-1 pt-0">
                    <Newsletter />
                </div>
            </div>
            <Footer />
            <ScrollAnimations />
        </Layout>
    );
}
