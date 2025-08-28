import { getCollection, type CollectionEntry } from 'astro:content'

/**
 * Get all posts, filtering out posts whose filenames start with _
 */
export async function getFilteredPosts() {
  const posts = await getCollection('posts')
  return posts.filter((post: CollectionEntry<'posts'>) => !post.id.startsWith('_'))
}

/**
 * Get all posts sorted by publication date, filtering out posts whose filenames start with _
 */
export async function getSortedFilteredPosts() {
  const posts = await getFilteredPosts()
  return posts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}

/**
 * Get only pinned posts, sorted by publication date
 */
export async function getPinnedPosts() {
  const posts = await getFilteredPosts()
  return posts
    .filter((post: CollectionEntry<'posts'>) => post.data.pinned === true)
    .sort(
      (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
        b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    )
}

/**
 * Get recent posts (non-pinned), useful for fallback
 */
export async function getRecentPosts(limit: number = 5) {
  const posts = await getFilteredPosts()
  return posts
    .filter((post: CollectionEntry<'posts'>) => post.data.pinned !== true)
    .sort(
      (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
        b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    )
    .slice(0, limit)
}

// Projects utility functions

/**
 * Get all projects, filtering out projects whose filenames start with _
 */
export async function getFilteredProjects() {
  const projects = await getCollection('projects')
  return projects.filter((project: CollectionEntry<'projects'>) => !project.id.startsWith('_'))
}

/**
 * Get all projects sorted by publication date, filtering out projects whose filenames start with _
 */
export async function getSortedFilteredProjects() {
  const projects = await getFilteredProjects()
  return projects.sort(
    (a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}

/**
 * Get only featured projects, sorted by publication date
 */
export async function getFeaturedProjects() {
  const projects = await getFilteredProjects()
  return projects
    .filter((project: CollectionEntry<'projects'>) => project.data.featured === true)
    .sort(
      (a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>) =>
        b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    )
}

/**
 * Get recent projects (non-featured), useful for fallback
 */
export async function getRecentProjects(limit: number = 3) {
  const projects = await getFilteredProjects()
  return projects
    .filter((project: CollectionEntry<'projects'>) => project.data.featured !== true)
    .sort(
      (a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>) =>
        b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    )
    .slice(0, limit)
}
