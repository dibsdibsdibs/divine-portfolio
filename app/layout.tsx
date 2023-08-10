import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'portfolio by Divine Grace Lavente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='font-raleway'>
      <body className='m-0 bg-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
