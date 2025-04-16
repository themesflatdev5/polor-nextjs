"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import { post } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

export default function Post() {
    const [isOpen, setIsOpen] = useState(false);
    const [idViedeo, setIdViedeo] = useState("XHOmBV4js_E");

    return (
        <div className="section-post">
            <Swiper
                className="sw-layout effect-content-slide"
                navigation={{
                    prevEl: ".snbp117",
                    nextEl: ".snbn117",
                }}
                spaceBetween={12}
                observer={true}
                observeParents={true}
                resizeObserver={true}
                initialSlide={1}
                centeredSlides={true}
                loop={true}
                speed={1000}
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
                        slidesPerView: 1.2,
                    },
                    1200: {
                        slidesPerView: 1.2627,
                    },
                }}
                modules={[Navigation]}
            >
                {post.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="category-item style-1 v2">
                            <div className="img-style effect-item-2 zoom-out ">
                                <Image
                                    alt="category"
                                    className="lazyload "
                                    src={item.imageSrc}
                                    width={1518}
                                    height={0}
                                />
                                <button
                                    className="popup-video"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setIdViedeo(`${item.idVideo}`)
                                    }}
                                >
                                    <i className="icon-play-filled" />
                                </button>
                            </div>
                            <div className="content">
                                <div>
                                    <Link
                                        className="category-tag text-caption text_white effect-item-2 effect-up effect-1"
                                        href={"/categories-grid"}
                                    >
                                        {item.tag}
                                    </Link>
                                    <h3 className="title letter-spacing-2 fw-6 text_white effect-item-2 effect-up effect-2">
                                        <Link
                                            className="hover-line-text"
                                            href={`/single-post/${item.id}`}
                                        >
                                            {item.title}
                                        </Link>
                                    </h3>
                                </div>
                                <div className="category-bot d-flex align-items-center  effect-item-2 effect-up effect-3 ">
                                    <div className="credit text_white text-caption">
                                        {item.date}
                                        <Link
                                            className="hover-line-text fw-6"
                                            href={"/about"}
                                        >
                                            {item.author}
                                        </Link>
                                    </div>
                                    <div className="comment d-flex gap_8 align-items-center text_white text-caption text_mono-gray-5">
                                        <i className="icon-comment-alt" />
                                        <span>{item.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="sw-button style-2 nav-prev-layout snbp117">
                    <i className="icon-long-arrow-alt-left-solid" />
                </div>
                <div className="sw-button style-2 nav-next-layout snbn117">
                    <i className="icon-long-arrow-alt-right-solid" />
                </div>
            </Swiper>
            <ModalVideo
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                videoId={idViedeo}
            />
        </div>
    );
}
