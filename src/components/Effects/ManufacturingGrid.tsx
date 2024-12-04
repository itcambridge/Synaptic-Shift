'use client'

import { motion } from 'framer-motion'

export default function ManufacturingGrid() {
  return (
    <div className="relative h-96 w-96">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 255, 255, 0.2) 2px, transparent 2px),
            linear-gradient(180deg, rgba(0, 255, 255, 0.2) 2px, transparent 2px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          animation: 'manufacturingFlow 20s linear infinite',
          transform: 'perspective(1000px) rotateX(60deg)',
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
          backgroundSize: '40px 40px',
          animation: 'manufacturingPulse 4s ease-in-out infinite',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center',
        }}
      />
      <style jsx global>{`
        @keyframes manufacturingFlow {
          0% {
            backgroundPosition: 0 0;
          }
          100% {
            backgroundPosition: 100px 100px;
          }
        }
        @keyframes manufacturingPulse {
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