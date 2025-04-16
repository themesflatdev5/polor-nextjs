"use client"
import React from "react";
import Layout from "@/components/layout/Layout";
import CategoryItem2 from "@/components/categories/CategoryItem2";
import { useState } from "react";
import { categories2 } from "@/data/categories";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

export default function page() {
    const initialLoadCount = 5;
    const loadMoreCount = 2;
    const [visibleCount, setVisibleCount] = useState(initialLoadCount);
    const visibleCategories = categories2.slice(0, visibleCount);
    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + loadMoreCount);
    };
    const hasMore = visibleCount < categories2.length;

    return (
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
                                beauty tutorials, and lifestyle recommendations.{" "}
                                <br />
                                Explore the world of fashion through our eyes,
                                from runway trends to everyday style.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-categories mb_60">
                <div className="tf-container-3">
                    <div className="d-grid gap_11">
                        {visibleCategories.map((category, index) => (
                            <CategoryItem2 category={category} key={index} />
                        ))}
                    </div>
                    <div className="wd-load d-flex justify-content-center align-items-center">
                        {hasMore && (
                            <button
                                className="btn-showmore text_mono-gray-5 gap_12 sub-heading"
                                onClick={handleLoadMore}
                            >
                                <span>Show More</span>
                                <i className="icon-angle-down-solid" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
}
