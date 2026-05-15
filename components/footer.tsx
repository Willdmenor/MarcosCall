'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="px-6 py-8 flex flex-col items-center gap-2 border-t border-border/30"
    >
      {/* Gold divider */}
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-[oklch(0.78_0.12_85/0.5)] to-transparent mb-4" />

      <p className="font-serif text-base font-semibold text-[oklch(0.78_0.12_85)] tracking-widest uppercase">
        Marcos Calçados
      </p>
      <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
        Style • Qualidade • Conforto
      </p>
      <p className="text-[10px] text-muted-foreground/50 mt-2">
        © {new Date().getFullYear()} Marcos Calçados. Todos os direitos reservados.
      </p>
    </motion.footer>
  )
}
