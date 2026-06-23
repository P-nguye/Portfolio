import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "Tien Phong Nguyen — Full-Stack Developer & AI Engineer",
  description:
    "Computer Science graduate from UBC Okanagan specializing in full-stack web development (Next.js, TypeScript, React) and AI engineering (computer vision, machine learning). Available for software engineering roles.",
  keywords: [
    "Tien Phong Nguyen",
    "Phong Nguyen",
    "Full-Stack Developer",
    "AI Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "UBC Okanagan",
    "Software Engineer",
    "Computer Science",
  ],
  authors: [{ name: "Tien Phong Nguyen" }],
  creator: "Tien Phong Nguyen",
  openGraph: {
    type: "website",
    title: "Tien Phong Nguyen — Full-Stack Developer & AI Engineer",
    description:
      "CS graduate from UBC Okanagan building scalable full-stack apps and AI-powered solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tien Phong Nguyen Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tien Phong Nguyen — Full-Stack Developer & AI Engineer",
    description:
      "CS graduate from UBC Okanagan building scalable full-stack apps and AI-powered solutions.",
    images: ["/og-image.png"],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-base text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
