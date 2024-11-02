import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Go Trip",
  description: "Book Your Trip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" type="icon"></link>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
