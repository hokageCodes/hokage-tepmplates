import "../app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Modern Launch Templates",
  description: "Clean website templates to help you launch without overthinking.",
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