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
		"Portfolio of Bartłomiej Miłosz - Architect transitioning to data analytics. Combining client consulting experience with growing technical skills in Python, SQL, and Excel. Currently studying Computer Science at PJATK.",
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
		},
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
			href: "https://linkedin.com/in/bartlomiej-milosz",
		},
		{
			text: "Github",
			href: "https://github.com/bartlomiej-milosz",
		},
		{
			text: "Twitter/X",
			href: "https://x.com/MiOmiej",
		},
	],
	hero: {
		title: "From Living Solutions to Data Insights",
		text: `I've spent 4+ years helping families make their **biggest investment decisions**—designing homes that work for their lives.

Now I'm applying that same **analytical approach** to help businesses make sense of their data.

Architecture taught me how to break down complex problems, communicate clearly with stakeholders, and turn requirements into solutions. I'm building on this foundation with **Computer Science studies at PJATK** and hands-on experience in Python and Excel.

**Ready to bring systematic thinking to your data challenges.**`,
		image: {
			src: "/hero.webp",
			alt: "Bartłomiej Miłosz - Architect transitioning to Data Analytics",
		},
		actions: [
			{
				text: "Get in Touch",
				href: "/contact",
			},
			// {
			// 	text: "View Resume",
			// 	href: "/resume",
			// },
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
