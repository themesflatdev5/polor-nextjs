"use client";
import Image from "next/image";
import { author } from "@/data/author";
import React from "react";
import { useEffect, useRef, useState } from "react";

export default function LeftBar() {
    const sections = [
        { id: "about", label: "About Me" },
        { id: "latest-post", label: "Latest Post" },
        { id: "featured", label: "Featured" },
        { id: "popular", label: "Popular" },
        { id: "portfolio", label: "My Portfolio" },
    ];
    const sectionRefs = useRef({});
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        sections.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) sectionRefs.current[id] = section;
        });

        const handleScroll = () => {
            const scrollY = window.scrollY;
            let current = "";
            for (let { id } of sections) {
                const section = sectionRefs.current[id];
                if (section) {
                    const offsetTop = section.offsetTop;
                    const height = section.offsetHeight;
                    if (
                        scrollY >= offsetTop - 200 &&
                        scrollY < offsetTop + height - 200
                    ) {
                        current = id;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const section = sectionRefs.current[id];
        console.log("zo");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        document.querySelector(".leftBar")?.classList.remove("show");
        document.querySelector("#overlay-blog")?.classList.remove("show");
        document.body.classList.remove("no-scroll");
    };

    return (
        <div className="leftBar ">
            <div className="canvas-wrapper ">
                <div className="wrapper">
                    <div className="author-info">
                        <div className="logo">
                            <Image
                                alt="logo"
                                src="/assets/images/logo/logo.png"
                                width={137}
                                height={0}
                            />
                        </div>
                        <div className="box-author style-1">
                            <div className="avatar mb_15">
                                <Image
                                    alt="avatar"
                                    className="lazyload "
                                    src={author.avatar}
                                    width={189}
                                    height={0}
                                />
                            </div>
                            <div className="content mb_43">
                                <h4 className="name fw-6 mb_9">
                                    {author.name}
                                </h4>
                                <div className="text-body-3 text_mono-gray-7">
                                    {author.descSort2}
                                </div>
                            </div>
                            <div className="tf-social style-2 d-flex justify-content-center gap_24 ">
                                <a
                                    className="d-flex align-items-center gap_6 "
                                    href="#"
                                >
                                    <i className="icon-facebook-f fb" />
                                    <span className="text-caption">53K</span>
                                </a>
                                <a
                                    className="d-flex align-items-center gap_6 "
                                    href="#"
                                >
                                    <i className="icon-instagram ins" />
                                    <span className="text-caption">51K</span>
                                </a>
                                <a
                                    className="d-flex align-items-center gap_6 "
                                    href="#"
                                >
                                    <i className="icon-pinterest pin" />
                                    <span className="text-caption">114K</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="canvas-body">
                        <ul className="categories-list " id="navbar">
                            {sections.map(({ id, label }, i) => (
                                <li className="h5" key={i}>
                                    <a
                                        className={`d-flex align-items-center justify-content-between nav_link ${
                                            activeSection === id ? "active" : ""
                                        }`}
                                        href={`#${id}`}
                                        onClick={(e) => handleClick(e, id)}
                                    >
                                        {label}
                                        <i className="icon-long-arrow-alt-right-solid" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
