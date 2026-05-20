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

      {/* Trust line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-[10px] text-muted-foreground text-center"
      >
        ✓ Resposta rápida &nbsp;&bull;&nbsp; ✓ Com compromisso &nbsp;&bull;&nbsp; ✓ Atendimento humano
      </motion.p>
    </section>
  )
}
