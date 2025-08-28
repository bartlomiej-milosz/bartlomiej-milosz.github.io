import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      pinned: z.boolean().optional(),
      image: z.string().optional()
    })
})

const about = defineCollection({
  // Load Markdown files in the `src/content/about/` directory.
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: () => z.object({})
})

const contact = defineCollection({
  // Load Markdown files in the `src/content/contact/` directory.
  loader: glob({ base: './src/content/contact', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: () => z.object({})
})

const projects = defineCollection({
  // Load Markdown files in the `src/content/projects/` directory.
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      pinned: z.boolean().optional(),
      image: z.string().optional(),
      tech: z.array(z.string()).optional(),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      featured: z.boolean().optional()
    })
})

export const collections = { posts, about, contact, projects }
