"use client";
import Contact from "@/components/contact/Contact";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <>
            <Layout>
                <div className="page-title style-default v2">
                    <div className="tf-container">
                        <div className="page-inner">
                            <ul className="breadcrumb text_mono-gray-7">
                                <li className="text-body-2">
                                    <Link className="link" href={"/"}>
                                        Home
                                    </Link>
                                </li>
                                <li className="text-body-2">Contact Us</li>
                            </ul>
                            <div className="heading">
                                <h2 className="text_black mb_31 fw-6 ">
                                    Contact For Work
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
                <Footer />
            </Layout>
        </>
    );
}
