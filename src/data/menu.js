export const demos = [
    { href: "/", label: "Demo 1", isCurrent: true },
    { href: "/demo-02", label: "Demo 2" },
    { href: "/demo-03", label: "Demo 3" },
];

export const features = [
    {
        title: "Post Headers",
        className: "has-child",
        submenu: [
            { href: "/single-post", label: "Stander" },
            { href: "/single-post-split", label: "Split" },
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
