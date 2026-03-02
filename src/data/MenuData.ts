
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        title: "About Us",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/about", title: "Mission / Vision" },
            { link: "/service", title: "Become a Planners / Volunteer" },
            { link: "/faq", title: "FAQ" },
            { link: "/contact", title: "Contact" },
            { link: "/service-details", title: "Awards & Recognitions" },
        ],
    },
    {
        id: 3,
        title: "Plans",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/portfolio-two-columns", title: "Share A Plan" },
            { link: "/portfolio-three-columns", title: "Citizen Voice" },
            { link: "/portfolio-four-columns", title: "Education and Digital Learning" },
            { link: "/portfolio-random", title: "Youth and Skill Development" },
            { link: "/blog", title: "Women" },
            { link: "/blog-sidebar", title: "Environment" },
            { link: "/blog-details", title: "Governance and Advocacy" },
        ],
    },
    {
        id: 4,
        title: "Updates",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/blog", title: "Blog" },
            { link: "/blog-sidebar", title: "News" },
        ],
    },
    {
        id: 5,
        title: "Our Work",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/portfolio-details", title: "Current Project" },
            { link: "/portfolio-showcase", title: "Complete Project" },
            { link: "/shop", title: "Gallery" },
        ],
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Donate",
        link: "/contact",
    },
];

export default menu_data;