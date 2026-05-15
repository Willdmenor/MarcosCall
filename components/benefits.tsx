'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Tag, Zap, ShieldCheck } from 'lucide-react'

const benefits = [
  { icon: BadgeCheck, label: 'Produtos\nOriginais' },
  { icon: Tag, label: 'Melhor\nPreço' },
  { icon: Zap, label: 'Atendimento\nRápido' },
  { icon: ShieldCheck, label: 'Qualidade\nGarantida' },
]

export function Benefits() {
  return (
    <section aria-label="Benefícios" className="px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between gap-1 overflow-x-auto scrollbar-hide pb-1"
      >
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="flex flex-col items-center gap-2 min-w-[58px] flex-1"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[oklch(0.78_0.12_85/0.1)] border border-[oklch(0.78_0.12_85/0.2)]">
              <benefit.icon
                className="w-4 h-4 text-[oklch(0.78_0.12_85)]"
                aria-hidden="true"
              />
            </div>
            <span className="text-[9px] text-muted-foreground text-center leading-tight whitespace-pre-line tracking-wide">
              {benefit.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
