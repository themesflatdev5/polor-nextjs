"use client";
import React from "react";
import { useEffect } from "react";

export default function BackToTop() {
    useEffect(() => {
        const wrap = document.querySelector(".progress-wrap");
        const path = wrap?.querySelector("path");
        const footer = document.querySelector(".footer-go-top");

        if (!wrap || !path || !footer) return;

        const length = path.getTotalLength();

        path.style.strokeDasharray = `${length} ${length}`;
        path.style.strokeDashoffset = length;

        const updateProgress = () => {
            const scroll = window.scrollY;
            const height =
                document.documentElement.scrollHeight - window.innerHeight;
            path.style.strokeDashoffset = length - (scroll * length) / height;
        };

        const checkVisibility = () => {
            const scroll = window.scrollY;
            const footerTop =
                footer.getBoundingClientRect().top + window.scrollY;
            const winHeight = window.innerHeight;

            const visible =
                scroll > 200 && scroll + winHeight < footerTop - 350;
            wrap.classList.toggle("active-progress", visible);
        };

        const handleScroll = () => {
            updateProgress();
            checkVisibility();
        };

        handleScroll(); // init call

        window.addEventListener("scroll", handleScroll);

        const scrollToTop = (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        wrap.addEventListener("click", scrollToTop);
        footer.addEventListener("click", scrollToTop);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            wrap.removeEventListener("click", scrollToTop);
            footer.removeEventListener("click", scrollToTop);
        };
    }, []);
    return (
        <div className="progress-wrap">
            <svg
                className="progress-circle svg-content"
                height="100%"
                viewBox="-1 -1 102 102"
                width="100%"
            >
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        strokeDasharray: "307.919, 307.919",
                        strokeDashoffset: "307.919",
                        transition: "stroke-dashoffset 10ms linear",
                    }}
                ></path>
            </svg>
        </div>
    );
}
