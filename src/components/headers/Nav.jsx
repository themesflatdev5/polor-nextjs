"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { demos, features } from "@/data/menu";
import React from "react";

export default function Nav() {
    const pathname = usePathname();
    const isParentActive = (menus) =>
        menus.some((menu) =>
            menu.submenu
                ? menu.submenu.some((item) =>
                      item.submenu
                          ? item.submenu.some(
                                (item) =>
                                    item.href.split("/")[1] ===
                                    pathname.split("/")[1]
                            )
                          : item.href.split("/")[1] === pathname.split("/")[1]
                  )
                : menu.href.split("/")[1] === pathname.split("/")[1]
        );

    return (
        <>
            <li
                className={`has-child ${
                    demos.some((elm) => elm.href == pathname)
                        ? "current-menu"
                        : ""
                }`}
            >
                <a href="#">Demos</a>
                <ul className="submenu">
                    {demos.map((item, index) => (
                        <li
                            key={index}
                            className={
                                pathname == item.href ? "current-menu-item" : ""
                            }
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </li>

            <li
                className={`has-child  ${
                    isParentActive(features) ? "current-menu" : ""
                } `}
            >
                <a href="#">Features</a>
                <ul className="submenu">
                    {features.map((menu, index) => (
                        <li
                            key={index}
                            className={`${menu.className || ""}  ${
                                isParentActive(menu.submenu || [])
                                    ? "current-menu-item"
                                    : ""
                            }   ${
                                menu.href?.split("/")[1] ==
                                pathname.split("/")[1]
                                    ? "current-menu-item"
                                    : ""
                            } `}
                        >
                            {menu.submenu ? (
                                <>
                                    <a href="#">{menu.title}</a>
                                    <ul className="submenu">
                                        {menu.submenu.map((item, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className={
                                                    item.href?.split("/")[1] ==
                                                    pathname.split("/")[1]
                                                        ? "current-menu-item"
                                                        : ""
                                                }
                                            >
                                                <Link href={item.href}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link href={menu.href}>{menu.label}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </li>

            <li className={"/about" == pathname ? "current-menu" : ""}>
                <Link href={`/about`}>About</Link>
            </li>

            <li className={"/contact" == pathname ? "current-menu" : ""}>
                <Link href={`/contact`}>Contact</Link>
            </li>
        </>
    );
}
