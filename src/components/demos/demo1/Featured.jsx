"use client";
import React from "react";
import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import Image from "next/image";
import { categories4 } from "@/data/categories";
import Link from "next/link";

export default function Featured() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="section-feature style-1 ">
            <div className="tf-container">
                <div className="heading-section style-border d-flex justify-content-between mb_12">
                    <div className="sub-heading fw-6 split-text effect-rotate ">
                        Featured
                    </div>
                    <a className="tf-btn-link " href="category-grid.html">
                        <span className="text-body-1 fw-6 ">Discover more</span>
                        <i className="icon-angle-right-solid" />
                    </a>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div
                            className="category-item style-1 hover-image wow animate__fadeInLeft animate__animated"
                            data-wow-delay="0s"
                            data-wow-duration="2s"
                        >
                            <div className="img-style ">
                                <Image
                                    alt="category"
                                    className="lazyload "
                                    src="/assets/images/categories/category-item-24.jpg"
                                    width={1212}
                                    height={0}
                                />
                                <button
                                    className="popup-video"
                                    onClick={() => setIsOpen(true)}
                                >
                                    <i className="icon-play-filled" />
                                </button>
                            </div>
                            <div className="content">
                                <div>
                                    <a
                                        className="category-tag text-caption  text_white"
                                        href="category-grid.html"
                                    >
                                        Design
                                    </a>
                                    <h2 className="title letter-spacing-2 fw-6 text_white">
                                        {" "}
                                        <a
                                            className="hover-line-text"
                                            href="single-post.html"
                                        >
                                            Post-modernist Apartment Design That
                                            Combines Bold Colors, Art, and
                                            Geometric Shapes
                                        </a>
                                    </h2>
                                </div>
                                <div className="category-bot d-flex align-items-center justify-content-between">
                                    <div className="credit text_white text-body-3">
                                        Aug 10, 2024{" "}
                                        <a
                                            className="hover-line-text fw-6"
                                            href="#"
                                        >
                                            by Chloe Jacobs
                                        </a>
                                    </div>
                                    <div className="comment d-flex gap_8 align-items-center text_white text-body-2 text_mono-gray-5">
                                        <i className="icon-comment-alt" />
                                        <span>52</span>
                                    </div>
                                </div>
                            </div>
                            <ModalVideo
                                setIsOpen={setIsOpen}
                                isOpen={isOpen}
                                videoId={"XHOmBV4js_E"}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div
                            className="right wow animate__fadeInRight animate__animated"
                            data-wow-delay="0s"
                            data-wow-duration="2s"
                        >
                            <div className="category-item style-default v3 hover-image-3 ">
                                <Link
                                    className="img-style mb_32 "
                                    href={`/single-post/${categories4[0].id}`}
                                >
                                    <Image
                                        alt="category"
                                        className="lazyload "
                                        src={categories4[0].imageSrc}
                                        width={504}
                                        height={0}
                                    />
                                    <Image
                                        alt="category"
                                        className="lazyload "
                                        src={categories4[0].imageSrc}
                                        width={504}
                                        height={0}
                                    />
                                    <span className="icon-play sz-2">
                                        <i className="icon-play-filled" />
                                    </span>
                                </Link>
                                <div className="content">
                                    <a
                                        className="category-tag text-caption mb_15 "
                                        href="category-grid.html"
                                    >
                                        {categories4[0].tag}
                                    </a>
                                    <h5 className="title letter-spacing-2 fw-6">
                                        <Link
                                            className="hover-line-text"
                                            href={`/single-post/${categories4[0].id}`}
                                        >
                                            {categories4[0].title}
                                        </Link>
                                    </h5>
                                    <div className="category-bot d-flex align-items-center justify-content-between">
                                        <div className="credit text-body-3">
                                            {categories4[0].date}
                                            <a
                                                className="hover-line-text fw-6 ml_5"
                                                href="#"
                                            >
                                                {categories4[0].author}
                                            </a>
                                        </div>
                                        <div className="comment d-flex gap_8 align-items-center text-body-2 text_mono-gray-5">
                                            <i className="icon-comment-alt" />
                                            <span>
                                                {categories4[0].comments}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category-item style-default v3 hover-image-3 ">
                                <div className="content">
                                    <Link
                                        className="category-tag text-caption mb_15 "
                                        href={"/category-grid"}
                                    >
                                        {categories4[1].tag}
                                    </Link>
                                    <h5 className="title letter-spacing-2 fw-6">
                                        <Link
                                            className="hover-line-text"
                                            href={`/single-post/${categories4[1].id}`}
                                        >
                                            {categories4[1].title}
                                        </Link>
                                    </h5>
                                    <div className="category-bot d-flex align-items-center justify-content-between">
                                        <div className="credit text-body-3">
                                            {categories4[1].date}
                                            <a
                                                className="hover-line-text fw-6 ml_5"
                                                href="#"
                                            >
                                                 {categories4[1].author}
                                            </a>
                                        </div>
                                        <div className="comment d-flex gap_8 align-items-center text-body-2 text_mono-gray-5">
                                            <i className="icon-comment-alt" />
                                            <span>{categories4[1].comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
