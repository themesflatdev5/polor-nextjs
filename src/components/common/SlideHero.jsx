"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Parallax,
    EffectFade,
    EffectCreative,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

const SlideHero = ({ children, effect = "slide", loop = false }) => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (!swiper) return;

        const container = swiper.el;
        if (!container) return;

        const applyParallaxAttributes = () => {
            const hasParallax = [
                ...container.querySelectorAll(".animation-sl"),
            ].some((el) => el?.hasAttribute?.("data-cs-parallax"));
            if (!hasParallax) return;

            container
                .querySelectorAll(".cs-entry__content")
                ?.forEach((content) => {
                    content?.setAttribute("data-swiper-parallax-x", "-400");
                    content?.setAttribute(
                        "data-swiper-parallax-duration",
                        "800"
                    );
                });
        };

        const resetContentTransform = (index) => {
            const slides = swiper.slides;
            if (!slides || !slides[index]) return;

            const currentContent =
                slides[index].querySelector(".cs-entry__content");
            if (currentContent) {
                currentContent.style.transform = "none";
            }
        };

        const handleInit = () => resetContentTransform(swiper.activeIndex);
        const handleSlideChange = () =>
            resetContentTransform(swiper.activeIndex);

        applyParallaxAttributes();

        swiper.on("init", handleInit);
        swiper.on("slideChange", handleSlideChange);

        if (swiper.initialized) handleInit();

        return () => {
            swiper.off("init", handleInit);
            swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    const swiperOptions = {
        modules: [Pagination, Navigation, Parallax, EffectFade, EffectCreative],
        slidesPerView: 1,
        speed: 1000,
        loop,
        parallax: true,
        effect,
        navigation: {
            nextEl: ".sw-single-next",
            prevEl: ".sw-single-prev",
        },
        pagination: {
            el: ".sw-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true,
        onSwiper: setSwiper,
        ...(effect === "fade" && {
            fadeEffect: { crossFade: true },
        }),
        ...(effect === "creative" && {
            creativeEffect: {
                prev: { shadow: true, translate: [0, 0, -400] },
                next: { translate: ["100%", 0, 0] },
            },
        }),
    };

    return (
        <div className="slider-hero-container">
            <Swiper
                ref={swiperRef}
                {...swiperOptions}
                className="sw-single position-relative"
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
                <div className="pagination-wrap">
                    <div className="sw-button style-1 sw-single-prev">
                        <i className="icon-angle-left-solid" />
                    </div>
                    <div className="sw-dots style-default sw-pagination" />
                    <div className="sw-button style-1 sw-single-next">
                        <i className="icon-angle-right-solid" />
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default SlideHero;
