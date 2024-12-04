'use client'
import { motion } from 'framer-motion'

export default function GridPattern() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-70">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
          maskImage: 'radial-gradient(circle at center, black, transparent 95%)',
        }}
      />
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.15), transparent 70%)',
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Abstract Lines */}
        <motion.div
          className="absolute right-1/4 top-2/3 h-64 w-64 -rotate-45 transform"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.12), transparent)',
          }}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: -45, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Dots Pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(rgba(0, 255, 255, 0.4) 1px, transparent 1px)',
            backgroundSize: '2rem 2rem',
            backgroundPosition: '50% 50%',
            opacity: 0.7,
          }}
        />

        {/* Additional Grid Lines for Depth */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '6rem 6rem',
          }}
        />
      </div>
    </div>
  )
} 