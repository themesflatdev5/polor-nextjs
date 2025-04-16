"use client";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Navigation, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { mostBlogs } from "@/data/categories";
import Image from "next/image";

export default function LastestBlogs() {
    return (
        <div
            className="sw-layout-1 tf-spacing-2 latest-blogs section"
            id="latest-post"
        >
            <div className="tf-container-4">
                <div className="heading-section d-flex justify-content-between mb_14">
                    <h2 className="fw-6 split-text effect-rotate">
                        Latest Blogs
                    </h2>
                    <div className="wrap-btn d-flex gap_16">
                        <Link
                            className="tf-btn style-2 animate-hover-btn  w-1  "
                            href={"/categories-grid"}
                        >
                            <span>View All</span>
                        </Link>
                        <div className="wrap-sw-button d-flex gap_8 ">
                            <div className="sw-button sz-56 v2 style-default nav-prev-layout-1 snbp115">
                                <i className="icon-long-arrow-alt-left-solid" />
                            </div>
                            <div className="sw-button sz-56 v2 style-default nav-next-layout-1 snbn115">
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
                    {mostBlogs.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="category-item style-default v5 hover-image-3 ">
                                <Link
                                    className="img-style mb_16"
                                    href="single-post.html"
                                >
                                    <Image
                                        alt="category"
                                        className="lazyload "
                                        src={item.imageSrc}
                                        width={435}
                                        height={0}
                                    />
                                    <Image
                                        alt="category"
                                        className="lazyload "
                                        src={item.imageSrc}
                                        width={435}
                                        height={0}
                                    />
                                    <span className="icon-play sz-4">
                                        <i className="icon-play-filled" />
                                    </span>
                                </Link>
                                <div className="content">
                                    <div>
                                        <Link
                                            className="category-tag text-caption mb_9 mb_9"
                                            href={"/categories-gird"}
                                        >
                                            {item.tag}
                                        </Link>
                                        <h6 className="title line-clamp-3 letter-spacing-2 fw-6">
                                            <Link
                                                className=" hover-line-text"
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
                                                href="#"
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
