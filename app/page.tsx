'use client'

import { Header } from '@/components/header'
import { Benefits } from '@/components/benefits'
import { MainCards } from '@/components/main-cards'
import { InstagramFeed } from '@/components/instagram-feed'
import { CTASection } from '@/components/cta-section'
import { WhatsAppFAB } from '@/components/whatsapp-fab'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function Home() {
  const [openMap, setOpenMap] = useState(false)
  return (
    <main className="min-h-screen max-w-md mx-auto relative overflow-x-hidden pb-24">
      {/* Ambient glow top */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, oklch(0.78 0.12 85 / 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-2">
        <Header />

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <Benefits />

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <MainCards />

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <InstagramFeed />

          

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <CTASection />

        <Footer />
      </div>

      <WhatsAppFAB />
   
   
    </main>
  )
}
