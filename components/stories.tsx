'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stories = [
  { label: 'Sneakers', image: '/images/story-sneakers.jpeg', href: '#' },
  { label: 'Slides', image: '/images/story-slides.jpeg', href: '#' },
  { label: 'Masculino', image: '/images/story-masc.jpeg', href: '#' },
  { label: 'Feminino', image: '/images/story-fem.jpeg', href: '#' },
  { label: 'Promoções', image: '/images/story-promo.jpg', href: '#' },
]

export function Stories() {
  return (
    <section aria-label="Categorias em destaque" className="px-4 py-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[10px] tracking-[0.2em] text-muted-foreground text-center uppercase mb-4"
      >
        Destaques
      </motion.h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
        {stories.map((story, i) => (
          <motion.a
            key={story.label}
            href={story.href}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileTap={{ scale: 0.94 }}
            className="flex flex-col items-center gap-2 shrink-0 cursor-pointer"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* Story ring */}
            <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-[oklch(0.78_0.12_85)] via-[oklch(0.65_0.1_85)] to-[oklch(0.78_0.12_85/0.4)]">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-background">
                <Image
                  src={story.image}
                  alt={story.label}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground tracking-wide font-medium">
              {story.label}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
