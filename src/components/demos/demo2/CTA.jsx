import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CTA() {
    return (
        <div className="tf-container-4 ">
            <div className="section-cta style-1 text-center position-relative tf-spacing-3">
                <div className="icon">
                    <Image
                        alt="icon"
                        src="/assets/images/shape/decor.svg"
                        width={20.76}
                        height={20.76}
                    />
                </div>
                <div className="content">
                    <div
                        className="title text-display-3 fw-6 wow animate__fadeInUp animate__animated"
                        data-wow-delay="0s"
                    >
                        Wanna Contact? Let’s go!
                    </div>
                    <p
                        className="text-body-1 text_mono-gray-9 description  wow animate__fadeInUp animate__animated"
                        data-wow-delay="0s"
                    >
                        Seven Women on Choosing to Move to a Different Country.
                        Don’s Miss <br /> Daily Inspiration and Last Updates
                    </p>
                    <ul
                        className="list flex-wrap wow animate__fadeInUp animate__animated"
                        data-wow-delay="0s"
                    >
                        <li>
                            <Link
                                className="text-body-1 bg-color-1"
                                href={"/categories-grid"}
                            >
                                Web Design
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-body-1 bg-color-2"
                                href={"/categories-grid"}
                            >
                                Mobile App
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-body-1 bg-color-3"
                                href={"/categories-grid"}
                            >
                                Motion Design
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-body-1 bg-color-4"
                                href={"/categories-grid"}
                            >
                                Visual Design
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="icon">
                    <Image
                        alt="icon"
                        src="/assets/images/shape/decor.svg"
                        width={20.76}
                        height={20.76}
                    />
                </div>
            </div>
        </div>
    );
}
