import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'NovelNest - Your Digital Storytelling Platform',
  description: 'A digital storytelling platform that streamlines the user experience of both authors and readers. Write, publish, and discover amazing stories.',
  keywords: 'storytelling, novels, reading, writing, authors, stories, fiction, books, mobile app',
  authors: [{ name: 'NovelNest Team' }],
  openGraph: {
    title: 'NovelNest - Your Digital Storytelling Platform',
    description: 'Write, publish, and discover amazing stories on NovelNest',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
