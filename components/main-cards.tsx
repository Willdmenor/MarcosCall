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
  {
    icon: Instagram,
    color: 'bg-[oklch(0.55_0.2_340/0.12)]',
    borderColor: 'border-[oklch(0.55_0.2_340/0.3)]',
    iconColor: 'text-[oklch(0.75_0.2_340)]',
    title: 'Siga no Instagram',
    subtitle: '@marcos_calcadoss • Novas coleções',
    href: 'https://www.instagram.com/marcoscallcados/',
  },
  {
    icon: TikTokIcon,
    color: 'bg-[oklch(0.5_0.1_220/0.12)]',
    borderColor: 'border-[oklch(0.5_0.1_220/0.3)]',
    iconColor: 'text-[oklch(0.85_0.05_220)]',
    title: 'Veja no TikTok',
    subtitle: '@marcosantonio38739 • Vídeos e lançamentos',
    href: 'https://www.tiktok.com/@marcosantonio38739?_r=1&_t=ZS-96MIycO4s2W',
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
    </section>
  )
}
