import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"
import "./layout.module.css"
import NavBar from "@/components/layout/Navbar/Navbar";

// Inter — self-hosted by Next.js (no external request at runtime).
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aryan Manandhar | Portfolio",
  description: "Personal portfolio website for Aryan Manandhar, built with Next.js, TypeScript, and CSS modules.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
