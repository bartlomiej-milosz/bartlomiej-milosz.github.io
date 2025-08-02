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
	website: "https://bartlomiej-milosz.github.io",
	title: "Bartłomiej Miłosz",
	subtitle: "Architect → Analytics | Better Decisions Through Data",
	description:
		"Portfolio of Bartłomiej Miłosz - Architect transitioning to data analytics. Combining client consulting experience with growing technical skills in Python and Excel. Currently studying Computer Science at PJATK.",
	image: {
		src: "/hero.webp",
		alt: "Bartłomiej Miłosz - From Architecture to Analytics Portfolio",
	},
	headerNavLinks: [
		{
			text: "Home",
			href: "/",
		},
		{
			text: "Projects",
			href: "/projects",
		},
		{
			text: "Blog",
			href: "/blog",
		},
		{
			text: "About",
			href: "/about",
		},
        {
			text: "Contact",
			href: "/contact",
		}
	],
	footerNavLinks: [
		{
			text: "About",
			href: "/about",
		},
		{
			text: "Contact",
			href: "/contact",
		},
		{
			text: "Tags",
			href: "/tags",
		},
		{
			text: "Terms",
			href: "/terms",
		},
	],
	socialLinks: [
		{
			text: "Linkedin",
			href: "https://www.linkedin.com/in/bart%C5%82omiej-mi%C5%82osz-76015b1ba/",
		},
		{
			text: "Github",
			href: "https://github.com/bartlomiej-milosz",
		},
	],
	hero: {
		title: "From Living Solutions to Data Insights",
		text: `I transform complex requirements into clear solutions. **Over 4 years in architecture**, I helped families optimize their most important investment—their homes.

Now I'm applying the same analytical thinking to help businesses optimize their most valuable asset—their data.

My unique approach combines systematic problem-solving with stakeholder communication skills that most junior analysts lack. Currently expanding my technical toolkit through **Computer Science studies at PJATK** while leveraging proven experience in requirements analysis, project coordination, and translating complex information into actionable insights.

**Ready to bring architectural precision to data challenges.**`,
		image: {
			src: "/hero.webp",
			alt: "Bartłomiej Miłosz - Architect transitioning to Data Analytics",
		},
		actions: [
			{
				text: "Get in Touch",
				href: "/contact",
			},
			{
				text: "View Resume",
				href: "/resume",
			},
		],
	},
	subscribe: {
		title: "Follow My Analytics Journey",
		text: "Get updates on my projects and insights as I build expertise in data analytics.",
		formUrl: "#",
	},
	postsPerPage: 6,
	projectsPerPage: 6,
};

export default siteConfig;
