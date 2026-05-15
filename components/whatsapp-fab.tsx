'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/5582982133372?text=Olá! Vim pelo link e quero saber mais."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.4, type: 'spring', stiffness: 200 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        boxShadow: '0 0 20px rgba(34,197,94,0.4), 0 4px 16px rgba(0,0,0,0.4)',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{ scale: [1, 1.35], opacity: [0.4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
      />
      <MessageCircle className="w-6 h-6 text-white relative z-10" aria-hidden="true" />
    </motion.a>
  )
}
