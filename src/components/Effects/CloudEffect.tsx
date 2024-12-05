'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CloudEffect() {
  return (
    <div className="relative h-48 w-48">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 1.2,
          ease: "easeOut"
        }}
      >
        <Image
          src="/Cloud-removebg-preview.png"
          alt="Cloud"
          width={200}
          height={200}
          className="h-auto w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
          priority
        />
      </motion.div>
    </div>
  )
} 