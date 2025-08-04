import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import siteConfig from "./src/data/site-config";

// https://astro.build/config
export default defineConfig({
	site: siteConfig.website,
	vite: {
		plugins: [tailwindcss()],
		server: {
			headers: {
				"Permissions-Policy": "browsing-topics=(), interest-cohort=(), camera=(), microphone=(), geolocation=()"
			}
		},
		preview: {
			headers: {
				"Permissions-Policy": "browsing-topics=(), interest-cohort=(), camera=(), microphone=(), geolocation=()"
			}
		}
	},
	integrations: [
		mdx(), 
		sitemap()
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: "vitesse-light",
				dark: "vitesse-dark",
			},
		},
	},
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto'
	}
});
