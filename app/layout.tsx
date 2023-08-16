import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

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
      <head>
        <link rel='icon' href='../logo.png' />
      </head>
      <body className='m-0 bg-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
