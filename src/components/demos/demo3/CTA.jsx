import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CTA() {
    return (
        <div className="section-cta text-center position-relative tf-spacing-10">
            <div className="tf-container">
                <div className="icon">
                    <Image
                        alt="icon"
                        src="/assets/images/shape/decor.svg"
                        width={44}
                        height={44}
                    />
                </div>
                <div className="content">
                    <h1 className="title fw-6 mt_39 split-text split-lines-rotation-x">
                        Your World, My Support
                    </h1>
                    <ul
                        className="list mb_25 flex-wrap wow animate__fadeInUp animate__animated"
                        data-wow-delay="0s"
                    >
                        <li>
                            <Link
                                className="text-body-1 "
                                href={"/categories-grid"}
                            >
                                Web Design
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-body-1"
                                href={"/categories-grid"}
                            >
                                Mobile App
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-body-1 "
                                href={"/categories-grid"}
                            >
                                Motion Design
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-body-1  "
                                href={"/categories-grid"}
                            >
                                Visual Design
                            </Link>
                        </li>
                    </ul>
                    <p
                        className="text-body-1 wow animate__fadeInUp animate__animated"
                        data-wow-delay="0s"
                    >
                        Are you the catalyst for change? Let's discuss your
                        vision. Let's build a
                        <br /> better future, together !
                    </p>
                </div>
                <Link
                    className="tf-btn animate-hover-btn mx-auto wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                    href={"/contact"}
                >
                    <span>Contact for Work</span>
                </Link>
                <div className="icon">
                    <Image
                        alt="icon"
                        src="/assets/images/shape/decor.svg"
                        width={44}
                        height={44}
                    />
                </div>
                <div
                    className="shape position-absolute scroll-tranform "
                    data-distance="20%"
                >
                    <Image
                        alt="shape"
                        src="/assets/images/shape/earth.png"
                        width={882.21}
                        height={0}
                    />
                </div>
            </div>
        </div>
    );
}
