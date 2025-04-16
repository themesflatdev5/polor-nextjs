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
        // Chỉ thực hiện khi swiper đã được khởi tạo
        if (!swiper) return;

        // Kiểm tra xem swiper có tồn tại và có các phần tử cần thiết không
        const container = swiper.el;
        if (!container) return;

        // Xử lý parallax nếu cần
        try {
            const sliders = container.querySelectorAll(".animation-sl");
            const hasParallax = Array.from(sliders || []).some(
                (slider) => slider && slider.hasAttribute && slider.hasAttribute("data-cs-parallax")
            );

            if (hasParallax) {
                const postContents = container.querySelectorAll(".cs-entry__content");
                if (postContents && postContents.length) {
                    postContents.forEach((postContent) => {
                        if (postContent) {
                            postContent.setAttribute("data-swiper-parallax-x", "-400");
                            postContent.setAttribute("data-swiper-parallax-duration", "800");
                        }
                    });
                }
            }
        } catch (error) {
            console.error("Error setting up parallax:", error);
        }

        // Xử lý cho slide hiện tại khi khởi tạo
        const handleInit = () => {
            try {
                if (!swiper || typeof swiper.activeIndex !== 'number') return;
                
                const activeIndex = swiper.activeIndex;
                const slides = swiper.slides;
                
                if (!slides || !slides[activeIndex]) return;
                
                const initialSlide = slides[activeIndex];
                const initialContent = initialSlide.querySelector(".cs-entry__content");
                
                if (initialContent) {
                    initialContent.style.transform = "none";
                }
            } catch (error) {
                console.error("Error in handleInit:", error);
            }
        };

        // Xử lý khi slide thay đổi
        const handleSlideChange = () => {
            try {
                if (!swiper || typeof swiper.activeIndex !== 'number') return;
                
                const activeIndex = swiper.activeIndex;
                const slides = swiper.slides;
                
                if (!slides || !slides[activeIndex]) return;
                
                const currentSlide = slides[activeIndex];
                const currentContent = currentSlide.querySelector(".cs-entry__content");
                
                if (!currentContent) return;
                
                // Reset transform của tất cả các entry content
                const allContents = container.querySelectorAll(".cs-entry__content");
                if (allContents && allContents.length) {
                    allContents.forEach((content) => {
                        if (content === currentContent) {
                            content.style.transform = "none";
                        }
                    });
                }
            } catch (error) {
                console.error("Error in handleSlideChange:", error);
            }
        };

        // Đăng ký các sự kiện
        swiper.on("init", handleInit);
        swiper.on("slideChange", handleSlideChange);
        
        // Nếu swiper đã khởi tạo, chạy handleInit
        if (swiper.initialized) {
            handleInit();
        }

        // Cleanup
        return () => {
            if (swiper) {
                swiper.off("init", handleInit);
                swiper.off("slideChange", handleSlideChange);
            }
        };
    }, [swiper]); // Chỉ chạy lại khi swiper thay đổi

    // Cấu hình Swiper options
    const swiperOptions = {
        modules: [Pagination, Navigation, Parallax, EffectFade, EffectCreative],
        slidesPerView: 1,
        speed: 1000,
        loop: loop,
        parallax: true,
        effect: effect,
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
        onSwiper: (swiperInstance) => {
            setSwiper(swiperInstance);
        },
    };

    // Thêm cấu hình riêng cho từng effect
    if (effect === "fade") {
        swiperOptions.fadeEffect = { crossFade: true };
    }

    if (effect === "creative") {
        swiperOptions.creativeEffect = {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        };
    }

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
                        <i className="icon-angle-left-solid"></i>
                    </div>
                    <div className="sw-dots style-default sw-pagination"></div>
                    <div className="sw-button style-1 sw-single-next">
                        <i className="icon-angle-right-solid"></i>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default SlideHero;