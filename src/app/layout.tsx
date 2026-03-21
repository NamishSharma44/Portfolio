import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";

import { UiEnhancements } from "@/components/ui-enhancements";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Namish Sharma | Digital Portfolio",
  description:
    "Dark-themed interactive portfolio showcasing projects, skills, certifications, experience, publications, and resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${syne.variable} antialiased`}>
        <UiEnhancements />
        {children}
      </body>
    </html>
  );
}
