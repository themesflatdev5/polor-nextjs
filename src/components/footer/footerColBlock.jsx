"use client";

import React from "react";
import { footerData } from "@/data/footerdata";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function footerColBlock() {
    useEffect(() => {
        const headings = document.querySelectorAll(".footer-heading-mobile");

        const toggleOpen = (event) => {
            const parent = event.target.closest(".footer-col-block");
            const content = parent.querySelector(".tf-collapse-content");
            if (parent.classList.contains("open")) {
                parent.classList.remove("open");
                content.style.height = "0px";
            } else {
                parent.classList.add("open");
                content.style.height = content.scrollHeight + 10 + "px";
            }
        };

        headings.forEach((heading) => {
            heading.addEventListener("click", toggleOpen);
        });

        // Clean up event listeners when the component unmounts
        return () => {
            headings.forEach((heading) => {
                heading.removeEventListener("click", toggleOpen);
            });
        };
    }, []);
    return (
        <div className="right">
            {footerData.map((column, index) => (
                <div className="footer-col-block categories" key={index}>
                    <h6 className="footer-heading  footer-heading-mobile fw-6">
                        {column.title}
                    </h6>
                    <div className="tf-collapse-content">
                        <ul className="footer-menu-list d-grid gap_12">
                            {column.links.map((link, linkIndex) => (
                                <li
                                    className="text-body-2 text_mono-gray-6"
                                    key={linkIndex}
                                >
                                    {link.href.startsWith("/") ? (
                                        <Link
                                            className="text_mono-gray-5 hover-line-text footer-menu_item link-black"
                                            href={link.href}
                                        >
                                            {link.text}
                                        </Link>
                                    ) : (
                                        <a
                                            className="text_mono-gray-5 hover-line-text footer-menu_item link-black"
                                            href={link.href}
                                        >
                                            {link.text}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
