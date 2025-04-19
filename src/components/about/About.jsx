"use client";
import React from "react";
import Introduction from "./Introduction";
import { author } from "@/data/author";
import Education from "./Education";
import Number from "./Number";
import { AuthorProvider } from "../../context/AuthorContext";
import Experience from "./Experience";
import Awards from "./Awards";
import Newsletter from "../common/Newsletter";

export default function About() {
    return (
        <>
            <div className="section-about style-1">
                <div className="tf-container-2">
                    <AuthorProvider author={author}>
                        <Introduction />
                        <Education />
                        <Number />
                        <Experience />
                        <Awards />
                    </AuthorProvider>
                </div>
            </div>
            <Newsletter className="tf-spacing-1" />
        </>
    );
}
