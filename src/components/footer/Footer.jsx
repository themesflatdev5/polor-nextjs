import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/images/logo/polor.png";
import FooterColBlock from "./footerColBlock";

export default function footer() {
    return (
        <footer className="footer footer-container" id="footer">
            <div className="footer-wrap">
                <div className="tf-container">
                    <div className="footer-body">
                        <div className="row">
                            <div className="col-lg-7 ">
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
                            <div className="col-lg-5">
                                <FooterColBlock />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="tf-container">
                    <div className="wrapper d-flex align-items-center flex-wrap gap_12 ">
                        <div className="left">
                            <div className="main-logo">
                                <Link href={`/`} className="site-logo">
                                    <Image
                                        alt="logo"
                                        width={111}
                                        height={0}
                                        src={logo}
                                    />
                                </Link>
                            </div>
                            <p className="text-body-3">
                                © 2025 Polor HTML Template. <br />
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
