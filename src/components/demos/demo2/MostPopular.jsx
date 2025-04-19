"use client";
import React from "react";
import { Navigation, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { mostPopular2 } from "@/data/categories";
import "swiper/css";
import Link from "next/link";

export default function MostPopular() {
    return (
        <div className="sw-layout-1 most-popular tf-spacing-2 ">
            <div className="tf-container-4">
                <div
                    className="heading-section d-flex justify-content-between mb_48 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                >
                    <h2 className="fw-6">Most Popular</h2>
                    <div className="wrap-btn d-flex gap_16">
                        <Link
                            className="tf-btn style-2 animate-hover-btn  w-1  "
                            href={"/category-grid"}
                        >
                            <span>View All</span>
                        </Link>
                        <div className="wrap-sw-button d-flex gap_8 ">
                            <div className="sw-button sz-56 v2 style-default nav-prev-layout-1 snbp116">
                                <i className="icon-long-arrow-alt-left-solid" />
                            </div>
                            <div className="sw-button sz-56 v2 style-default nav-next-layout-1 snbn116">
                                <i className="icon-long-arrow-alt-right-solid" />
                            </div>
                        </div>
                    </div>
                </div>

                <Swiper
                    navigation={{
                        prevEl: ".snbp116",
                        nextEl: ".snbn116",
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
                            spaceBetween: 20,
                            grid: {
                                rows: 2,
                                fill: "row",
                            },
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                            grid: {
                                rows: 3,
                                fill: "row",
                            },
                        },
                    }}
                    modules={[Navigation, Grid]}
                    className="mySwiper"
                >
                    {mostPopular2.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="category-item style-default v6 ">
                                <div className="content">
                                    <div>
                                        <Link
                                            className="category-tag text-caption mb_9"
                                            href={"/category-grid"}
                                        >
                                            {item.tag}
                                        </Link>
                                        <h6 className="title letter-spacing-2 fw-5 text_mono-gray-9">
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
                                            <Link
                                                className="hover-line-text fw-6 text_black ml"
                                                href={"/about"}
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
