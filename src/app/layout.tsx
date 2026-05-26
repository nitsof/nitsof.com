import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HybridAnimations from "@/components/HybridAnimations";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const generalSans = localFont({
  src: [
    { path: "./fonts/general-sans-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/general-sans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/general-sans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/general-sans-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/general-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const switzer = localFont({
  src: [
    { path: "./fonts/switzer-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/switzer-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/switzer-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/switzer-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/switzer-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NITSOF – AI Software Delivery for Businesses",
  description:
    "NITSOF helps businesses of all sizes innovate and ship software faster using AI. Explore our products and see what AI-powered software delivery looks like in practice.",
  openGraph: {
    type: "website",
    url: "https://nitsof.com",
    title: "NITSOF – AI Software Delivery for Businesses",
    description:
      "NITSOF helps businesses of all sizes innovate and ship software faster using AI. Explore our products and see what AI-powered software delivery looks like in practice.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NITSOF – AI Software Delivery for Businesses",
    description:
      "NITSOF helps businesses of all sizes innovate and ship software faster using AI. Explore our products and see what AI-powered software delivery looks like in practice.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${generalSans.variable} ${switzer.variable}`}>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-15C8MLCLC5"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-15C8MLCLC5');
          `}
        </Script>
        <div id="scroll-progress" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />
        <HybridAnimations />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
