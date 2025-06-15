import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gorillaz",
  description: "Gorillaz was created in 1998 by Damon Albarn and Jamie Hewlett as a virtual band that blends music and animation. It began as a critique of the mainstream music industry and features animated characters: 2-D, Murdoc, Noodle, and Russel. Their style mixes rock, hip-hop, and electronic music, redefining the digital music scene.", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Open Graph */}
        <meta property="og:title" content="Gorillaz Concept Website" />
        <meta property="og:description" content="Fan Concept: A Tribute to Gorillaz" />
        <meta property="og:image" content="/SEO.gif" />
        <meta property="og:url" content="https://gorillaz-five.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gorillaz Concept Website" />
        <meta name="twitter:description" content="Fan Concept: A Tribute to Gorillaz" />
        <meta name="twitter:image" content="/SEO.gif" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
