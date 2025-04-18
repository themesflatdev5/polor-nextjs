import SwiperLayout from "@/components/common/SlideLayout";
import { author } from "@/data/author";
import Link from "next/link";
import React from "react";

export default function Portfolio() {
    return (
        <div className="section  tf-spacing-4">
            <div className="tf-container">
                <div className="box-portfolio">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left">
                                <div className="heading mb_75">
                                    <div className="text-body-2 mb_28 sub split-text effect-right">
                                        My Portfolio
                                    </div>
                                    <div className="text-body-5 title wow animate__fadeInUp animate__animated"
                                    data-wow-delay="0s">
                                        Polor Welcomes to ultimate source for
                                        fresh perspectives! Explore
                                        <span className="fw-6">
                                            curated content
                                        </span>
                                        to enlighten,
                                        <span className="fw-6"> entertain</span>
                                        and
                                        <span className="fw-6">engage</span>
                                        global readers.
                                    </div>
                                </div>
                                <div
                                    className="bot d-flex align-items-center gap_24 wow animate__fadeInUp animate__animated"
                                    data-wow-delay=".1s"
                                >
                                    <div className="text-body-5 title">
                                        Best of
                                        <span className="fw-6"> My Work</span>
                                    </div>
                                    <span className="line" />
                                    <Link
                                        className="tf-btn animate-hover-btn btn-px-35"
                                        href={"/category-grid"}
                                    >
                                        <span> Explore Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right">
                                <div className="text-body-2 mb_42 sub">
                                    My Experience
                                </div>
                                <SwiperLayout
                                    preview={2.15}
                                    tablet={1.9}
                                    mobile={1.2}
                                    spacingLg={16}
                                    spacingMd={12}
                                    spacing={12}
                                    mouseScroll={true}
                                    paginationType={"progressbar"}
                                    showNavigation={false}
                                >
                                    {author.experience.map((item, i) => (
                                        <div
                                            className="experience-item style-1"
                                            key={i}
                                        >
                                            <div className="date">
                                                {item.time}
                                            </div>
                                            <div className="content">
                                                <div className="text-body-2 text_mono-gray-5">
                                                    {item.sub}
                                                </div>
                                                <h6 className="fw-6">
                                                    {item.title}
                                                </h6>
                                            </div>
                                        </div>
                                    ))}
                                </SwiperLayout>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
