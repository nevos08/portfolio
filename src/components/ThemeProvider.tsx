'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
