'use client'

import { motion } from 'framer-motion'

export default function DNAHelix() {
  return (
    <div className="relative h-96 w-96">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg,
              rgba(0, 255, 255, 0.2) 0px,
              rgba(0, 255, 255, 0.2) 2px,
              transparent 2px,
              transparent 10px
            ),
            repeating-linear-gradient(-45deg,
              rgba(0, 255, 255, 0.2) 0px,
              rgba(0, 255, 255, 0.2) 2px,
              transparent 2px,
              transparent 10px
            )
          `,
          backgroundSize: '30px 30px',
          animation: 'dnaFlow 15s linear infinite',
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
          backgroundSize: '20px 20px',
          animation: 'dnaPulse 4s ease-in-out infinite',
        }}
      />
      <style jsx global>{`
        @keyframes dnaFlow {
          0% {
            backgroundPosition: 0 0;
          }
          100% {
            backgroundPosition: 30px 30px;
          }
        }
        @keyframes dnaPulse {
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