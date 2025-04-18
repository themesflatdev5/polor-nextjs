import Link from "next/link";
import React from "react";

export default function CTA() {
    return (
        <div className="section tf-spacing-6">
            <div className="tf-container">
                <div className="box-text">
                    <div className="heading-section text-center mb_42">
                        <h1 className="heading-title mb_21 wow animate__fadeInUp animate__animated"
                                    data-wow-delay="0s">
                            Ready to be a
                            <span className="fw-6 fst-italic mr_11">
                                Change-Maker ?
                            </span>
                            Let’s Talk!
                        </h1>
                        <p
                            className="text-body-2 text_mono-gray-5 wow animate__fadeInUp animate__animated"
                            data-wow-delay="0.1s"
                        >
                            Are you the catalyst for change? Let's discuss your
                            vision. Let's build <br /> a better future, together
                            !
                        </p>
                    </div>
                    <Link
                        className="tf-btn animate-hover-btn mx-auto btn-px-40 wow animate__fadeInUp animate__animated"
                        data-wow-delay=".1s"
                        href={"/contact"}
                    >
                        <span>Contact for Work</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
