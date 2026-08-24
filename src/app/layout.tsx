import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = localFont({
  variable: "--font-syne",
  display: "swap",
  src: [
    { path: "./fonts/Syne-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Syne-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Syne-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Syne-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Syne-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Joshua's Portfolio",
  description: "A modern portfolio to showcase my experience and skills to anyone looking for a capable developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
