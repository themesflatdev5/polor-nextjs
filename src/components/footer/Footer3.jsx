import React from "react";
import FooterColBlock from "./footerColBlock";
import Image from "next/image";
import Link from "next/link";

export default function Footer3() {
    return (
        <footer className="footer style-3 footer-container" id="footer">
            <div className="footer-wrap">
                <div className="tf-container-3">
                    <div className="footer-body">
                        <div className="left">
                            <div className="footer-about">
                                <div className="mb_18">
                                    <a
                                        className="hover-line-text h6 fw-6 "
                                        href="#"
                                    >
                                        hello.chloe@gmail.com
                                    </a>
                                </div>
                                <p className="footer-description tion mb_57 h6 text_mono-gray-5">
                                    Welcome to ultimate source for fresh
                                    perspectives! Explore curated content to
                                    enlighten, entertain and engage global
                                    readers.
                                </p>
                                <div className="tf-social d-flex align-items-center gap_16">
                                    <a href="#">
                                        <i className="icon-facebook-f fb" />
                                    </a>
                                    <a href="#">
                                        <i className="icon-instagram ins" />
                                    </a>
                                    <a href="#">
                                        <i className="icon-pinterest pin" />
                                    </a>
                                    <a href="#">
                                        <i className="icon-twitter-x x" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <FooterColBlock />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="tf-container-3">
                    <div className="wrapper d-flex align-items-center gap_12 ">
                        <div className="left">
                            <div className="main-logo">
                                <Link className="site-logo" href={'/'}>
                                    <Image
                                        alt="logo"
                                        src="/assets/images/logo/polor.png"
                                        width={111}
                                        height={0}
                                    />
                                </Link>
                            </div>
                            <p className="text-body-3">
                                © 2025 Polor ThemesFlat Theme. <br />
                                All Rights Reserved
                            </p>
                        </div>
                        <ul className="center d-flex align-items-center">
                            <li>
                                <a className="link  text-body-2" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="link  text-body-2" href="#">
                                    Archives
                                </a>
                            </li>
                            <li>
                                <a className="link  text-body-2" href="#">
                                    Term of Use
                                </a>
                            </li>
                        </ul>
                        <div className="right footer-go-top">
                            <span className="hide-lg">Back To Top</span>
                            <div className="icon">
                                <i className="icon-angle-up-solid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
