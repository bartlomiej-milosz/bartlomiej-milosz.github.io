export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
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
    subtitle: 'Data Analyst & Python Developer',
    description: 'Portfolio and blog of Bartłomiej Miłosz - Data Analyst specializing in Python, machine learning, and business intelligence. Explore my data science projects and analytical insights.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Bartłomiej Miłosz - Data Analyst Portfolio'
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
        title: 'Data-Driven Insights, Business-Focused Solutions',
        text: "I'm **Bartłomiej Miłosz**, an aspiring data analyst passionate about transforming raw data into actionable business insights. I specialize in Python, SQL, and machine learning to solve real-world problems. Currently seeking my first role in data analysis where I can apply my analytical skills and drive data-informed decision making. Explore my <a href='/projects'>portfolio projects</a> or connect with me on <a href='https://linkedin.com/in/your-profile'>LinkedIn</a>.",
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
                text: 'Download Resume',
                href: '/resume.pdf'
            }
        ]
    },
    subscribe: {
        title: 'Stay Updated on Data Insights',
        text: 'Get notified when I publish new data analysis projects and analytical insights.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};

export default siteConfig;
