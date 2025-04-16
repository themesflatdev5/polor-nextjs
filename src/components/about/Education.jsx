"use client";
import React from "react";
import { useAuthor } from "../../context/AuthorContext";

export default function Education() {
    const author = useAuthor();
    return (
        <>
            <div className="about-edication tf-spacing-4 ">
                <div>
                    <div className="heading-title sub-heading">Education</div>
                    <div className="list d-grid gap_12">
                        {author.education.map((item, index) => (
                            <div className="education-item" key={index}>
                                <div className="content">
                                    <div className="title d-flex align-items-end gap_12 mb_13">
                                        <h5 className="fw-6">
                                            {item.title}
                                            <span className="text-body-2 text_mono-gray-5 fw-4 ml_5">
                                                {item.sub}
                                            </span>
                                        </h5>
                                    </div>
                                    <p className="text-body-2 text_mono-gray-5 ">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="date text-body-2">
                                    {item.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
