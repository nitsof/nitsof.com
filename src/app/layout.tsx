import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageAnimations from "@/components/PageAnimations";

export const viewport: Viewport = {
  themeColor: "#07080B",
};

export const metadata: Metadata = {
  title: "NITSOF — Software, shipped at the speed of thought.",
  description:
    "An AI-native software studio. Four disciplines, one team. Australia · Worldwide.",
  openGraph: {
    type: "website",
    url: "https://nitsof.com",
    title: "NITSOF — Software, shipped at the speed of thought.",
    description:
      "An AI-native software studio. Currently open for Q3 engagements. Australia · Worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NITSOF — Software, shipped at the speed of thought.",
    description: "An AI-native software studio. Australia · Worldwide.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        {/* General Sans + Switzer via FontShare — not available through next/font */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&f[]=switzer@300,400,500,600,700&display=swap"
        />
      </head>
      <body>
        <div id="scroll-progress" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />
        <PageAnimations />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
