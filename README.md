# Bartłomiej Miłosz - Personal Portfolio

A modern, responsive portfolio website showcasing my journey from interior architecture to data analytics. Built with Astro.js and Tailwind CSS, featuring a clean design with dark/light mode support.

![Portfolio Preview Light](public/bm-preview-light.jpg)
![Portfolio Preview Dark](public/bm-preview-dark.jpg)

🌐 **Live Demo:** [https://bartlomiej-milosz.github.io](https://bartlomiej-milosz.github.io)

## About Me

I'm **Bartłomiej Miłosz**, an interior architect transitioning into data analytics. I combine my business consulting background with growing technical skills in Python, Excel, and data analysis to solve problems through data. Currently studying Computer Science at PJATK and actively building my analytical skillset.

## Features

- ✅ **Responsive Design** - Mobile-first approach with modern UI
- ✅ **Dark/Light Mode** - Toggle between themes with smooth transitions
- ✅ **Portfolio Showcase** - Dedicated sections for projects and case studies
- ✅ **Blog Integration** - Share insights and learning journey
- ✅ **SEO Optimized** - Meta tags, sitemap, and OpenGraph support
- ✅ **Fast Performance** - Built with Astro.js for optimal loading speeds
- ✅ **Multi-language Support** - Content available in Polish and English

## Tech Stack

### Frontend Framework
- **[Astro.js](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript

### UI & Styling
- **Lato** - Primary sans-serif font family
- **Lora Variable** - Serif font for headings
- **JetBrains Mono** - Monospace font for code
- **Custom CSS Variables** - Theme system for dark/light modes

### Content Management
- **Markdown/MDX** - Content authoring with component support
- **Content Collections** - Type-safe content management
- **Static Assets** - Optimized image handling

## Project Structure

```text
├── public/                 # Static assets
│   ├── bm-preview-light.jpg
│   ├── bm-preview-dark.jpg
│   └── ...
├── src/
│   ├── components/         # Reusable UI components
│   ├── content/           # Markdown content
│   │   ├── blog/          # Blog posts
│   │   ├── pages/         # Static pages
│   │   └── projects/      # Portfolio projects
│   ├── data/              # Site configuration
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages
│   ├── styles/            # Global styles and themes
│   └── utils/             # Helper functions
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bartlomiejMilosz/bartlomiej-milosz.github.io.git
   cd bartlomiej-milosz.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Build Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## Content Management

### Adding Blog Posts
Create new `.md` or `.mdx` files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
publishDate: "2024-08-02"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Adding Projects
Create new project files in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
publishDate: "2024-08-02"
isFeatured: true
seo:
  image:
    src: "/project-image.jpg"
    alt: "Project screenshot"
---

Project details and case study...
```

### Customizing Site Configuration
Edit `src/data/site-config.ts` to update:
- Site metadata and SEO
- Navigation links
- Social media links
- Hero section content
- Contact information

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions. Every push to the main branch triggers a new deployment.

### Manual Deployment
```bash
npm run build
# Deploy the ./dist/ folder to your hosting provider
```

## Customization

### Color Themes
The site supports multiple color schemes. Edit `src/styles/global.css` to customize:
- Default (current): Warm beige/cream theme
- Cyan: Cool blue-green theme (commented out)
- Green: Nature-inspired theme (commented out)

### Typography
Font families are configured in:
- `src/styles/global.css` - Font imports and CSS variables
- `tailwind.config.mjs` - Tailwind font family classes

## Based On

This portfolio is built upon the excellent [Dante theme](https://github.com/JustGoodUI/dante-astro-theme) by [JustGoodUI](https://justgoodui.com/), customized for my personal brand and content needs.

## Contact

**Bartłomiej Miłosz**
- 📧 Email: [bartlomiej.milosz@gmail.com](mailto:bartlomiej.milosz@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/bartłomiej-miłosz](https://linkedin.com/in/bartłomiej-miłosz)
- 🐙 GitHub: [github.com/bartlomiejMilosz](https://github.com/bartlomiejMilosz)
- 📍 Location: Warsaw, Poland

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Interested in data analytics, Python programming, or architecture? Feel free to reach out or explore my projects!*