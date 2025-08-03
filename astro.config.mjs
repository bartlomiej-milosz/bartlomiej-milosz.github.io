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
		// Headers dla development i production
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
		sitemap({
			// Opcjonalne: customize sitemap generation
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		})
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: "vitesse-light",
				dark: "vitesse-dark",
			},
		},
	},
	// Dodatkowe optimizations
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto'
	}
});
