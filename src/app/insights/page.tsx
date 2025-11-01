import { InsightsListClient } from './insights-list-client'
import { getPosts } from '@/lib/wordpress'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

async function InsightsListServer() {
	const posts = await getPosts(100) // Fetch up to 100 posts initially

	return <InsightsListClient initialPosts={posts} />
}

function InsightsListSkeleton() {
	return (
		<div className="min-h-screen bg-background">
			<section className="relative py-24 sm:py-32">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<Skeleton className="h-6 w-32 mx-auto mb-8" />
						<Skeleton className="h-16 w-full max-w-2xl mx-auto mb-6" />
						<Skeleton className="h-6 w-full max-w-xl mx-auto" />
					</div>
				</div>
			</section>
			<section className="py-12 bg-muted/50">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-4xl">
						<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
							<Skeleton className="h-10 w-64" />
							<Skeleton className="h-10 w-48" />
						</div>
					</div>
				</div>
			</section>
			<section className="py-24">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{Array.from({ length: 6 }).map((_, i) => (
							<Skeleton key={i} className="h-96 w-full" />
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default function InsightsPage() {
	return (
		<Suspense fallback={<InsightsListSkeleton />}>
			<InsightsListServer />
		</Suspense>
	)
}
