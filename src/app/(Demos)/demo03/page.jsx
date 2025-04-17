import CTA from "@/components/demos/demo3/CTA";
import About from "@/components/demos/demo3/About";
import Hero from "@/components/demos/demo3/Hero";
import PopularBlog from "@/components/demos/demo3/PopularBlog";
import Layout2 from "@/components/layout/Layout2";
import React from "react";
import Post from "@/components/demos/demo3/Post";
import LastestBlogs from "@/components/demos/demo3/LastestBlogs";
import Newsletter3 from "@/components/common/Newsletter3";
import Footer3 from "@/components/footer/Footer3";
import ScrollAnimations from '@/components/animation';

export default function page() {
   
    return (
        <>
            <Layout2>
                
                <Hero />
                <div className="main-content">
                    <About />
                    <PopularBlog />
                    <CTA />
                    <Post />
                    <LastestBlogs />
                    <Newsletter3 />
                </div>
                <Footer3 />
                <ScrollAnimations />
            </Layout2>
        </>
    );
}
