import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YT Robin",
  description: "YouTube title and thumbnail guessing game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-596NB5Q5LL"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "G-596NB5Q5LL");
          `}
        </Script> */}
      </head>
      <body className={inter.className}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
