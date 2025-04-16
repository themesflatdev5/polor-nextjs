"use client";
import React from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Navigation, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PopularBlogs } from "@/data/categories";
import Image from "next/image";

export default function PopularBlog() {
    return (
        <div className="section sw-layout-1">
            <div className="tf-container-3">
                <div className="heading-section style-1 d-flex justify-content-between align-items-center">
                    <div className="sub-heading-section sub-heading fw-6 split-text effect-right">
                        Popular Blogs
                    </div>
                    <div className="wrap-btn d-flex gap_16">
                        <a
                            className="tf-btn style-2 animate-hover-btn"
                            href="category-grid.html"
                        >
                            <span>Explore Now</span>
                        </a>
                        <div className="wrap-sw-button d-flex gap_8">
                            <div className="sw-button style-default sz-56 v2 nav-prev-layout-1 snbp115">
                                <i className="icon-long-arrow-alt-left-solid" />
                            </div>
                            <div className="sw-button style-default sz-56 v2 nav-next-layout-1 snbn115">
                                <i className="icon-long-arrow-alt-right-solid" />
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    navigation={{
                        prevEl: ".snbp115",
                        nextEl: ".snbn115",
                    }}
                    spaceBetween={12}
                    observer={true}
                    observeParents={true}
                    resizeObserver={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2,
                                fill: "row",
                            },
                        },
                        992: {
                            slidesPerView: 3,
                            grid: {
                                rows: 2,
                                fill: "row",
                            },
                        },
                    }}
                    modules={[Navigation, Grid]}
                    className="mySwiper"
                >
                    {PopularBlogs.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="category-item style-default v4 hover-image-3 ">
                                <Link
                                    className="img-style "
                                    href={`/single-post/${item.id}`}
                                >
                                    <Image
                                        alt="category"
                                        className="lazyload "
                                        src={item.imageSrc}
                                        width={498}
                                        height={0}
                                    />
                                    <Image
                                        alt="category"
                                        className="lazyload "
                                        src={item.imageSrc}
                                        width={498}
                                        height={0}
                                    />
                                </Link>
                                <div className="content">
                                    <div>
                                        <Link
                                            className="category-tag text-caption mb_9"
                                            href={"/categories-grid"}
                                        >
                                            Fashion & Style
                                        </Link>
                                        <h6 className="title letter-spacing-2 fw-6">
                                            <Link
                                                className="hover-line-text"
                                                href={`/single-post/${item.id}`}
                                            >
                                                {item.title}
                                            </Link>
                                        </h6>
                                    </div>
                                    <div className="category-bot d-flex align-items-center">
                                        <div className="credit text-caption text_mono-gray-5">
                                            {item.date}
                                            <a
                                                className="hover-line-text fw-6 text_black ml_5"
                                                href="about.html"
                                            >
                                                {item.author}
                                            </a>
                                        </div>
                                        <div className="comment d-flex gap_8 align-items-center text-caption text_mono-gray-5">
                                            <i className="icon-comment-alt" />
                                            <span>{item.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
