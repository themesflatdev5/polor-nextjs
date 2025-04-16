export const demos = [
    { href: "/", label: "Demo 1", isCurrent: true },
    { href: "/demo02", label: "Demo 2" },
    { href: "/demo03", label: "Demo 3" },
];

export const features = [
    {
        title: "Post Headers",
        className: "has-child",
        submenu: [
            { href: "/single-post/1", label: "Stander" },
            { href: "/single-post-split-header/1", label: "Split" },
        ],
    },
    {
        title: "Categories",
        className: "has-child",
        submenu: [
            { href: "/categories-grid", label: "Stander" },
            { href: "/categories-overlay", label: "overlay" },
        ],
    },
];
