import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import "../../styles/globals.css";


const geistSans = Geist({
  variable: '--font-geits-sans',
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ropa",
  description: "Created by Next.js cohort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}