import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";

export default function CategoryItem2({ category }) {
    return (
        <div
            className="category-item style-overlay hover-image "
            key={category.id}
        >
            <Link className="img-style" href={`/single-post/${category.id}`}>
                <Image
                    alt="category"
                    className="lazyload "
                    src={category.imageSrc}
                    width={0}
                    height={0}
                />
            </Link>
            <div className="content">
                <Link
                    href={"/categories-grid"}
                    className="category-tag text-body-3 text_white mb_15"
                >
                    {category.tag}
                </Link>
                <h2 className="title text_white fw-6">
                    <Link
                        className="hover-line-text"
                        href={`/single-post/${category.id}`}
                    >
                        {category.title}
                    </Link>
                </h2>
                <div className="category-bot d-flex align-items-center justify-content-between">
                    <div className="credit text_white text-body-2">
                        {category.date}
                        <Link className="hover-line-text fw-6" href={"/about"}>
                            {category.author}
                        </Link>
                    </div>
                    <div className="comment d-flex text-body-1 gap_8 align-items-center text_white">
                        <i className="icon-comment-alt" />
                        <span>{category.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
