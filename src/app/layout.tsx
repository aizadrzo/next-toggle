import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/marketing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Toggle Solutions | Digital Marketing Agency",
  description:
    "People-first digital marketing agency helping SMEs and startups grow through smart strategy, data-driven campaigns, and creative execution.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* <SiteHeader /> */}
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
