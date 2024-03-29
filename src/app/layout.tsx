import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import ScrollUp from '@/components/ScrollUp'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <body className={inter.className}>
          <Navigation />
          <ScrollUp />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
