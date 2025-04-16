"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories3 } from "@/data/categories";
import Link from "next/link";
import Image from "next/image";

export default function RelatedPost() {
    return (
        <div className="section-related-post sw-layout-1 tf-spacing-4 pt-0">
            <div className="tf-container">
                <div className="heading d-flex justify-content-between align-items-center mb_12">
                    <div className="sub-heading fw-6">Related Post</div>
                    <div className="wrap-sw-button d-flex gap_16">
                        <div className="sw-button style-default nav-prev-layout-1 snbp115">
                            <i className="icon-angle-left-solid" />
                        </div>
                        <div className="sw-fraction-layout-1 text-caption font-3 d-flex  align-items-center" />
                        <div className="sw-button style-default nav-next-layout-1 snbn115">
                            <i className="icon-angle-right-solid" />
                        </div>
                    </div>
                </div>
                <Swiper
                    pagination={{
                        type: "fraction",
                        el: ".sw-fraction-layout-1",
                    }}
                    navigation={{
                        prevEl: ".snbp115",
                        nextEl: ".snbn115",
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
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {categories3.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="category-item style-default v2 hover-image-3 "
                                key={item.id}
                            >
                                <div className="content">
                                    <div>
                                        <Link
                                            className="category-tag text-caption mb_22"
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
                                    <div>
                                        <Link
                                            className="img-style mb_17 "
                                            href={`/single-post/${item.id}`}
                                        >
                                            <Image
                                                alt="category"
                                                className="lazyload "
                                                src={item.imageSrc}
                                                width={351}
                                                height={0}
                                            />
                                            <Image
                                                alt="category"
                                                className="lazyload "
                                                src={item.imageSrc}
                                                width={351}
                                                height={0}
                                            />
                                            <span className="icon-play sz-1">
                                                <i className="icon-play-filled" />
                                            </span>
                                        </Link>
                                        <p className="text-body-2 text_mono-gray-5 line-clamp-3">
                                            {item.desc}
                                        </p>
                                        <div className="category-bot d-flex align-items-center justify-content-between">
                                            <div className="credit">
                                                {item.date}
                                                <a
                                                    className="hover-line-text fw-6"
                                                    href="#"
                                                >
                                                    {item.author}
                                                </a>
                                            </div>
                                            <div className="comment d-flex gap_8 align-items-center text-body-2 text_mono-gray-5">
                                                <i className="icon-comment-alt" />
                                                <span> {item.comments}</span>
                                            </div>
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
