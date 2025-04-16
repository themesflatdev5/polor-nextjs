import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";

export default function CategoryItem3({ category }) {
    return (
        <>
            <div className="category-item style-default v2 hover-image-3 ">
                <div className="content">
                    <div>
                        <Link
                            className="category-tag mb_24 text-caption "
                            href="category-grid.html"
                        >
                            {category.tag}
                        </Link>
                        <h5 className="title letter-spacing-2 fw-6">
                            <Link
                                className="hover-line-text"
                                href={`/single-post/${category.id}`}
                            >
                                {category.title}
                            </Link>
                        </h5>
                    </div>
                    <div>
                        <Link
                            className="img-style  mb_19  "
                            href={`/single-post/${category.id}`}
                        >
                            <Image
                                alt="category"
                                className="lazyload "
                                src={category.imageSrc}
                                width={0}
                                height={0}
                            />
                            <Image
                                alt="category"
                                className="lazyload "
                                src={category.imageSrc}
                                width={0}
                                height={0}
                            />
                            <span className="icon-play sz-1">
                                <i className="icon-play-filled" />
                            </span>
                        </Link>
                        <p className="text-body-2 text_mono-gray-5 line-clamp-3">
                            {category.desc}
                        </p>
                        <div className="category-bot d-flex align-items-center justify-content-between">
                            <div className="credit text-body-3">
                                {category.date}
                                <a className="hover-line-text fw-6" href="#">
                                    {category.author}
                                </a>
                            </div>
                            <div className="comment d-flex gap_8 align-items-center text-body-2 text_mono-gray-5">
                                <i className="icon-comment-alt" />
                                <span>{category.comments}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
