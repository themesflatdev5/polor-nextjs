import Image from "next/image";
import React from "react";
import { author } from "@/data/author";
import Newsletter from "../common/Newsletter";

export default function Contact() {
    return (
        <>
            <div className="section-contact">
                <div className="tf-container-2">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="box-author mb_9">
                                <div className="avatar">
                                    <Image
                                        alt="avatar"
                                        className="lazyload "
                                        src={author.avatar}
                                        width={256}
                                        height={256}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="name fw-6">{author.name}</h4>
                                    <a
                                        className="hover-line-text text-body-2 text_mono-gray-5"
                                        href="#"
                                    >
                                        {author.email}
                                    </a>
                                </div>
                            </div>
                            <div className="box-social text-center">
                                <div className="text-body-2 fw-6 mb_34">
                                    Social Network
                                </div>
                                <div className="tf-social style-1 d-flex justify-content-center gap_16 ">
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
                        <div className="col-lg-9">
                            <form className="form-contact style-2">
                                <div className="text-body-1 fw-6 mb_1">
                                    Fill the form to get started
                                </div>
                                <p className="text-body-2 mb_43">
                                    Your email address will not be published.
                                    Required all fields are filled*
                                </p>
                                <div className="wrap">
                                    <div className="tf-grid-layout md-col-2 mb_12">
                                        <fieldset className="">
                                            <input
                                                aria-required="true"
                                                className=""
                                                defaultValue=""
                                                name="text"
                                                placeholder="Name"
                                                required
                                                tabIndex="2"
                                                type="text"
                                            />
                                        </fieldset>
                                        <fieldset className="">
                                            <input
                                                aria-required="true"
                                                className=""
                                                defaultValue=""
                                                name="email"
                                                placeholder="Enter Your Email"
                                                required
                                                tabIndex="2"
                                                type="email"
                                            />
                                        </fieldset>
                                    </div>
                                    <fieldset className="mb_12">
                                        <textarea
                                            aria-required="true"
                                            className=""
                                            placeholder="Your Comment"
                                            required
                                            rows="4"
                                            tabIndex="2"
                                        />
                                    </fieldset>
                                </div>
                                <div className="button-submit mt_49">
                                    <button
                                        className="tf-btn animate-hover-btn w-full "
                                        type="submit"
                                    >
                                        <span> Submit Comment</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <Newsletter className="tf-spacing-1" />
        </>
    );
}
