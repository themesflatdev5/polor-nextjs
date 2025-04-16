"use client";
import React from "react";
import { mostPopular } from "@/data/categories";
import Link from "next/link";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LastestBlogs() {
    return (
        <div className="section-most-popular sw-layout-1 style-2  tf-spacing-11">
            <div className="tf-container-3">
                <div className="heading-section style-1 d-flex justify-content-between align-items-center">
                    <div className="sub-heading-section sub-heading fw-6 split-text effect-right">
                        Explore Latest Blogs
                    </div>
                    <div className="wrap-btn d-flex gap_16">
                        <a
                            className="tf-btn style-2 animate-hover-btn"
                            href="category-grid.html"
                        >
                            <span>Explore Now</span>
                        </a>
                        <div className="wrap-sw-button d-flex gap_8">
                            <div className="sw-button style-default sz-56 v2 nav-prev-layout-1 snbp118">
                                <i className="icon-long-arrow-alt-left-solid" />
                            </div>
                            <div className="sw-button style-default sz-56 v2 nav-next-layout-1 snbn118">
                                <i className="icon-long-arrow-alt-right-solid" />
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    navigation={{
                        prevEl: ".snbp118",
                        nextEl: ".snbn118",
                    }}
                    spaceBetween={12}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {mostPopular.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="category-item style-default hover-image-3 wow animate__fadeInUp animate__animated"
                                data-wow-delay="0s"
                                data-wow-duration="1s"
                            >
                                <div className="content">
                                    <div>
                                        <Link
                                            className="category-tag text-caption mb_14 "
                                            href={"/categories-grid"}
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
                                    <div className="category-bot d-flex align-items-center justify-content-between">
                                        <div className="credit">
                                            {item.date}
                                            <a
                                                className="hover-line-text fw-6 ml_5"
                                                href="#"
                                            >
                                                {item.author}
                                            </a>
                                        </div>
                                        <div className="comment d-flex gap_8 align-items-center text-body-2 text_mono-gray-5">
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
