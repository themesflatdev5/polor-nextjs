"use client";
import Image from "next/image";
import React from "react";
import { useAuthor } from "../../context/AuthorContext";

export default function introduction() {
    const author = useAuthor();
    return (
        <>
            <div className="about-introduction">
                <div className="heading-title">
                    <div className="sub-heading fw-6">Introduction</div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="wrap-infor">
                            <div className="box-author">
                                <div className="avatar">
                                    <Image
                                        alt="avatar"
                                        className="lazyload "
                                        src={author.avatar}
                                        width={256}
                                        height={256}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="box-social text-center">
                                <div className="text-body-2 fw-6 mb_19">
                                    Social Network
                                </div>
                                <div className="tf-social d-flex justify-content-center gap_16 ">
                                    <a
                                        className="d-flex align-items-center gap_6 "
                                        href="#"
                                    >
                                        <i className="icon-facebook-f fb" />{" "}
                                    </a>
                                    <a
                                        className="d-flex align-items-center gap_6 "
                                        href="#"
                                    >
                                        <i className="icon-instagram ins" />{" "}
                                    </a>
                                    <a
                                        className="d-flex align-items-center gap_6 "
                                        href="#"
                                    >
                                        <i className="icon-pinterest pin" />{" "}
                                    </a>
                                    <a
                                        className="d-flex align-items-center gap_6 "
                                        href="#"
                                    >
                                        <i className="icon-twitter-x x" />{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="tf-grid-layout md-col-2 gap_12 h-full">
                            <div className="box-about-info">
                                <div className="heading">
                                    <div className="text-body-2 fw-6 mb_7">
                                        Hey there! I am
                                    </div>
                                    <h4 className="fw-6 mb_2">{author.name}</h4>
                                    <div className="mb_29">
                                        <a
                                            className="hover-line-text text-body-2 "
                                            href="#"
                                        >
                                            {author.email}
                                        </a>
                                    </div>
                                    <p className="text-body-3 text_mono-gray-5">
                                        {author.desc}
                                    </p>
                                </div>
                                <div className="interest">
                                    <div className="text-body-2 fw-6 mb_17">
                                        Something that interest me:
                                    </div>
                                    <ul className="tag">
                                        {author.interest?.map((item, index) => (
                                            <li
                                                className="text-caption"
                                                key={index}
                                            >
                                                {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="box-about-work">
                                <div className="fw-6 text-body-2 mb_34 title">
                                    And I’m working as
                                </div>
                                <div className="d-grid gap_12">
                                    {author.working?.map((item, index) => (
                                        <div
                                            className="tf-box-icon"
                                            key={index}
                                        >
                                            <div className="icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="content">
                                                <div className="sub-heading fw-6">
                                                    {item.title}
                                                </div>
                                                <p className="text-body-3 text-body-3">
                                                    {item.year}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
