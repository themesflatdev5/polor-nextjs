import Image from "next/image";
import FooterColBlock from "./footerColBlock";
import React from "react";
import Link from "next/link";

export default function Footer2() {
    return (
        <footer className="footer style-2 " id="footer">
            <div className="footer-wrap">
                <div className="tf-container-4">
                    <div className="footer-body">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="footer-about">
                                    <div className="sign">
                                        <Image
                                            alt="sign"
                                            src="/assets/images/shape/sign.png"
                                            width={201}
                                            height={0}
                                        />
                                    </div>
                                    <p className="footer-description  sub-heading mb_26 h6 text_mono-gray-5">
                                        Welcome to ultimate source <br /> for
                                        fresh perspectives!
                                    </p>
                                    <div className="tf-social style-2 d-flex gap_24 ">
                                        <a
                                            className="d-flex align-items-center gap_6 "
                                            href="#"
                                        >
                                            <i className="icon-facebook-f fb" />
                                            <span className="text-caption">
                                                53K
                                            </span>
                                        </a>
                                        <a
                                            className="d-flex align-items-center gap_6 "
                                            href="#"
                                        >
                                            <i className="icon-instagram ins" />
                                            <span className="text-caption">
                                                51K
                                            </span>
                                        </a>
                                        <a
                                            className="d-flex align-items-center gap_6 "
                                            href="#"
                                        >
                                            <i className="icon-pinterest pin" />
                                            <span className="text-caption">
                                                114K
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <FooterColBlock />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="tf-container-4">
                    <div className="wrapper d-flex align-items-center flex-wrap gap_12 ">
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
                                <a
                                    className="link  text-body-2"
                                    href="contact.html"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a className="link  text-body-2" href="#">
                                    Term of Use
                                </a>
                            </li>
                        </ul>
                        <div className="right footer-go-top text-body-2">
                            Back To Top
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
