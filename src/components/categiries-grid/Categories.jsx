
import React from "react";
import { categories } from "@/data/categories";
import CategoryItem from "@/components/categories/CategoryItem";

export default function Categories() {
    return (
        <div className="section-categories mb_48">
            <div className="tf-container">
                <div className="tf-grid-layout lg-col-3 sm-col-2 mb_48">
                    {categories.map((category, index) => (
                        <CategoryItem category={category} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
