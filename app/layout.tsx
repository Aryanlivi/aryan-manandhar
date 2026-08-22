import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"
import "./layout.module.css"
import NavBar from "@/components/layout/Navbar/Navbar";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aryan Manandhar | Portfolio",
  description: "Personal portfolio website for Aryan Manandhar, built with Next.js, TypeScript, and CSS modules.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
