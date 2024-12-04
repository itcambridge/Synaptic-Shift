'use client'

import { motion } from 'framer-motion'

export default function MarketData() {
  return (
    <div className="relative h-96 w-96">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg,
              rgba(0, 255, 255, 0.2) 0px,
              rgba(0, 255, 255, 0.2) 1px,
              transparent 1px,
              transparent 20px
            ),
            repeating-linear-gradient(90deg,
              rgba(0, 255, 255, 0.1) 0px,
              rgba(0, 255, 255, 0.1) 1px,
              transparent 1px,
              transparent 40px
            )
          `,
          backgroundSize: '100% 20px, 40px 100%',
          animation: 'marketFlow 15s linear infinite',
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
          backgroundSize: '30px 30px',
          animation: 'marketPulse 4s ease-in-out infinite',
        }}
      />
      <style jsx global>{`
        @keyframes marketFlow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(20px);
          }
        }
        @keyframes marketPulse {
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