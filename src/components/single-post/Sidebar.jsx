import React from "react";
import Boxmusic from "../common/Boxmusic";

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="box-author mb_12">
                <div className="text-body-2 fw-6 mb_21">
                    A little bit about me
                </div>
                <div className="avatar mb_18">
                    <img
                        alt="avatar"
                        className="lazyload "
                        data-src="/assets/images/avatar/main-avatar.jpg"
                        src="/assets/images/avatar/main-avatar.jpg"
                    />
                </div>
                <div className="content">
                    <h4 className="name fw-6 mb_9">Chloe Jacobs</h4>
                    <div className="text-body-3 text_mono-gray-7">
                        I'm Chloe Jacobs, a believer in the power of positivity.
                        Join me as I share tips, tricks, and stories to help you
                        live your best life.
                    </div>
                </div>
            </div>
            <div className="box-social text-center mb_12">
                <div className="text-body-2 fw-6 mb_32">Social Network</div>
                <div className="tf-social style-1 d-flex justify-content-center gap_16 ">
                    <a className="d-flex align-items-center gap_6 " href="#">
                        <i className="icon-facebook-f fb" /> <span>53K</span>{" "}
                    </a>
                    <a className="d-flex align-items-center gap_6 " href="#">
                        <i className="icon-instagram ins" /> <span>51K</span>{" "}
                    </a>
                    <a className="d-flex align-items-center gap_6 " href="#">
                        <i className="icon-pinterest pin" /> <span>114K</span>{" "}
                    </a>
                    <a className="d-flex align-items-center gap_6 " href="#">
                        <i className="icon-twitter-x x" /> <span>71K</span>{" "}
                    </a>
                </div>
            </div>
            <Boxmusic />
          
            <div className="shopify-banner mb_12">
                <div className="banner">
                    <img
                        alt="category"
                        className="lazyload "
                        data-src="/assets/images/section/banner-img.png"
                        src="/assets/images/section/banner-img.png"
                    />
                </div>
                <div className="content">
                    <div className="title text_white fw-6">
                        Shopify Spring Editions
                    </div>
                    <a className="text_white" href="category-grid.html">
                        Discover more
                    </a>
                </div>
            </div>
            <div className="categories-sidebar mb_12">
                <div className="text-body-2 fw-6 text-center mb_33">
                    Categories
                </div>
                <ul className="list-categories">
                    <li className="d-flex align-items-center justify-content-between gap_16">
                        <a
                            className="d-flex align-items-center gap_12 text-body-2"
                            href="#"
                        >
                            <i className="icon-camera-retro-solid" />
                            <span> Photograph</span>
                        </a>
                        <span className="number text-body-2 text_mono-gray-5">
                            32+
                        </span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap_16">
                        <a
                            className="d-flex align-items-center gap_12 text-body-2"
                            href="#"
                        >
                            <i className="icon-hamburger-solid" />
                            <span> Food & Drink</span>
                        </a>
                        <span className="number text-body-2 text_mono-gray-5">
                            64+
                        </span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap_16">
                        <a
                            className="d-flex align-items-center gap_12 text-body-2"
                            href="#"
                        >
                            <i className="icon-tshirt-solid" />
                            <span> Fashion & Style</span>
                        </a>
                        <span className="number text-body-2 text_mono-gray-5">
                            19+
                        </span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap_16">
                        <a
                            className="d-flex align-items-center gap_12 text-body-2"
                            href="#"
                        >
                            <i className="icon-users-solid" />
                            <span> Design</span>
                        </a>
                        <span className="number text-body-2 text_mono-gray-5">
                            128+
                        </span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap_16">
                        <a
                            className="d-flex align-items-center gap_12 text-body-2"
                            href=""
                        >
                            <i className="icon-pencil-alt-solid" />
                            <span>Relationship</span>
                        </a>
                        <span className="number text-body-2 text_mono-gray-5">
                            26+
                        </span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap_16">
                        <a
                            className="d-flex align-items-center gap_12 text-body-2"
                            href="#"
                        >
                            <i className="icon-car" />
                            <span> Travel</span>
                        </a>
                        <span className="number text-body-2 text_mono-gray-5">
                            88+
                        </span>
                    </li>
                </ul>
            </div>
            <div className="popular-tags-sidebar mb_12">
                <div className="text-body-2 fw-6 text-center mb_34">
                    Popular tags
                </div>
                <ul className="popular-tags">
                    <li>
                        <a href="#">#Fashion</a>
                    </li>
                    <li>
                        <a href="#">#Style</a>
                    </li>
                    <li>
                        <a href="#">#Clothes</a>
                    </li>
                    <li>
                        <a href="#">#Organic</a>
                    </li>
                    <li>
                        <a href="#">#Artstyle</a>
                    </li>
                    <li>
                        <a href="#">#Design</a>
                    </li>
                    <li>
                        <a href="#">#Colorful</a>
                    </li>
                    <li>
                        <a href="#">#Photo</a>
                    </li>
                    <li>
                        <a href="#">#Minimal</a>
                    </li>
                    <li>
                        <a href="#">#Trending</a>
                    </li>
                    <li>
                        <a href="#">#Tasty</a>
                    </li>
                </ul>
            </div>
            <div className="post-sidebar mb_12">
                <div className="text-body-2 fw-6 text-center mb_33">
                    Explore my Instagram
                </div>
                <div className="tf-grid-layout mb_12 tf-col-2  md-col-3 ">
                    <a className="item" href="#">
                        <img alt="ins" src="/assets/images/section/ins-1.jpg" />
                    </a>
                    <a className="item" href="#">
                        <img alt="ins" src="/assets/images/section/ins-2.jpg" />
                    </a>
                    <a className="item" href="#">
                        <img alt="ins" src="/assets/images/section/ins-3.jpg" />
                    </a>
                    <a className="item" href="#">
                        <img alt="ins" src="/assets/images/section/ins-4.jpg" />
                    </a>
                    <a className="item" href="#">
                        <img alt="ins" src="/assets/images/section/ins-5.jpg" />
                    </a>
                    <a className="item" href="#">
                        <img alt="ins" src="/assets/images/section/ins-6.jpg" />
                    </a>
                </div>
                <a className="tf-btn w-full style-2" href="#">
                    <span className="text-body-3 fw-6">@polor</span>
                </a>
            </div>
            <div className="text-center newsletter-sidebar">
                <div className="text-body-2 fw-6   mb_28">Newsletter</div>
                <p className="text-body-3 mb_32">
                    Subscribe my newsletter to get the latest posts delivered
                    right to your email.
                </p>
                <form
                    acceptCharset="utf-8"
                    action="#"
                    className="form-newsletter style-1"
                    method="post"
                >
                    <div>
                        <fieldset className="mb_10 position-relative">
                            <input
                                className="tb-my-input "
                                name="email"
                                placeholder="Enter Your Email"
                                required
                                type="email"
                            />
                            <div className="icon">
                                <i className="icon-envelope-solid" />
                            </div>
                        </fieldset>
                    </div>
                    <button
                        className="tf-btn animate-hover-btn w-full btn-submit-comment btn-primary2"
                        name="submit"
                        type="submit"
                    >
                        <span className="text-body-2 fw-6">Subcribe</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
