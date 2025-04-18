"use Client";

import React from "react";
import { author } from "@/data/author";
import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div className="section-about style-2 tf-spacing-8">
            <div className="tf-container">
                <div className="heading-section text-center mb_29">
                    <div
                        className="sub-heading-section sub-heading fw-6 justify-content-center mb_21 wow animate__fadeInUp animate__animated"
                        data-wow-delay="0s"
                    >
                        About Me
                    </div>
                    <h4
                        className="wow animate__fadeInUp animate__animated"
                        data-wow-delay="0s"
                    >
                        Hi - I’m <span className="fw-6">{author.name}</span> -
                        the creator of Polor. Welcome to my <br /> world! Have a
                        good time when exploring
                    </h4>
                </div>
                <div
                    className="tf-social style-1 d-flex align-items-center justify-content-center gap_16 mb_40 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                >
                    <a href="#">
                        <i className="icon-facebook-f fb" />
                    </a>
                    <a href="#">
                        <i className="icon-instagram ins" />
                    </a>
                    <a href="#">
                        <i className="icon-pinterest pin" />
                    </a>
                    <a href="#">
                        <i className="icon-twitter-x x" />
                    </a>
                </div>
                <Link
                    className="tf-btn animate-hover-btn mx-auto height-1 mb_48 w-2 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                    href={"/about"}
                >
                    <span>Get In Touch</span>
                    <i className="icon-angle-right-solid" />
                </Link>
                <div
                    className="item-sign text-center mb_47 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                >
                    <Image
                        alt="sign"
                        src={author.sign}
                        width={201}
                        height={0}
                    />
                </div>
            </div>
            <div className="tf-container-3">
                <div className="wrap-award">
                    <div
                        className="item-1 scrolling-effect effectBounceUp"
                        data-delay=".6"
                        data-wow-duration="2s"
                    >
                        <div className="awards-item style-logo style-1 text-center ">
                            <div className="logo mb_34">
                                <Image
                                    alt="logo"
                                    src="/assets/images/logo/goodfirms.png"
                                    width={60.06}
                                    height={0}
                                />
                            </div>
                            <div className="text-body-1 fw-6 description">
                                4.8/5 Star Rating on <br />
                                Goodfirms
                            </div>
                        </div>
                    </div>
                    <div
                        className="item-2 scrolling-effect effectBounceUp"
                        data-delay=".3s"
                        data-wow-duration="2s"
                    >
                        <div className="awards-item style-1 text-center center ">
                            <div className="number mb_1">23+</div>
                            <p className="sub text_mono-gray-3 mb_9">
                                Mastered Skills
                            </p>
                            <div className="text-body-1 fw-6 description">
                                Mastered skills in <br /> Design, Marketing
                            </div>
                        </div>
                    </div>
                    <div
                        className="item-3 scrolling-effect effectBounceUp"
                        data-delay="0s"
                        data-wow-duration="2s"
                    >
                        <div className="avatar">
                            <div className="logo">
                                <Image
                                    alt="logo"
                                    src={author.avatar}
                                    width={343.8}
                                    height={0}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="item-4 scrolling-effect effectBounceUp"
                        data-delay=".3s"
                        data-wow-duration="2s"
                    >
                        <div className="awards-item style-1 text-center center ">
                            <div className="number mb_1">5+</div>
                            <p className="sub text_mono-gray-3 mb_9">
                                Years Experiences
                            </p>
                            <div className="text-body-1 fw-6 description">
                                Experience in <br /> Design
                            </div>
                        </div>
                    </div>
                    <div
                        className="item-5 scrolling-effect effectBounceUp"
                        data-delay=".6s"
                        data-wow-duration="2s"
                    >
                        <div className="awards-item style-logo style-1 text-center ">
                            <div className="logo mb_34">
                                <Image
                                    alt="logo"
                                    src="/assets/images/logo/behance.png"
                                    width={89.92}
                                    height={0}
                                />
                            </div>
                            <div className="text-body-1 fw-6 description">
                                Top 20 Global Team <br /> on Behance
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
