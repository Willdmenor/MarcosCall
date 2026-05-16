'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/marcoscallcados/'

const posts = [
  { id: 1, image: '/images/feed1.jpg', likes: '1.2K', alt: 'Sneakers premium' },
  { id: 2, image: '/images/feed2.jpg', likes: '890', alt: 'Slides elegantes' },
  { id: 3, image: '/images/feed3.jpg', likes: '2.1K', alt: 'Look masculino' },
  { id: 4, image: '/images/feed4.jpg', likes: '1.5K', alt: 'Coleção feminina' },
  { id: 5, image: '/images/feed5.jpg', likes: '3.2K', alt: 'Promoções especiais' },
  { id: 6, image: '/images/feed6.jpg', likes: '980', alt: 'Street style' },
]

export function InstagramFeed() {
  return (
    <section aria-label="Feed do Instagram" className="px-4 py-4">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-4"
      >
        <div className="flex items-center gap-2">
          <Instagram className="w-4 h-4 text-[oklch(0.78_0.12_85)]" aria-hidden="true" />
          <span className="text-xs font-semibold text-foreground tracking-wide">
            @marcoscallcados
          </span>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-[oklch(0.78_0.12_85)] tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          Ver perfil &rarr;
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1.5">
        {posts.map((post, i) => (
          <motion.a
            key={post.id}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            whileTap={{ scale: 0.96 }}
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Image
              src={post.image}
              alt={post.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center gap-1 text-[oklch(0.78_0.12_85)]">
                <span className="text-xs font-bold">&hearts;</span>
                <span className="text-xs font-semibold">{post.likes}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
