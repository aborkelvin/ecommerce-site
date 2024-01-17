import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopHeader from '@/components/TopHeader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import ReduxProvider from './redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'An ecommerce site to solidify my knowledge of Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          <div className=' sticky top-0 z-10 bg-white' >
            <TopHeader />
            <Navbar />
          </div>
          {children}
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  )
}
