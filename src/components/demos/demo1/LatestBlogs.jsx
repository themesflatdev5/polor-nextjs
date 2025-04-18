import React from "react";
import { categories3 } from "@/data/categories";
import CategoryItem3 from "@/components/categories/CategoryItem3";
import Image from "next/image";
import Link from "next/link";
export default function LatestBlogs() {
    return (
        <div className="section-latest-blogs style-1 ">
            <div className="tf-container">
                <div className="heading-section style-border d-flex justify-content-between mb_12">
                    <div className="sub-heading fw-6 split-text effect-rotate">
                        Latest Blogs
                    </div>
                    <Link className="tf-btn-link " href={"/category-grid"}>
                        <span className="text-body-1 fw-6 ">Discover more</span>
                        <i className="icon-angle-right-solid" />
                    </Link>
                </div>
                <div className="tf-grid-layout xl-col-4 lg-col-3 sm-col-2">
                    {categories3.map((category, index) => (
                        <CategoryItem3 category={category} key={index} />
                    ))}
                    <div className="shopify-banner">
                        <div className="banner">
                            <Image
                                alt="category"
                                className="lazyload "
                                src="/assets/images/section/banner-img.png"
                                width={447}
                                height={0}
                            />
                        </div>
                        <div className="content">
                            <div className="title text_white fw-6">
                                Shopify Spring Editions
                            </div>
                            <Link className="text_white" href={"/category-grid"}>
                                Discover more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
