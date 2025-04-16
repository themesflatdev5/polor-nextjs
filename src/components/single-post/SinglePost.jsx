import Image from "next/image";
import React from "react";
import SideBar from "./Sidebar";
import imgThumbs from "@assets/images/categories/single-post-2.jpg";
import imgThumbs2 from "@assets/images/categories/single-post-3.jpg";
import imgThumbs3 from "@assets/images/categories/single-post-4.jpg";
import Categories from "./Categories";
import Comments from "./Comments";
import RelatedPost from "./RelatedPost";

export default function SinglePost() {
    return (
        <>
            <div className="section-single-post tf-spacing-4">
                <div className="tf-container">
                    <div className="row wrap-content">
                        <div className="col-lg-2 metabar">
                            <div className="wrap-progress-share">
                                <div className="circle-container mb_40">
                                    <svg
                                        className="circle"
                                        height="112"
                                        viewBox="0 0 130 130"
                                        width="113"
                                    >
                                        <circle
                                            cx="65"
                                            cy="65"
                                            fill="none"
                                            r="62.5"
                                            stroke="#E0E0E0"
                                            strokeWidth="1"
                                        ></circle>
                                        <circle
                                            className="progress-circle"
                                            cx="65"
                                            cy="65"
                                            fill="none"
                                            r="62.5"
                                            strokeWidth="1"
                                        />
                                    </svg>
                                    <div className="content text align-items-center">
                                        <i className="icon-clock-solid" />
                                        <div className="text-caption mt_10">
                                            15 Mins Read
                                        </div>
                                    </div>
                                </div>
                                <div className="tf-social style-1 d-flex d flex-column gap_25 ">
                                    <a
                                        className="d-flex align-items-center gap_5 "
                                        href="#"
                                    >
                                        <i className="icon-facebook-f fb" />{" "}
                                        <span>Facebook</span>{" "}
                                    </a>
                                    <a
                                        className="d-flex align-items-center gap_5 "
                                        href="#"
                                    >
                                        <i className="icon-instagram ins" />{" "}
                                        <span>Instagram</span>{" "}
                                    </a>
                                    <a
                                        className="d-flex align-items-center gap_5 "
                                        href="#"
                                    >
                                        <i className="icon-pinterest pin" />{" "}
                                        <span>Pinterest</span>{" "}
                                    </a>
                                    <a
                                        className="d-flex align-items-center gap_5 "
                                        href="#"
                                    >
                                        <i className="icon-twitter-x x" />{" "}
                                        <span>X</span>{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7  col-lg-10">
                            <div className="content-inner">
                                <h5 className="fw-6 title mb_37">
                                    A New Era of Partywear
                                </h5>
                                <p className="text text-body-2 mb_40">
                                    Zara, the global fashion powerhouse, is set
                                    to illuminate the Autumn 2025 season with
                                    its stunning new partywear collection.
                                    Renowned for its ability to blend
                                    high-fashion trends with affordable prices,
                                    Zara's latest offering promises to elevate
                                    your evening wardrobe to new heights.
                                </p>
                                <ul className="list mb_46">
                                    <li className="text-body-2">
                                        <span className="text_black fw-6">
                                            Metallic Magic:
                                        </span>
                                        Shimmering fabrics like metallic brocade
                                        and sequins will add a touch of glamour
                                        to your ensemble.
                                    </li>
                                    <li className="text-body-2">
                                        <span className="text_black fw-6">
                                            Bold Colors:
                                        </span>
                                        Vibrant hues such as emerald green,
                                        royal blue, and fiery red will make a
                                        bold statement.
                                    </li>
                                    <li className="text-body-2">
                                        <span className="text_black fw-6">
                                            Feathered Fantasy:
                                        </span>
                                        Feather accents, whether on sleeves,
                                        skirts, or accessories, will create a
                                        dramatic effect.
                                    </li>
                                </ul>
                                <div className="img-thumbs mb_46">
                                    <Image
                                        alt="category"
                                        className="lazyload "
                                        data-src={imgThumbs}
                                        src={imgThumbs}
                                        width={964}
                                        height={496}
                                    />
                                </div>
                                <h5 className="fw-6 title mb_20">
                                    Truly Master the Duotone
                                </h5>
                                <p className="text text-body-2 mb_45">
                                    To truly master the duotone look, it's
                                    essential to embrace confidence and
                                    experiment fearlessly. Whether it's a bold
                                    color combination or a subtle play of
                                    shades, the key lies in wearing the outfit
                                    with pride and owning one's unique style.
                                    Balancing the duotone elements is crucial;
                                    if opting for a striking color contrast,
                                    consider keeping the rest of the outfit
                                    simple and minimal. Accessories can elevate
                                    a duotone look, but it's important to choose
                                    pieces that complement the outfit without
                                    overpowering it.
                                </p>
                                <div className="quote mb_43">
                                    <p className="fw-5 mb_11">
                                        “Expect to find a diverse range of
                                        styles, from timeless evening gowns to
                                        edgy cocktail dresses.”
                                    </p>
                                    <div className="name text-body-2 text_mono-gray-5">
                                        Elena Holmes
                                    </div>
                                    <div className="icon">
                                        <i className="icon-quote"></i>
                                    </div>
                                </div>
                                <h5 className="fw-6 title mb_19">
                                    Accessorize to Impress
                                </h5>
                                <p className="text text-body-2 mb_40">
                                    To complete your party look, Zara's
                                    accessories collection offers a range of
                                    dazzling options. From sparkling jewelry to
                                    chic handbags, these pieces will elevate
                                    your outfit to the next level.
                                </p>
                                <div className="number-list mb_46">
                                    <div className="sub-heading fw-6 title mb_22">
                                        1. Statement Necklaces
                                    </div>
                                    <p className="text text-body-2 mb_40">
                                        A statement necklace is the perfect way
                                        to draw attention to your neckline.
                                        Zara's collection features bold and
                                        intricate designs that will elevate any
                                        outfit.
                                    </p>
                                    <div className="sub-heading fw-6 title mb_22">
                                        2. Sparkling Earrings
                                    </div>
                                    <p className="text text-body-2 mb_40">
                                        Earrings are a versatile accessory that
                                        can transform your look. Zara's earring
                                        collection offers a wide range of
                                        styles, from understated studs to
                                        dramatic chandeliers.
                                    </p>
                                    <div className="sub-heading fw-6 title mb_22">
                                        3. Elegant Handbags
                                    </div>
                                    <p className="text text-body-2 ">
                                        A stylish handbag is the perfect way to
                                        complete your party look. Zara's handbag
                                        collection offers a variety of styles,
                                        from sleek clutches to spacious totes.
                                    </p>
                                </div>
                                <div className="group-img d-flex gap_12 mb_54">
                                    <div className="hover-image">
                                        <div className="img-style">
                                            <Image
                                                alt="category"
                                                className="lazyload "
                                                data-src={imgThumbs2}
                                                src={imgThumbs2}
                                                width={476}
                                                height={539}
                                            />
                                        </div>
                                    </div>
                                    <div className="hover-image">
                                        <div className="img-style">
                                            <Image
                                                alt="category"
                                                className="lazyload "
                                                data-src={imgThumbs3}
                                                src={imgThumbs3}
                                                width={476}
                                                height={539}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="quote mb_43">
                                    <p className="fw-5 ps-0 mb_11">
                                        “Zara's accessories collection offers a
                                        range of dazzling options”
                                    </p>
                                    <div className="name text-body-2 text_mono-gray-5">
                                        CEO of Zara - Zerechy Victor
                                    </div>
                                    <div className="icon">
                                        <i className="icon-quote"></i>
                                    </div>
                                </div>
                                <h5 className="fw-6 title mb_19">
                                    A Night to Remember
                                </h5>
                                <p className="text text-body-2 mb_40">
                                    To complete your party look, Zara's
                                    accessories collection offers a range of
                                    dazzling options. From sparkling jewelry to
                                    chic handbags, these pieces will elevate
                                    your outfit to the next level. .Whether
                                    you're attending a formal gala or a casual
                                    cocktail party, Zara's Autumn 2025 partywear
                                    collection has something for everyone. With
                                    its stunning designs, affordable prices, and
                                    impeccable quality, Zara is poised to make
                                    this season a memorable one.
                                </p>
                                <div className="wrap-tags">
                                    <div className="text-body-2 fw-6 mb_10">
                                        Tags:
                                    </div>
                                    <ul className="popular-tags">
                                        <li>
                                            <a href="#">#Fashion</a>
                                        </li>
                                        <li>
                                            <a href="#">#Style</a>
                                        </li>
                                        <li>
                                            <a href="#">#Wear</a>
                                        </li>
                                        <li>
                                            <a href="#">#Clothes</a>
                                        </li>
                                        <li>
                                            <a href="#">#Lifestyles</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bot mb_47">
                                <Categories />
                            </div>
                            <Comments />
                        </div>
                        <div className="col-xl-3 col-lg-10">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>
            <RelatedPost />
        </>
    );
}
