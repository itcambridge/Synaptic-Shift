'use client'

import { motion } from 'framer-motion'

export default function DataFlow() {
  return (
    <div className="relative h-96 w-96">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 255, 255, 0.2) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(0, 255, 255, 0.2) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(0, 255, 255, 0.2) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(0, 255, 255, 0.2) 75%)
          `,
          backgroundSize: '30px 30px',
          animation: 'dataFlow 20s linear infinite',
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
          animation: 'dataPulse 4s ease-in-out infinite',
        }}
      />
      <style jsx global>{`
        @keyframes dataFlow {
          0% {
            backgroundPosition: 0 0;
          }
          100% {
            backgroundPosition: 60px 60px;
          }
        }
        @keyframes dataPulse {
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