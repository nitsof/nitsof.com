import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "NITSOF — Software, shipped at the speed of thought.",
  description:
    "An AI-native software studio. Four disciplines, one team. Australia · Worldwide. Currently open for Q3 engagements.",
  openGraph: {
    type: "website",
    url: "https://nitsof.com",
    title: "NITSOF — Software, shipped at the speed of thought.",
    description:
      "An AI-native software studio. Australia · Worldwide. Currently open for Q3 engagements.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NITSOF — Software, shipped at the speed of thought.",
    description: "An AI-native software studio. Australia · Worldwide.",
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
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&f[]=switzer@300,400,500,600,700&display=swap"
        />
      </head>
      <body>
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
