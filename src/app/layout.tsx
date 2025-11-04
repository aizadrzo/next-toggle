import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/marketing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toggle Solutions | Digital Marketing Agency",
  description:
    "People-first digital marketing agency helping SMEs and startups grow through smart strategy, data-driven campaigns, and creative execution.",
  keywords: [
    "digital marketing",
    "performance marketing",
    "content marketing",
    "branding",
    "web development",
    "Malaysia",
  ],
  authors: [{ name: "Toggle Solutions" }],
  creator: "Toggle Solutions",
  publisher: "Toggle Solutions",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://togglesolutions.com",
    title: "Toggle Solutions | Digital Marketing Agency Malaysia",
    description:
      "People-first digital marketing agency helping SMEs and startups grow through smart strategy, data-driven campaigns, and creative execution.",
    siteName: "Toggle Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toggle Solutions | Digital Marketing Agency Malaysia",
    description:
      "People-first digital marketing agency helping SMEs and startups grow through smart strategy, data-driven campaigns, and creative execution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
