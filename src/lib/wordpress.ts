/**
 * WordPress REST API Service
 * Provides functions to fetch and process WordPress blog posts
 */

const WORDPRESS_API_URL =
	process.env.NEXT_PUBLIC_WORDPRESS_API_URL
if (!WORDPRESS_API_URL) {
	throw new Error(
		'NEXT_PUBLIC_WORDPRESS_API_URL environment variable is not set'
	)
}

// WordPress REST API Response Types
interface WordPressAuthor {
	id: number
	name: string
	slug: string
}

interface WordPressMedia {
	id: number
	source_url: string
	alt_text: string
	media_details: {
		width: number
		height: number
		sizes?: Record<
			string,
			{
				source_url: string
				width: number
				height: number
			}
		>
	}
}

interface WordPressTerm {
	id: number
	name: string
	slug: string
	taxonomy: string
}

interface WordPressEmbedded {
	author?: WordPressAuthor[]
	'wp:featuredmedia'?: WordPressMedia[]
	'wp:term'?: WordPressTerm[][]
}

export interface WordPressPost {
	id: number
	date: string
	modified: string
	slug: string
	title: { rendered: string }
	content: { rendered: string }
	excerpt: { rendered: string }
	author: number
	featured_media: number
	categories: number[]
	tags: number[]
	status: string
	link: string
}

export interface WordPressPostWithEmbed extends WordPressPost {
	_embedded: WordPressEmbedded
}

export interface WordPressCategory {
	id: number
	name: string
	slug: string
}

export interface WordPressTag {
	id: number
	name: string
	slug: string
}

/**
 * Fetches multiple WordPress posts with pagination
 * @param limit - Maximum number of posts to fetch (default: 10)
 * @param page - Page number for pagination (default: 1)
 * @returns Array of WordPress posts with embedded data
 */
export async function getPosts(
	limit: number = 10,
	page: number = 1
): Promise<WordPressPostWithEmbed[]> {
	try {
		const url = `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&per_page=${limit}&page=${page}`
		const response = await fetch(url, {
			next: { revalidate: 60 }, // Revalidate every 60 seconds
		})

		if (!response.ok) {
			console.error(
				`WordPress API error: ${response.status} ${response.statusText}`
			)
			return []
		}

		const posts: WordPressPostWithEmbed[] = await response.json()
		return posts
	} catch (error) {
		console.error('Error fetching WordPress posts:', error)
		return []
	}
}

/**
 * Fetches a single WordPress post by slug
 * @param slug - Post slug
 * @returns WordPress post with embedded data or null if not found
 */
export async function getPostBySlug(
	slug: string
): Promise<WordPressPostWithEmbed | null> {
	try {
		const url = `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`
		const response = await fetch(url, {
			next: { revalidate: 60 }, // Revalidate every 60 seconds
		})

		if (!response.ok) {
			console.error(
				`WordPress API error: ${response.status} ${response.statusText}`
			)
			return null
		}

		const posts: WordPressPostWithEmbed[] = await response.json()

		if (!posts || posts.length === 0) {
			return null
		}

		return posts[0]
	} catch (error) {
		console.error(`Error fetching WordPress post by slug "${slug}":`, error)
		return null
	}
}

/**
 * Fetches a single WordPress post by ID
 * @param id - Post ID
 * @returns WordPress post with embedded data or null if not found
 */
export async function getPostById(
	id: number
): Promise<WordPressPostWithEmbed | null> {
	try {
		const url = `${WORDPRESS_API_URL}/wp-json/wp/v2/posts/${id}?_embed`
		const response = await fetch(url, {
			next: { revalidate: 60 }, // Revalidate every 60 seconds
		})

		if (!response.ok) {
			console.error(
				`WordPress API error: ${response.status} ${response.statusText}`
			)
			return null
		}

		const post: WordPressPostWithEmbed = await response.json()
		return post
	} catch (error) {
		console.error(`Error fetching WordPress post by ID "${id}":`, error)
		return null
	}
}

/**
 * Fetches all post slugs for static generation
 * @param limit - Maximum number of posts to fetch (default: 100)
 * @returns Array of post slugs
 */
export async function getAllPostSlugs(limit: number = 100): Promise<string[]> {
	try {
		const url = `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=${limit}&_fields=slug`
		const response = await fetch(url, {
			next: { revalidate: 3600 }, // Revalidate every hour for slugs
		})

		if (!response.ok) {
			console.error(
				`WordPress API error: ${response.status} ${response.statusText}`
			)
			return []
		}

		const posts: { slug: string }[] = await response.json()
		return posts.map((post) => post.slug).filter(Boolean)
	} catch (error) {
		console.error('Error fetching WordPress post slugs:', error)
		return []
	}
}

/**
 * Extracts author name from WordPress post embedded data
 * @param post - WordPress post with embedded data
 * @returns Author name or null if not found
 */
export function getAuthorName(
	post: WordPressPostWithEmbed
): string | null {
	if (!post._embedded?.author || post._embedded.author.length === 0) {
		return null
	}

	return post._embedded.author[0].name || null
}

/**
 * Extracts featured image URL from WordPress post embedded data
 * @param post - WordPress post with embedded data
 * @param size - Image size to retrieve (default: 'large')
 * @returns Featured image URL or null if not found
 */
export function getFeaturedImageUrl(
	post: WordPressPostWithEmbed,
	size: string = 'large'
): string | null {
	if (
		!post._embedded?.['wp:featuredmedia'] ||
		post._embedded['wp:featuredmedia'].length === 0
	) {
		return null
	}

	const media = post._embedded['wp:featuredmedia'][0]

	// Try to get the requested size, fallback to source_url
	if (media.media_details?.sizes?.[size]?.source_url) {
		return media.media_details.sizes[size].source_url
	}

	return media.source_url || null
}

/**
 * Extracts categories from WordPress post embedded data
 * @param post - WordPress post with embedded data
 * @returns Array of category objects
 */
export function getCategories(
	post: WordPressPostWithEmbed
): WordPressCategory[] {
	if (!post._embedded?.['wp:term'] || post._embedded['wp:term'].length === 0) {
		return []
	}

	// Find the categories array (taxonomy: 'category')
	const categories: WordPressCategory[] = []

	for (const termGroup of post._embedded['wp:term']) {
		for (const term of termGroup) {
			if (term.taxonomy === 'category') {
				categories.push({
					id: term.id,
					name: term.name,
					slug: term.slug,
				})
			}
		}
	}

	return categories
}

/**
 * Extracts tags from WordPress post embedded data
 * @param post - WordPress post with embedded data
 * @returns Array of tag objects
 */
export function getTags(post: WordPressPostWithEmbed): WordPressTag[] {
	if (!post._embedded?.['wp:term'] || post._embedded['wp:term'].length === 0) {
		return []
	}

	// Find the tags array (taxonomy: 'post_tag')
	const tags: WordPressTag[] = []

	for (const termGroup of post._embedded['wp:term']) {
		for (const term of termGroup) {
			if (term.taxonomy === 'post_tag') {
				tags.push({
					id: term.id,
					name: term.name,
					slug: term.slug,
				})
			}
		}
	}

	return tags
}

/**
 * Strips HTML tags from WordPress excerpt and truncates if needed
 * @param htmlExcerpt - HTML excerpt string from WordPress
 * @param maxLength - Maximum length of excerpt (default: no limit)
 * @returns Plain text excerpt
 */
export function getPlainExcerpt(
	htmlExcerpt: string,
	maxLength?: number
): string {
	if (!htmlExcerpt) {
		return ''
	}

	// Strip HTML tags
	let plainText = htmlExcerpt.replace(/<[^>]*>/g, '')

	// Decode HTML entities
	plainText = plainText
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&apos;/g, "'")

	// Trim whitespace
	plainText = plainText.trim()

	// Truncate if maxLength is provided
	if (maxLength && plainText.length > maxLength) {
		plainText = plainText.substring(0, maxLength).trim()
		// Add ellipsis if truncated
		if (plainText.length < htmlExcerpt.length) {
			plainText += '...'
		}
	}

	return plainText
}

/**
 * Calculates estimated reading time for WordPress post content
 * @param htmlContent - HTML content string from WordPress
 * @returns Reading time in minutes (e.g., "5 min read")
 */
export function calculateReadingTime(htmlContent: string): string {
	if (!htmlContent) {
		return '1 min read'
	}

	// Strip HTML tags
	const plainText = htmlContent.replace(/<[^>]*>/g, '')

	// Count words (split by whitespace)
	const words = plainText.trim().split(/\s+/).filter(Boolean)
	const wordCount = words.length

	// Average reading speed: 200 words per minute
	const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200))

	return `${readingTimeMinutes} min read`
}

