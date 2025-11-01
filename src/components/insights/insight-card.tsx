import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Calendar,
	Clock,
	ArrowRight,
	BookOpen,
} from 'lucide-react'
import type { WordPressPostWithEmbed } from '@/lib/wordpress'
import {
	getAuthorName,
	getFeaturedImageUrl,
	getCategories,
	getPlainExcerpt,
	calculateReadingTime,
} from '@/lib/wordpress'

interface InsightCardProps {
	post: WordPressPostWithEmbed
}

export function InsightCard({ post }: InsightCardProps) {
	const featuredImage = getFeaturedImageUrl(post)
	const author = getAuthorName(post)
	const categories = getCategories(post)
	const excerpt = getPlainExcerpt(post.excerpt.rendered)
	const readingTime = calculateReadingTime(post.content.rendered)
	const publishedDate = new Date(post.date).toLocaleDateString()

	return (
		<Card className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
			<CardHeader>
				<div className="flex items-center justify-between mb-4">
					{categories.length > 0 && (
						<Badge variant="outline">{categories[0].name}</Badge>
					)}
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<Clock className="h-4 w-4" />
						{readingTime} min read
					</div>
				</div>
				<CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
					{post.title.rendered}
				</CardTitle>
				<p className="text-base text-muted-foreground line-clamp-3 mt-2">
					{excerpt}
				</p>
			</CardHeader>
			{featuredImage && (
				<div className="relative w-full h-48 overflow-hidden">
					<Image
						src={featuredImage}
						alt={post.title.rendered}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-300"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			)}
			<CardContent className="mt-4 flex-1 flex flex-col justify-between">
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
								<BookOpen className="h-4 w-4 text-primary" />
							</div>
							<div>
								{author && (
									<p className="text-sm font-medium text-foreground">
										{author}
									</p>
								)}
								<div className="flex items-center gap-1 text-xs text-muted-foreground">
									<Calendar className="h-3 w-3" />
									{publishedDate}
								</div>
							</div>
						</div>
						<Link
							href={`/insights/${post.slug}`}
							className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:gap-2 transition-all"
						>
							Read more
							<ArrowRight className="ml-1 h-4 w-4" />
						</Link>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

