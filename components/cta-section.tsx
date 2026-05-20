'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section aria-label="Chamada para ação" className="px-6 py-8 flex flex-col items-center gap-4">
     
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
