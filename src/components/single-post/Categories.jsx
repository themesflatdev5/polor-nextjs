"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "@/data/categories";
import Link from "next/link";

export default function Categories() {
    return (
        <>
            <div className="wrap-sw-button d-flex gap_16 justify-content-between mb_24">
                <div className="sw-button style-icon-with-text has-bg nav-prev-layout  snbp114">
                    <i className="icon-angle-left-solid"></i>
                    Previous Post
                </div>
                <div className="sw-button style-icon-with-text has-bg nav-next-layout snbn114">
                    Next Post
                    <i className="icon-angle-right-solid"></i>
                </div>
            </div>
            <Swiper
                dir="ltr"
                className="swiper sw-layout"
                slidesPerView={2}
                spaceBetween={12}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 12,
                        slidesPerGroup: 1,
                    },
                    992: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                modules={[Navigation]}
                navigation={{
                    prevEl: ".snbp114",
                    nextEl: ".snbn114",
                }}
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <div
                            className={`slide-inner ${
                                index % 2 === 0 ? "left" : "right"
                            }`}
                        >
                            <div className="tag text-caption mb_17">
                                {category.tag}
                            </div>
                            <h6 className="fw-6">
                                <Link
                                    href={`/single-post/${category.id}`}
                                    className="hover-line-text"
                                >
                                    {category.title}
                                </Link>
                            </h6>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
