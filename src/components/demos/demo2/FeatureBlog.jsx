"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { mostBlogs2 } from "@/data/categories";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

export default function FeatureBlog() {
    return (
        <div className=" tf-spacing-3 featured-blog">
            <div className="tf-container-4">
                <div
                    className="heading-section d-flex justify-content-between mb_77 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                >
                    <h2 className="fw-6">Featured Blog</h2>
                    <div className="wrap-btn d-flex gap_16">
                        <Link
                            className="tf-btn style-2 animate-hover-btn  w-1  "
                            href={"/category-grid"}
                        >
                            <span>View All</span>
                        </Link>
                        <div className="wrap-sw-button d-flex gap_8 ">
                            <div className="sw-button sz-56 v2 style-default nav-prev-layout-1 snbp117">
                                <i className="icon-long-arrow-alt-left-solid" />
                            </div>
                            <div className="sw-button sz-56 v2 style-default nav-next-layout-1 snbn117">
                                <i className="icon-long-arrow-alt-right-solid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap-swiper">
                <Swiper
                    navigation={{
                        prevEl: ".snbp117",
                        nextEl: ".snbn117",
                    }}
                    spaceBetween={12}
                    observer={true}
                    observeParents={true}
                    resizeObserver={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 1.2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 1.4,
                        },
                        1200: {
                            slidesPerView: 1.8001,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {mostBlogs2.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="category-item style-default v7 hover-image-3 ">
                                <Link
                                    className="img-style mb_16"
                                    href={`/single-post/${item.id}`}
                                >
                                    <Image
                                        alt="category"
                                        className="lazyload "
                                        src={item.imageSrc}
                                        width={779}
                                        height={0}
                                    />
                                    <Image
                                        alt="category"
                                        className="lazyload "
                                        src={item.imageSrc}
                                        width={779}
                                        height={0}
                                    />
                                    <span className="icon-play sz-3">
                                        <i className="icon-play-filled" />
                                    </span>
                                </Link>
                                <div className="content">
                                    <div>
                                        <Link
                                            className="category-tag text-caption mb_9"
                                            href={"/categories-gird"}
                                        >
                                            {item.tag}
                                        </Link>
                                        <h5 className="title letter-spacing-2 fw-6">
                                            <Link
                                                className="hover-line-text"
                                                href={`/single-post/${item.id}`}
                                            >
                                                {item.title}
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="category-bot d-flex align-items-center">
                                        <div className="credit text-caption text_mono-gray-5">
                                            {item.date}
                                            <Link
                                                className="hover-line-text fw-6 text_black ml_5"
                                                href={`/about`}
                                            >
                                                {item.author}
                                            </Link>
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
