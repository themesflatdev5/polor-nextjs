import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";

export default function CategoryItem3({ category }) {
    return (
        <div
            className="category-item style-default v2 hover-image-3  "
            key={category.id}
        >
            <div className="content">
                <div>
                    <a
                        className="category-tag text-caption mb_9 "
                        href="category-grid.html"
                    >
                        {category.tag}
                    </a>
                    <h5 className="title letter-spacing-1 fw-6 mb_10">
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
                        className="img-style mb_23 "
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
                            <i className="icon-play-filled"></i>
                        </span>
                    </Link>
                    <p className="text-body-2 text_mono-gray-5 line-clamp-3">
                        {category.desc}
                    </p>
                    <div className="category-bot d-flex align-items-center justify-content-between">
                        <div className="credit text-body-3 d-flex gap_5">
                            {category.date}
                            <Link
                                className="hover-line-text fw-6 "
                                href="about.html"
                            >
                                {category.author}
                            </Link>
                        </div>
                        <div className="comment d-flex gap_8 align-items-center text-body-2 text_mono-gray-5">
                            <i className="icon-comment-alt" />
                            <span>{category.comments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
