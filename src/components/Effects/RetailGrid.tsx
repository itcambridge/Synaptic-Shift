'use client'

import { motion } from 'framer-motion'

export default function RetailGrid() {
  return (
    <div className="relative h-96 w-96">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px',
          animation: 'retailFlow 20s linear infinite',
          transform: 'perspective(1000px) rotateX(45deg)',
          transformOrigin: 'center',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px',
          animation: 'retailPulse 4s ease-in-out infinite',
          transform: 'perspective(1000px) rotateX(45deg)',
          transformOrigin: 'center',
        }}
      />
      <style jsx global>{`
        @keyframes retailFlow {
          0% {
            backgroundPosition: 0 0;
          }
          100% {
            backgroundPosition: 40px 40px;
          }
        }
        @keyframes retailPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
} 