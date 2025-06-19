import "./globals.css";
import Header from "./components/Header";
import { Metadata } from "next";
import Footer from "./components/Footer";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { siteConfig } from "./lib/config";

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-dm-serif'
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Aelora – Skincare Inspired by Nature',
  description: 'Aelora is a modern skincare brand rooted in nature, offering mindful formulations for face and body with a focus on purity, balance, and ritual.',
  openGraph: {
    title: 'Aelora – Skincare Inspired by Nature',
    description: 'Discover Aelora: natural skincare rituals for radiant skin. Vegan, award-winning, and consciously formulated for daily care.',
    url: siteConfig.url,
    siteName: 'Aelora',
    images: [
      {
        url: `${siteConfig.url}/og-preview.jpg`,
        width: 1200,
        height: 630,
        alt: 'Aelora – Natural Skincare',
      },
    ],
    locale: 'en_US',
    type: 'website',
    
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aelora – Skincare Inspired by Nature',
    description: 'Discover mindful skincare rituals with Aelora. Vegan, clean, and nature-inspired.',
    images: [`${siteConfig.url}/og-preview.jpg`],
  },
  metadataBase: new URL(siteConfig.url),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable} bg-background`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
