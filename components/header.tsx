'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center min-h-[42vh] px-6 pt-14 pb-10 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20 blur-sm scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Logo circle */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-[oklch(0.78_0.12_85/0.5)] ring-offset-2 ring-offset-background glow-gold bg-background">
            <Image
              src="/images/marcos-logo.png"
              alt="Marcos Calçados logo"
              width={96}
              height={96}
              className="w-full h-full object-contain p-2"
            />
          </div>
          {/* Online indicator */}
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-background" aria-label="Online" />
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h1 className="font-serif text-2xl font-bold tracking-widest text-foreground uppercase glow-gold-text">
            Marcos Calçados
          </h1>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px w-20 bg-gradient-to-r from-transparent via-[oklch(0.78_0.12_85)] to-transparent mt-1"
          />
        </motion.div>

        {/* Followers stats */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-6 mt-1"
        >
          {[
            { label: 'Seguidores', value: '3.5K' },
            { label: 'Produtos', value: '500+' },
            { label: 'Avaliação', value: '⭐ 4.9' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span className="text-sm font-bold text-foreground">{stat.value}</span>
              <span className="text-[10px] text-muted-foreground tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  )
}
