"use client";
import React from "react";
import SlideHero from "@/components/common/SlideHero";
import { slidesData } from "@/data/heroslides";
import { author } from "@/data/author";
import Image from "next/image";
import Boxmusic from "@/components/common/Boxmusic";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";

export default function Hero() {
    // Define tab data with icons and titles
    const tabsConfig = [
        { key: "photograph", icon: "icon-camera-retro-solid", title: "Photograph" },
        { key: "food-drink", icon: "icon-hamburger-solid", title: "Food & Drink" },
        { key: "fashion", icon: "icon-tshirt-solid", title: "Fashion & Style" },
        { key: "relationship", icon: "icon-users-solid", title: "Relationship" },
        { key: "design", icon: "icon-pencil-alt-solid", title: "Design" },
        { key: "travel", icon: "icon-car", title: "Travel" }
    ];

    // Tab content component to avoid repetition
    const TabContent = () => (
        <div className="row">
            <div className="col-lg-9">
                <SlideHero effect="creative" loop={true}>
                    {slidesData.map((slide, i) => (
                        <div
                            key={i}
                            className="hero-banner style-default position-relative animation-sl"
                            data-cs-parallax
                        >
                            <div className="img-thumbs">
                                <Image
                                    alt="page-title"
                                    className="lazyload"
                                    src={slide.src}
                                    width={1365}
                                    height={0}
                                />
                            </div>
                            <div className="content cs-entry__content">
                                <div className="heading">
                                    <a
                                        className="tag text-caption text_white mb_18"
                                        href="category-grid.html"
                                    >
                                        {slide.tag}
                                    </a>
                                    <h1 className="text_white fw-6 mb_60 title">
                                        {slide.title.split("\n").map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </h1>
                                    <a
                                        className="tf-btn-link style-1"
                                        href="single-post.html"
                                    >
                                        <span className="h6 fw-6 text_white">
                                            {slide.btnText}
                                        </span>
                                        <i className="icon-angle-right-solid" />
                                    </a>
                                </div>
                                <div className="bot">
                                    <Boxmusic />
                                </div>
                            </div>
                        </div>
                    ))}
                </SlideHero>
            </div>
            <div className="col-lg-3">
                <div className="box-author mb_12">
                    <div className="text-body-2 fw-6 mb_21">
                        Welcome to my Blog!
                    </div>
                    <div className="avatar mb_18">
                        <Image
                            alt="avatar"
                            className="lazyload"
                            src={author.avatar}
                            width={189}
                            height={189}
                            priority
                        />
                    </div>
                    <div className="content">
                        <h4 className="name fw-6 mb_8">
                            <Link
                                className="hover-line-text"
                                href={"/about"}
                            >
                                {author.name}
                            </Link>
                        </h4>
                        <div className="text-body-3 text_mono-gray-7">
                            {author.descSort}
                        </div>
                    </div>
                </div>
                <div className="box-social text-center">
                    <div className="text-body-2 fw-6 mb_32">
                        Social Network
                    </div>
                    <div className="tf-social d-flex justify-content-center gap_14">
                        <a
                            className="d-flex align-items-center gap_6 text-body-3"
                            href="#"
                        >
                            <i className="icon-facebook-f fb" />
                            <span>53K</span>
                        </a>
                        <a
                            className="d-flex align-items-center gap_6 text-body-3"
                            href="#"
                        >
                            <i className="icon-instagram ins" />
                            <span>51K</span>
                        </a>
                        <a
                            className="d-flex align-items-center gap_6 text-body-3"
                            href="#"
                        >
                            <i className="icon-pinterest pin" />
                            <span>114K</span>
                        </a>
                        <a
                            className="d-flex align-items-center gap_6 text-body-3"
                            href="#"
                        >
                            <i className="icon-twitter-x x" />
                            <span>71K</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="page-title style-1">
            <div className="tf-container">
                <div className="flat-animate-tab effect-content-slide">
                    <Tabs
                        defaultActiveKey="photograph"
                        id="myTab"
                        className="nav-tabs-wrap overflow-x-auto scrollContainer style-1"
                    >
                        {tabsConfig.map((tab) => (
                            <Tab
                                key={tab.key}
                                eventKey={tab.key}
                                title={
                                    <span className="sub-heading fw-6 tab-link">
                                        <i className={tab.icon}></i>
                                        {tab.title}
                                    </span>
                                }
                            >
                                <TabContent />
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    );
}