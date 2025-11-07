// src/app/layout.tsx

import { Noto_Sans } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Athlete Program Dashboard",
  description: "Your description here",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${notoSans.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}