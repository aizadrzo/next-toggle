import type { NextConfig } from 'next'

function getWordPressRemotePatterns() {
	const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

	if (!wordpressUrl) {
		return []
	}

	try {
		const url = new URL(wordpressUrl)
		return [
			{
				protocol: url.protocol.slice(0, -1) as 'http' | 'https',
				hostname: url.hostname,
				port: url.port || '',
				pathname: '/**',
			},
		]
	} catch {
		return []
	}
}

const nextConfig: NextConfig = {
	images: {
		remotePatterns: getWordPressRemotePatterns(),
	},
}

export default nextConfig
