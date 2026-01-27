import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AD4TEC | Smart Access & Electronic Gate Systems",
    template: "%s | AD4TEC",
  },
  description:
    "AD4TEC provides smart electronic gate systems and access control solutions for parking garages, factories, compounds, and large facilities. Reliable security, durable manufacturing, and professional installation.",
  keywords: [
    "AD4TEC",
    "electronic gates",
    "parking gate systems",
    "access control systems",
    "car barriers",
    "turnstile gates",
    "parking management",
    "security systems Egypt",
    "industrial access control",
  ],
  authors: [{ name: "AD4TEC" }],
  creator: "AD4TEC",
  publisher: "AD4TEC",

  metadataBase: new URL("https://ad4tec.com"), 

  openGraph: {
    title: "AD4TEC | Smart Access & Electronic Gate Systems",
    description:
      "Smart and reliable electronic gate systems for secure and organized vehicle and personnel access.",
    url: "https://ad4tec.com",
    siteName: "AD4TEC",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "AD4TEC Electronic Gate Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AD4TEC | Smart Access & Electronic Gate Systems",
    description:
      "Advanced electronic gates and access control solutions for vehicles and individuals.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
