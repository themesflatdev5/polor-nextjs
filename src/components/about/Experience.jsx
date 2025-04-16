"use client";
import React from "react";
import { useAuthor } from "../../context/AuthorContext";

export default function Experience() {
    const author = useAuthor();
    return (
        <div className="about-experience tf-spacing-4">
            <div className="heading-title">
                <div className="sub-heading fw-6">Experience</div>
            </div>
            <div className="tf-grid-layout lg-col-3 md-col-2">
                {author.experience.map((item, index) => (
                    <div className="experience-item" key={index}>
                        <div className="date">{item.time}</div>
                        <div className="content">
                            <div className="text-body-2 text_mono-gray-5">
                                {item.sub}
                            </div>
                            <h6 className="fw-6">{item.title}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
