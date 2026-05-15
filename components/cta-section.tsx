'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section aria-label="Chamada para ação" className="px-6 py-8 flex flex-col items-center gap-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
          Pronto para encontrar seu próximo par?
        </p>
        <h2 className="font-serif text-xl font-bold text-foreground text-balance">
          Fale com a gente agora
        </h2>
      </motion.div>

      <motion.a
        href="https://wa.me/5582982133372?text=Olá! Vim pelo link e quero saber mais."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.4 }}
        className="relative w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 glow-gold overflow-hidden group"
        style={{
          background: 'linear-gradient(135deg, oklch(0.78 0.12 85), oklch(0.65 0.1 85 / 0.9))',
          color: '#0a0a0a',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <motion.span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, oklch(0.85 0.12 85), oklch(0.7 0.1 85))',
          }}
        />
        <MessageCircle className="w-5 h-5 relative z-10" aria-hidden="true" />
        <span className="relative z-10 uppercase tracking-widest text-xs font-bold">
          Chamar no WhatsApp
        </span>
      </motion.a>

      {/* Trust line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-[10px] text-muted-foreground text-center"
      >
        ✓ Resposta rápida &nbsp;&bull;&nbsp; ✓ Sem compromisso &nbsp;&bull;&nbsp; ✓ Atendimento humano
      </motion.p>
    </section>
  )
}
