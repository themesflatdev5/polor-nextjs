"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";



const SwiperLayout = ({
    children,
    preview,
    tablet,
    mobile,
    screenXl,
    mobileSm,
    spacingLg,
    spacingMd,
    spacing,
    perGroup = 1,
    perGroupMd = 1,
    perGroupLg = 1,
    loop = false,
    center = false,
    initSlide = 0,
    mouseScroll = false,
    paginationType = "bullets",
    showNavigation = true,
    prevSelector,
    nextSelector,
}) => {
    const swiperRef = useRef(null);
    const handleWheel = (e) => {
        e.preventDefault();
        if (!swiperRef.current) return;
        if (e.deltaY > 0) {
            swiperRef.current.slideNext();
        } else {
            swiperRef.current.slidePrev();
        }
    };

    useEffect(() => {
        if (mouseScroll && swiperRef.current?.el) {
            const container = swiperRef.current.el;
            container.addEventListener("wheel", handleWheel, {
                passive: false,
            });

            return () => {
                container.removeEventListener("wheel", handleWheel);
            };
        }
    }, [mouseScroll]);

    const paginationClass =
        paginationType !== "progressbar"
            ? "sw-dots style-1  sw-pagi-layout"
            : "sw-progress swiper-pagination sw-pagi-layout";

    return (
        <>
            <Swiper
                className="sw-layout"
                modules={[Navigation, Pagination, Mousewheel]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={mobile}
                spaceBetween={spacing}
                centeredSlides={center}
                initialSlide={initSlide}
                loop={loop}
                slidesPerGroup={perGroup}
                pagination={{
                    el: ".sw-pagi-layout",
                    clickable: true,
                    type: paginationType,
                }}
                navigation={{
                    nextEl: nextSelector || null,
                    prevEl: prevSelector || null,
                }}
                breakpoints={{
                    575: {
                        slidesPerView: mobileSm || mobile,
                        spaceBetween: spacing,
                        slidesPerGroup: perGroup,
                    },
                    768: {
                        slidesPerView: tablet,
                        spaceBetween: spacingMd,
                        slidesPerGroup: perGroupMd,
                    },
                    992: {
                        slidesPerView: preview,
                        spaceBetween: spacingLg,
                        slidesPerGroup: perGroupLg,
                    },
                    1200: {
                        slidesPerView: screenXl || preview,
                        spaceBetween: spacingLg,
                        slidesPerGroup: perGroupLg,
                    },
                }}
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
                <div className={`mt_20 ${paginationClass}`}></div>
            </Swiper>
        </>
    );
};

export default SwiperLayout;
