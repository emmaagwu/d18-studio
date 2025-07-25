import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://d18studio.com"),
  title: {
    default: "D18 Studio – Web Design Agency",
    template: "%s | D18 Studio",
  },
  description:
    "D18 Studio is a modern web design agency crafting high-quality websites and mobile products that prioritize functionality, design, and user experience. We transform your ideas into engaging digital solutions that drive results.",
  keywords: [
    "D18 Studio",
    "Web Design",
    "UI/UX Design",
    "Web Development",
    "Mobile App Development",
    "Frontend Developer",
    "Next.js Agency",
    "Creative Studio",
    "Branding",
    "Lagos Web Design",
  ],
  applicationName: "D18 Studio",
  authors: [{ name: "D18 Studio", url: "https://d18studio.com" }],
  creator: "D18 Studio",
  publisher: "D18 Studio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
  colorScheme: "light",
  openGraph: {
    title: "D18 Studio – Web Design Agency",
    description:
      "We design and develop intuitive digital experiences that drive growth and brand impact.",
    url: "https://d18studio.com",
    siteName: "D18 Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://d18studio.com/og-image.jpg", // ✅ Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "D18 Studio - Web Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D18 Studio – Web Design Agency",
    description:
      "We design and develop intuitive digital experiences that drive growth and brand impact.",
    creator: "@D18_studio",
    images: ["https://d18studio.com/og-image.jpg"],
  },
  manifest: "/site.webmanifest",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      // maxSnippet: -1,
      // maxImagePreview: "large",
      // maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: "https://d18studio.com",
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
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
