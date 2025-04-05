`use client`
import React from "react";
import Link from "next/link";

export default function categoryItem({ category }) {
    return (
        <div className="category-item style-default hover-image-3 " key={category.id}>
            <Link
                className="img-style mb_23 "
                href={`/single-post/${category.id}`}
            >
                <img
                    alt="category"
                    className="lazyload "
                    data-src={category.imageSrc}
                    src={category.imageSrc}
                />
                <img
                    alt="category"
                    className="lazyload "
                    data-src={category.imageSrc}
                    src={category.imageSrc}
                />
            </Link>
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
                    <p className="text-body-2 text_mono-gray-5 line-clmp-3">
                        {category.desc}
                    </p>
                </div>
                <div className="category-bot d-flex align-items-center justify-content-between">
                    <div className="credit">
                        {category.date}
                        <Link
                            className="hover-line-text fw-6"
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
    );
}
