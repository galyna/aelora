import "./globals.css";
import Header from "./components/Header";
import { Montserrat_Alternates, Albert_Sans } from "next/font/google";

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${montserrat.variable} ${albertSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
