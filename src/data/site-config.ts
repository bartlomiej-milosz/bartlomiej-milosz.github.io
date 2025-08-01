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
    subtitle: 'Architect → Analytics | Better Decisions Through Data',
    description: 'Portfolio of Bartłomiej Miłosz - Architect transitioning to data analytics. Combining client consulting experience with growing technical skills in Python and Excel. Currently studying Computer Science at PJATK.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Bartłomiej Miłosz - From Architecture to Analytics Portfolio'
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
            href: 'https://www.linkedin.com/in/bart%C5%82omiej-mi%C5%82osz-76015b1ba/'
        },
        {
            text: 'Github',
            href: 'https://github.com/bartlomiej-milosz'
        },
    ],
    hero: {
        title: 'From Living Solutions to Data Insights',
        text: "I solve problems through analysis. Previously, I helped individual clients optimize their spaces and budgets. Now I'm building technical skills to help businesses optimize through data - driving customer insights, product improvements, and strategic growth. Currently studying Computer Science at PJATK and developing analytics expertise.",
        image: {
            src: '/hero.jpeg',
            alt: 'Bartłomiej Miłosz - Architect transitioning to Data Analytics'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            },
            {
                text: 'View Resume',
                href: '/resume',
            }
        ]
    },
    subscribe: {
        title: 'Follow My Analytics Journey',
        text: 'Get updates on my projects and insights as I build expertise in data analytics.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};

export default siteConfig;
