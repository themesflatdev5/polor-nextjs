"use client";
import React from "react";
import CategoryItem2 from "@/components/categories/CategoryItem2";
import { useState } from "react";
import { categories2 } from "@/data/categories";


export default function Categories() {
    const initialLoadCount = 5;
    const loadMoreCount = 2;
    const [visibleCount, setVisibleCount] = useState(initialLoadCount);
    const visibleCategories = categories2.slice(0, visibleCount);
    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + loadMoreCount);
    };
    const hasMore = visibleCount < categories2.length;
    return (
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
    );
}
