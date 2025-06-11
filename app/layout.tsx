import "./globals.css";
import Header from "./components/Header";
import { Metadata } from "next";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Aelora",
  description: "Sensory skincare rooted in stillness. Crafted with care in Ukraine.",
  icons: {
    icon: '/aelora_icon.ico',
  },
  openGraph: {
    title: "Aelora Botanicals",
    description: "Handmade skincare rituals. Clean, vegan, minimal.",
    url: "https://aelora.vercel.app", // замени при деплое
    siteName: "Aelora Botanicals",
    images: [
      {
        url: "/og-image.jpg", // помести красивую preview-картинку
        width: 1200,
        height: 630,
        alt: "Aelora Landing",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} bg-background`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
