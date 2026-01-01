import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/footer-four";
import { Navbar } from "@/components/navbar";

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
        <Navbar />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
