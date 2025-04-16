import React from "react";
import CategoryItem from "@/components/categories/CategoryItem";
import Footer from "@/components/footer/Footer";
import { categories } from "@/data/categories";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function page() {

    
    return (
        <>
            <Layout>
                <div className="page-title style-default mb_49">
                    <div className="tf-container">
                        <div className="page-inner">
                            <ul className="breadcrumb text_mono-gray-7">
                                <li className="text-body-2">
                                    <Link className="link" href={"/"}>
                                        Home
                                    </Link>
                                </li>
                                <li className="text-body-2">Fashion & Style</li>
                            </ul>
                            <div className="heading">
                                <h2 className="text_black mb_31 fw-6 ">
                                    Fashion & Styles
                                </h2>
                                <p className="text-body-2 ">
                                    A curated collection of fashion inspiration,
                                    beauty tutorials, and lifestyle
                                    recommendations. <br />
                                    Explore the world of fashion through our
                                    eyes, from runway trends to everyday style.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-categories mb_48">
                    <div className="tf-container">
                        <div className="tf-grid-layout lg-col-3 sm-col-2 mb_48">
                            {categories.map((category, index) => (
                                <CategoryItem category={category} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </Layout>
        </>
    );
}
