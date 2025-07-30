export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    target?: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://bartlomiej-milosz.github.io',
    title: 'Bartłomiej Miłosz',
    subtitle: 'Architect | Aspiring Data Analyst',
    description: 'Portfolio of Bartłomiej Miłosz - Architect learning data analysis with Python and Excel. Currently studying Computer Science at PJATK and building analytical skills for career transition.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Bartłomiej Miłosz - Architect transitioning to Data Analytics'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: ''
        },
        {
            text: 'Github',
            href: ''
        },
    ],
    hero: {
        title: 'From Design to Data: Building Analytical Solutions',
        text: "I'm **Bartłomiej Miłosz**, an interior architect transitioning into data analytics. I combine my business consulting background with growing technical skills in Python and Excel to solve problems through data. Currently studying Computer Science at PJATK and actively building my analytical skillset. Check out my <a href='/projects'>learning projects</a> or connect with me on <a href='#'>LinkedIn</a>.",
        image: {
            src: '/hero.jpeg',
            alt: ''
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            },
            {
                text: 'View Projects',
                href: '/projects'
            },
            {
                text: 'View Resume',
                href: '/resume',
            }
        ]
    },
    subscribe: {
        title: 'Follow My Data Journey',
        text: 'Get updates on my learning progress and data analysis projects as I transition into tech.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};

export default siteConfig;
