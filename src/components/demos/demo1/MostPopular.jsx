"use client";
import React from "react";
import { mostPopular } from "@/data/categories";
import Link from "next/link";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MostPopular() {
    return (
        <div className="section-most-popular style-1 tf-spacing-7">
            <div className="tf-container">
                <div className="heading-section style-border d-flex justify-content-between mb_12">
                    <div className="sub-heading fw-6 split-text effect-rotate">
                        Most Popular
                    </div>
                    <Link className="tf-btn-link " href={"/category-grid"}>
                        <span className="text-body-1 fw-6 ">Discover more</span>
                        <i className="icon-angle-right-solid" />
                    </Link>
                </div>
                <Swiper
                    pagination={{
                        el: "#sw-pg",
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
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {mostPopular.slice(0, 3).map((item, i) => (
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
                                                href={`/single-post ${item.id}`}
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
                <div
                    id="sw-pg"
                    className="sw-dots style-1 sw-pagination-layout mt_24 justify-content-center d-flex"
                ></div>
            </div>
        </div>
    );
}
