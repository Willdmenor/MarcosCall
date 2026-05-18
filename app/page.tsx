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
   
    <div className="w-full max-w-[420px] mx-auto mt-10">

  <button
    onClick={() => setOpenMap(!openMap)}
    className="w-full bg-[#C9A96E] text-white p-4 rounded-2xl font-bold text-lg"
  >
    📍 Ver localização
  </button>

  {openMap && (
    <div className="border border-white/20 bg-white/5 p-4 rounded-xl mt-4">

      <div className="flex gap-4 items-start mb-5">

        <div className="w-[70px] h-[70px] rounded-md overflow-hidden shrink-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-[20px] leading-[1.5] text-[#dcdcdc]">
          Av. Santa Cruz, 26 – Taquarana, AL, Brasil
        </div>

      </div>

      <iframe
        className="w-full h-[350px] rounded-lg mb-5"
        src="https://maps.google.com/maps?q=Av.%20Santa%20Cruz,%2026%20Taquarana%20AL&t=&z=15&ie=UTF8&iwloc=&output=embed"
      />

      <a
        className="block w-full text-center bg-[#C9A96E] text-white no-underline p-4 rounded-2xl text-lg font-bold"
        href="https://maps.google.com/?q=Av.%20Santa%20Cruz,%2026%20Taquarana%20AL"
        target="_blank"
      >
        Abrir no Maps
      </a>

    </div>
  )}

</div> 

</div>
    </main>
  )
}
