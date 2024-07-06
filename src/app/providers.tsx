'use client'

import Navbar from '@/layout/navigation'
import { useAuth } from '@clerk/nextjs'
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {


  return (
    <NextUIProvider>
      <Navbar />
      {children}
    </NextUIProvider>
  )
}