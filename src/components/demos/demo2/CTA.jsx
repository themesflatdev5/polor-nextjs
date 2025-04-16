import Link from "next/link";
import React from "react";

export default function CTA() {
    return (
        <div className="tf-container-4 ">
            <div className="section-cta style-1 text-center position-relative tf-spacing-3">
                <div className="icon">
                    <img alt="icon" src="/assets/images/shape/decor.svg" />
                </div>
                <div className="content">
                    <div className="title text-display-3 fw-6 split-text split-lines-rotation-x">
                        Wanna Contact? Let’s go!
                    </div>
                    <p className="text-body-1 text_mono-gray-9 description  split-text split-lines-transform">
                        Seven Women on Choosing to Move to a Different Country.
                        Don’s Miss <br /> Daily Inspiration and Last Updates
                    </p>
                    <ul className="list flex-wrap ">
                        <li>
                            <Link
                                className="text-body-1 bg-color-1"
                                href={'/categories-grid'}
                            >
                                Web Design
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-body-1 bg-color-2"
                                href={'/categories-grid'}
                            >
                                Mobile App
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-body-1 bg-color-3"
                                href={'/categories-grid'}
                            >
                                Motion Design
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-body-1 bg-color-4"
                                href={'/categories-grid'}
                            >
                                Visual Design
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="icon">
                    <img alt="icon" src="/assets/images/shape/decor.svg" />
                </div>
            </div>
        </div>
    );
}
