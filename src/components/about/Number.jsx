"use client";
import React from "react";
import CounterItem from "../common/CounterItem";
import Image from "next/image";
import { useAuthor } from "../../context/AuthorContext";

export default function Number() {
    const author = useAuthor();
    return (
        <>
            <div className="about-number">
                <div className="left">
                    <div className="img-style">
                        <Image
                            alt="avatar"
                            className="lazyload "
                            src="/assets/images/section/about-1.jpg"
                            width={753}
                            height={0}
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="heading-title text-center">
                        <div className="sub-heading fw-6">Number</div>
                    </div>
                    <div className="d-grid gap_12">
                        {author.achievements.map((achievement, index) => (
                            <CounterItem
                                achievement={achievement}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
