import React from "react";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/footer/Footer";
import SinglePost from "@/components/single-post/SinglePost";
import { allCategories } from "@/data/categories";
import Image from "next/image";

export default async function page({ params }) {
    const resolvedParams = await params;
    const post =
        allCategories.filter((elm) => elm.id == resolvedParams.id)[0] ||
        allCategories[0];
    return (
        <>
            <Layout>
                <div className="page-title style-sigle-post v2">
                    <div className="tf-container">
                        <div className="page-inner">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="category-item">
                                        <div className="content">
                                            <a
                                                className="category-tag text-caption mb_14"
                                                href="category-grid.html"
                                            >
                                                {post.tag}
                                            </a>
                                            <h2 className="title mb_6 fw-6">
                                                {post.title}
                                            </h2>
                                            <p className="text-body-1 text_mono-gray-7">
                                                {post.desc}
                                            </p>
                                            <div className="category-bot d-flex align-items-center justify-content-between">
                                                <div className="credit text-body-3 text_mono-gray-5">
                                                    {post.date}
                                                    <a
                                                        className="hover-line-text fw-6 text_black"
                                                        href="#"
                                                    >
                                                        {post.author}
                                                    </a>
                                                </div>
                                                <div className="comment d-flex text-body-2 gap_8 align-items-center text_mono-gray-5">
                                                    <i className="icon-comment-alt" />
                                                    <span>{post.comments}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-thumb">
                                        <Image
                                            alt="category"
                                            className="lazyload "
                                            src={post.imageSrc}
                                            width={906}
                                            height={0}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SinglePost/>
                <Footer />
            </Layout>
        </>
    );
}
