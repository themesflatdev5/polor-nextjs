import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Newsletter2() {
    return (
        <div className="section-newsletter style-2 tf-spacing-5 section">
            <div className="tf-container-4">
                <div className="d-grid gap_24 wrap-ins">
                    <div className="tf-grid-layout tf-col-2 lg-col-4">
                        <div className="hover-image-2">
                            <a className="image-rotate" href="#">
                                <Image
                                    alt="newsletter"
                                    src="/assets/images/section/newsletter-7.jpg"
                                    width={315}
                                    height={0}
                                />
                            </a>
                        </div>
                        <div className="hover-image-2">
                            <a className="image-rotate" href="#">
                                <Image
                                    alt="newsletter"
                                    src="/assets/images/section/newsletter-2.jpg"
                                    width={315}
                                    height={0}
                                />
                            </a>
                        </div>
                        <div className="hover-image-2">
                            <a className="image-rotate" href="#">
                                <Image
                                    alt="newsletter"
                                    src="/assets/images/section/newsletter-6.jpg"
                                    width={315}
                                    height={0}
                                />
                            </a>
                        </div>
                        <div className="box-item">
                            <div>
                                <div className="icon">
                                    <i className="icon-instagram" />
                                </div>
                                <h6 className="title-box fw-5">
                                    Follow My Instagram Channel
                                </h6>
                            </div>
                            <a className="tf-btn style-2" href="#">
                                <span className="text-body-1 fw-6">@polor</span>
                            </a>
                        </div>
                    </div>
                    <div className="tf-grid-layout lg-col-2">
                        <div className="box-item v2">
                            <h6 className="title-box">
                                Wanna <span className="fw-6">Contact me?</span>{" "}
                                <br />
                                Let’s brainstorm{" "}
                                <span className="fw-6 ">our idea</span>{" "}
                            </h6>
                            <Link
                                className="tf-btn-link style-2"
                                href={"/contact"}
                            >
                                <span className="fw-6">Contact Me</span>
                                <i className="icon-angle-right-solid" />
                            </Link>
                            <div className="shape">
                                <Image
                                    alt="shape"
                                    src="/assets/images/shape/shape-1.png"
                                    width={315}
                                    height={0}
                                />
                            </div>
                        </div>
                        <div className="tf-grid-layout tf-col-2">
                            <div className="hover-image-2">
                                <a className="image-rotate" href="#">
                                    <Image
                                        alt="newsletter"
                                        src="/assets/images/section/newsletter-4.jpg"
                                    width={315}
                                    height={0}
                                    />
                                </a>
                            </div>
                            <div className="hover-image-2">
                                <a className="image-rotate" href="#">
                                    <Image
                                        alt="newsletter"
                                        src="/assets/images/section/newsletter-5.jpg"
                                    width={315}
                                    height={0}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap-form">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-section ">
                                <div className="text-body-2 text_mono-gray-5 mb_8">
                                    My Newsletter
                                </div>
                                <h4 className="fw-6">
                                    Subscribe our newsletter to get the latest
                                    posts delivered right to your email.
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form
                                acceptCharset="utf-8"
                                action="#"
                                className="form-newsletter style-2"
                                method="post"
                            >
                                <div className="wrap gap_16">
                                    <fieldset className=" position-relative">
                                        <input
                                            className="tb-my-input style-border"
                                            name="email"
                                            placeholder="Enter Your Email"
                                            required
                                            type="email"
                                        />
                                    </fieldset>
                                    <button
                                        className="tf-btn animate-hover-btn btn-submit-comment btn-primary2"
                                        name="submit"
                                        type="submit"
                                    >
                                        <span className="text-body-1 fw-6">
                                            Subcribe
                                        </span>
                                    </button>
                                </div>
                                <div className="box-fieldset-item">
                                    <fieldset className="fieldset-item d-flex  gap_12">
                                        <input
                                            className="tf-check type-cycle"
                                            id="note"
                                            type="checkbox"
                                        />
                                        <label
                                            className="text_mono-gray-5 text-body-3"
                                            htmlFor="note"
                                        >
                                            By checking this box, you
                                            acknowledge that you have read and
                                            agreed to our Terms and Conditions
                                            also the Privacy Policy,
                                        </label>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
