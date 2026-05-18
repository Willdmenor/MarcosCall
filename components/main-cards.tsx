'use client'

import { motion } from 'framer-motion'
import {
  MessageCircle,
  Instagram,
  ArrowRight,
} from 'lucide-react'

// TikTok icon SVG inline pois lucide não tem
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const cards = [
  {
    icon: MessageCircle,
    color: 'bg-[oklch(0.45_0.18_145/0.15)]',
    borderColor: 'border-[oklch(0.45_0.18_145/0.3)]',
    iconColor: 'text-[oklch(0.75_0.18_145)]',
    title: 'Vendedor 1',
    subtitle: 'WhatsApp • Resposta imediata',
    href: 'https://wa.me/5582982133372?text=Olá! Vim pelo link e quero saber mais.',
  },
  {
    icon: MessageCircle,
    color: 'bg-[oklch(0.45_0.18_145/0.15)]',
    borderColor: 'border-[oklch(0.45_0.18_145/0.3)]',
    iconColor: 'text-[oklch(0.75_0.18_145)]',
    title: 'Vendedor 2',
    subtitle: 'WhatsApp • Resposta imediata',
    href: 'https://wa.me/5582996239370?text=Olá! Vim pelo link e quero saber mais.',
  },
  

]

export function MainCards() {
  return (
    <section aria-label="Links principais" className="px-4 py-2 flex flex-col gap-3">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[10px] tracking-[0.2em] text-muted-foreground text-center uppercase mb-1"
      >
        Acesso Rápido
      </motion.h2>
      {cards.map((card, i) => (
        <motion.a
          key={card.title}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileTap={{ scale: 0.98 }}
          className={`glass-card flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group cursor-pointer ${card.color} ${card.borderColor}`}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {/* Icon */}
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${card.color} border ${card.borderColor}`}
          >
            <card.icon className={`w-5 h-5 ${card.iconColor}`} />
          </div>

          {/* Text */}
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-sm font-semibold text-foreground leading-tight">
              {card.title}
            </span>
            <span className="text-[11px] text-muted-foreground mt-0.5">
              {card.subtitle}
            </span>
          </div>

          {/* Arrow */}
          <motion.div
            className="shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
          >
            <ArrowRight className="w-4 h-4 text-foreground" />
          </motion.div>
        </motion.a>
      ))}
      <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-8 mt-6">

  <a
    href="https://www.instagram.com/marcoscallcados/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
    style={{
      background: "rgba(201,169,110,0.08)",
      border: "1px solid rgba(201,169,110,0.25)",
      color: "#C9A96E",
    }}
  >
    <Instagram className="w-5 h-5" />
  </a>

  <div className="text-center">
    <p className="font-serif font-bold text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl tracking-widest text-white">
      CHSTYLE
    </p>

    <p
      className="font-sans text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase mt-0.5"
      style={{ color: "#C9A96E" }}
    >
      Marcos Calçados
    </p>
  </div>

  <a
    href="https://www.tiktok.com/@marcosantonio38739"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
    style={{
      background: "rgba(201,169,110,0.08)",
      border: "1px solid rgba(201,169,110,0.25)",
      color: "#C9A96E",
    }}
  >
    <TikTokIcon className="w-5 h-5" />
  </a>

</div>
    </section>
  )
}
