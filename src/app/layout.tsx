import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kwizza - 2.0",
  description: "Take, and Create your Audio Based Quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang='en' suppressHydrationWarning={true}>
      <body className={inter.className}>
          <Providers> 
               { children} 
        </Providers>
      </body>
    </html>
  );
}

