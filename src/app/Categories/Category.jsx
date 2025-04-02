import React from "react";
import Image from "next/image";

export default function category() {
    return (
        <div className="category-item style-default v2 hover-image-3">
            <div className="content">
                <div>
                    <div className="category-tag mb_24 text-caption ">
                        Travel
                    </div>
                    <h5 className="title letter-spacing-2 fw-6">
                        <div className="hover-line-text">
                            Food I Always Bring When Traveling With Kids
                        </div>
                    </h5>
                </div>
                <div>
                    <div>
                        <div className="img-style mb_19">
                            <Image
                                alt="image"
                                src="/assets/images/categories/category-item-1.jpg" width={100} height={100}
                            />
                            <Image
                                alt="image"
                                src="/assets/images/categories/category-item-1.jpg" width={100} height={100}
                            />
                            <span className="icon-play sz-1">
                                <i className="icon-play-filled"></i>
                            </span>
                        </div>
                        <p className="text-body-2 text_mono-gray-5 line-clamp-3">
                            When packing snacks for a trip, I’ve never quite
                            managed to be the type of parent who brings along a
                            rainbow of wholesome foods…
                        </p>
                        <div className="category-bot d-flex align-items-center justify-content-between">
                            <div className="credit text-body-3">
                                Oct 30, 2025{" "}
                                <a href="#" className="hover-line-text fw-6">
                                    by Chloe Jacobs
                                </a>
                            </div>
                            <div className="comment d-flex gap_8 align-items-center text-body-2 text_mono-gray-5">
                                <i className="icon-comment-alt"></i>
                                <span>85</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
