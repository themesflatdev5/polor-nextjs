"use client";
import React, { useState } from "react";
import { FreeMode, Thumbs, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slidesData2, thumbsSliedes } from "@/data/heroslides";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="page-title mt_25">
            <div className="tf-container">
                <div className="page-inner">
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        effect={"fade"}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs, EffectFade, Autoplay]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="mb_22 effect-content-slide thumbs"
                    >
                        {slidesData2.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="hero-banner style-default v2  position-relative">
                                    <div className="img-thumbs">
                                        <Image
                                            alt="page-title"
                                            className="lazyload "
                                            src={item.src}
                                            width={1824}
                                            height={0}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="heading text-center">
                                            <Link
                                                className="tag text-body-2 text_white mb_15 mx-auto effect-item effect-up effect-1"
                                                href={"/categories-grid"}
                                            >
                                                {item.tag}
                                            </Link>
                                            <h1 className="text_white fw-6 mb_25 title effect-item effect-up effect-2">
                                                {item.title
                                                    .split("\n")
                                                    .map((line, i) => (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            <br />
                                                        </React.Fragment>
                                                    ))}
                                            </h1>
                                            <p className="text-body-2 text_white effect-item effect-up effect-3">
                                                {item.desc
                                                    .split("\n")
                                                    .map((line, i) => (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            <br />
                                                        </React.Fragment>
                                                    ))}
                                            </p>
                                        </div>
                                        <a
                                            className="tf-btn-link style-1 mx-auto effect-item effect-left effect-4"
                                            href="#"
                                        >
                                            <span className="h6 fw-6 text_white">
                                                {item.btnText}
                                            </span>
                                            <i className="icon-angle-right-solid" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="wrap-pagi">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={12}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs]}
                            className="thumbs-sw-pagi"
                        >
                            {thumbsSliedes.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="img-thumb-pagi">
                                        <Image alt="thumbs-pagi" src={item.src} width={140} height={0}/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
