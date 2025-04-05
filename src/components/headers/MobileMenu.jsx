"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/images/logo/polor.png";
import { usePathname } from "next/navigation";
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import { demos, features } from "@/data/menu";

export default function MobileMenu({ showMb, handleCloseMb }) {
    const pathname = usePathname();
    const isParentActive = (menus) =>
        menus.some((menu) =>
            menu.submenu
                ? menu.submenu.some((item) =>
                      item.submenu
                          ? item.submenu.some(
                                (item) =>
                                    item.href.split("/")[1] ===
                                    pathname.split("/")[1]
                            )
                          : item.href.split("/")[1] === pathname.split("/")[1]
                  )
                : menu.href.split("/")[1] === pathname.split("/")[1]
        );

    return (
        <div>
            <Offcanvas
                show={showMb}
                onHide={handleCloseMb}
                className="mobile-nav-wrap"
                id="menu-mobile"
            >
                <Offcanvas.Header closeButton className="top-nav-mobile">
                    <Offcanvas.Title>
                        <Link href={`/`}>
                            <Image
                                alt="logo"
                                width={111}
                                height={31}
                                src={logo}
                            />
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="inner-mobile-nav">
                    <div className="mb-body">
                        <Accordion
                            id="menu-mobile-menu"
                            defaultActiveKey="0"
                            flush="true"
                        >
                            <Accordion.Item
                                eventKey="0"
                                className={`menu-item menu-item-has-children-mobile  ${
                                    demos.some((elm) => elm.href == pathname)
                                        ? "current-menu-item"
                                        : ""
                                } `}
                            >
                                <Accordion.Header className="item-menu-mobile">
                                    Demos
                                </Accordion.Header>
                                <Accordion.Body className="sub-mobile">
                                    <ul>
                                        {demos.map((link, i) => (
                                            <li
                                                key={i}
                                                className={
                                                    pathname == link.href
                                                        ? "menu-item current-item"
                                                        : "menu-item "
                                                }
                                            >
                                                <Link href={link.href}>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item
                                eventKey="1"
                                className={`menu-item menu-item-has-children-mobile  ${
                                    isParentActive(features)
                                        ? "current-menu-item"
                                        : ""
                                } `}
                            >
                                <Accordion.Header className="item-menu-mobile">
                                    Features
                                </Accordion.Header>
                                <Accordion.Body className="sub-mobile">
                                    <Accordion defaultActiveKey="0" flush="true">
                                        <Accordion defaultActiveKey="0" flush="true">
                                            {features.map((feature, i) => (
                                                <Accordion.Item
                                                    eventKey={`nested-${i}`}
                                                    key={i}
                                                    flush="true"
                                                    className="item-menu-mobile"
                                                >
                                                    <Accordion.Header>
                                                        {feature.title}
                                                    </Accordion.Header>
                                                    <Accordion.Body className="sub-mobile">
                                                        <ul>
                                                            {feature.submenu.map(
                                                                (link, j) => {
                                                                    const isActive =
                                                                        pathname.split(
                                                                            "/"
                                                                        )[1] ===
                                                                        link.href.split(
                                                                            "/"
                                                                        )[1];
                                                                    return (
                                                                        <li
                                                                            key={
                                                                                j
                                                                            }
                                                                            className={
                                                                                isActive
                                                                                    ? "menu-item current-item"
                                                                                    : "menu-item"
                                                                            }
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    link.href
                                                                                }
                                                                            >
                                                                                {
                                                                                    link.label
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    );
                                                                }
                                                            )}
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <div
                                className={`menu-item ${
                                    "/about" == pathname ? "current-item" : ""
                                }`}
                            >
                                <Link
                                    href={`/about`}
                                    className="item-menu-mobile"
                                >
                                    {" "}
                                    About
                                </Link>
                            </div>
                            <div
                                className={`menu-item ${
                                    "/contact" == pathname ? "current-item" : ""
                                }`}
                            >
                                <Link
                                    href={`/contact`}
                                    className="item-menu-mobile"
                                >
                                    {" "}
                                    Contact
                                </Link>
                            </div>
                        </Accordion>
                        <div className="support">
                            <a href="#" className="tf-btn animate-hover-btn mb_12">
                                <span>Buy Now</span>
                            </a>
                            <a href="#" className="text-need">
                                {" "}
                                Need help?
                            </a>
                            <ul className="mb-info">
                                <li>
                                    Call Us Now:{" "}
                                    <span className="number">1-555-678-8888</span>
                                </li>
                                <li>
                                    Support 24/7:{" "}
                                    <a href="#">themesflat@gmail.com</a>
                                </li>
                                <li>
                                    <div className="wrap-social">
                                        <p>Follow us:</p>
                                        <div className="tf-social d-flex align-items-center gap_16">
                                            <a href="#">
                                                {" "}
                                                <i className="icon-facebook-f fb"></i>
                                            </a>
                                            <a href="#">
                                                <i className="icon-instagram ins"></i>
                                            </a>
                                            <a href="#">
                                                <i className="icon-pinterest pin"></i>
                                            </a>
                                            <a href="#">
                                                <i className="icon-twitter-x x"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
