import Link from "next/link";
import React from "react";

export default function Categories() {
    const linkCategories = [
        {
            title: "Art Direction",
            number: "323",
        },
        {
            title: "Fashion & Style",
            number: "99",
        },
        {
            title: "Technology",
            number: "180",
        },
        {
            title: "Photograph",
            number: "210",
        },
        {
            title: "Social & Lifestyle",
            number: "112",
        },
        {
            title: "Social & Lifestyle",
            number: "112",
        },
    ];
    return (
        <div className="categories section" id="featured">
            {linkCategories.map((item, i) => (
                <Link
                    className="item d-flex justify-content-between align-items-center wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                    href={"/categories-grid"}
                    key={i}
                >
                    <div className="text-display-3 fw-6 ">
                        {item.title}
                        <span className="text-body-3 text_mono-gray-5 fw-4">
                            ( {item.number} posts)
                        </span>
                    </div>
                    <div className="icon">
                        <i className="icon-Icon" />
                    </div>
                </Link>
            ))}
            <div
                className="item style-2 d-flex align-items-center  wow animate__fadeInUp animate__animated"
                data-wow-delay="0s"
            >
                <Link className=" h4 link" href={"/categories-grid"}>
                    View All Categories
                </Link>
            </div>
        </div>
    );
}
