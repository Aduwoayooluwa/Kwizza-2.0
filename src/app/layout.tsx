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
     
    <html lang='en'>
      <body className={inter.className}>
        <ClerkProvider>
          <Providers>
            
            {children}
        </Providers>
          </ClerkProvider>
      </body>
    </html>

  );
}

{/* <SignedOut> */}
              {/* <Sidebar> */}
                {/* { children} */}
              {/* </Sidebar> */}
            {/* </SignedOut> */}
            {/* <SignedOut> */}
              
            {/* </SignedOut> */}