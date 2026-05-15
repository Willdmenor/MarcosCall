import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Marcos Calçados — Style • Qualidade • Conforto',
  description: 'Loja premium de calçados e sneakers. Envio para todo o Brasil, produtos originais e os melhores preços.',
  keywords: 'calçados, sneakers, tênis, slides, moda, streetwear, originais',
  icons: {
    icon: '/images/marcos-logo.png',
  },
  openGraph: {
    title: 'Marcos Calçados',
    description: 'Style • Qualidade • Conforto',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
