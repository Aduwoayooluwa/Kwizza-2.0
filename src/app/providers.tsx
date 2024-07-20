'use client'

import Navbar from '@/layout/navigation'
import SignedInNavbar from "@/layout/signedin-nav"
import { SignedIn, SignedOut, useAuth } from '@clerk/nextjs'
import {NextUIProvider} from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();



  return (
    <NextUIProvider>
      {
        isSignedIn ? (
           <SignedInNavbar />
        ) : <Navbar />
      }

      {children}
    </NextUIProvider>
  )
}