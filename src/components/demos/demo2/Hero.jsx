import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero({handleShowMb}) {
    return (
        <div className="hero-banner style-2 section" id="about">
            <div className="tf-container-4">
                <div className="heading-top">
                    <div className="text-body-1">Good morning!</div>
                    <div className="wrap align-items-center">
                        <form className="form-search style-2 ">
                            <button className="" type="submit">
                                <i className="icon-search-solid" />
                            </button>
                            <fieldset className="text">
                                <input
                                    aria-required="true"
                                    defaultValue=""
                                    name="search"
                                    placeholder="Search for posts"
                                    required
                                    tabIndex="0"
                                    type="text"
                                />
                            </fieldset>
                        </form>
                        <Link className="tf-btn-link sm-hide" href={'/contact'}>
                            <span className="text-body-2  fw-6 ">
                                Contact Me
                            </span>
                            <i className="icon-angle-right-solid" />
                        </Link>
                        <div
                            className="mobile-button d-flex align-items-center gap_4"
                            onClick={handleShowMb}
                        >
                            <div className="burger">
                                <span />
                                <span />
                                <span />
                            </div>
                            <div className="text-menu">
                                <a className="toggle splitting" href="#">
                                    <span className="text" data-splitting="">
                                        Menu
                                    </span>
                                    <span className="text" data-splitting="">
                                        Open
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-7 col-sm-8">
                            <div className="left">
                                <h1 className="fw-6 heading-title mb_16 wow animate__fadeInUp animate__animated"
                                    data-wow-delay="0s">
                                    Welcome to my Blog!
                                </h1>
                                <p className="text-body-2 text_mono-gray-7 mb_42 wow animate__fadeInUp animate__animated"
                                    data-wow-delay=".1s">
                                    I'm Chloe Jacobs, a believer in the power of
                                    positivity. Join me as I share <br /> tips,
                                    tricks, and stories to help you live your
                                    best life.
                                </p>
                                <Link
                                    className="tf-btn animate-hover-btn wow animate__fadeInUp animate__animated"
                                    data-wow-delay=".2s"
                                    href={"/about"}
                                >
                                    <span>More About Me</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-4">
                            <div className="service ">
                                <div className="sub-heading fw-5 title text_mono-gray-9">
                                    And also I’m
                                </div>
                                <div className="list d-grid gap_2">
                                    <a
                                        className="tf-btn-link text-body-3 text_mono-gray-7"
                                        href="#"
                                    >
                                        <span>Product Designer</span>
                                    </a>
                                    <a
                                        className="tf-btn-link text-body-3 text_mono-gray-7"
                                        href="#"
                                    >
                                        <span>Website Designer</span>
                                    </a>
                                    <a
                                        className="tf-btn-link text-body-3 text_mono-gray-7"
                                        href="#"
                                    >
                                        <span>Motion Design</span>
                                    </a>
                                </div>
                                <Link
                                    className="link-help text-body-3"
                                    href={"/contact"}
                                >
                                    What can i help you?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bot ">
                    <div className="row align-items-end">
                        <div className="col-xl-9 col-lg-8 col-md-7 col-4">
                            <div className="d-flex align-items-center gap_4 text-body-3 text_mono-gray-7">
                                (Scroll Down)
                                <i className="icon-long-arrow-alt-down-solid" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-8">
                            <div className="wrap-logo d-flex ">
                                <Image
                                    alt="logo"
                                    src="/assets/images/logo/behance-1.png"
                                    width={60}
                                    height={0}
                                />
                                <Image
                                    alt="logo"
                                    src="/assets/images/logo/ux.png"
                                    width={57}
                                    height={57}
                                />
                                <Image alt="logo" src="/assets/images/logo/kyoto.png" width={50} height={0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
