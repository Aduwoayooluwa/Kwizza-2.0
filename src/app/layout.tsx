import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers"
import {
  ClerkProvider,
  SignedIn, SignedOut
} from '@clerk/nextjs'

import "./globals.css";
import { Sidebar } from "@/layout/sidebar";

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
     <ClerkProvider>
    <html lang='en'>
      <body className={inter.className}>
          <Providers>
            {/* <SignedOut> */}
              {/* <Sidebar> */}
                {/* { children} */}
              {/* </Sidebar> */}
            {/* </SignedOut> */}
            {/* <SignedOut> */}
              {children}
            {/* </SignedOut> */}
</Providers>
      </body>
    </html>
  </ClerkProvider>
  );
}
