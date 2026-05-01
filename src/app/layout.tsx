import type { Metadata } from 'next'
import { Playfair_Display, Lato, Caveat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Cafe Zen on Yew — Brunch & Lunch in Kitsilano, Vancouver',
    template: '%s — Cafe Zen on Yew',
  },
  description:
    'A cozy corner of Kitsilano since 1989. Fresh brunch and lunch at 1631 Yew St, Vancouver. Open daily 8 AM – 4 PM.',
  keywords: ['cafe zen', 'kitsilano brunch', 'kitsilano lunch', 'vancouver brunch', '1631 yew street', 'cafe zen on yew'],
  icons: {
    icon: '/img/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://cafezenonyew.com',
    siteName: 'Cafe Zen on Yew',
    title: "Cafe Zen on Yew — Kitsilano's Favourite Brunch Spot",
    description: '35 years of Kitsilano soul. Brunch & lunch at 1631 Yew St, Vancouver.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} ${caveat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  )
}
