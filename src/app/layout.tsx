import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Tojuco — The All-In-One Platform for Media Companies",
  description:
    "Tojuco brings ordering, scheduling, vendors, media delivery, billing, tour pages, feature sheets, and client portals into one white-label platform built for real estate media companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Script id="userback-widget" strategy="afterInteractive">
          {`
            window.Userback = window.Userback || {};
            Userback.access_token = "A-U52g4DkH4UpFfd4KdHLvBhFVqtvnqWhiP4MN3H93K9lkeDsGCZ";
            (function(d) {
              var s = d.createElement('script');s.async = true;s.src = 'https://static.userback.io/widget/v1.js';(d.head || d.body).appendChild(s);
            })(document);
          `}
        </Script>
      </body>
    </html>
  );
}
