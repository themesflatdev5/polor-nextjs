"use client";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import { useState, useRef, useEffect } from "react";
import logo from "@assets/images/logo/polor.png";

export default function Header2({ handleShowMb }) {
    const parentClass = "header style-1 ";
    const [isFixed, setIsFixed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);
    const formPopUp = useRef(null);

    const togglePopup = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target) &&
                formPopUp.current &&
                !formPopUp.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const header = document.querySelector(".header-fixed");
        if (!header) return;
        const handleScroll = () => {
            if (window.scrollY >= 350) {
                header.classList.add("is-fixed");
            } else {
                header.classList.remove("is-fixed");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
        <header className={`${parentClass} header-fixed`}>
            <div className="tf-container">
                <div className="header-inner ">
                    <div className="header-inner-wrap">
                        <div className="main-logo text-start">
                            <Link href={`/`} className="site-logo">
                                <Image
                                    alt="logo"
                                    width={111}
                                    height={0}
                                    src={logo}
                                />
                            </Link>
                        </div>
                        <nav className="main-menu hide-lg">
                            <ul className="navigation ">
                                <Nav />
                            </ul>
                        </nav>
                        <div className="header-right">
                            <div ref={formPopUp} className="popup-show-form">
                                <button
                                    className="find btn-show"
                                    onClick={togglePopup}
                                >
                                    <i className="icon-search-solid" />
                                    <span className="bg-effect" />
                                </button>

                                <div
                                    ref={popupRef}
                                    className={`popup-show popup-form-search  ${
                                        isOpen ? "show" : ""
                                    }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    <div
                                        className="close-form"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <i className="icon-times-solid" />
                                    </div>
                                    <div className="sub-heading fw-6 mb-3">
                                        What are You Looking For?
                                    </div>
                                    <form className="form-search d-flex gap-3 style-1">
                                        <input
                                            className="border p-2"
                                            name="text"
                                            placeholder="Search..."
                                            required
                                            type="text"
                                        />
                                        <button
                                            className="tf-btn animate-hover-btn"
                                            type="submit"
                                        >
                                            <span>Search</span>
                                        </button>
                                    </form>
                                    <ul className="wrap-tag d-flex align-items-center flex-wrap gap-3 mt-3">
                                        {[
                                            "Travel",
                                            "Fashion & Style",
                                            "Photograph",
                                            "Design",
                                            "Relationships",
                                        ].map((tag) => (
                                            <li
                                                key={tag}
                                                className="tag-item d-flex align-items-center gap-2"
                                            >
                                                <a
                                                    className="text-caption text-black"
                                                    href="/category-grid"
                                                >
                                                    {tag}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <Link
                                className="tf-btn btn-white animate-hover-btn hide-lg"
                                href="#"
                            >
                                <span>Buy Now</span>
                            </Link>
                            <div
                                className="mobile-button"
                                onClick={handleShowMb}
                            >
                                <div className="burger">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header className={`${parentClass} `}>
            <div className="tf-container">
                <div className="header-inner ">
                    <div className="header-inner-wrap">
                        <div className="main-logo text-start">
                            <Link href={`/`} className="site-logo">
                                <Image
                                    alt="logo"
                                    width={111}
                                    height={0}
                                    src={logo}
                                />
                            </Link>
                        </div>
                        <nav className="main-menu hide-lg">
                            <ul className="navigation ">
                                <Nav />
                            </ul>
                        </nav>
                        <div className="header-right">
                            <div ref={formPopUp} className="popup-show-form">
                                <button
                                    className="find btn-show"
                                    onClick={togglePopup}
                                >
                                    <i className="icon-search-solid" />
                                    <span className="bg-effect" />
                                </button>

                                <div
                                    ref={popupRef}
                                    className={`popup-show popup-form-search  ${
                                        isOpen ? "show" : ""
                                    }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    <div
                                        className="close-form"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <i className="icon-times-solid" />
                                    </div>
                                    <div className="sub-heading fw-6 mb-3">
                                        What are You Looking For?
                                    </div>
                                    <form className="form-search d-flex gap-3 style-1">
                                        <input
                                            className="border"
                                            name="text"
                                            placeholder="Search..."
                                            required
                                            type="text"
                                        />
                                        <button
                                            className="tf-btn animate-hover-btn"
                                            type="submit"
                                        >
                                            <span>Search</span>
                                        </button>
                                    </form>
                                    <ul className="wrap-tag d-flex align-items-center flex-wrap gap-3 mt-3">
                                        {[
                                            "Travel",
                                            "Fashion & Style",
                                            "Photograph",
                                            "Design",
                                            "Relationships",
                                        ].map((tag) => (
                                            <li
                                                key={tag}
                                                className="tag-item d-flex align-items-center gap-2"
                                            >
                                                <a
                                                    className="text-caption text-black"
                                                    href="/category-grid"
                                                >
                                                    {tag}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <Link
                                className="tf-btn btn-white animate-hover-btn hide-lg"
                                href="#"
                            >
                                <span>Buy Now</span>
                            </Link>
                            <div
                                className="mobile-button"
                                onClick={handleShowMb}
                            >
                                <div className="burger">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}
