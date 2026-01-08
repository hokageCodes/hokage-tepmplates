import "../app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Modern Launch Templates",
  description: "Clean website templates to help you launch without overthinking.",
  keywords: [
    "Next.js templates",
    "Tailwind CSS",
    "website templates",
    "landing page",
    "portfolio",
    "open source",
    "react",
    "startup",
    "developer portfolio",
    "coach website",
    "event landing page"
  ],
  authors: [{ name: "Hokage Creative Labs" }],
  openGraph: {
    title: "Modern Launch Templates",
    description: "Clean website templates to help you launch without overthinking.",
    url: "https://hokage-templates.vercel.app",
    siteName: "Hokage Creative Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modern Launch Templates by Hokage Creative Labs"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Launch Templates",
    description: "Clean website templates to help you launch without overthinking.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-50 text-neutral-900 font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}