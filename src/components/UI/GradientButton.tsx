'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'

interface GradientButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export default function GradientButton({ children, className = '', onClick, href }: GradientButtonProps) {
  const buttonContent = (
    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
      {children}
    </span>
  )

  const buttonClasses = `
    group relative overflow-hidden rounded-lg px-8 py-4 font-bold text-black
    shadow-lg transition-all duration-300
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-[#00ffff] before:to-[#0099ff]
    before:transition-all before:duration-300
    after:absolute after:inset-0
    after:bg-gradient-to-r after:from-[#00ffff] after:via-[#00ccff] after:to-[#0077ff]
    after:opacity-0 after:transition-opacity after:duration-300
    hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
    hover:after:opacity-100
    ${className}
  `

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ 
            scale: 1.07,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonContent}
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ 
        scale: 1.07,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
    >
      {buttonContent}
    </motion.button>
  )
} 