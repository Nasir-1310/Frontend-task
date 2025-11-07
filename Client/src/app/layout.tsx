// src/app/layout.tsx

import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f172a" />
        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
      </head>

      <body
        className={`${notoSans.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
