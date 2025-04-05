import React from "react";
import Image from "next/image";

export default function Comments() {
    return (
        <>
            <div className="reply-comment style-2">
                <div className="reply-comment-heading mb_46 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap_12 text-body-1 fw-6 ">
                        <i className="icon-comment-alt" />
                        Comment (06)
                    </div>
                    <div
                        aria-expanded="false"
                        className="tf-dropdown-sort"
                        data-bs-toggle="dropdown"
                        role="button"
                    >
                        <div className="btn-select">
                            <span className="text-body-3 text-sort-value">
                                Most Popular
                            </span>
                            <span className="icon icon-angle-down-solid" />
                        </div>
                        <div className="dropdown-menu">
                            <div
                                className="select-item"
                                data-sort-value="best-selling"
                            >
                                <span className="text-body-3 text-value-item">
                                    Most Popular{" "}
                                </span>
                            </div>
                            <div className="select-item" data-sort-value="a-z">
                                <span className="text-body-3 text-value-item">
                                    Newest{" "}
                                </span>
                            </div>
                            <div
                                className="select-item"
                                data-sort-value="price-low-high"
                            >
                                <span className="text-body-3 text-value-item">
                                    Oldest{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap-comment mb_47">
                    <div className="wrap-comment-item">
                        <div className="comment-item">
                            <div className="box-user d-flex align-items-center gap_12 mb_5">
                                <div className="avatar">
                                    <Image
                                        alt="avatar"
                                        src="/assets/images/avatar/avatar-1.jpg"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="content">
                                    <div className="text-caption">
                                        by{" "}
                                        <a
                                            className="fw-6 hover-line-text"
                                            href="#"
                                        >
                                            Rogan Lebron
                                        </a>
                                        , Sep 8, 2025
                                    </div>
                                </div>
                            </div>
                            <div className="comment text-body-2 text_black mb_10">
                                This blog consistently delivers exceptional
                                content that sets it apart from the rest. The
                                author's keen understanding of the latest
                                fashion and style trends
                            </div>
                            <a
                                className="btn-reply hover-line-text text-caption"
                                href="#"
                            >
                                <i className="icon-reply-solid" />
                                <span className="fw-6">Reply</span>
                            </a>
                        </div>
                        <div className="wrap-reply">
                            <div className="comment-item">
                                <div className="box-user d-flex align-items-center gap_12 mb_5">
                                    <div className="avatar">
                                        <img
                                            alt="avatar"
                                            src="/assets/images/avatar/avatar-2.jpg"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="text-caption">
                                            by{" "}
                                            <a
                                                className="fw-6 hover-line-text"
                                                href="#"
                                            >
                                                Chloe Jacobs
                                            </a>
                                            , Sep 9, 2025
                                        </div>
                                    </div>
                                </div>
                                <div className="comment text-body-2 text_black mb_10">
                                    Thank you! I’m so glad the post was helpful{" "}
                                    <br /> to you.
                                </div>
                                <a
                                    className="btn-reply hover-line-text text-caption"
                                    href="#"
                                >
                                    <i className="icon-reply-solid" />
                                    <span className="fw-6">Reply</span>
                                </a>
                            </div>
                            <div className="comment-item style-reply">
                                <div className="box-user d-flex align-items-center gap_12 mb_5">
                                    <div className="avatar">
                                        <img
                                            alt="avatar"
                                            src="/assets/images/avatar/avatar-1.jpg"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="text-caption">
                                            by{" "}
                                            <a
                                                className="fw-6 hover-line-text"
                                                href="#"
                                            >
                                                Rogan Lebron
                                            </a>
                                            , Sep 8, 2025
                                        </div>
                                    </div>
                                </div>
                                <div className="comment text-body-2 text_black mb_10">
                                    Just keep going! I’m waiting for the next
                                    post from <br /> you
                                </div>
                                <a
                                    className="btn-reply hover-line-text text-caption"
                                    href="#"
                                >
                                    <i className="icon-reply-solid" />
                                    <span className="fw-6">Reply</span>
                                </a>
                            </div>
                            <div className="comment-item">
                                <div className="box-user d-flex align-items-center gap_12 mb_5">
                                    <div className="avatar">
                                        <img
                                            alt="avatar"
                                            src="/assets/images/avatar/avatar-3.jpg"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="text-caption">
                                            by{" "}
                                            <a
                                                className="fw-6 hover-line-text"
                                                href="#"
                                            >
                                                Jamaica Lebedev
                                            </a>
                                            , Sep 11, 2025
                                        </div>
                                    </div>
                                </div>
                                <div className="comment text-body-2 text_black mb_10">
                                    Whether you're seeking the latest runway
                                    looks or everyday style inspiration, this
                                    blog is your go-to source for all things
                                    fashion and style.
                                </div>
                                <a
                                    className="btn-reply hover-line-text text-caption"
                                    href="#"
                                >
                                    <i className="icon-reply-solid" />
                                    <span className="fw-6">Reply</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-comment-item">
                        <div className="comment-item">
                            <div className="box-user d-flex align-items-center gap_12 mb_5">
                                <div className="avatar">
                                    <img
                                        alt="avatar"
                                        src="/assets/images/avatar/avatar-4.jpg"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="content">
                                    <div className="text-caption">
                                        by{" "}
                                        <a
                                            className="fw-6 hover-line-text"
                                            href="#"
                                        >
                                            {" "}
                                            Alex Tedreva
                                        </a>
                                        , Sep 8, 2025
                                    </div>
                                </div>
                            </div>
                            <div className="comment text-body-2 text_black mb_10">
                                I am truly grateful for your kind words. It is
                                incredibly rewarding to know that my content has
                                resonated with you and provided value
                            </div>
                            <a
                                className="btn-reply hover-line-text text-caption"
                                href="#"
                            >
                                <i className="icon-reply-solid" />
                                <span className="fw-6">Reply</span>
                            </a>
                        </div>
                    </div>
                    <div className="wrap-comment-item">
                        <div className="comment-item">
                            <div className="box-user d-flex align-items-center gap_12 mb_5">
                                <div className="avatar">
                                    <img
                                        alt="avatar"
                                        src="/assets/images/avatar/avatar-5.jpg"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="content">
                                    <div className="text-caption">
                                        by{" "}
                                        <a
                                            className="fw-6 hover-line-text"
                                            href="#"
                                        >
                                            Michael Logan
                                        </a>
                                        , Sep 7, 2024
                                    </div>
                                </div>
                            </div>
                            <div className="comment text-body-2 text_black mb_10">
                                Your feedback inspires me to continue creating
                                high-quality, informative
                            </div>
                            <a
                                className="btn-reply hover-line-text text-caption"
                                href="#"
                            >
                                <i className="icon-reply-solid" />
                                <span className="fw-6">Reply</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="leave-comment">
                    <div className="heading-title mb_41">
                        <div className="text-body-1 fw-6 mb_3">
                            Leave a Comment
                        </div>
                        <p className="text-body-2 text_mono-gray-7 letter-spacing-1">
                            Your email address will not be published. Required
                            fields are marked *
                        </p>
                    </div>
                    <form className="form-leave-comment">
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
                            <div className="box-fieldset-item">
                                <fieldset className="fieldset-item d-flex align-items-center gap_12">
                                    <input
                                        className="tf-check"
                                        id="note"
                                        name="brand"
                                        type="checkbox"
                                    />
                                    <label
                                        className="text_mono-gray text-body-2"
                                        htmlFor="note"
                                    >
                                        Save my name and email in this browser
                                        for the next time I comment.
                                    </label>
                                </fieldset>
                            </div>
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
            ;
        </>
    );
}
