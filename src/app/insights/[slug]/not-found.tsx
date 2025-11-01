import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-foreground mb-4">
						Article Not Found
					</h1>
					<p className="text-muted-foreground mb-8">
						The article you're looking for doesn't exist or may have been moved.
					</p>
					<div className="flex gap-4 justify-center">
						<Button asChild>
							<Link href="/insights">Back to Insights</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="/">Go Home</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

