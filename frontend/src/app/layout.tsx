import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Legal Document Search Portal | Legal Assistant",
  description: "Search and analyze legal documents with modern technology. Find relevant cases, get instant summaries, and explore legal precedents.",
  keywords: ["legal", "document", "search", "case law", "legal assistant"],
  authors: [{ name: "Rafiuzzamanrion" }],
  creator: "Rafiuzzamanrion",
  publisher: "Rafiuzzamanrion",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3000",
    title: "Legal Document Search Portal",
    description: "Legal Assistant Tool",
    siteName: "Legal Document Search Portal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4F46E5" />
    </head>
    <body className={inter.className} suppressHydrationWarning>
    {children}
    </body>
    </html>
  );
}