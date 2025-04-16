"use client";
import React from "react";
import { useAuthor } from "../../context/AuthorContext";

export default function Awards() {
    const author = useAuthor();
    return (
        <div className="about-awards">
            <div className="heading-title">
                <div className="sub-heading fw-6">Awards & Recognition</div>
            </div>
            <div className="list d-grid gap_12">
                {author.experience.map((item, index) => (
                    <div className="awards-item style-default" key={index}>
                        <div className="content">
                            <h6 className="fw-6 title">{item.title}</h6>
                            <div className="tag text-uppercase text-body-2 text_mono-gray-5">
                                {item.sub}
                            </div>
                        </div>
                        <div className="date text-body-2">{item.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
